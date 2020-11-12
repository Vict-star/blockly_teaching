Blockly.defineBlocksWithJsonArray([
      // Block for miku.
      {
        "type": "set_monster",
        "message0": "选取怪物 %1",
        "args0": [
          {
            "type": "input_value",
            "name": "monster",
            "check": [
              "block_monster",
              "String"
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "可用block_monster或字符串输入url",
        "helpUrl": ""
      },
      {
        "type": "set_hero",
        "message0": "选取英雄 %1",
        "args0": [
          {
            "type": "input_value",
            "name": "hero",
            "check": [
              "block_hero",
              "String"
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "可用hblock_hero或字符串输入url",
        "helpUrl": ""
      },
      {
        "type": "block_monster",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596080592&di=2476f97357d77ef9477a48ddb9b69dbb&src=http://b-ssl.duitang.com/uploads/item/201807/12/20180712152411_htrtv.jpg",
            "width": 100,
            "height": 100,
            "alt": "*"
          }
        ],
        "output": "block_monster",
        "tooltip": "",
        "helpUrl": "http://www.example.com/"
      },
      {
        "type": "block_hero",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1596080592&di=2476f97357d77ef9477a48ddb9b69dbb&src=http://b-ssl.duitang.com/uploads/item/201807/12/20180712152411_htrtv.jpg",
            "width": 100,
            "height": 100,
            "alt": "*"
          }
        ],
        "output": "block_hero",
        "tooltip": "",
        "helpUrl": "http://www.example.com/"
      },
      {
        "type": "block_move",
        "message0": "hero向 %1 走 %2 步",
        "args0": [
          {
            "type": "input_value",
            "name": "direction",
            "check": [
              "Number",
              "block_direction"
            ]
          },
          {
            "type": "input_value",
            "name": "steps",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "第一个参数：方向（1,2,3,4的数字或自定义方向块）；第二个参数：步数，每步为模型一个身长",
        "helpUrl": ""
      },
      {
        "type": "block_direction",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "direction",
            "options": [
              [
                "上方",
                "1"
              ],
              [
                "下方",
                "2"
              ],
              [
                "左方",
                "3"
              ],
              [
                "右方",
                "4"
              ]
            ]
          }
        ],
        "output": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
      }]
);