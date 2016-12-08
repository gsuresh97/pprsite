Blockly.Arduino.inherit_input = function(){
    return ["inin_" + this.getFieldValue('NAME') + ">", Blockly.Arduino.ORDER_NONE]
}

Blockly.Arduino.component_create = function() {
    var code = '';
    code += (this.getFieldValue("NAME") + "|");
    code += Blockly.Arduino.statementToCode(this, "CODE");


    for(var i =0; i < this.outputCount; i++){
        code += Blockly.Arduino.valueToCode(this, "OUT" + i) + this.getFieldValue("OUTPUT_NAME"+i) + "^";
    }
    return [code, Blockly.Arduino.ORDER_NONE]
}


function exportCodeComp(){
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

function getCode(){
    console.log(encodeURIComponent(printYaml()));
    window.open(printYaml());

    var xhttp = new XMLHttpRequest();
    xhttp.name = "code";
    xhttp.open("POST", "/interface/get_code/", true);
    // xhttp.responseType = "arraybuffer"
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            window.open(this.response);
            console.log(this.getAllResponseHeaders());
            console.log(this.responseType);
            console.log(this.response);
            // download("name.zip", this.response)
            console.log(this.response.length);
        }
    };
    var c = printYaml();
    console.log(c);
    xhttp.send(c);
}
