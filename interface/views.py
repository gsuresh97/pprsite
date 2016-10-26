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
    print code
    declare = code[0:code.find("void ")]
    # print declare
    code = code[code.find("op() {") + 9:]
    print code
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
    compCode = code[0: code.find("##")]
    code = code[code.find("##")  +2:]

    inputs = []
    outputs = {}
    while (code.find("|")>0):
        outputs[code[0:code.find("|")]] = code[code.find("|") + 1: code.find("|", code.find("|") + 1)]

    print outputs
    # code = code.find()

    # Declare class
    component += "class {}(CodeComponent):\n\n".format(className)

    component += "\tdef __init__(self,  yamlFile=None, **kwargs):\n"

    component += "\t\tCodeComponent.__init__(self, yamlFile, **kwargs)\n"
    component += "\t\tname = self.getName()\n\n"
    component += "\t\tself.meta = {\n"
    component += "\t\t\t\"arduino\": {\n"
    component += "\t\t\t\t\"code\": {\n"
    component += "\"" + declare
    component += compCode  + "\""
    component += "\t\t\t\"}\\n\",\n"
    component += "\t\t\t\"inputs\": {\n"
    component += "\"inputs\": { \n \\ \
        \"inStr\": \"inStr\"  \n \\ \
        },  \n \\ \
        \"outputs\": {  \n \\ \
        \"reversed\": \""
    # },
    component += "\t\t\"declarations\": {\n\n"
    component += "\t\t},\n"
    component += "\t\t\"needs\": set()\n"
    component += "}\n}\n\n"





    component += "\tdef define(self, **kwargs):\n"
    component += "\t\tCodeComponent.define(self, **kwargs)\n"
    component += "\t\tself.addInterface()\n"
    component += "\t\tself.addInterface()\n\n"

    component += "\tdef assemble(self):\n"
    component += "\t\tCodeComponent.assemble()\n\n"

    component += "if __name__ == \"__main__\":\n"
    component += "\tpass\n\n"




    # for p, count in port.iteritems():
    #     for c in range(count):
    #         varName = p.lower() + str(c + 1)
    #         component += "\t\tself.addInterface(\"{}\", {}(self, name))\n".format(
    #             varName, p)

    print component

    return HttpResponse("ok")


def export_builder(request):
    code = request.body
    code = code[34:]
    print code

    build = "c = Component()\n"

    connections = []

    while(code.find('#') > 0):
        classTypeIndex = code.index("|", 0)
        classType = code[0:classTypeIndex]
        code = code[classTypeIndex + 1:]

        classIndex = code.index("|", 0)
        className = code[0:classIndex]
        code = code[classIndex + 1:]

        varNameIndex = code.index("\\", 0)
        varName = code[0:varNameIndex]
        code = code[varNameIndex + 1:]

        outNameIndex = code.index("_", 0)
        outName = code[0:outNameIndex]
        code = code[outNameIndex + 1:]

        outTypeIndex = code.index(">", 0)
        outType = code[0:outTypeIndex]
        code = code[outTypeIndex + 1:]

        connections.append([className, varName, outName, outType])
        build += "c.addSubcomponent(\"{}\", \"{}\")\n".format(className, classType)
        code = code[1:]

    for i in connections:
        print i
        build += "c.addConnection((\"" + i[0] + "\", \"" + \
            i[1] + "\"), (\"" + i[2] + "\", \"" + i[3] + "\"))\n"
        # .format(
        # i[0], i[1], i[2], i[3])

    build += "c.toYaml(\"library/Component.yaml\")"

    print build

    return HttpResponse("ok")


def save(request):
    session = SessionSave(xml_text=request.POST[
        'xml'], save_date=timezone.now())
    session.save()
    return HttpResponse(session.pk)
