Blockly.Python['dict_create_with'] = function(block) {
  // TODO: Assemble Python into code variable.
  //console.log(this);
  var code = null;
  if(block.itemCount_ == 0) code = 'dict()';
  else{
    code = '{';
    for (let i = 0; i < block.itemCount_; i++) {
      var keyi = Blockly.Python.valueToCode(block, 'key' + i, Blockly.Python.ORDER_ATOMIC);
      var valuei = Blockly.Python.valueToCode(block, 'value' + i, Blockly.Python.ORDER_ATOMIC);
      if (i != 0) code = code + ',';
      code = code + keyi + ':' + valuei;
    }
    code = code + '}';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['dict_get_value'] = function(block) {
  var value_dict = Blockly.Python.valueToCode(block, 'dict', Blockly.Python.ORDER_ATOMIC);
  var dropdown_opt = block.getFieldValue('opt');
  var value_key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = null;
  if(dropdown_opt == 'OPTIONNAME1') code = value_dict + '[' + value_key + ']';
  else code = value_dict + '.get(' + value_key + ')';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['dict_push'] = function(block) {
  var value_dict = Blockly.Python.valueToCode(block, 'dict', Blockly.Python.ORDER_ATOMIC);
  var value_key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_dict + '[' + value_key + ']  = ' + value_value + '\n';
  return code;
};

Blockly.Python['dict_pop'] = function(block) {
  var value_dict = Blockly.Python.valueToCode(block, 'dict', Blockly.Python.ORDER_ATOMIC);
  var value_key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_dict + '.pop('+value_key+')\n';
  return code;
};

Blockly.Python['plan_dict_get_all_keys'] = function(block) {
  var value_dict = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_dict + '.keys()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['plan_dict_is_empty'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '(len('+value_name+') != 0)';
  return  [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['plan_dict_get'] = function(block) {
  var value_dict = Blockly.Python.valueToCode(block, 'dict', Blockly.Python.ORDER_ATOMIC);
  var value_key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_dict + '[' + value_key +']';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['plan_dict_get_and_pop'] = function(block) {
  var value_dict = Blockly.Python.valueToCode(block, 'dict', Blockly.Python.ORDER_ATOMIC);
  var value_key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_dict + '.pop('+value_key+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};