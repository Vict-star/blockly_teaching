Blockly.Python['plan_init3'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import copy\n' + 
  'def plan_divide_dict(di) :\n'+
  '  tmp = [i for i in di if di[i]["pre"] == 0]\n'+
  '  res = dict([[i , di.pop(i)] for i in tmp])\n'+
  '  #print(res)\n'+
  '  return res\n\n'+
  'def plan_gen_dict(di):\n'+
  '  res = copy.deepcopy(di)\n'+
  '  keys = di.keys()\n'+
  '  for i in keys:\n'+
  '    for j in di[i]["nxt"]:\n'+
  '      if res.has_key(j):\n' +
  '        res[j]["pre"] = res[j]["pre"] + 1\n'+
  '      else:\n' +
  '        print(j + "not in dict")\n'+
  '        return {}\n'+
  '  return res\n\n'+
  'answer_list = []\n';
  return code;
};

Blockly.Python['plan_input3'] = function(block) {
  var source_dict = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'copy.deepcopy(' + source_dict + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['plan_gen_source'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '{'+
  '  "1": {"nxt":["2", "3"], "pre" : 0},\n'+
  '  "2": {"nxt":["6"], "pre":1},\n'+
  '  "3": {"nxt":["5","8"], "pre":2},\n'+
  '  "4": {"nxt":["3"], "pre":0},\n'+
  '  "5": {"nxt":["6"],"pre":1},\n'+
  '  "6": {"nxt":[],"pre":2},\n'+
  '  "7": {"nxt":["8"],"pre":0},\n'+
  '  "8": {"nxt":["9"],"pre":2},\n'+
  '  "9": {"nxt":[], "pre":1}}\n\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['plan_object_get'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var code;
  switch(dropdown_name) {
    case "nxt": code = value_name + '["nxt"]'; break;
    case "pre": code = value_name + '["pre"]'; break;
  }
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['plan_var_dec'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name + '=' + value_name + '-1\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['plan_string_to_int'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'int(' + value_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['plan_string_to_list'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'list('+value_name+'.split()' + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['plan_output3'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'answer_list';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};