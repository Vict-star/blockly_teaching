Blockly.Blocks['plan_dict_text_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "NAME")
        .appendField("验收测试");
    this.appendValueInput("dict1")
        .setCheck("Dict")
        .appendField("测试一")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("dict2")
        .setCheck("Dict")
        .appendField("测试二")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("dict3")
        .setCheck("Dict")
        .appendField("测试三")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("dict4")
        .setCheck("Dict")
        .appendField("测试四")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("dict5")
        .setCheck("Dict")
        .appendField("测试五")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("dict6")
        .setCheck("Dict")
        .appendField("测试六")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("dict7")
        .setCheck("Dict")
        .appendField("测试七")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("dict8")
        .setCheck("Dict")
        .appendField("测试八")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(null, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};