from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.core.urlresolvers import reverse
from .models import SessionSave
from django.utils import timezone

import traceback
import logging
import os
import sys
import time

from genblocks import CustomBlockFile

path = os.path.join(os.getcwd(), "interface/ppr/")
sys.path.append(path)
from svggen.library import allComponents, getComponent, instanceOf, buildDatabase, queryDatabase, filterComponents, filterDatabase
from svggen.api.component import Component
from svggen.api.ports import code_ports
from svggen.api.CodeComponent import CodeComponent

# Create your views here.


def index(request):
    p = {}
    c = CustomBlockFile(portsIndexPath="indexPortsBlocks.js",
                        portsXMLPath="indexPortsXML.js", portCodeGenPath="portCodeGen.js")
    p["input"] = []
    p["output"] = []
    p["other"] = []
    for port in code_ports:
        if "Out" in port.__name__:
            p["output"].append(port.__name__)
        elif "In" in port.__name__:
            p["input"].append(port.__name__)
        else:
            p["other"].append(port.__name__)
    c.writePorts(p)
    c.writeXML(p)
    c.writePortCodeGen(p)
    template = loader.get_template('interface/index.html')
    return HttpResponse(template.render(request))


def prevblocks(request):
    # c = CustomBlockFile()
    comps = filterDatabase(["electrical", "code"])
    # print "Number of Components: ", len(comps)
    # print comps

    # buildDatabase(comps)

    ports = {}

    for i in comps:
        item = {}
        for k, v in i.interfaces.iteritems():
            if "out" in k:
                if 'out' not in item.keys():
                    item['out'] = {}
                item['out'][k] = v
            elif "in" in k:
                if 'in' not in item.keys():
                    item['in'] = {}
                item['in'][k] = v
        ports[i.getName()] = item

    blockfile = "blocks.js"
    initfile = "init.js"

    files = (blockfile, initfile)
    blockjs = CustomBlockFile(blockfile)

    # write file that defines the toolbox
    blockjs.writeInit(comps, ports)

    # Write block.js file that describes blockly blocks.
    for i in comps:
        blockjs.writeComponent(i, ports[i.getName()])
        blockjs.writePrevCompCode(i, ports[i.getName()])
    blockjs.finishComponents()
    blockjs.finishComponentCode()
    context = {
        'files': files
    }

    template = loader.get_template('interface/prev-blocks.html')
    return HttpResponse(template.render(context, request))


def recall_session(request):
    session = SessionSave.objects.get(pk=int(request.POST['key']))
    return HttpResponse(session.xml_text)


