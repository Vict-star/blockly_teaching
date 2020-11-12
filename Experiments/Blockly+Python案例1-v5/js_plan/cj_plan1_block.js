Blockly.Blocks['plan_init1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("设置相关处理工具：分类和减枝")
    this.setNextStatement(true, "plan_init");
    this.setColour(30);
  this.setTooltip("对知识点管理的工具");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_input1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("获取具体知识点及其之间的关系");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "plan_init");
    this.setNextStatement(true, null);
    this.setColour(60);
  this.setTooltip("需要处理的知识点清单、这些知识点之间的关系");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_divide_dict1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("分类工具:获得可教的知识点集合");
    this.setInputsInline(true);
    this.setOutput(true, "Dict");
    this.setColour(90);
  this.setTooltip("对于知识点而言，有些知识点前面的知识点已经全部教完，可以教了；而有些还不能现在就教，对此进行分类。以列表的形式返回能教的那一部分");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_check_finish1'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("检查");
    this.appendDummyInput()
        .appendField("是否为空");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(120);
  this.setTooltip("检查一下还有没有需要学习的知识点");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['plan_deal1'] = {
  init: function() {
    this.appendValueInput("enable_dict")
        .setCheck(null)
        .appendField("减枝工具:对当前可教集合");
    this.appendValueInput("i")
        .setCheck(null)
        .appendField("中，处理key为");
    this.appendDummyInput()
        .appendField("知识点");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
Blockly.Blocks['plan_append_answer1'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("把");
    this.appendDummyInput()
        .appendField("这个知识点记入安排的教学序列");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
Blockly.Blocks['plan_output1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("输出安排的教学序列");
    this.setPreviousStatement(true, null);
    this.setColour(210);
  this.setTooltip("已经安排完啦，我们来看看如何效果吧");
  this.setHelpUrl("");
  }
};