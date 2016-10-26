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
