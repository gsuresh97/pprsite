//PrintLength
Blockly.Blocks['PrintLength'] = {
	 init: function(){
		this.appendDummyInput().appendField("PrintLength");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
	}
};

//ConcatenateHello
Blockly.Blocks['ConcatenateHello'] = {
	 init: function(){
		this.appendDummyInput().appendField("ConcatenateHello");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
	}
};

//ArduinoUno
Blockly.Blocks['ArduinoUno'] = {
	 init: function(){
		this.appendDummyInput().appendField("ArduinoUno");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
	}
};

//RGBLED
Blockly.Blocks['RGBLED'] = {
	 init: function(){
		this.appendDummyInput().appendField("RGBLED");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
	}
};

//MultiReverse
Blockly.Blocks['MultiReverse'] = {
	 init: function(){
		this.appendDummyInput().appendField("MultiReverse");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
	}
};

//ReverseString
function makeReverseString(count){
	Blockly.Blocks['ReverseString_' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ReverseString: " + (count+1));
			this.appendValueInput("inStr").setCheck("str").appendField("inStr");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		}
	};
}

//outStr- ReverseString
Blockly.Blocks['ReverseString0'] = {
	 init: function(){
		this.appendDummyInput().appendField("ReverseString->outStr: 1");
		this.setOutput(true, "str");
		this.setColour(180);
	}
};

//Len
function makeLen(count){
	Blockly.Blocks['Len_' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Len: " + (count+1));
			this.appendValueInput("inStr").setCheck("str").appendField("inStr");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		}
	};
}

//outInt- Len
Blockly.Blocks['Len0'] = {
	 init: function(){
		this.appendDummyInput().appendField("Len->outInt: 1");
		this.setOutput(true, "str");
		this.setColour(180);
	}
};

//ReverseSort
function makeReverseSort(count){
	Blockly.Blocks['ReverseSort_' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ReverseSort: " + (count+1));
			this.appendValueInput("inStr").setCheck("str").appendField("inStr");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		}
	};
}

//outStr- ReverseSort
Blockly.Blocks['ReverseSort0'] = {
	 init: function(){
		this.appendDummyInput().appendField("ReverseSort->outStr: 1");
		this.setOutput(true, "str");
		this.setColour(180);
	}
};

//SortHello
Blockly.Blocks['SortHello'] = {
	 init: function(){
		this.appendDummyInput().appendField("SortHello");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
	}
};

//IntToString
function makeIntToString(count){
	Blockly.Blocks['IntToString_' + count] = {
		init: function(){
			this.appendDummyInput().appendField("IntToString: " + (count+1));
			this.appendValueInput("inInt").setCheck("str").appendField("inInt");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		}
	};
}

//outStr- IntToString
Blockly.Blocks['IntToString0'] = {
	 init: function(){
		this.appendDummyInput().appendField("IntToString->outStr: 1");
		this.setOutput(true, "str");
		this.setColour(180);
	}
};

//SortString
function makeSortString(count){
	Blockly.Blocks['SortString_' + count] = {
		init: function(){
			this.appendDummyInput().appendField("SortString: " + (count+1));
			this.appendValueInput("inStr").setCheck("str").appendField("inStr");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		}
	};
}

//outStr- SortString
Blockly.Blocks['SortString0'] = {
	 init: function(){
		this.appendDummyInput().appendField("SortString->outStr: 1");
		this.setOutput(true, "str");
		this.setColour(180);
	}
};

//PutString
Blockly.Blocks['PutString'] = {
	 init: function(){
		this.appendDummyInput().appendField("PutString");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
	}
};

//ReverseHello
Blockly.Blocks['ReverseHello'] = {
	 init: function(){
		this.appendDummyInput().appendField("ReverseHello");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
	}
};

//PrintString
Blockly.Blocks['PrintString'] = {
	 init: function(){
		this.appendDummyInput().appendField("PrintString");
		this.appendValueInput("inStr").setCheck("str").appendField("inStr");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
	}
};

//LED
Blockly.Blocks['LED'] = {
	 init: function(){
		this.appendDummyInput().appendField("LED");
		this.appendValueInput("ein").setCheck("ElectricalPort").appendField("ein");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
	}
};

//RGBLEDDriver
Blockly.Blocks['RGBLEDDriver'] = {
	 init: function(){
		this.appendDummyInput().appendField("RGBLEDDriver");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
	}
};

//GetString
function makeGetString(count){
	Blockly.Blocks['GetString_' + count] = {
		init: function(){
			this.appendDummyInput().appendField("GetString: " + (count+1));
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		}
	};
}

//outStr- GetString
Blockly.Blocks['GetString0'] = {
	 init: function(){
		this.appendDummyInput().appendField("GetString->outStr: 1");
		this.setOutput(true, "str");
		this.setColour(180);
	}
};

//PutReverseSort
Blockly.Blocks['PutReverseSort'] = {
	 init: function(){
		this.appendDummyInput().appendField("PutReverseSort");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
	}
};

//Button
function makeButton(count){
	Blockly.Blocks['Button_' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Button: " + (count+1));
			this.appendValueInput("ein").setCheck("ElectricalPort").appendField("ein");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		}
	};
}

//eout- Button
Blockly.Blocks['Button0'] = {
	 init: function(){
		this.appendDummyInput().appendField("Button->eout: 1");
		this.setOutput(true, "ElectricalPort");
		this.setColour(180);
	}
};

//Pot
Blockly.Blocks['Pot'] = {
	 init: function(){
		this.appendDummyInput().appendField("Pot");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
	}
};

//GetAndPutString
Blockly.Blocks['GetAndPutString'] = {
	 init: function(){
		this.appendDummyInput().appendField("GetAndPutString");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
	}
};

makeReverseString(0);
makeLen(0);
makeReverseSort(0);
makeIntToString(0);
makeSortString(0);
makeGetString(0);
makeButton(0);
