Blockly.Python['plan_list_test_get'] = function(block) {
    var colour_name = block.getFieldValue('NAME');
    var value_dict1 = Blockly.Python.valueToCode(block, 'list1', Blockly.Python.ORDER_ATOMIC);
    var value_dict2 = Blockly.Python.valueToCode(block, 'list2', Blockly.Python.ORDER_ATOMIC);
    var value_dict3 = Blockly.Python.valueToCode(block, 'list3', Blockly.Python.ORDER_ATOMIC);
    var value_dict4 = Blockly.Python.valueToCode(block, 'list4', Blockly.Python.ORDER_ATOMIC);
    var value_dict5 = Blockly.Python.valueToCode(block, 'list5', Blockly.Python.ORDER_ATOMIC);
    var value_dict6 = Blockly.Python.valueToCode(block, 'list6', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'import copy\n\ndef plan_list_test_get() :\n' + 
    '  print("开始测试 ***")\n' + 
    '  if([1, "2", [3, "4"], [5, 6]] != ' + value_dict1 + ') : print("列表测试未通过")\n'+
    '  A = ' + value_dict1 + '\n' + 
    '  L = copy.deepcopy(A)\n'+
    '  a = A[2]\n' + 
    '  a.append(7)\n' +
    '  print(id(a), id(A[2]), a, A)\n' + 
    '  B = A\n'+
    '  a.append(8)\n'+
    '  print(id(a), id(A[2]), id(B[2]), a, A, B)\n'+
    '  if(["2", [3, "4"], [5, 6]] != ' + value_dict2 + ') : print("列表L[1:4]切片测试未通过")\n'+
    '  if(["2", [5, 6]] != ' + value_dict3 + ') : print("列表L[1:4:2]切片测试未通过")\n'+
    '  if([] != ' + value_dict4 + ') : print("列表L[1:4:-1]切片测试未通过")\n'+
    '  if([1, "2", [3, "4"]] != ' + value_dict5 + ') : print("列表L[:3]切片测试未通过")\n'+
    '  if([[5, 6]] != ' + value_dict6 + ') : print("列表L[-1:]列表测试未通过")\n'+
    '  print("测试结束")\n\n'+
    'plan_list_test_get()';

    return code;
};