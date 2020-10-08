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

Blockly.Blocks['plan_init3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("做些准备")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.setNextStatement(true, "plan_init");
    this.setColour(15);
 this.setTooltip("在开始之前，收集需要的知识点，简单整理一下他们的关系");
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