Blockly.Python['plan_init4'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code ='import copy\n' + 
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
Blockly.Python['plan_list_append'] = function(block) {
  var value_li = Blockly.Python.valueToCode(block, 'li', Blockly.Python.ORDER_ATOMIC);
  var value_element = Blockly.Python.valueToCode(block, 'element', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_li + '.append('+value_element +')\n';
  return code;
};