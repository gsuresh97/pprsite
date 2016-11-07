//PrintLength
function makeOutputPrintLength(count){
	Blockly.Arduino['PrintLength|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}
}

//ConcatenateHello
function makeOutputConcatenateHello(count){
	Blockly.Arduino['ConcatenateHello|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}
}

//ArduinoUno
function makeOutputArduinoUno(count){
	Blockly.Arduino['ArduinoUno|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}
}

//RGBLED
function makeOutputRGBLED(count){
	Blockly.Arduino['RGBLED|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}
}

//MultiReverse
function makeOutputMultiReverse(count){
	Blockly.Arduino['MultiReverse|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}
}

//ReverseString
function makeOutputReverseString(count){
	Blockly.Arduino['ReverseString|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}

	//outStr- ReverseString
	Blockly.Arduino['ReverseString|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outStr'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//Len
function makeOutputLen(count){
	Blockly.Arduino['Len|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}

	//outInt- Len
	Blockly.Arduino['Len|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//ReverseSort
function makeOutputReverseSort(count){
	Blockly.Arduino['ReverseSort|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}

	//outStr- ReverseSort
	Blockly.Arduino['ReverseSort|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outStr'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//SortHello
function makeOutputSortHello(count){
	Blockly.Arduino['SortHello|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}
}

//IntToString
function makeOutputIntToString(count){
	Blockly.Arduino['IntToString|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}

	//outStr- IntToString
	Blockly.Arduino['IntToString|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outStr'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//SortString
function makeOutputSortString(count){
	Blockly.Arduino['SortString|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}

	//outStr- SortString
	Blockly.Arduino['SortString|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outStr'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//PutString
function makeOutputPutString(count){
	Blockly.Arduino['PutString|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}
}

//ReverseHello
function makeOutputReverseHello(count){
	Blockly.Arduino['ReverseHello|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}
}

//PrintString
function makeOutputPrintString(count){
	Blockly.Arduino['PrintString|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}
}

//LED
function makeOutputLED(count){
	Blockly.Arduino['LED|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}
}

//RGBLEDDriver
function makeOutputRGBLEDDriver(count){
	Blockly.Arduino['RGBLEDDriver|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}
}

//GetString
function makeOutputGetString(count){
	Blockly.Arduino['GetString|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}

	//outStr- GetString
	Blockly.Arduino['GetString|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outStr'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//PutReverseSort
function makeOutputPutReverseSort(count){
	Blockly.Arduino['PutReverseSort|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}
}

//Button
function makeOutputButton(count){
	Blockly.Arduino['Button|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}

	//eout- Button
	Blockly.Arduino['Button|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'eout'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//Pot
function makeOutputPot(count){
	Blockly.Arduino['Pot|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}
}

//GetAndPutString
function makeOutputGetAndPutString(count){
	Blockly.Arduino['GetAndPutString|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
			code += '#';
		}

		return code;
	}
}

makeOutputReverseString(0);
makeOutputLen(0);
makeOutputReverseSort(0);
makeOutputIntToString(0);
makeOutputSortString(0);
makeOutputGetString(0);
makeOutputButton(0);
makeOutputPrintLength(0);
makeOutputConcatenateHello(0);
makeOutputArduinoUno(0);
makeOutputRGBLED(0);
makeOutputMultiReverse(0);
makeOutputSortHello(0);
makeOutputPutString(0);
makeOutputReverseHello(0);
makeOutputPrintString(0);
makeOutputLED(0);
makeOutputRGBLEDDriver(0);
makeOutputPutReverseSort(0);
makeOutputPot(0);
makeOutputGetAndPutString(0);
