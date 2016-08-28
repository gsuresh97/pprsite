import sys
import os


class CustomBlockFile:

    def __init__(self, relBlockPath="blocks.js", relInitPath="init.js"):
        self.path = os.path.join(os.getcwd(), "interface/static/interface/")

        self.blpath = os.path.join(self.path, relBlockPath)
        self.blockFile = open(self.blpath, 'wb', 0)

        self.inpath = os.path.join(self.path, relInitPath)
        self.initFile = open(self.inpath, 'wb', 0)

        print "BlocklyStorage instantiated"

    def write(self, text):
        self.blockFile.write(text)

    # init.js
    def head(self):
        # self.initFile.write(
        #     "var toolbox = '<category name=\"CodeComponents\" colour=\"230\">';\n")
        # self.initFile.write("toolbox += '<xml>';\n")
        self.initFile.write("var toolbox = '<xml>';\n")

    def writeInit(self, comp):
        self.initFile.write(
            "toolbox += '  <block type=\"{}\"></block>';\n".format(comp.getName()))

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
    def writeComponent(self, name, ports):
        self.blockFile.write("//{}\n".format(name))
        self.blockFile.write("Blockly.Blocks['{}'] = {{\n".format(name))
        self.blockFile.write("\t init: function(){\n")
        self.blockFile.write(
            "\t\tthis.appendDummyInput().appendField(\"{}\");\n".format(name))
        if 'in' in ports.keys():
            for k, v in ports['in'].iteritems():
                self.blockFile.write(
                    "\t\tthis.appendValueInput(\"{}\").setCheck(\"{}\").appendField(\"{}\");\n".format(k, v, k))

        if 'out' in ports.keys():
            for k, v in ports['out'].iteritems():
                self.blockFile.write(
                    "\t\tthis.setOutput(true, \"{}\");\n".format(v))
        else:
            self.blockFile.write(
                "\t\tthis.setPreviousStatement(true, null);\n\t\tthis.setNextStatement(true, null);\n")
        self.blockFile.write("\t\tthis.setColour(230);\n")
        self.blockFile.write("\t}\n")
        self.blockFile.write("};\n\n")

    def writeConcatenateString(self):
        self.blockFile.write("//ConcatenateString\n")
        self.blockFile.write("Blockly.Blocks['ConcatenateString'] = {\n")

        # init function
        self.blockFile.write("\tinit: function() {\n")
        self.blockFile.write(
            "\t\tthis.setHelpUrl(Blockly.Msg.TEXT_JOIN_HELPURL);\n")
        self.blockFile.write("\t\tthis.setColour(230);\n")
        self.blockFile.write("\t\tthis.itemCount_ = 2;\n")
        self.blockFile.write("\t\tthis.updateShape_();\n")
        self.blockFile.write("\t\tthis.setOutput(!0, \"OutStringPort\");\n")
        self.blockFile.write(
            "\t\tthis.setMutator(new Blockly.Mutator([\"text_create_join_item\"]));\n")
        self.blockFile.write(
            "\t\tthis.setTooltip(Blockly.Msg.TEXT_JOIN_TOOLTIP)\n")
        self.blockFile.write("\t},\n")

        # mutationToDom function
        self.blockFile.write("\tmutationToDom: function() {\n")
        self.blockFile.write(
            "\t\tvar a = document.createElement(\"mutation\");\n")
        self.blockFile.write(
            "\t\ta.setAttribute(\"items\", this.itemCount_);\n")
        self.blockFile.write("\t\treturn a\n")
        self.blockFile.write("\t},\n")

        # domToMutation function
        self.blockFile.write("\tdomToMutation: function(a) {\n")
        self.blockFile.write(
            "\t\tthis.itemCount_ = parseInt(a.getAttribute(\"items\"), 10);\n")
        self.blockFile.write("\t\tthis.updateShape_()\n")
        self.blockFile.write("\t},\n")

        # decompose function
        self.blockFile.write("\tdecompose: function(a) {\n")
        self.blockFile.write(
            "\t\tvar b = a.newBlock(\"text_create_join_container\");\n")
        self.blockFile.write("\t\tb.initSvg();\n")
        self.blockFile.write(
            "\t\tfor (var c = b.getInput(\"STACK\").connection, d = 0; d < this.itemCount_; d++) {\n")
        self.blockFile.write(
            "\t\t\tvar e = a.newBlock(\"text_create_join_item\");\n")
        self.blockFile.write("\t\t\te.initSvg();\n")
        self.blockFile.write("\t\t\tc.connect(e.previousConnection);\n")
        self.blockFile.write("\t\t\tc = e.nextConnection\n")
        self.blockFile.write("\t\t}\n")
        self.blockFile.write("\t\treturn b\n")
        self.blockFile.write("\t},\n")

        # compose function
        self.blockFile.write("\tcompose: function(a) {\n")
        self.blockFile.write("\t\tvar b = a.getInputTargetBlock(\"STACK\");\n")
        self.blockFile.write("\t\tfor (a = []; b; )\n")
        self.blockFile.write("\t\t\ta.push(b.valueConnection_),\n")
        self.blockFile.write(
            "\t\t\tb = b.nextConnection && b.nextConnection.targetBlock();\n")
        self.blockFile.write("\t\tfor (b = 0; b < this.itemCount_; b++) {\n")
        self.blockFile.write(
            "\t\t\tvar c = this.getInput(\"ADD\" + b).connection.targetConnection;\n")
        self.blockFile.write(
            "\t\t\tc && -1 == a.indexOf(c) && c.disconnect()\n")
        self.blockFile.write("\t\t}\n")
        self.blockFile.write("\t\tthis.itemCount_ = a.length;\n")
        self.blockFile.write("\t\tthis.updateShape_();\n")
        self.blockFile.write("\t\tfor (b = 0; b < this.itemCount_; b++)\n")
        self.blockFile.write(
            "\t\t\tBlockly.Mutator.reconnect(a[b], this, \"ADD\" + b)\n")
        self.blockFile.write("\t},\n")

        # saveConnections function
        self.blockFile.write("\tsaveConnections: function(a) {\n")
        self.blockFile.write("\t\ta = a.getInputTargetBlock(\"STACK\");\n")
        self.blockFile.write("\t\tfor (var b = 0; a; ) {\n")
        self.blockFile.write("\t\t\tvar c = this.getInput(\"ADD\" + b);\n")
        self.blockFile.write(
            "\t\t\ta.valueConnection_ = c && c.connection.targetConnection;\n")
        self.blockFile.write("\t\t\tb++;\n")
        self.blockFile.write(
            "\t\t\ta = a.nextConnection && a.nextConnection.targetBlock()\n")
        self.blockFile.write("\t\t}\n")
        self.blockFile.write("\t},\n")

        # updateShape_ function
        self.blockFile.write("\tupdateShape_: function() {\n")
        self.blockFile.write(
            "\t\tthis.itemCount_ && this.getInput(\"EMPTY\") ? this.removeInput(\"EMPTY\") : this.itemCount_ || this.getInput(\"EMPTY\") || this.appendDummyInput(\"EMPTY\").appendField(this.newQuote_(!0)).appendField(this.newQuote_(!1));\n")
        self.blockFile.write("\t\tfor (var a = 0; a < this.itemCount_; a++)\n")
        self.blockFile.write("\t\t\tif (!this.getInput(\"ADD\" + a)) {\n")
        self.blockFile.write(
            "\t\t\t\tvar b = this.appendValueInput(\"ADD\" + a);\n")
        self.blockFile.write(
            "\t\t\t\t0 == a && b.appendField(\"ConcatenateString\")\n")
        self.blockFile.write("\t\t\t}\n")
        self.blockFile.write("\t\tfor (; this.getInput(\"ADD\" + a); )\n")
        self.blockFile.write("\t\t\tthis.removeInput(\"ADD\" + a),\n")
        self.blockFile.write("\t\t\ta++\n")
        self.blockFile.write("\t},\n")
        self.blockFile.write("\tnewQuote_: Blockly.Blocks.text.newQuote_\n")
        self.blockFile.write("};")

    def writeStringSource(self):
        self.blockFile.write("Blockly.Blocks['StringSource'] = {\n")
        self.blockFile.write("init: function() {\n")
        self.blockFile.write(
            "this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);\n")
        self.blockFile.write("this.setColour(230);\n")
        self.blockFile.write(
            "this.appendDummyInput().appendField(\"StringSource\").appendField(this.newQuote_(!0)).appendField(new Blockly.FieldTextInput(\"\"), \"TEXT\").appendField(this.newQuote_(!1));\n")
        self.blockFile.write("this.setOutput(!0, \"String\");\n")
        self.blockFile.write("var a = this;\n")
        self.blockFile.write("this.setTooltip(function() {\n")
        self.blockFile.write("var b = a.getParent();\n")
        self.blockFile.write(
            "return b && b.getInputsInline() && b.tooltip || Blockly.Msg.TEXT_TEXT_TOOLTIP\n")
        self.blockFile.write("})\n")
        self.blockFile.write("},\n")
        self.blockFile.write("newQuote_: function(a) {\n")
        self.blockFile.write("return new Blockly.FieldImage(a == this.RTL ? \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC\",12,12,\'\"\')\n")
        self.blockFile.write("}\n")
        self.blockFile.write("};\n")
