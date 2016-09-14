function getCode(){
    code = Blockly.Arduino.workspaceToCode(Blockly.getMainWorkspace());
    console.log(code);
}

Blockly.Arduino.component_create = function() {
    var code = '';
    for(var i =0; i < this.inputCount; i++){
        code+= 'Hello input';
    }
    
    for(var i =0; i < this.outputCount; i++){
        code+= 'Hello output';
    }
    return code;
}
