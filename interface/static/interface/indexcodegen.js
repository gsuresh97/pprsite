function getCode(){
    var code;
    try{
        code = Blockly.Arduino.workspaceToCode(Blockly.getMainWorkspace());
        console.log(code);
        return code;
    } catch(err){
        console.log(err);
        window.alert("Please remove all blocks which are not arduino compatible. These are the ones that are disabled in the toolbar.");
    }
}



Blockly.Arduino.component_create = function() {
    var code = '';
    code += (this.getFieldValue("NAME") + "|");

    var portSet = {};

    for(var i =0; i < this.inputCount; i++){
        var port= Blockly.Arduino.valueToCode(this, "INP_PORT" + i, Blockly.Arduino.ORDER_ATOMIC);
        if(portSet[port]){
            portSet[port]++;
        } else{
            portSet[port] = 1;
        }
    }

    for(var i =0; i < this.outputCount; i++){
        var port= Blockly.Arduino.valueToCode(this, "OUT_PORT" + i, Blockly.Arduino.ORDER_ATOMIC);
        if(portSet[port]){
            portSet[port]++;
        } else{
            portSet[port] = 1;
        }
    }
    var size = 0;
    var p = "";

    for(var port in portSet){
        size++;
        p += (port + "\\" + portSet[port] + "|");
    }

    code += (size + "|");
    code += p;

    code += "##";
    code += Blockly.Arduino.statementToCode(this, "CODE");

    code += "##";
    for(var i = 0; i < this.outputCount; i++)
        code += this.getFieldValue("OUTPUT_NAME" + i) + "|" + Blockly.Arduino.valueToCode(this, "OUT"+i) + '|';
    for(var i = 0; i < this.inputCount; i++)
        code += this.getFieldValue("INPUT_NAME" + i) + "^"



    return code;
}

function exportCode(){
    var xhttp = new XMLHttpRequest();
    xhttp.name = "code";
    xhttp.open("POST", "export_code/", true);
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            window.alert("Python file saved");
        }
    };
    var c = getCode();
    console.log(c);
    xhttp.send(c);
}
