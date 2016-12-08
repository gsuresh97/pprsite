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
import zipfile
import shutil
import StringIO
import urllib
import array

from wsgiref.util import FileWrapper
# from importlib import import_module
import importlib

from genblocks import CustomBlockFile
from genBuilder import saveBuilder

path = os.path.join(os.getcwd(), "interface/ppr/")
sys.path.append(path)
from svggen.library import allComponents, getComponent, instanceOf, buildDatabase, queryDatabase, filterComponents, filterDatabase, updateComponentsLists
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
        print i.getName(), i.interfaces
        for k, v in i.interfaces.iteritems():
            if "out" in k.lower() or "out" in v.lower() :
                if 'out' not in item.keys():
                    item['out'] = {}
                item['out'][k] = v
            elif "in" in k.lower() or "in" in v.lower():
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
    print
    className = code[0:classNameIndex]

    code = code[classNameIndex + 1:]

    # Constant imports
    component = "from svggen.api.targets.ArduinoTarget import Arduino\n\n"
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
    outputs = []
    inputPorts = []
    while (code.find("|")>0):
        bar1 = code.find("|")
        bar2 = code.find("|", code.find("|") + 1)
        bar3 = code.find("|", code.find("|", code.find("|") + 1) + 1)
        outputs.append([code[0:bar1], code[bar1 + 1: bar2], code[bar2 + 1: bar3]])
        code = code[bar3+1:]

    while (code.find("^")>0):
        percent = code.find("%")
        name = code[:percent]
        code = code[percent+1:]
        caret = code.find("^")
        pt = code[:caret]
        inputs.append([name, pt])
        code = code[caret+1:]

    blines = declare.split("\n")

    #name mangle variable names here

    variables = {}
    lines = []
    t = ""
    for i in range(len(blines)):
        if i < len(blines)-1:
            if i == 0:
                t = " \""+blines[i].strip()+"\\n\" + \\ \n"
            else:
                t = "\t\t\t\t\t\""+blines[i].strip()+"\\n\" + \\ \n"
            lines.append(t)
        else:
            if i == 0:
                t = " \""+blines[i].strip()+"\\n\" \n"
            else:
                t = "\t\t\t\t\t\""+blines[i].strip()+"\\n\" \n"
            lines.append(t)


    # print variables

    dCode = ""
    for i in lines:
        dCode += i

    dlines = compCode.split("\n")
    cCode = ""
    dlines.remove("")
    lines = []
    t = ""
    for i in range(len(dlines)):
        if i < len(dlines)-1:
            if i == 0:
                t =" \""+dlines[i].strip()+"\\n\" + \\ \n"
            else:
                t = "\t\t\t\t\t\""+dlines[i].strip()+"\\n\" + \\ \n"
            lines.append(t)
        else:
            if i == 0:
                t =" \""+dlines[i].strip()+"\\n\" \n"
            else:
                t = "\t\t\t\t\t\""+dlines[i].strip()+"\\n\" \n"
            lines.append(t)

    cCode = ""
    for i in lines:
        cCode += i

    # Declare class
    component += "class {}(CodeComponent):\n\n".format(className)

    component += "\tdef __init__(self,  yamlFile=None, **kwargs):\n"

    component += "\t\tCodeComponent.__init__(self, yamlFile, **kwargs)\n"
    component += "\t\tname = self.getName()\n\n"


    component += "\tdef define(self, **kwargs):\n"
    component += "\t\tself.meta = {\n"
    component += "\t\t\tArduino : {\n"

    # code
    component += "\t\t\t\t\"code\":"
    component += cCode
    component += "\t\t\t\t,\n\n"

    # inputs
    component += "\t\t\t\t\"inputs\": {\n"
    print inputs
    for i in inputs:
        component += "\t\t\t\t\t\"" + i[0] + "\": None"
        if i[0] != inputs[len(inputs)-1]:
            component += ","
        component += "\n"
    component += "\t\t\t\t},\n\n"

    # outputs
    component += "\t\t\t\t\"outputs\": {\n"
    for i in outputs:
        component += "\t\t\t\t\t\"" + i[0] + "\" : \"" + i[1] + "\",\n"
    component += "\t\t\t\t},\n\n"

    component += "\t\t\t\t\"declarations\": "
    component += dCode
    component += "\t\t\t\t,\n\n"

    component += "\t\t\t\t\"setup\": \"\",\n\n"

    component += "\t\t\t\t\"needs\": set()\n"
    component += "\t\t\t}\n\t\t}\n\n"

    for i in range(len(inputs)):
        component += "\t\tself.addInterface(\"" +inputs[i][0][:-8] + "\", " + inputs[i][1]+"(self, \"" + inputs[i][0][:-8] + "\", " + "\"" + inputs[i][0] + "\"))\n"
        # component += "\t\tself.addInterface(\"inPort" +str(i) + "\", " + inputs[i][1]+"(self, \"inPort" + str(i) + "\", " + "\"" + inputs[i][0] + "\"))\n"

    for i in range(len(outputs)):
        component += "\t\tself.addInterface(\"" +outputs[i][0][:-8]+ "\", " + outputs[i][2]+"(self, \"" + outputs[i][0][:-8] + "\", " + "\"" + outputs[i][0] + "\"))\n"
        # component += "\t\tself.addInterface(\"outPort" +str(i) + "\", " + outputs[i][2]+"(self, \"outPort" + str(i) + "\", " + "\"" + outputs[i][0] + "\"))\n"
    component += "\t\tCodeComponent.define(self, **kwargs)\n"

    component += "\n"

    component += "\tdef assemble(self):\n"
    component += "\t\tCodeComponent.assemble(self)\n\n"

    component += "if __name__ == \"__main__\":\n"
    component += "\tpass\n\n"


    # builderPath = os.path.join(os.getcwd(), "interface/gen/builderGen/")
    componentPath = os.path.join(os.getcwd(), "interface/ppr/svggen/library")
    # if not os.path.exists(builderPath):
    #     os.makedir(builderPath)
    if not os.path.exists(componentPath):
        os.makedirs(componentPath)

    cmpath = os.path.join(componentPath, className + ".py")
    cmFile = open(cmpath, 'wb', 0)
    cmFile.write(component)

    comp = getComponent(className, name = className)
    buildDatabase([comp])
    updateComponentsLists()
    print "DONE----------------------------------------------"

    print component

    return HttpResponse("ok")


