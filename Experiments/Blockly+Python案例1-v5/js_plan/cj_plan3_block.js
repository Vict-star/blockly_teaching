Blockly.Blocks['plan_init3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("设置相关处理工具：分类和前向统计")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.setNextStatement(true, "plan_init");
    this.setColour(15);
 this.setTooltip("对知识点管理的工具");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_input3'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Dict")
        .appendField("从");
    this.appendDummyInput()
        .appendField("中获得所需的知识点及其关系");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(60);
 this.setTooltip("我们从拿到的东西里开始吧");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_gen_source'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("获得一个dict以取代输入");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_object_get'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("获得");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["后续列表","nxt"], ["前序数量","pre"]]), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_var_dec'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Dict")
        .appendField("将");
    this.appendDummyInput()
        .appendField("减一");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("我们从拿到的东西里开始吧");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_string_to_int'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("将");
    this.appendDummyInput()
        .appendField("转成整数类型");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_string_to_list'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("将");
    this.appendDummyInput()
        .appendField("转成列表");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_output3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("返回安排列表");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};