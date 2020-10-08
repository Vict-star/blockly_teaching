
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

