//PrintLength
function makePrintLength(count){
	Blockly.Blocks['PrintLength|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("PrintLength ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code',
	};
}

//ConcatenateHello
function makeConcatenateHello(count){
	Blockly.Blocks['ConcatenateHello|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ConcatenateHello ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code',
	};
}

//ArduinoUno
function makeArduinoUno(count){
	Blockly.Blocks['ArduinoUno|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ArduinoUno ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code, electrical',
	};
}

//RGBLED
function makeRGBLED(count){
	Blockly.Blocks['RGBLED|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("RGBLED ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'electrical',
	};
}

//MultiReverse
function makeMultiReverse(count){
	Blockly.Blocks['MultiReverse|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("MultiReverse ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code',
	};
}

//ReverseString
function makeReverseString(count){
	Blockly.Blocks['ReverseString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ReverseString ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.appendValueInput("inStr").setCheck("str").appendField("inStr");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code',
	};

	//outStr- ReverseString
	Blockly.Blocks['ReverseString|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->outStr");
			this.setOutput(true, "str");
			this.setColour(180);
		},
		outputType:'str',
		outputName:'outStr',
	};
}

//Len
function makeLen(count){
	Blockly.Blocks['Len|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Len ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.appendValueInput("inStr").setCheck("str").appendField("inStr");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code',
	};

	//outInt- Len
	Blockly.Blocks['Len|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->outInt");
			this.setOutput(true, "str");
			this.setColour(180);
		},
		outputType:'str',
		outputName:'outInt',
	};
}

//ReverseSort
function makeReverseSort(count){
	Blockly.Blocks['ReverseSort|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ReverseSort ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.appendValueInput("inStr").setCheck("str").appendField("inStr");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code',
	};

	//outStr- ReverseSort
	Blockly.Blocks['ReverseSort|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->outStr");
			this.setOutput(true, "str");
			this.setColour(180);
		},
		outputType:'str',
		outputName:'outStr',
	};
}

//SortHello
function makeSortHello(count){
	Blockly.Blocks['SortHello|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("SortHello ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code',
	};
}

//IntToString
function makeIntToString(count){
	Blockly.Blocks['IntToString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("IntToString ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.appendValueInput("inInt").setCheck("str").appendField("inInt");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code',
	};

	//outStr- IntToString
	Blockly.Blocks['IntToString|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->outStr");
			this.setOutput(true, "str");
			this.setColour(180);
		},
		outputType:'str',
		outputName:'outStr',
	};
}

//SortString
function makeSortString(count){
	Blockly.Blocks['SortString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("SortString ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.appendValueInput("inStr").setCheck("str").appendField("inStr");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code',
	};

	//outStr- SortString
	Blockly.Blocks['SortString|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->outStr");
			this.setOutput(true, "str");
			this.setColour(180);
		},
		outputType:'str',
		outputName:'outStr',
	};
}

//PutString
function makePutString(count){
	Blockly.Blocks['PutString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("PutString ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code',
	};
}

//ReverseHello
function makeReverseHello(count){
	Blockly.Blocks['ReverseHello|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("ReverseHello ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code',
	};
}

//PrintString
function makePrintString(count){
	Blockly.Blocks['PrintString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("PrintString ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.appendValueInput("inStr").setCheck("str").appendField("inStr");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code',
	};
}

//LED
function makeLED(count){
	Blockly.Blocks['LED|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("LED ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.appendValueInput("ein").setCheck("ElectricalPort").appendField("ein");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'electrical',
	};
}

//RGBLEDDriver
function makeRGBLEDDriver(count){
	Blockly.Blocks['RGBLEDDriver|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("RGBLEDDriver ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code, electrical',
	};
}

//GetString
function makeGetString(count){
	Blockly.Blocks['GetString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("GetString ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code',
	};

	//outStr- GetString
	Blockly.Blocks['GetString|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->outStr");
			this.setOutput(true, "str");
			this.setColour(180);
		},
		outputType:'str',
		outputName:'outStr',
	};
}

//PutReverseSort
function makePutReverseSort(count){
	Blockly.Blocks['PutReverseSort|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("PutReverseSort ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code',
	};
}

//Button
function makeButton(count){
	Blockly.Blocks['Button|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Button ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.appendValueInput("ein").setCheck("ElectricalPort").appendField("ein");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'electrical',
	};

	//eout- Button
	Blockly.Blocks['Button|' + count + '\\0'] = {
		init: function(){
			this.appendDummyInput().appendField("Block Name 0->eout");
			this.setOutput(true, "ElectricalPort");
			this.setColour(180);
		},
		outputType:'ElectricalPort',
		outputName:'eout',
	};
}

//Pot
function makePot(count){
	Blockly.Blocks['Pot|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("Pot ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'electrical',
	};
}

//GetAndPutString
function makeGetAndPutString(count){
	Blockly.Blocks['GetAndPutString|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("GetAndPutString ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		category:'code',
	};
}

makeReverseString(0);
makeLen(0);
makeReverseSort(0);
makeIntToString(0);
makeSortString(0);
makeGetString(0);
makeButton(0);
makePrintLength(0);
makeConcatenateHello(0);
makeArduinoUno(0);
makeRGBLED(0);
makeMultiReverse(0);
makeSortHello(0);
makePutString(0);
makeReverseHello(0);
makePrintString(0);
makeLED(0);
makeRGBLEDDriver(0);
makePutReverseSort(0);
makePot(0);
makeGetAndPutString(0);
