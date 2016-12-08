from svggen.api.component import Component
from svggen.api.composables.CodeComposable import CodeComposable

from svggen.api.CodeComponent import CodeComponent
from svggen.api.ports.CodePort import InIntPort
from svggen.api.ports.CodePort import OutIntPort



class Multiply(CodeComponent):

	def __init__(self,  yamlFile=None, **kwargs):
		CodeComponent.__init__(self, yamlFile, **kwargs)
		name = self.getName()

		self.meta = {
			"arduino": {
				"code": "@@name@@item = (int)(<<one@@name@@>> * <<two@@name@@>>);\n"
				,

				"inputs": {
					"one@@name@@": None,
					"two@@name@@": None,
				},

				"outputs": {
					"three@@name@@" : "@@name@@item"
				},

				"declarations":  "int @@name@@item;\n"
				,

				"needs": set()
			}
		}

	def define(self, **kwargs):
		CodeComponent.define(self, **kwargs)
		self.addInterface("inPort0", InIntPort(self, "inPort0", "one@@name@@"))
		self.addInterface("inPort1", InIntPort(self, "inPort1", "two@@name@@"))
		self.addInterface("outPort0", OutIntPort(self, "outPort0", "three@@name@@"))

	def assemble(self):
		CodeComponent.assemble(self)

if __name__ == "__main__":
	pass