def export_builder(request):
    code = request.body
    cName = saveBuilder(code)

    return HttpResponse("ok")

def zipdir(path, ziph):
    for root, dirs, files in os.walk(path):
        print root, dirs, files
        for file in files:
            ziph.write(os.path.join(root, file))

def deleteDir(path):
    for root, dirs, files in os.walk(path):
        for f in files:
            os.remove(os.path.join(path, f))
    os.rmdir(path)

def get_code(request, **kwargs):
    code = urllib.unquote(kwargs["code"])
    print kwargs
    print "code: \n", code
    cName = saveBuilder(code)
    print "-----------------------------", cName

    importlib.import_module("builder"+cName)

    comp = getComponent(cName, name = cName)
    comp.makeOutput(str(os.path.join(os.getcwd(), cName)))

    path_to_zip = shutil.make_archive(cName,"zip",cName)

    f = open(cName + ".zip", 'rb')
    inner = f.read()
    c = open("iname", "wb")
    c.write(inner)
    print "fsbdjfkhbsdfhbsdlfsdafnlksdabfklsa", len(inner)
    c.close()

    # response = HttpResponse(inner, content_type='application/zip')
    response = HttpResponse(FileWrapper(file(path_to_zip, 'rb')), content_type='application/zip')
    print inner

    response['Content-Disposition'] = 'attachment; filename='+cName+'.zip'

    deleteDir(cName)
    os.remove(cName + ".zip")

    return response

    # s = StringIO.StringIO()
    # # zipf = zipfile.ZipFile('{}.zip'.format(cName), 'w', zipfile.ZIP_DEFLATED)
    # zipf = zipfile.ZipFile(s, 'w', zipfile.ZIP_DEFLATED)
    # zipdir('{}/'.format(cName), zipf)
    # zipf.close()


    # print s.getvalue()
    # response = HttpResponse(s.getvalue(), content_type='application/zip')
    # response['Content-Disposition'] = 'attachment; filename={}.zip'.format(cName)
    # return response

    # return HttpResponse("ok")



def save(request):
    session = SessionSave(xml_text=request.POST[
        'xml'], save_date=timezone.now())
    session.save()
    return HttpResponse(session.pk)
