Blockly.Blocks['plan_init2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("设置相关处理工具：分类、减枝和前向统计")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.setNextStatement(true, "plan_init");
    this.setColour(15);
 this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_input2'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Dict")
        .appendField("对");
    this.appendDummyInput()
        .appendField("进行前向统计");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("自动计算每个知识点的先修知识点的个数");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_object'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Array")
        .appendField("知识点的值：作为");
    this.appendDummyInput()
        .appendField("的先修知识");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};