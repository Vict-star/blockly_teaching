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

Blockly.Python['plan_init3'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import copy\n' + 
  'def plan_divide_dict(di) :\n'+
  '  tmp = [i for i in di if di[i]["pre"] == 0]\n'+
  '  res = dict([[i , di.pop(i)] for i in tmp])\n'+
  '  #print(res)\n'+
  '  return res\n\n'+
  'def plan_deal(it, di) :\n'+
  '  for j in it["nxt"]:\n'+
  '    di[j]["pre"] = di[j]["pre"] - 1\n\n' + 
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

Blockly.Python['plan_output3'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'answer_list';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};