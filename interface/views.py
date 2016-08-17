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

from genblocks import CustomBlockFile

path = os.path.join(os.getcwd(), "interface/ppr/")
sys.path.append(path)
from svggen.library import allComponents, getComponent, instanceOf, buildDatabase, queryDatabase
from svggen.api.component import Component
from svggen.api.CodeComponent import CodeComponent

# Create your views here.


def index(request):

    # latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('interface/index.html')

    # context = {
    #     'latest_question_list': latest_question_list,
    # }
    return HttpResponse(template.render(request))



def prevblocks(request):
    c = CustomBlockFile()
    comps = []
    # for comp in allComponents:
    #     try:

    #         if comp is "StringSource":
    #             a = getComponent(comp, name=comp, contents="Hello World")
    #         elif comp is "ConcatenateString":
    #             a = getComponent(comp, name=comp, contents=3)
    #         else:
    #             a = getComponent(comp, name=comp)

    #         codeInstance = instanceOf(a, CodeComponent)

    #         if codeInstance is True:
    #             comps.append(a)
    #             # print comp
    #     except Exception as err:
    #         print "-------------------------------------------------{}".format(comp)
    #         logging.error(traceback.format_exc())
    #         # print err.message

    # buildDatabase(comps)
    count = 0
    compItems = []
    for comp in allComponents:
        compItem = queryDatabase(comp)
        if compItem:
            compItems.append(compItem)
            count+=1

    # print "------------------------------------------------------------------------------------{}".format(count)
    # print "\n\n\n\n"
    ports = {}

    for i in compItems:
        # print i.getName()
        # ports['name'] = i.getName()
        item = {}
        for k, v in i.interfaces.iteritems():
            # print k
            # print v.getName()
            if "out" in k:
                if 'out' not in item.keys():
                    item['out'] = {}
                # item['out'][k] = v.__class__.__name__
                item['out'][k] = v
            else:
                if 'in' not in item.keys():
                    item['in'] = {}
                # item['in'][k] = v.__class__.__name__
                item['in'][k] = v
        ports[i.name] = item
    # print ports

    blockfile = "blocks.js"
    initfile = "init.js"

    files = (blockfile, initfile)
    blockjs = CustomBlockFile(blockfile)

    # write file that defines the toolbox
    blockjs.head()
    for comp in compItems:
        blockjs.writeInit(comp)
    # blockjs.writeStringSourceInit()
    # blockjs.writeStringConcatenateInit()
    blockjs.tail()


    # Write block.js file that describes blockly blocks.
    for i in compItems:
        blockjs.writeComponent(i.name, ports[i.name])
    # blockjs.writeStringSource()
    # blockjs.writeConcatenateString()
    context = {
        'files': files
    }

    template = loader.get_template('interface/prev-blocks.html')
    return HttpResponse(template.render(context, request))


def recall_session(request):
    session = SessionSave.objects.get(pk=int(request.POST['key']))
    return HttpResponse(session.xml_text)


def save(request):
    session = SessionSave(xml_text=request.POST[
        'xml'], save_date=timezone.now())
    session.save()
    return HttpResponse(session.pk)


# hey ahmed, you know how some components need a specific keyWord argument
# in order for the component to get created(StringSource, ConcatenateString), I was thinking about it and the
# user is the one that needs to come up with the keyword arguments. This means that
# I can't make the component objects and therefore can't get the interfaces for each
# component since I dont know what the arguments should be. is there a way
# to know which ones
