Blockly.Blocks['plan_dict_text_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "NAME")
        .appendField("验收测试");
    this.appendValueInput("dict1")
        .setCheck("Dict")
        .appendField("测试空字典")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("dict2")
        .setCheck("Dict")
        .appendField("测试只有一对键值，键为字符串类型的123，值为字符串类型的123的字典")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("dict3")
        .setCheck("Dict")
        .appendField("测试只有一对键值，键为字符串类型的123，值为数值类型的123的字典")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("dict4")
        .setCheck("Dict")
        .appendField("测试只有一对键值，键为数值类型的123，值为字符串类型的123的字典")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("dict5")
        .setCheck("Dict")
        .appendField("测试只有一对键值，键为数值类型的123，值为数值类型的123的字典")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("dict6")
        .setCheck("Dict")
        .appendField("测试只有一对键值，键为数值类型的123，值为一个空字典的字典")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("dict7")
        .setCheck("Dict")
        .appendField("测试只有一对键值，键为数值类型的123，值为包含{\"123\":123}的的字典")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("dict8")
        .setCheck("Dict")
        .appendField("测试只有两对键值，第一对：键为数值类型的123，值为包含{\"123\":123}的字典，第二对：键为字符串类型的123，值为包含{123:\"123\"}的字典")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(null, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};