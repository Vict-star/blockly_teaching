Blockly.Msg['DICT_CREATE_WITH_INPUT_WITH_EMPTY'] = "创建一个空字典";
Blockly.Msg['DICT_CREATE_WITH_INPUT_WITH_INIT'] = "创建一个字典, 其中:\n";
Blockly.Msg['DICT_CREATE_WITH_INPUT_WITH_KEY'] = "键（Key) = ";
Blockly.Msg['DICT_CREATE_WITH_INPUT_WITH_VALUE'] = "值(Value) = ";


Blockly.defineBlocksWithJsonArray([
  {
    "type": "dict_create_with",
    "message0": "创建一个空字典 %1",
    "args0": [
      {
        "type": "input_dummy",
        "name": "EMPTY",
      },
    ],
    "output": "Dict",
    "colour": 230,
    "tooltip": "创建一个字典",
    "mutator": "new_dict_create_with_mutator",
  },
  {
    "type": "dict_get_value",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "dict",
        "check": "Dict"
      },
      {
        "type": "field_dropdown",
        "name": "opt",
        "options": [
          [
            "采用括号获取值",
            "OPTIONNAME1"
          ],
          [
            "采用get方法获取值",
            "OPTIONNAME2"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "key"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
]);

Blockly.Blocks['dict_push'] = {
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

Blockly.Blocks['dict_pop'] = {
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

const minusImage =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAw' +
    'MC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPS' +
    'JNMTggMTFoLTEyYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgxMmMxLjEwNCAw' +
    'IDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6IiBmaWxsPSJ3aGl0ZSIgLz48L3N2Zz4K';

function createMinusField(opt_args) {
  const minus = new Blockly.FieldImage(minusImage, 15, 15, undefined, MinusOnClick_);
  /**
   * Untyped args passed to block.minus when the field is clicked.
   * @type {Object}
   * @private
   */
  minus.args_ = opt_args;
  return minus;
}

/**
 * Calls block.minus(args) when the minus field is clicked.
 * @param {Blockly.FieldImage} minusField The field being clicked.
 * @private
 */
function MinusOnClick_(minusField) {
  // TODO: This is a dupe of the mutator code, anyway to unify?
  const block = minusField.getSourceBlock();

  Blockly.Events.setGroup(true);

  const oldMutationDom = block.mutationToDom();
  const oldMutation = oldMutationDom && Blockly.Xml.domToText(oldMutationDom);

  block.minus(minusField.args_);

  const newMutationDom = block.mutationToDom();
  const newMutation = newMutationDom && Blockly.Xml.domToText(newMutationDom);

  if (oldMutation != newMutation) {
    Blockly.Events.fire(new Blockly.Events.BlockChange(
        block, 'mutation', null, oldMutation, newMutation));
  }
  Blockly.Events.setGroup(false);
}

const plusImage =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC' +
    '9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMT' +
    'ggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNz' +
    'FjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MW' +
    'MwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS' +
    '44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==';

function createPlusField(opt_args) {
  const plus = new Blockly.FieldImage(plusImage, 15, 15, undefined, PlusOnClick_);
  /**
   * Untyped args passed to block.plus when the field is clicked.
   * @type {Object}
   * @private
   */
  plus.args_ = opt_args;
  return plus;
}

/**
 * Calls block.plus(args) when the plus field is clicked.
 * @param {!Blockly.FieldImage} plusField The field being clicked.
 * @private
 */
function PlusOnClick_(plusField) {
  // TODO: This is a dupe of the mutator code, anyway to unify?
  const block = plusField.getSourceBlock();

  Blockly.Events.setGroup(true);

  const oldMutationDom = block.mutationToDom();
  const oldMutation = oldMutationDom && Blockly.Xml.domToText(oldMutationDom);

  block.plus(plusField.args_);

  const newMutationDom = block.mutationToDom();
  const newMutation = newMutationDom && Blockly.Xml.domToText(newMutationDom);

  if (oldMutation != newMutation) {
    Blockly.Events.fire(new Blockly.Events.BlockChange(
        block, 'mutation', null, oldMutation, newMutation));
  }
  Blockly.Events.setGroup(false);
}


const dictCreateMutator = {
  /**
   * Number of item inputs the block has.
   * @type {number}
   */
  itemCount_: 0,

  /**
   * Creates XML to represent number of text inputs.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    //console.log("mutationToDom" + this);
    const container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parses XML to restore the text inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    //console.log("domToMutation");
    const targetCount = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_(targetCount);
  },

  /**
   * Adds inputs to the block until it reaches the target number of inputs.
   * @param {number} targetCount The target number of inputs for the block.
   * @this Blockly.Block
   * @private
   */
  updateShape_: function(targetCount) {
    //console.log("updateShape_");
    while (this.itemCount_ < targetCount) {
      this.addPart_();
    }
    while (this.itemCount_ > targetCount) {
      this.removePart_();
    }
    this.updateMinus_();
  },

  /**
   * Callback for the plus image. Adds an input to the end of the block and
   * updates the state of the minus.
   */
  plus: function() {
    //console.log("plus");
    this.addPart_();
    this.updateMinus_();
  },

  /**
   * Callback for the minus image. Removes an input from the end of the block
   * and updates the state of the minus.
   */
  minus: function() {
    //console.log("minus");
    if (this.itemCount_ == 0) {
      return;
    }
    this.removePart_();
    this.updateMinus_();
  },

  // To properly keep track of indices we have to increment before/after adding
  // the inputs, and decrement the opposite.
  // Because we want our first input to be ADD0 (not ADD1) we increment after.

  /**
   * Adds an input to the end of the block. If the block currently has no
   * inputs it updates the top 'EMPTY' input to receive a block.
   * @this Blockly.Block
   * @private
   */
  addPart_: function() {
    //console.log("addPart_");
    if (this.itemCount_ == 0) {
      this.removeInput('EMPTY');
      this.topInput_ = this.appendDummyInput("NONEMPTY")
          .appendField(createPlusField(), 'PLUS')
          .appendField(Blockly.Msg['DICT_CREATE_WITH_INPUT_WITH_INIT']);
    }
    this.appendValueInput('key' + this.itemCount_)
        .appendField(Blockly.Msg['DICT_CREATE_WITH_INPUT_WITH_KEY']);
    this.appendValueInput('value' + this.itemCount_)
        .appendField(Blockly.Msg['DICT_CREATE_WITH_INPUT_WITH_VALUE']);
    this.itemCount_++;
  },

  /**
   * Removes an input from the end of the block. If we are removing the last
   * input this updates the block to have an 'EMPTY' top input.
   * @this Blockly.Block
   * @private
   */
  removePart_: function() {
    //console.log("removePart_");
    this.itemCount_--;
    this.removeInput('key' + this.itemCount_);
    this.removeInput('value' + this.itemCount_);
    if (this.itemCount_ == 0) {
      this.removeInput("NONEMPTY");
      this.topInput_ = this.appendDummyInput('EMPTY')
          .appendField(createPlusField(), 'PLUS')
          .appendField(Blockly.Msg['DICT_CREATE_WITH_INPUT_WITH_EMPTY']);
    }
  },

  /**
   * Makes it so the minus is visible iff there is an input available to remove.
   * @private
   */
  updateMinus_: function() {
    //console.log("updateMinus_");
    const minusField = this.getField('MINUS');
    if (!minusField && this.itemCount_ > 0) {
      this.topInput_.insertFieldAt(1, createMinusField(), 'MINUS');
    } else if (minusField && this.itemCount_ < 1) {
      this.topInput_.removeField('MINUS');
    }
  },
};

/**
 * Updates the shape of the block to have 3 inputs if no mutation is provided.
 * @this Blockly.Block
 */
const dictCreateHelper = function() {
  this.getInput('EMPTY').insertFieldAt(0, createPlusField(), 'PLUS');
  this.updateShape_(0);
};

Blockly.Extensions.registerMutator('new_dict_create_with_mutator',dictCreateMutator, dictCreateHelper);