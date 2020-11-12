Blockly.Blocks['list_append'] = {
  init: function() {
    this.appendValueInput("list")
        .setCheck("Array")
        .appendField("列表");
    this.appendValueInput("item")
        .setCheck(null)
        .appendField("append");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['list_extend'] = {
  init: function() {
    this.appendValueInput("list")
        .setCheck("Array")
        .appendField("列表");
    this.appendValueInput("item")
        .setCheck(null)
        .appendField("extend");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['list_insert'] = {
  init: function() {
    this.appendValueInput("list")
        .setCheck("Array")
        .appendField("从列表");
    this.appendValueInput("pos")
        .setCheck("Number")
        .appendField("的");
    this.appendValueInput("item")
        .setCheck(null)
        .appendField("位置添加");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};