//PrintLength
function makePrintLength(count){
	Blockly.Blocks['PrintLength|' + count] = {
		init: function(){
			this.appendDummyInput().appendField("PrintLength ").appendField(new Blockly.FieldTextInput("Block Name "+(count)), "NAME");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
		},
		name:'PrintLength',
		category:'code',
		inputs:[],
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
		name:'ConcatenateHello',
		category:'code',
		inputs:[],
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
		name:'ArduinoUno',
		category:'code, electrical',
		inputs:[],
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
		name:'RGBLED',
		category:'electrical',
		inputs:[],
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
		name:'MultiReverse',
		category:'code',
		inputs:[],
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
		name:'ReverseString',
		category:'code',
		inputs:['inStr', ],
		outputs:['outStr', ],
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
		name:'Block Name 0',
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
		name:'Len',
		category:'code',
		inputs:['inStr', ],
		outputs:['outInt', ],
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
		name:'Block Name 0',
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
		name:'ReverseSort',
		category:'code',
		inputs:['inStr', ],
		outputs:['outStr', ],
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
		name:'Block Name 0',
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
		name:'SortHello',
		category:'code',
		inputs:[],
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
		name:'IntToString',
		category:'code',
		inputs:['inInt', ],
		outputs:['outStr', ],
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
		name:'Block Name 0',
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
		name:'SortString',
		category:'code',
		inputs:['inStr', ],
		outputs:['outStr', ],
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
		name:'Block Name 0',
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
		name:'PutString',
		category:'code',
		inputs:[],
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
		name:'ReverseHello',
		category:'code',
		inputs:[],
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
		name:'PrintString',
		category:'code',
		inputs:['inStr', ],
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
		name:'LED',
		category:'electrical',
		inputs:['ein', ],
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
		name:'RGBLEDDriver',
		category:'code, electrical',
		inputs:[],
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
		name:'GetString',
		category:'code',
		inputs:[],
		outputs:['outStr', ],
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
		name:'Block Name 0',
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
		name:'PutReverseSort',
		category:'code',
		inputs:[],
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
		name:'Button',
		category:'electrical',
		inputs:['ein', ],
		outputs:['eout', ],
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
		name:'Block Name 0',
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
		name:'Pot',
		category:'electrical',
		inputs:[],
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
		name:'GetAndPutString',
		category:'code',
		inputs:[],
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
