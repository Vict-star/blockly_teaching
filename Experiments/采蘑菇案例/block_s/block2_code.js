Blockly.JavaScript['set_hero'] = function(block) {
  var hero = Blockly.JavaScript.valueToCode(block, 'hero', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if(hero[0]=='(')
    hero = hero.substr(1,hero.length-2);
  var code = 'changeHero('+hero+');\n';
  return code;
};

Blockly.Python['set_hero'] = function(block) {
  var hero = Blockly.Python.valueToCode(block, 'hero', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  if(hero[0]=='(')
    hero = hero.substr(1,hero.length-2);
  var code = 'changeHero('+hero+')\n';
  return code;
};

Blockly.JavaScript['block_hero'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596080592&di=2476f97357d77ef9477a48ddb9b69dbb&src=http://b-ssl.duitang.com/uploads/item/201807/12/20180712152411_htrtv.jpg\"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['block_hero'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '\"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596080592&di=2476f97357d77ef9477a48ddb9b69dbb&src=http://b-ssl.duitang.com/uploads/item/201807/12/20180712152411_htrtv.jpg\"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['block_move'] = function(block) {
  var direction = Blockly.JavaScript.valueToCode(block, 'direction', Blockly.JavaScript.ORDER_ATOMIC);
  var steps = Blockly.JavaScript.valueToCode(block, 'steps', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  direction = direction.substr(1,direction.length - 2);
  var code ='move('+direction +','+steps+');\n';
  return code;
};

Blockly.Python['block_move'] = function(block) {
  var direction = Blockly.Python.valueToCode(block, 'direction', Blockly.Python.ORDER_ATOMIC);
  var steps = Blockly.Python.valueToCode(block, 'steps', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  direction = direction.substr(1,direction.length - 2);
  var code ='move('+direction +','+steps+')\n';
  return code;
};

Blockly.JavaScript['block_direction'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_direction;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['block_direction'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_direction;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

