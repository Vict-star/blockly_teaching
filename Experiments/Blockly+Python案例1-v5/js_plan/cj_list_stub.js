Blockly.Python['list_append'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_item = Blockly.Python.valueToCode(block, 'item', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_list+'.append('+value_item+')\n';
  return code;
};
Blockly.Python['list_extend'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_item = Blockly.Python.valueToCode(block, 'item', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_list+'.extend('+value_item+')\n';
  return code;
};
Blockly.Python['list_insert'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_pos = Blockly.Python.valueToCode(block, 'pos', Blockly.Python.ORDER_ATOMIC);
  var value_item = Blockly.Python.valueToCode(block, 'item', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_list+'.insert('+value_pos + ',' + value_item+')\n';
  return code;
};