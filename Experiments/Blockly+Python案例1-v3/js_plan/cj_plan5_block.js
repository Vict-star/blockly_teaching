Blockly.Blocks['plan_init4'] = {
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
Blockly.Blocks['plan_list_append'] = {
  init: function() {
    this.appendValueInput("li")
        .setCheck(null)
        .appendField("为列表");
    this.appendValueInput("element")
        .setCheck(null)
        .appendField("追加值");
    this.appendDummyInput()
        .appendField("的元素");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};