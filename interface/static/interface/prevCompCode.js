//DrivenPot
function makeOutputDrivenPot(count){
	Blockly.Arduino['DrivenPot|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}

	//outInt- DrivenPot
	Blockly.Arduino['DrivenPot|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//aOut- DrivenPot
	Blockly.Arduino['DrivenPot|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'aOut'+'>';
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
		}

		code += '#';
		return code;
	}

	//outStr- SortString
	Blockly.Arduino['SortString|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outStr'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//Multiply
function makeOutputMultiply(count){
	Blockly.Arduino['Multiply|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}

	//product- Multiply
	Blockly.Arduino['Multiply|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'product'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//DrivenRGBLED
function makeOutputDrivenRGBLED(count){
	Blockly.Arduino['DrivenRGBLED|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
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
		}

		code += '#';
		return code;
	}

	//do18- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'do18'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do14- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'do14'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do15- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\2'] = function() {
		var code = this.name + '_';
		code += 'do15'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do16- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\3'] = function() {
		var code = this.name + '_';
		code += 'do16'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do17- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\4'] = function() {
		var code = this.name + '_';
		code += 'do17'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do10- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\5'] = function() {
		var code = this.name + '_';
		code += 'do10'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do11- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\6'] = function() {
		var code = this.name + '_';
		code += 'do11'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do12- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\7'] = function() {
		var code = this.name + '_';
		code += 'do12'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do13- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\8'] = function() {
		var code = this.name + '_';
		code += 'do13'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do8- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\9'] = function() {
		var code = this.name + '_';
		code += 'do8'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do9- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\10'] = function() {
		var code = this.name + '_';
		code += 'do9'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do2- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\11'] = function() {
		var code = this.name + '_';
		code += 'do2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do3- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\12'] = function() {
		var code = this.name + '_';
		code += 'do3'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm6- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\13'] = function() {
		var code = this.name + '_';
		code += 'pwm6'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do1- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\14'] = function() {
		var code = this.name + '_';
		code += 'do1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do6- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\15'] = function() {
		var code = this.name + '_';
		code += 'do6'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm1- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\16'] = function() {
		var code = this.name + '_';
		code += 'pwm1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do4- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\17'] = function() {
		var code = this.name + '_';
		code += 'do4'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do5- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\18'] = function() {
		var code = this.name + '_';
		code += 'do5'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm4- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\19'] = function() {
		var code = this.name + '_';
		code += 'pwm4'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm5- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\20'] = function() {
		var code = this.name + '_';
		code += 'pwm5'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//do7- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\21'] = function() {
		var code = this.name + '_';
		code += 'do7'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm2- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\22'] = function() {
		var code = this.name + '_';
		code += 'pwm2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//pwm3- ArduinoUno
	Blockly.Arduino['ArduinoUno|' + count + '\\23'] = function() {
		var code = this.name + '_';
		code += 'pwm3'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//LiveDemo0
function makeOutputLiveDemo0(count){
	Blockly.Arduino['LiveDemo0|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}
}

//LiveDemo1
function makeOutputLiveDemo1(count){
	Blockly.Arduino['LiveDemo1|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}
}

//name
function makeOutputname(count){
	Blockly.Arduino['name|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
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
		}

		code += '#';
		return code;
	}
}

//LinearInterpolate
function makeOutputLinearInterpolate(count){
	Blockly.Arduino['LinearInterpolate|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}

	//outInt- LinearInterpolate
	Blockly.Arduino['LinearInterpolate|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
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
		}

		code += '#';
		return code;
	}

	//outStr- ReverseString
	Blockly.Arduino['ReverseString|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outStr'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
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
		}

		code += '#';
		return code;
	}
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
		}

		code += '#';
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
		}

		code += '#';
		return code;
	}
}

//SplitFour
function makeOutputSplitFour(count){
	Blockly.Arduino['SplitFour|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}

	//out1- SplitFour
	Blockly.Arduino['SplitFour|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'out1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//out2- SplitFour
	Blockly.Arduino['SplitFour|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'out2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//out3- SplitFour
	Blockly.Arduino['SplitFour|' + count + '\\2'] = function() {
		var code = this.name + '_';
		code += 'out3'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//out4- SplitFour
	Blockly.Arduino['SplitFour|' + count + '\\3'] = function() {
		var code = this.name + '_';
		code += 'out4'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
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
		}

		code += '#';
		return code;
	}
}

//demo1
function makeOutputdemo1(count){
	Blockly.Arduino['demo1|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}
}

//StringSource
function makeOutputStringSource(count){
	Blockly.Arduino['StringSource|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}

	//outStr- StringSource
	Blockly.Arduino['StringSource|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outStr'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//Add
function makeOutputAdd(count){
	Blockly.Arduino['Add|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}

	//outInt- Add
	Blockly.Arduino['Add|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//SplitTwo
function makeOutputSplitTwo(count){
	Blockly.Arduino['SplitTwo|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}

	//out1- SplitTwo
	Blockly.Arduino['SplitTwo|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'out1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//out2- SplitTwo
	Blockly.Arduino['SplitTwo|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'out2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//revLen
function makeOutputrevLen(count){
	Blockly.Arduino['revLen|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}

	//out- revLen
	Blockly.Arduino['revLen|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'out'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
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
		}

		code += '#';
		return code;
	}

	//gOut- RGBLEDDriver
	Blockly.Arduino['RGBLEDDriver|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'gOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//rOut- RGBLEDDriver
	Blockly.Arduino['RGBLEDDriver|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'rOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//bOut- RGBLEDDriver
	Blockly.Arduino['RGBLEDDriver|' + count + '\\2'] = function() {
		var code = this.name + '_';
		code += 'bOut'+'>';
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
		}

		code += '#';
		return code;
	}

	//vOut- Pot
	Blockly.Arduino['Pot|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'vOut'+'>';
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
		}

		code += '#';
		return code;
	}
}

//DuplicateNumber
function makeOutputDuplicateNumber(count){
	Blockly.Arduino['DuplicateNumber|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}

	//copy1- DuplicateNumber
	Blockly.Arduino['DuplicateNumber|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'copy1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//copy2- DuplicateNumber
	Blockly.Arduino['DuplicateNumber|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'copy2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//SplitThree
function makeOutputSplitThree(count){
	Blockly.Arduino['SplitThree|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}

	//out1- SplitThree
	Blockly.Arduino['SplitThree|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'out1'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//out2- SplitThree
	Blockly.Arduino['SplitThree|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'out2'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//out3- SplitThree
	Blockly.Arduino['SplitThree|' + count + '\\2'] = function() {
		var code = this.name + '_';
		code += 'out3'+'>';
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
		}

		code += '#';
		return code;
	}
}

//live_demo_test1
function makeOutputlive_demo_test1(count){
	Blockly.Arduino['live_demo_test1|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}
}

//PotDriver
function makeOutputPotDriver(count){
	Blockly.Arduino['PotDriver|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}

	//outInt- PotDriver
	Blockly.Arduino['PotDriver|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'outInt'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//aOut- PotDriver
	Blockly.Arduino['PotDriver|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'aOut'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

//GetColor
function makeOutputGetColor(count){
	Blockly.Arduino['GetColor|' + count] = function() {
		var code = this.name + '|';
		code += (this.getFieldValue('NAME') + '|');
		code += (this.inputs.length + '|');
		for(var i = 0; i < this.inputs.length; i++){
			code += this.inputs[i];
			code += '\\';
			code += Blockly.Arduino.valueToCode(this, this.inputs[i], Blockly.Arduino.ORDER_NONE);
		}

		code += '#';
		return code;
	}

	//blue- GetColor
	Blockly.Arduino['GetColor|' + count + '\\0'] = function() {
		var code = this.name + '_';
		code += 'blue'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//green- GetColor
	Blockly.Arduino['GetColor|' + count + '\\1'] = function() {
		var code = this.name + '_';
		code += 'green'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

	//red- GetColor
	Blockly.Arduino['GetColor|' + count + '\\2'] = function() {
		var code = this.name + '_';
		code += 'red'+'>';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};
}

makeOutputDrivenPot(0);
makeOutputSortString(0);
makeOutputMultiply(0);
makeOutputArduinoUno(0);
makeOutputLinearInterpolate(0);
makeOutputReverseString(0);
makeOutputReverseSort(0);
makeOutputSplitFour(0);
makeOutputStringSource(0);
makeOutputAdd(0);
makeOutputSplitTwo(0);
makeOutputrevLen(0);
makeOutputRGBLEDDriver(0);
makeOutputPot(0);
makeOutputDuplicateNumber(0);
makeOutputSplitThree(0);
makeOutputPotDriver(0);
makeOutputGetColor(0);
makeOutputDrivenRGBLED(0);
makeOutputLiveDemo0(0);
makeOutputLiveDemo1(0);
makeOutputname(0);
makeOutputRGBLED(0);
makeOutputPrintString(0);
makeOutputSortHello(0);
makeOutputReverseHello(0);
makeOutputdemo1(0);
makeOutputPutString(0);
makeOutputPutReverseSort(0);
makeOutputlive_demo_test1(0);