def export_code(request):
    code = request.body
    declare = code[0:code.find("void ")].strip()
    # print declare
    code = code[code.find("op() {") + 9:]
    # Extract Class Name
    classNameIndex = code.index("|", 0)
    className = code[0:classNameIndex]

    code = code[classNameIndex + 1:]

    # Constant imports
    component = "from svggen.api.component import Component\n"
    component += "from svggen.api.composables.CodeComposable import CodeComposable\n\n"
    component += "from svggen.api.CodeComponent import CodeComponent\n"

    # Extract number of ports
    port = {}

    portCountIndex = code.index("|", 0)
    portCount = int(code[0:portCountIndex])
    code = code[portCountIndex + 1:]

    # Extract names of ports
    for i in range(portCount):
        mod = code[0:code.index("|", 0)]
        port[mod[0:mod.index("\\", 0)]] = int(mod[mod.index("\\", 0) + 1:])
        code = code[code.index("|", 0) + 1:]

    # import ports
    for p in port.keys():
        component += "from svggen.api.ports.CodePort import {}\n".format(p)

    component += "\n\n\n"

    code = code[code.find("##") + 2:]
    compCode = code[0: code.find("##")].strip() + "\n"
    code = code[code.find("##")  +2:]

    inputs = []
    outputs = {}
    while (code.find("|")>0):
        bar1 = code.find("|")
        bar2 = code.find("|", code.find("|") + 1)
        outputs[code[0:bar1]] = code[bar1 + 1: bar2]
        code = code[bar2+1:]

    while (code.find("^")>0):
        caret = code.find("^")
        inputs.append(code[:caret])
        code = code[caret+1:]

    blines = declare.split("\n")
    #name mangle variable names here
    types = {"int":1,"char":1, "String": 1, "boolean":1, "float":1}
    def isType(tp):
        return (types[tp] is 1)

    variables = {}
    lines = []
    for l in blines:
        t = l.strip().split(" ", 1)
        if isType(t[0].strip()):
            l = t[0] + " {}" +t[1]
            variables[t[1][:-1]] = 1
        lines.append(l)

    # print variables

    dCode = ""
    for i in lines:
        # if variables[i[:-1].split()[1]]:
        if "{}" in i:
            dCode += "\t\t\t\t\t\"" + i.strip() + "\\n\".format(name) \n"
        else:
            dCode += "\t\t\t\t\t\"" + i.strip() + "\\n\"\n"

    lines = compCode.split("\n")
    cCode = ""
    lines.remove("")
    for i in range(len(lines)):
        modVar = (False, "")
        for j in variables.keys():
            if j in lines[i]:
                modVar = (True, j)
        if i == len(lines) - 1:
            if modVar[0]:
                segs = lines[i].split(modVar[1] + " ")
                pr = segs[0]
                fm = 0
                for j in segs[1:]:
                    pr += " {}" + modVar[1]
                    fm = fm+1
                fms = ""
                for i in range(fm - 1):
                    fms += "name, "
                fms += "name"
                cCode += "\t\t\t\t\t\"" + pr.strip() + "\\n\".format({})\n".format(fms)
            else:
                cCode += "\t\t\t\t\t\"" + lines[i].strip() + "\\n\"\n"
        else:
            if modVar[0]:
                segs = lines[i].split(modVar[1] + " ")
                pr = segs[0]
                fm = 0
                for j in segs[1:]:
                    pr += " {}" +  + modVar[1]
                    fm = fm+1
                fms = ""
                for i in range(fm - 1):
                    fms += "name, "
                fms += "name"
                cCode += "\t\t\t\t\t\"" + pr.strip() + "\\n\".format({}) + \\\n".format(fms)
            else:
                cCode += "\t\t\t\t\t\"" + lines[i].strip() + "\\n\".format({}) + \\\n".format(fms)


    # print outputs
    # print inputs

    # Declare class
    component += "class {}(CodeComponent):\n\n".format(className)

    component += "\tdef __init__(self,  yamlFile=None, **kwargs):\n"

    component += "\t\tCodeComponent.__init__(self, yamlFile, **kwargs)\n"
    component += "\t\tname = self.getName()\n\n"
    component += "\t\tself.meta = {\n"
    component += "\t\t\t\"arduino\": {\n"

    # code
    component += "\t\t\t\t\"code\": {\n"
    component += cCode
    component += "\t\t\t\t},\n\n"

    # inputs
    component += "\t\t\t\t\"inputs\": {\n"
    for i in inputs:
        component += "\t\t\t\t\t\"" + i + "\": \"" + i + "\",\n"
    component += "\t\t\t\t},\n\n"

    # outputs
    component += "\t\t\t\t\"outputs\": {\n"
    for k, v in outputs.iteritems():
        component += "\t\t\t\t\t\"" + k + "\" : \"" + v + "\"\n"
    component += "\t\t\t\t},\n\n"

    component += "\t\t\t\t\"declarations\": {\n"
    component += dCode
    component += "\t\t\t\t},\n\n"

    component += "\t\t\t\t\"needs\": set()\n"
    component += "\t\t\t}\n\t\t}\n\n"

    component += "\tdef define(self, **kwargs):\n"
    component += "\t\tCodeComponent.define(self, **kwargs)\n"
    component += "\t\tself.addInterface()\n"
    component += "\t\tself.addInterface()\n\n"

    component += "\tdef assemble(self):\n"
    component += "\t\tCodeComponent.assemble()\n\n"

    component += "if __name__ == \"__main__\":\n"
    component += "\tpass\n\n"


    # builderPath = os.path.join(os.getcwd(), "interface/gen/builderGen/")
    componentPath = os.path.join(os.getcwd(), "interface/gen/componentGen/")
    # if not os.path.exists(builderPath):
    #     os.makedir(builderPath)
    if not os.path.exists(componentPath):
        os.makedirs(componentPath)

    cmpath = os.path.join(componentPath, className + ".py")
    cmFile = open(cmpath, 'wb', 0)
    cmFile.write(component)

    print component

    return HttpResponse("ok")


def export_builder(request):
    code = request.body
    code = code[34:]

    cName = code[0:code.find("|")].strip()
    code = code[code.find("|")+3:]
    build = "c = Component()\n"

    connections = []
    inherit = []

    while(code.find('#') > 0):
        classTypeIndex = code.index("|", 0)
        classType = code[0:classTypeIndex]
        code = code[classTypeIndex + 1:]

        classIndex = code.index("|", 0)
        className = code[0:classIndex]
        code = code[classIndex + 1:]

        inputCountIndex = code.index("|", 0)
        inputCount = code[0:inputCountIndex]
        code = code[inputCountIndex + 1:]

        for i in range(int(inputCount)):
            varNameIndex = code.index("\\", 0)
            varName = code[0:varNameIndex]
            code = code[varNameIndex + 1:]

            outNameIndex = code.index("_", 0)
            outName = code[0:outNameIndex]
            code = code[outNameIndex + 1:]

            outTypeIndex = code.index(">", 0)
            outType = code[0:outTypeIndex]
            code = code[outTypeIndex + 1:]

            if "inin" in outName:
                inherit.append([varName, className, varName])
            else:
                connections.append([className, varName, outName, outType])

        build += "c.addSubcomponent(\"{}\", \"{}\")\n".format(className, classType)
        code = code[1:]

    for i in connections:
        build += "c.addConnection((\"" + i[0] + "\", \"" + \
            i[1] + "\"), (\"" + i[2] + "\", \"" + i[3] + "\"))\n"
    for i in inherit:
        build += "c.inheritInterface(\"" + i[0] + "\", (\"" + \
            i[1] + "\", \"" + i[2] + "\"))\n"

    build += "c.toYaml(\"library/{}.yaml\")".format(cName)

    buildPath = os.path.join(os.getcwd(), "interface/gen/builderGen/")
    if not os.path.exists(buildPath):
        os.makedirs(buildPath)

    blpath = os.path.join(buildPath, "builder" + cName + ".py")
    blFile = open(blpath, 'wb', 0)
    blFile.write(build)




    print build

    return HttpResponse("ok")


def save(request):
    session = SessionSave(xml_text=request.POST[
        'xml'], save_date=timezone.now())
    session.save()
    return HttpResponse(session.pk)
