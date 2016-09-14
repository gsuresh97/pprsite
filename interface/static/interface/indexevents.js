function onParameterNameChange(event) {
    var block = workspace.getBlockById(event.blockId)

    if (block && block.type == 'component_create' && event.type == Blockly.Events.CHANGE &&
        event.element == 'field') {
        switch (event.name.substring(0, 3)) {
            case "INP":
                Blockly.Blocks['input' + event.name.substring(10)] = {
                    // mutator blocks for component
                    init: function() {
                        this.appendDummyInput()
                            .appendField("Input " + event.newValue);
                        this.setOutput(true, null);
                        this.setColour(180);
                        this.setTooltip('');
                        this.setHelpUrl('http://www.example.com/');
                    }
                };
                break;
            default:
                break;
        }
        // console.log(event.name);
    }
}

// whenever a new input block is added to component_create through its mutator,
// add a corresponding input block in the componnents category in the toolbar.
function onComponentModify(event) {
    var block = workspace.getBlockById(event.blockId)
    if (block && block.type == 'component_create' && event.type == Blockly.Events.CHANGE && event.element == 'mutation') {

        // Delete all input blocks
        for (var i = 0; Blockly.Blocks["input" + i]; i++) {
            Blockly.Blocks["input" + i] = null;
            delete Blockly.Blocks["input" + i];

            Toolbox.deleteBlock("input" + i, Toolbox.componentCategory);
        }

        var clauseBlock = rootBlock.nextConnection.targetBlock();
        var inputCount = 0;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'component_input':
                    // add input block to toolbox
                    if (!Blockly.Blocks['input' + inputCount]) {
                        Toolbox.addBlock('<block type="' + 'input' + inputCount + '"></block>', Toolbox.componentCategory);
                        workspace.updateToolbox(Toolbox.xmlTree);
                    }

                    // create input block definition
                    Blockly.Blocks['input' + inputCount] = {
                        // mutator blocks for component
                        init: function() {
                            this.appendDummyInput()
                                .appendField("Input name");
                            this.setOutput(true, null);
                            this.setColour(180);
                            this.setTooltip('');
                            this.setHelpUrl('http://www.example.com/');
                        }
                    };

                    inputCount++;
                    break;
                default:
                    break;
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
        }

        Toolbox.updateToolbox();
    }
}

function onInputOutputDelete(event) {
    if (event.type == Blockly.Events.DELETE) {
        var tree = event.oldXml;

        var block = tree.getAttribute('type');
        var name = tree.childNodes[0].innerText;
    }
}

workspace.addChangeListener(onInputOutputDelete);
workspace.addChangeListener(onParameterNameChange);
workspace.addChangeListener(onComponentModify);
