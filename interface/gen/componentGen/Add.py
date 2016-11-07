from svggen.api.component import Component
from svggen.api.composables.CodeComposable import CodeComposable

from svggen.api.CodeComponent import CodeComponent
from svggen.api.ports.CodePort import InIntPort
from svggen.api.ports.CodePort import OutIntPort



class add(CodeComponent):

	def __init__(self,  yamlFile=None, **kwargs):
		CodeComponent.__init__(self, yamlFile, **kwargs)
		name = self.getName()

		self.meta = {
			"arduino": {
				"code": {
					"{}item\n".format(name)
				},

				"inputs": {
					"one": "one",
					"two": "two",
				},

				"outputs": {
					"three" : "item"
				},

				"declarations": {
					"int {}item;\n".format(name) 
				},

				"needs": set()
			}
		}

	def define(self, **kwargs):
		CodeComponent.define(self, **kwargs)
		self.addInterface()
		self.addInterface()

	def assemble(self):
		CodeComponent.assemble()

if __name__ == "__main__":
	pass

