Blockly.Python['plan_init1'] = function(block) {
  var code = 'import copy\n' + 
    'def plan_divide_dict(di) :\n'+
    '  tmp = [i for i in di if di[i]["pre"] == 0]\n'+
    '  res = dict([[i , di.pop(i)] for i in tmp])\n'+
    '  #print(res)\n'+
    '  return res\n\n'+
    'def plan_deal(it, di) :\n'+
    '  for j in it["nxt"]:\n'+
    '    di[j]["pre"] = di[j]["pre"] - 1\n\n';
  return code;
};

Blockly.Python['plan_input1'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'answer_list = []\n'+
  'source_dict = {'+
  '  "1": {"nxt":["2", "3"], "pre" : 0},\n'+
  '  "2": {"nxt":["6"], "pre":1},\n'+
  '  "3": {"nxt":["5","8"], "pre":2},\n'+
  '  "4": {"nxt":["3"], "pre":0},\n'+
  '  "5": {"nxt":["6"],"pre":1},\n'+
  '  "6": {"nxt":[],"pre":2},\n'+
  '  "7": {"nxt":["8"],"pre":0},\n'+
  '  "8": {"nxt":["9"],"pre":2},\n'+
  '  "9": {"nxt":[], "pre":1}}\n\n'+
  'remain_dict = copy.deepcopy(source_dict)\n';
  return code;
};

Blockly.Python['plan_divide_dict1'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'plan_divide_dict(remain_dict)';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['plan_check_finish1'] = function(block) {
  var enable_list = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = '(len('+enable_list+') != 0)';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['plan_deal1'] = function(block) {
  var enable_dict = Blockly.Python.valueToCode(block, 'enable_dict', Blockly.Python.ORDER_ATOMIC);
  var i = Blockly.Python.valueToCode(block, 'i', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'plan_deal('+enable_dict+'['+i+'], remain_dict)\n';
  return code;
};

Blockly.Python['plan_append_answer1'] = function(block) {
  var i = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'answer_list.append('+i+')\n';
  return code;
};
Blockly.Python['plan_output1'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'print(answer_list)\n';
  return code;
};