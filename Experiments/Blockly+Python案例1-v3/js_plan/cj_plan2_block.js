Blockly.Blocks['plan_init2'] = {
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

Blockly.Blocks['plan_input2'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Dict")
        .appendField("从");
    this.appendDummyInput()
        .appendField("中获得所需的知识点及其关系");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("我们从拿到的东西里开始吧");
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