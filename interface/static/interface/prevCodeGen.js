Blockly.Arduino.inherit_input = function(){
    return ["inin_>", Blockly.Arduino.ORDER_NONE]
}

Blockly.Arduino.component_create = function() {
    var code = '';
    code += (this.getFieldValue("NAME") + "|");
    code += Blockly.Arduino.statementToCode(this, "CODE");


    for(var i =0; i < this.outputCount; i++){
        code += Blockly.Arduino.valueToCode(this, "OUT" + i) + "^";
    }
    // var size = 0;
    // var p = "";
    //
    // for(var port in portSet){
    //     size++;
    //     p += (port + "\\" + portSet[port] + "|");
    // }
    //
    // code += (size + "|");
    // code += p;
    //
    // code += "##";
    // code += Blockly.Arduino.statementToCode(this, "CODE");
    //
    // code += "##";
    // for(var i = 0; i < this.outputCount; i++)
    //     code += this.getFieldValue("OUTPUT_NAME" + i) + "|" + Blockly.Arduino.valueToCode(this, "OUT"+i) + '|';
    // for(var i = 0; i < this.inputCount; i++)
    //     code += this.getFieldValue("INPUT_NAME" + i) + "^"



    return [code, Blockly.Arduino.ORDER_NONE]
}


function exportYaml(){
    var xhttp = new XMLHttpRequest();
    xhttp.name = "code";
    xhttp.open("POST", "export_builder/", true);
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            window.alert("Builder file created");
        }
    };
    var c = printYaml();
    console.log(c);
    xhttp.send(c);
}

function printYaml() {
    var code;
    // try{
        code = Blockly.Arduino.workspaceToCode(Blockly.getMainWorkspace());
        console.log(code);
        return code;

    // } catch(err){
    //     console.log(err);
    //     window.alert("Please remove all blocks which are not arduino compatible. These are the ones that are disabled in the toolbar.");
    // }
}
