var cvs = document.createElement('canvas'); // 创建canvas标签
var ctx = cvs.getContext('2d');

cvs.width = 480;    // 设置canvas的宽度
cvs.height = 480;   // 设置canvas的高度
// cvs.style = 'border:1px solid #000;';   // 设置canvas样式


// 准备背景图片
var bgReady = false;
var bgImg = new Image();
bgImg.onload = function () {
    bgReady = true;
}
bgImg.src = "image/background.png";
// 准备英雄图片
var heroReady = false;
var heroImg = new Image();

heroImg.onload = function () {
    heroImg.width = 0;
    heroImg.height = 0;
    console.log("123");
    heroReady = true;
}

heroImg.src = "image/hero.png";
// 准备怪兽图片
var monsterReady = false;
var monsterImg = new Image();
monsterImg.onload = function () {
    monsterReady = true;
}
monsterImg.src = "image/monster.png";
// 定义游戏对象
var hero = {
    speed: 256  // 控制英雄每秒移动多少像素
}
var monster = {};
var monsterCaught = 0;  // 抓到的怪兽数量

// 处理用户的键盘控制
var keysDown = {};
// 监听键盘按下事件
addEventListener('keydown', function (e) {
    keysDown[e.keyCode] = true;
}, false);
// 监听键盘抬起事件
addEventListener('keyup', function (e) {
    delete keysDown[e.keyCode];
}, false);
hero.x = cvs.width / 2;
hero.y = cvs.height / 2; // 英雄的初始坐标
// 重开新一轮游戏的事件处理
var reset = function () {
    console.log(hero);
    // hero.x = cvs.width / 2;
    // hero.y = cvs.height / 2; // 英雄的初始坐标
    console.log(hero);
    monster.x = 40 + (Math.random() * (cvs.width - 80));
    monster.y = 40 + (Math.random() * (cvs.height - 80));
};


var enableK = false;
function enableKey(){
    var btn = document.getElementById("trigger");
    // console.log(btn.innerHtml);
    // btn.innerHtml = "zzz";
    enableK =! enableK;
    btn.className  = enableK?"btn btn-success":"btn btn-danger";
}
// 更新游戏对象事件处理
var update = function (modifier) {
    //按键控制此处禁用了
    if (enableK && 87 in keysDown) {   // 键盘按下“W”
        hero.y -= hero.speed * modifier;
    }
    if (enableK && 83 in keysDown) {   //  键盘按下“S”
        hero.y += hero.speed * modifier;
    }
    if (enableK && 65 in keysDown) {   // 键盘按下“A”
        hero.x -= hero.speed * modifier;
    }
    if (enableK && 68 in keysDown) {   // 键盘按下“D”
        hero.x += hero.speed * modifier;
    }

    // 碰到上下左右边界时
    if (hero.x < 0) { // 左边界
        hero.x = cvs.width - 40;
    } else if (hero.x > cvs.width) {    // 右边界
        hero.x = 0;
    } else if (hero.y < 0) {    // 上边界
        hero.y = cvs.height - 40;
    } else if (hero.y > cvs.height) {    // 下边界
        hero.y = 0
    }

    // 判断是否抓住怪兽
    if (
        hero.x <= (monster.x + 40) &&
        monster.x <= (hero.x + 40) &&
        hero.y <= (monster.y + 40) &&
        monster.y <= (hero.y + 40)
    ) {
        ++monsterCaught;
        reset();
    }
}

// 渲染物体
var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImg, 0, 0);
    }
    if (heroReady) {
        ctx.drawImage(heroImg, hero.x, hero.y,40,40);
        // console.log(heroImg);
        // console.log(heroImg.width+" "+heroImg.height);
    }
    if (monsterReady) {
        ctx.drawImage(monsterImg, monster.x, monster.y,40,40);
    }

    // 上色
    ctx.fillStyle = "rgb(250,250,250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText('吃到的蘑菇数量：' + monsterCaught, 40, 40);
}

// 自定义函数
function changeHero(url){
    heroImg.src = url;
}

function changeMonster(url){
    monsterImg.src = url;
}

var moveWaitQueueDirection = [];
var moveWaitQueueSteps = [];
var moveTrue = function(direction,steps) {
    var movement = setInterval(function(){
        console.log(then);
        switch (direction){
            case 1:
                hero.y -= 40;
                break;
            case 2:
                hero.y += 40;
                break;
            case 3:
                hero.x -= 40;
                break;
            case 4:
                hero.x += 40;
                break;
        }
    },200);

    setTimeout(function(){
        clearInterval(movement);
        moveWaitQueueDirection.shift();
        moveWaitQueueSteps.shift();
        console.log(moveWaitQueueDirection);
        console.log(moveWaitQueueSteps);
        console.log(moveWaitQueueDirection.length);
        if(moveWaitQueueDirection.length != 0) {
            var direction = moveWaitQueueDirection[0];
            var steps = moveWaitQueueSteps[0];
            moveTrue(direction, steps);
        }
    },steps*200);
}
var move = function (direction,steps){
    moveWaitQueueDirection.push(direction);
    moveWaitQueueSteps.push(steps);
    if(moveWaitQueueDirection.length == 1) {
        moveTrue(direction, steps);
    }
}

// 主循环函数
var main = function () {
    var now = Date.now();

    var delta = now - then;
    update(delta / 1000);
    render();
    then = now;

    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
    requestAnimationFrame(main);
};

// 启动游戏
var then = Date.now();
reset();
main();