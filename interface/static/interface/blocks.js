//PrintLength
Blockly.Blocks['PrintLength'] = {
	 init: function(){
		this.appendDummyInput().appendField("PrintLength");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
	}
};

//MultiReverse
Blockly.Blocks['MultiReverse'] = {
	 init: function(){
		this.appendDummyInput().appendField("MultiReverse");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
	}
};

//ReverseString
Blockly.Blocks['ReverseString'] = {
	 init: function(){
		this.appendDummyInput().appendField("ReverseString");
		this.appendValueInput("inStr").setCheck("InStringPort").appendField("inStr");
		this.setOutput(true, "OutStringPort");
		this.setColour(230);
	}
};

//Len
Blockly.Blocks['Len'] = {
	 init: function(){
		this.appendDummyInput().appendField("Len");
		this.appendValueInput("inStr").setCheck("InStringPort").appendField("inStr");
		this.setOutput(true, "OutIntPort");
		this.setColour(230);
	}
};

//ReverseSort
Blockly.Blocks['ReverseSort'] = {
	 init: function(){
		this.appendDummyInput().appendField("ReverseSort");
		this.appendValueInput("inStr").setCheck("str").appendField("inStr");
		this.setOutput(true, "str");
		this.setColour(230);
	}
};

//SortHello
Blockly.Blocks['SortHello'] = {
	 init: function(){
		this.appendDummyInput().appendField("SortHello");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
	}
};

//IntToString
Blockly.Blocks['IntToString'] = {
	 init: function(){
		this.appendDummyInput().appendField("IntToString");
		this.appendValueInput("inInt").setCheck("InIntPort").appendField("inInt");
		this.setOutput(true, "OutStringPort");
		this.setColour(230);
	}
};

//SortString
Blockly.Blocks['SortString'] = {
	 init: function(){
		this.appendDummyInput().appendField("SortString");
		this.appendValueInput("inStr").setCheck("InStringPort").appendField("inStr");
		this.setOutput(true, "OutStringPort");
		this.setColour(230);
	}
};

//PutString
Blockly.Blocks['PutString'] = {
	 init: function(){
		this.appendDummyInput().appendField("PutString");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
	}
};

//ReverseHello
Blockly.Blocks['ReverseHello'] = {
	 init: function(){
		this.appendDummyInput().appendField("ReverseHello");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
	}
};

//PrintString
Blockly.Blocks['PrintString'] = {
	 init: function(){
		this.appendDummyInput().appendField("PrintString");
		this.appendValueInput("inStr").setCheck("InStringPort").appendField("inStr");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
	}
};

//UISlider
Blockly.Blocks['UISlider'] = {
	 init: function(){
		this.appendDummyInput().appendField("UISlider");
		this.appendValueInput("newPosition").setCheck("DataInputPort").appendField("newPosition");
		this.appendValueInput("curPosition").setCheck("DataOutputPort").appendField("curPosition");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
	}
};

//GetString
Blockly.Blocks['GetString'] = {
	 init: function(){
		this.appendDummyInput().appendField("GetString");
		this.setOutput(true, "OutStringPort");
		this.setColour(230);
	}
};

//ConcatenateHello
Blockly.Blocks['ConcatenateHello'] = {
	 init: function(){
		this.appendDummyInput().appendField("ConcatenateHello");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
	}
};

//PutReverseSort
Blockly.Blocks['PutReverseSort'] = {
	 init: function(){
		this.appendDummyInput().appendField("PutReverseSort");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
	}
};

//GetAndPutString
Blockly.Blocks['GetAndPutString'] = {
	 init: function(){
		this.appendDummyInput().appendField("GetAndPutString");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
	}
};

