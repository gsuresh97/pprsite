from svggen.api.component import Component
from svggen.library import *
from svggen.library import getComponent
from svggen.library.F import F


c = Component()
c.addSubcomponent("rev", "ReverseString")
c.addSubcomponent("len", "Len")
c.addConnection(("len", "inStr"), ("rev", "outStr"))
c.inheritInterface("in", ("rev", "inStr"))
c.inheritInterface("out", ("len", "outInt"))
c.toYaml("library/revLen.yaml")