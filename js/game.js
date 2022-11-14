var canvas = document.getElementById("canvas")
let context = canvas.getContext("2d")
var playerX = 0
var playerY = 0
var rockSpeed = [0,0,0,0,0,0] 
var rockX = [0,0,0,0,0,0]
var playerSize = 25
var score = 0
var speed = 4
var verticalspeed = [0,-1,2,-1,-1,1]
var bulletY = 0
var bulletX = 0
var isFired = false
var highScore = 0
var destroyed = 0
var isanimated = true

var score_lbl = document.getElementById("score")
var ship = document.getElementById("ship")
var rock1 = document.getElementById("rock1")
var bullet = document.getElementById("bullet")

context.font = "20px Arial";
context.fillStyle = "white";

var btn = document.getElementById("start_stop")

let run = false

var keys = []
window.addEventListener("keydown",function(e){
    keys[e.keyCode] = true
})
window.addEventListener("keyup",function(e){
    keys[e.keyCode] = false
})

function randomizeRockX(){
    for (let i = 0; i < rockX.length; i++) {
        rockX[i] = Math.floor(Math.random() * 700);
        
    }
}

function init(){
    isanimated = true
    bulletY = 510
    speed = 4
    destroyed = 0
    score = 0
    playerX = 350
    playerY = 480
    rockSpeed[0] = -30
    rockSpeed[1] = -30
    rockSpeed[2] = -30
    rockSpeed[3] = -30
    rockSpeed[4] = -30
    rockSpeed[5] = -30
    randomizeRockX()
    
}
function isCollision(){
    var rect1 = { x: playerX, y: playerY, w: 70, h: 30 };
    
    for (let i = 0; i < rockX.length; i++) {
        
        var rect2 = { x: rockX[i], y: rockSpeed[i], w: 70, h: 30 };


        if (rect1.x < rect2.x + rect2.w &&
            rect1.x + rect1.w > rect2.x &&
            rect1.y < rect2.y + rect2.h &&
            rect1.h + rect1.y > rect2.y) {
            run = false
            btn.textContent = "Start";
            btn.style.background='green';
            
            if (score > highScore) {
                highScore = score
            }
                score = 0
            alert("GAME OVER")
        }
        
    }
}
function isExplosion() {
    var rect1 = { x: bulletX, y: bulletY, w: 20, h: 20 };
    for (let i = 0; i < rockX.length; i++) {
        
        var rect2 = { x: rockX[i], y: rockSpeed[i], w: 70, h: 30 };

        if (rect1.x < rect2.x + rect2.w &&
            rect1.x + rect1.w > rect2.x &&
            rect1.y < rect2.y + rect2.h &&
            rect1.h + rect1.y > rect2.y) {
            rockSpeed[i] = -30;
            rockX[i] = Math.floor(Math.random() * 650);
                bulletX = playerX
                bulletY = 510
                isFired = false
            destroyed += 1
            score += 2
        }
        
    }
}
function loop(){
    if (run == true) {
        update()
        render()
        
    }else{
        init()
        context.clearRect(0,0,800,600)
        context.drawImage(ship,playerX,playerY)
    }
    context.fillText("Pontok: "+ score, 10, 20);
    context.fillText("Lelőtt aszteroidák: "+ destroyed, 10, 80);
    context.fillText("Legjobb: "+ highScore, 10, 50);

    isCollision()
    isExplosion()
    isScore()

    
}
function update(){
    if(playerX > 0 && keys[37] == true){
        playerX = playerX - 5
        
    }
    if(playerX < 700 && keys[39] == true){
        playerX = playerX + 5
    }
    if(isFired == false && keys[88] == true){
        if(isFired){
            isFired = false
        }else{
            isFired = true
        }
    }
    for (let i = 0; i < rockSpeed.length; i++) {
        rockSpeed[i] += randomSpeed()
        rockX[i] += verticalspeed[i]        
    }
    if (isFired) {
        bulletY -= 2
    }else{
        bulletX = playerX + 40
    }
    if (bulletY == 0) {
        bulletY = 510
        isFired = false
    }
    animateShip()

}
function animateShip(){
    if (playerY == 490) {
        isanimated = false
    }else if(playerY == 470){
        isanimated = true
    }
    if (isanimated) {
        playerY += 0.5
    }else{
        playerY -= 0.5
    }
}

function randomSpeed(){
    num = Math.floor(Math.random() * 5);
    if (num < 4) {
        return speed
    }else{
        return 0
    }
}
function isScore(){
    for (let i = 0; i < rockSpeed.length; i++) {
        if (rockSpeed[i] == 550) {
            rockSpeed[i] = -30;
            rockX[i] = Math.floor(Math.random() * 650);
            score += 1
                                   
        }
    }
}

function render(){
    
    context.clearRect(0,0,800,600)
    context.drawImage(bullet,bulletX,bulletY)
    context.drawImage(ship,playerX,playerY)
    context.drawImage(rock1,rockX[0],rockSpeed[0])
    context.drawImage(rock1,rockX[1],rockSpeed[1])
    context.drawImage(rock1,rockX[2],rockSpeed[2])
    context.drawImage(rock1,rockX[3],rockSpeed[3])
    context.drawImage(rock1,rockX[4],rockSpeed[4])
    context.drawImage(rock1,rockX[5],rockSpeed[5])
    
}

window.setInterval(loop,1000/60)
init()


function start_stop(){
    
    if (run == false) {
        run = true
        btn.textContent = "Stop";
        btn.style.background='red';
    }else{
        score = 0
        run = false
        btn.textContent = "Start";
        btn.style.background='green';
    }
}
