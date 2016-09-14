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
from svggen.library import allComponents, getComponent, instanceOf, buildDatabase, queryDatabase, filterComponents, filterDatabase
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
    blockjs.finishComponents()
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
