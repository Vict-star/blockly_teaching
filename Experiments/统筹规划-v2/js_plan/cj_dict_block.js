Blockly.Blocks['plan_dict_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("创建一个字典");
    this.setOutput(true, "Dict");
    this.setColour(230);
 this.setTooltip("创建一个字典");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_dict_push'] = {
  init: function() {
    this.appendValueInput("dict")
        .setCheck("Dict")
        .appendField("在");
    this.appendValueInput("key")
        .setCheck(null)
        .appendField("中插入一个");
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("(key)，其值为：");
    this.appendDummyInput()
        .appendField("(value)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_dict_pop'] = {
  init: function() {
    this.appendValueInput("dict")
        .setCheck(null)
        .appendField("从");
    this.appendValueInput("key")
        .setCheck(null)
        .appendField("弹出");
    this.appendDummyInput()
        .appendField("(Key)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_dict_get_all_keys'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Dict")
        .appendField("获得");
    this.appendDummyInput()
        .appendField("的所有key");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_dict_is_empty'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("检查");
    this.appendDummyInput()
        .appendField("不为空");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['plan_dict_get'] = {
  init: function() {
    this.appendValueInput("dict")
        .setCheck(null)
        .appendField("从字典");
    this.appendValueInput("key")
        .setCheck(null)
        .appendField("获得key为");
    this.appendDummyInput()
        .appendField("的值");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['plan_dict_get_and_pop'] = {
  init: function() {
    this.appendValueInput("dict")
        .setCheck(null)
        .appendField("从字典");
    this.appendValueInput("key")
        .setCheck(null)
        .appendField("获得key为");
    this.appendDummyInput()
        .appendField("的值,并且弹出");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};