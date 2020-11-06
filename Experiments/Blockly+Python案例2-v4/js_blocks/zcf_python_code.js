Blockly.Python['variables_init'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'n = 3\n'+
  'list2 = [-1] * (n * n)\n'+
  'x = 0\n'+
  'y = n\n'+
  'sum2 = 1\n'+
  'list2[int((x * n + y) - 1)] = 1\n';
  return code;
};

Blockly.Python['is_bottom'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'x + 1 < n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['is_up'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'x - 1 >= 0';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['is_left'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'y - 2 >= 0';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['is_right'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'y < n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['check_go_down'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'list2[int(((x + 1) * n + y) - 1)] == -1';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['check_go_left'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'list2[int((x * n + (y - 1)) - 1)] == -1';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['check_go_up'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'list2[int(((x - 1) * n + y) - 1)] == -1';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['check_go_right'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'list2[int((x * n + (y + 1)) - 1)] == -1';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['is_to_end'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'sum2 < n * n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_list'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'list2[ : int(n * n)]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['go_down'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'sum2 = sum2 + 1\n'+
  'x = x + 1\n'+
  'list2[int((x * n + y) - 1)] = sum2\n';
  return code;
};

Blockly.Python['go_up'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'sum2 = sum2 + 1\n'+
  'x = x - 1\n'+
  'list2[int((x * n + y) - 1)] = sum2\n';
  return code;
};

Blockly.Python['go_right'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'sum2 = sum2 + 1\n'+
  'y = y + 1\n'+
  'list2[int((x * n + y) - 1)] = sum2\n';
  return code;
};

Blockly.Python['go_left'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'sum2 = sum2 + 1\n'+
  'y = y - 1\n'+
  'list2[int((x * n + y) - 1)] = sum2\n';
  return code;
};

Blockly.Python['string_to_int'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'int(' + value_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};