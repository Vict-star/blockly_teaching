Blockly.Python['plan_list_test_create'] = function(block) {
    var colour_name = block.getFieldValue('NAME');
    var value_dict1 = Blockly.Python.valueToCode(block, 'list1', Blockly.Python.ORDER_ATOMIC);
    var value_dict2 = Blockly.Python.valueToCode(block, 'list2', Blockly.Python.ORDER_ATOMIC);
    var value_dict3 = Blockly.Python.valueToCode(block, 'list3', Blockly.Python.ORDER_ATOMIC);
    var value_dict4 = Blockly.Python.valueToCode(block, 'list4', Blockly.Python.ORDER_ATOMIC);
    var value_dict5 = Blockly.Python.valueToCode(block, 'list5', Blockly.Python.ORDER_ATOMIC);
    var value_dict6 = Blockly.Python.valueToCode(block, 'list6', Blockly.Python.ORDER_ATOMIC);
    var value_dict7 = Blockly.Python.valueToCode(block, 'list7', Blockly.Python.ORDER_ATOMIC);
    var value_dict8 = Blockly.Python.valueToCode(block, 'list8', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'def plan_list_test_create() :\n' + 
    '  print("开始测试 ***")\n' + 
    '  if([] != ' + value_dict1 + ') : print("空列表测试未通过")\n'+
    '  if([1,2] != ' + value_dict2 + ') : print("一个有两个数字[1,2]的列表测试未通过")\n'+
    '  if([1,"2"] != ' + value_dict3 + ') : print("一个有一个数字1和一个字符2的列测试未通过")\n'+
    '  if([1,"2",[3,4]] != ' + value_dict4 + ') : print("一个有一个数字1、一个字符2、一个[3,4]的列表测试未通过")\n'+
    '  if([1,1,1] != ' + value_dict5 + ') : print("一个有3个重复数字1的列表测试未通过")\n'+
    '  if([[0,0,0],[0,0,0],[0,0,0]] != ' + value_dict6 + ') : print("一个3*3的全0列表测试未通过")\n'+
    '  if([2,3] != ' + value_dict7 + ') : print("利用切片创建一个列表[2,3]测试未通过")\n'+
    '  if([\'2\',\'3\'] != ' + value_dict8 + ') : print("利用split创建一个列表[2,3]测试未通过")\n'+
    '  print("测试结束")\n\n'+
    'plan_list_test_create()';

    return code;
};