var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")
var playerX = 0;
var playerY = 0;
var playerSize = 25;

function init(){

}
function loop(){
    update()
    render()
}
function update(){

}
function render(){
    context.fillRect(0,0,50,50);
}
window.setInterval(loop,1000/60)