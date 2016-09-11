import sys
import os
import xml.etree.ElementTree as ET


class CustomBlockFile:

    def __init__(self, relBlockPath="blocks.js", relInitPath="init.js"):
        self.path = os.path.join(os.getcwd(), "interface/static/interface/")

        self.blpath = os.path.join(self.path, relBlockPath)
        self.blockFile = open(self.blpath, 'wb', 0)

        self.inpath = os.path.join(self.path, relInitPath)
        self.initFile = open(self.inpath, 'wb', 0)

        self.tree = ET.fromstring("<xml></xml>")
        self.componentsWithOutputs = []
        print "BlocklyStorage instantiated"

    def write(self, text):
        self.blockFile.write(text)

    # init.js
    def head(self):
        self.initFile.write("var toolbox = '<xml>';\n")

    def writeInit(self, comps, ports):
        categories = {}
        for comp in comps:
            port = ports[comp.getName()]
            suffix = ""
            if "out" in port.keys():
                suffix = "_0"
            category = ""
            for sable in comp.composables:
                category += (sable + ", ")
            category = category[:-2]
            if category not in categories:
                c = ET.SubElement(self.tree, "category", {
                    "name": category, "colour": "180"})
                categories[category] = c
                # print ET.dump(self.tree)

            ET.SubElement(categories[category], "block", {
                          "type": (comp.getName() + suffix)})
            # print ET.dump(self.tree)
        self.initFile.write("var toolbox = '" +
                            ET.tostring(self.tree) + "';\n")
        self.initFile.write(
            "var workspace = Blockly.inject('{}', {{toolbox: toolbox}});\n".format("blocklyDiv"))
        # self.initFile.write(

        #     "toolbox += '  <block type=\"{}\"></block>';\n".format(comp.getName()))

    def writeStringSourceInit(self):
        self.initFile.write(
            "toolbox += '  <block type=\"StringSource\"></block>';\n")

    def writeStringConcatenateInit(self):
        self.initFile.write(
            "toolbox += '  <block type=\"ConcatenateString\"></block>';\n")

    def tail(self, blocklyDiv="blocklyDiv"):
        self.initFile.write("toolbox += '</xml>';\n")
        # self.initFile.write("toolbox += '</category>';\n")
        self.initFile.write(
            "var workspace = Blockly.inject('{}', {{toolbox: toolbox}});\n".format(blocklyDiv))

    # blocks.js
    def writeComponentWithOutput(self, name, ports):
        self.blockFile.write("//{}\n".format(name))
        self.blockFile.write('function make{}(count){{\n'.format(name))
        self.blockFile.write(
            "\tBlockly.Blocks['{}' + count] = {{\n".format(name + "_"))
        self.blockFile.write("\t\tinit: function(){\n")
        self.blockFile.write(
            "\t\t\tthis.appendDummyInput().appendField(\"{}: \" + (count+1));\n".format(name))
        if 'in' in ports.keys():
            for k, v in ports['in'].iteritems():
                self.blockFile.write(
                    "\t\t\tthis.appendValueInput(\"{}\").setCheck(\"{}\").appendField(\"{}\");\n".format(k, v, k))

        self.blockFile.write(
            "\t\t\tthis.setPreviousStatement(true, null);\n\t\t\tthis.setNextStatement(true, null);\n")

        self.blockFile.write("\t\t\tthis.setColour(180);\n")
        self.blockFile.write("\t\t}\n")
        self.blockFile.write("\t};\n")
        self.blockFile.write("}\n\n")

        count = 0
        for k, v in ports['out'].iteritems():
            self.writeComponentOutputs(name, k, v, count)
            count += 1

    def writeComponent(self, name, ports):
        if "out" in ports.keys():
            self.writeComponentWithOutput(name, ports)
            self.componentsWithOutputs.append(name)
        else:
            self.blockFile.write("//{}\n".format(name))
            self.blockFile.write(
                "Blockly.Blocks['{}'] = {{\n".format(name))
            self.blockFile.write("\t init: function(){\n")
            self.blockFile.write(
                "\t\tthis.appendDummyInput().appendField(\"{}\");\n".format(name))
            if 'in' in ports.keys():
                for k, v in ports['in'].iteritems():
                    self.blockFile.write(
                        "\t\tthis.appendValueInput(\"{}\").setCheck(\"{}\").appendField(\"{}\");\n".format(k, v, k))

            self.blockFile.write(
                "\t\tthis.setPreviousStatement(true, null);\n\t\tthis.setNextStatement(true, null);\n")

            self.blockFile.write("\t\tthis.setColour(180);\n")
            self.blockFile.write("\t}\n")
            self.blockFile.write("};\n\n")

    def writeComponentOutputs(self, componentName, name, valueType, count):
        self.blockFile.write("//{}- {}\n".format(name, componentName))
        self.blockFile.write(
            "Blockly.Blocks['{}'] = {{\n".format(componentName + str(count)))
        self.blockFile.write("\t init: function(){\n")
        self.blockFile.write(
            "\t\tthis.appendDummyInput().appendField(\"{}\");\n".format(componentName + "->" + name + ": 1"))
        self.blockFile.write(
            "\t\tthis.setOutput(true, \"{}\");\n".format(valueType))
        self.blockFile.write("\t\tthis.setColour(180);\n")
        self.blockFile.write("\t}\n")
        self.blockFile.write("};\n\n")

    def finishComponents(self):
        for comp in self.componentsWithOutputs:
            self.blockFile.write("make" + comp + "(0);\n")
