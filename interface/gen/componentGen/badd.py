from svggen.api.component import Component
from svggen.api.composables.CodeComposable import CodeComposable

from svggen.api.CodeComponent import CodeComponent
from svggen.api.ports.CodePort import InIntPort
from svggen.api.ports.CodePort import OutIntPort



class badd(CodeComponent):

	def __init__(self,  yamlFile=None, **kwargs):
		CodeComponent.__init__(self, yamlFile, **kwargs)
		name = self.getName()

		self.meta = {
			"arduino": {
				"code": "@@name@@item = (int)(<<a@@name@@>> + <<b@@name@@>>);\n"
				,

				"inputs": {
					"a@@name@@": None,
					"b@@name@@": None,
				},

				"outputs": {
					"c@@name@@" : "@@name@@item"
				},

				"declarations":  "int @@name@@item;\n"
				,

				"needs": set()
			}
		}

	def define(self, **kwargs):
		CodeComponent.define(self, **kwargs)
		self.addInterface("inPort0", InIntPort(self, "inPort0", "a@@name@@"))
		self.addInterface("inPort1", InIntPort(self, "inPort1", "b@@name@@"))
		self.addInterface("outPort0", OutIntPort(self, "outPort0", "c@@name@@"))

	def assemble(self):
		CodeComponent.assemble(self)

if __name__ == "__main__":
	pass
