var toolbox = '<xml>';
toolbox += '  <block type="PrintLength"></block>';
toolbox += '  <block type="MultiReverse"></block>';
toolbox += '  <block type="ReverseString"></block>';
toolbox += '  <block type="Len"></block>';
toolbox += '  <block type="ReverseSort"></block>';
toolbox += '  <block type="SortHello"></block>';
toolbox += '  <block type="IntToString"></block>';
toolbox += '  <block type="SortString"></block>';
toolbox += '  <block type="PutString"></block>';
toolbox += '  <block type="ReverseHello"></block>';
toolbox += '  <block type="PrintString"></block>';
toolbox += '  <block type="UISlider"></block>';
toolbox += '  <block type="GetString"></block>';
toolbox += '  <block type="ConcatenateHello"></block>';
toolbox += '  <block type="PutReverseSort"></block>';
toolbox += '  <block type="GetAndPutString"></block>';
toolbox += '</xml>';
var workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});