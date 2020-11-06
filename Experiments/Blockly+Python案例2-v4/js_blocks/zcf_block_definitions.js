Blockly.defineBlocksWithJsonArray([
  {
    "type": "variables_init",
    "message0": "变量初始化",
    "nextStatement": null,
    "colour": 345,
    "tooltip": "n = 3 || list2 = [-1] * (n * n) || x = 0 || y = n || sum2 = 1 || list2[int((x * n + y) - 1)] = 1",
    "helpUrl": ""
  },
  {
  "type": "is_bottom",
  "message0": "没有到达下边界",
  "output": "Boolean",
  "colour": 230,
  "tooltip": "x+1<n",
  "helpUrl": ""
},
{
  "type": "is_up",
  "message0": "没有到达上边界",
  "output": "Boolean",
  "colour": 230,
  "tooltip": "x-1>=0",
  "helpUrl": ""
},
{
  "type": "is_left",
  "message0": "没有到达左边界",
  "output": "Boolean",
  "colour": 230,
  "tooltip": "y-2>=0",
  "helpUrl": ""
},
{
  "type": "is_right",
  "message0": "没有到达右边界",
  "output": "Boolean",
  "colour": 230,
  "tooltip": "y<n",
  "helpUrl": ""
},
{
  "type": "check_go_down",
  "message0": "往下的位置没有填过数字",
  "output": "Boolean",
  "colour": 315,
  "tooltip": "list[int(((x + 1) * n + y) - 1)] == -1",
  "helpUrl": ""
},
{
  "type": "check_go_left",
  "message0": "往左的位置没有填过数字",
  "output": "Boolean",
  "colour": 315,
  "tooltip": "list[int((x * n + (y - 1)) - 1)] == -1",
  "helpUrl": ""
},
{
  "type": "check_go_up",
  "message0": "往上的位置没有填过数字",
  "output": "Boolean",
  "colour": 315,
  "tooltip": "list[int(((x - 1) * n + y) - 1)] == -1",
  "helpUrl": ""
},
{
  "type": "check_go_right",
  "message0": "往右的位置没有填过数字",
  "output": "Boolean",
  "colour": 315,
  "tooltip": "list[int((x * n + (y + 1)) - 1)] == -1",
  "helpUrl": ""
},
{
  "type": "is_to_end",
  "message0": "当sum没有达到n*n时",
  "output": null,
  "colour": 290,
  "tooltip": "sum < n * n",
  "helpUrl": ""
},
{
  "type": "get_list",
  "message0": "从#1到n*n按顺序获取list的元素",
  "output": "Boolean",
  "colour": 165,
  "tooltip": "list[ : int(n * n)]",
  "helpUrl": ""
},
{
  "type": "go_down",
  "message0": "sum增加1 %1 向下走一格 %2 将当前位置的值设置为sum",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 255,
  "tooltip": "sum = sum + 1  ||   x = x + 1  ||   list[int((x * n + y) - 1)] = sum",
  "helpUrl": ""
},
{
  "type": "go_up",
  "message0": "sum增加1 %1 向上走一格 %2 将当前位置的值设置为sum",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 255,
  "tooltip": "sum = sum + 1  ||  x = x - 1  ||  list[int((x * n + y) - 1)] = sum",
  "helpUrl": ""
},
{
  "type": "go_right",
  "message0": "sum增加1 %1 向右走一格 %2 将当前位置的值设置为sum",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 255,
  "tooltip": "sum = sum + 1  ||  y = y + 1 ||  list[int((x * n + y) - 1)] = sum",
  "helpUrl": ""
},
{
  "type": "go_left",
  "message0": "sum增加1 %1 向左走一格 %2 将当前位置的值设置为sum",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 255,
  "tooltip": "sum = sum + 1  ||  y = y + 1 ||  list2[int((x * n + y) - 1)] = sum",
  "helpUrl": ""
},
{
  "type": "string_to_int",
  "message0": "将 %1 转成整数类型",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 255,
  "tooltip": "",
  "helpUrl": ""
}]
);