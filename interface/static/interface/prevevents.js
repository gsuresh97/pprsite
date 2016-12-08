var outputCount = {};

function onBlockAddedToWorkspace(event) {
    var block = workspace.getBlockById(event.blockId);
    if (block && event.type == Blockly.Events.CREATE && block.type.indexOf("|") > 0 && block.type.indexOf("\\") < 0) {
        var blockName = block.type.substring(0, block.type.indexOf("|"));
        var blockNumber = parseInt(block.type.substring(block.type.indexOf("|") + 1, block.type.length), 10);
        // If the block has outputs
        if (Blockly.Blocks[blockName + "|" + blockNumber + "\\" + 0]){
            //If it doesn't already exist, make a blocks category in the toolbar
            if (!Toolbox.blocks) {
                Toolbox.blocks = Toolbox.addEmptyCategory("blocks", Toolbox.xmlTree);
            }

            //make a category to house the output of the block that was just dragged
            block.cat = Toolbox.addEmptyCategory("Block Name " + blockNumber, Toolbox.blocks);

            // add all the outputs blocks of the new block on the workspace to the
            // toolbar
            for (var i = 0; Blockly.Blocks[blockName + "|" + blockNumber + "\\" + i]; i++) {
                Toolbox.addEmptyBlock(blockName + "|" + blockNumber + "\\" + i, block.cat);
            }

            //add all the outputs to the counting object, along with a count of 0
            for (var i = 0; Blockly.Blocks[blockName + "|" + blockNumber + "\\" + i]; i++) {
                outputCount[blockName + "|" + blockNumber + "\\" + i] = 0;
            }
        }

        // create a new blockly block
        eval("make" + blockName + "(" + (blockNumber + 1) + ")");

        //create a new blockly output block
        eval("makeOutput" + blockName + "(" + (blockNumber + 1) + ")");

        Toolbox.incrementBlock(blockName, blockNumber, block.category);

    } else if (block && event.type == Blockly.Events.CREATE && block.type.indexOf("\\") > 0) {
        if (outputCount[block.type] == 0) {
            outputCount[block.type] = 1;
            var c;
            var outs = Toolbox.blocks.childNodes;
            for(var i =0; i < outs.length; i++){
                var cat = outs[i].childNodes;
                var cate = outs[i];
                for(var j = 0; j < cat.length; j++){
                    if (cat[j].getAttribute("type") == block.type) {
                        c = cate;
                        break;
                    }
                }
            }
            Toolbox.disableBlock([block.type], c);
        }
    }
}

function onBlockNameChange(event) {
    var block = workspace.getBlockById(event.blockId)

    if (block && event.type == Blockly.Events.CHANGE && block.type!= "component_create" && block.type!= "inherit_input"&& block.type.indexOf("\\") < 0 && event.name == "NAME") {
        if(event.newValue.indexOf("|") >= 0 || event.newValue.indexOf("\\") >= 0){
            alert("Do not include '|' or '\\' in the component names.");
            block.setFieldValue(event.oldValue, "NAME");
            return;
        }


        // change the name of the category
        block.cat.setAttribute("name", event.newValue);

        var blockName = block.type.substring(0, block.type.indexOf("|"));
        var blockNumber = parseInt(block.type.substring(block.type.indexOf("|") + 1, block.type.length), 10);

        // change the output blocks, if any exist, to  reflect the name change
        for (var i = 0; Blockly.Blocks[blockName + "|" + blockNumber + "\\" + i]; i++) {
            // var newName = "";
            var newName = event.newValue.toString();
            var outName = Blockly.Blocks[blockName + "|" + blockNumber + "\\" + i].outputName;
            var outType = Blockly.Blocks[blockName + "|" + blockNumber + "\\" + i].outputType;

            Blockly.Blocks[blockName + "|" + blockNumber + "\\" + i] = {};

            Blockly.Blocks[blockName + "|" + blockNumber + "\\" + i].name = newName;
            Blockly.Blocks[blockName + "|" + blockNumber + "\\" + i].outputType = outType;
            Blockly.Blocks[blockName + "|" + blockNumber + "\\" + i].outputName= outName;
            Blockly.Blocks[blockName + "|" + blockNumber + "\\" + i].init = function() {
                this.appendDummyInput().appendField(this.name + " -> " + this.outputName );
                this.setOutput(true, null);
                this.setColour(180);
            };

        }

        Toolbox.updateToolbox();
    }
}

function onComponentDelete(event){
    if (event.type == Blockly.Events.DELETE) {
        var tree = event.oldXml;
        var block = tree.getAttribute('type');
        var name;
        if(tree.childNodes[0]){
            name = tree.childNodes[0].innerText;
        }
        // if the block is a component block
        if(block.indexOf("\\") < 0 && block.indexOf("|") > 0){
            // nullify current block
            Blockly.Blocks[block]=null;
            delete Blockly.Blocks[block];

            // nullify possible outputs
            for (var i = 0; Blockly.Blocks[block + "\\" + i]; i++) {
                Blockly.Blocks[block + "\\" + i]=null;
                delete Blockly.Blocks[block + "\\" + i];
            }

            // remove category
            if(Toolbox.blocks)
                Toolbox.deleteCategory(name, Toolbox.blocks);

            Toolbox.updateToolbox();

        } else if (block.indexOf('\\')>0) {
            outputCount[block] = 0;
            var c;
            var outs = Toolbox.blocks.childNodes;
            for(var i =0; i < outs.length; i++){
                var cat = outs[i].childNodes;
                var cate = outs[i];
                for(var j = 0; j < cat.length; j++){
                    if (cat[j].getAttribute("type") == block) {
                        c = cate;
                        break;
                    }
                }
            }
            Toolbox.enableBlock([block], c);
        }
    }
}

Blockly.Blocks['component_parameter'] = {
    // mutator blocks for component
    init: function() {
        this.appendDummyInput()
            .appendField("Parameter");
        this.setPreviousStatement(true, "");
        this.setNextStatement(true, "");
        this.setColour(180);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

workspace.addChangeListener(onBlockAddedToWorkspace);
workspace.addChangeListener(onBlockNameChange);
workspace.addChangeListener(onComponentDelete);
