Blockly.Blocks['plan_list_test_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "NAME")
        .appendField("验收测试");
    this.appendValueInput("list1")
        .setCheck("Array")
        .appendField("测试一")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("list2")
        .setCheck("Array")
        .appendField("测试二")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("list3")
        .setCheck("Array")
        .appendField("测试三")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("list4")
        .setCheck("Array")
        .appendField("测试四")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("list5")
        .setCheck("Array")
        .appendField("测试五")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("list6")
        .setCheck("Array")
        .appendField("测试六")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("list7")
        .setCheck("Array")
        .appendField("测试七")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("list8")
        .setCheck("Array")
        .appendField("测试八")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(null, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};