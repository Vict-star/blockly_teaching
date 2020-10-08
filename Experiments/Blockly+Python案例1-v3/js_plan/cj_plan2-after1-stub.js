Blockly.Python['plan_dict_text_create'] = function(block) {
    var colour_name = block.getFieldValue('NAME');
    var value_dict1 = Blockly.Python.valueToCode(block, 'dict1', Blockly.Python.ORDER_ATOMIC);
    var value_dict2 = Blockly.Python.valueToCode(block, 'dict2', Blockly.Python.ORDER_ATOMIC);
    var value_dict3 = Blockly.Python.valueToCode(block, 'dict3', Blockly.Python.ORDER_ATOMIC);
    var value_dict4 = Blockly.Python.valueToCode(block, 'dict4', Blockly.Python.ORDER_ATOMIC);
    var value_dict5 = Blockly.Python.valueToCode(block, 'dict5', Blockly.Python.ORDER_ATOMIC);
    var value_dict6 = Blockly.Python.valueToCode(block, 'dict6', Blockly.Python.ORDER_ATOMIC);
    var value_dict7 = Blockly.Python.valueToCode(block, 'dict7', Blockly.Python.ORDER_ATOMIC);
    var value_dict8 = Blockly.Python.valueToCode(block, 'dict8', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'def plan_dict_text_create() :\n' + 
    '  print("开始测试 ***")\n' + 
    '  if({} != ' + value_dict1 + ') : print("空字典测试未通过")\n'+
    '  if({"123":"123"} != ' + value_dict2 + ') : print("只有一对键值，键为字符串类型的123，值为字符串类型的123的字典测试未通过")\n'+
    '  if({"123":123} != ' + value_dict3 + ') : print("只有一对键值，键为字符串类型的123，值为数值类型的123的字典测试未通过")\n'+
    '  if({123:"123"} != ' + value_dict4 + ') : print("只有一对键值，键为数值类型的123，值为字符串类型的123的字典测试未通过")\n'+
    '  if({123:123} != ' + value_dict5 + ') : print("只有一对键值，键为数值类型的123，值为数值类型的123的字典测试未通过")\n'+
    '  if({123:{}} != ' + value_dict6 + ') : print("只有一对键值，键为数值类型的123，值为一个空字典的字典测试未通过")\n'+
    '  if({123:{"123":123}} != ' + value_dict7 + ') : print("只有一对键值，键为数值类型的123，值为包含{\\"123\\":123}的的字典测试未通过")\n'+
    '  if({123:{"123":123},"123":{123:"123"}} != ' + value_dict8 + ') : print("只有两对键值，第一对：键为数值类型的123，值为包含{\\"123\\":123}的字典，第二对：键为字符串类型的123，值为包含{123:\\"123\\"}的字典测试未通过")\n'+
    '  print("测试结束")\n\n'+
    'plan_dict_text_create()';

    return code;
};