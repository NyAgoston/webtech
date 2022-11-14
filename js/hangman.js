var canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

const word = ['a','l','m','a']

var tmp = ['*','*','*','*']

var used = []

var life = 9

ctx.font = "20px Arial";



init()

function init(){
    life = 9
    tmp = ['*','*','*','*']
    used = []
    
    ctx.clearRect(0,0,800,600)

    ctx.fillText("Élet: " + life,10,30);
    
    document.getElementById('solution').innerText = tmp
    drawLine(ctx, 0, 450, 800, 450);
}

function isWin(){
    var win = true
    for (let i = 0; i < word.length; i++) {
        if (word[i] != tmp[i]) {
            win = false
            
        }
        
    }
    if (win) {
        alert("Győztél :)")
        init()
    }
}

function new_letter(){
    var solution = document.getElementById("word").value;
    if (solution == "") {
        alert("Nincs input!")
        return
    }else{
        for (let i = 0; i < used.length; i++) {
            if (solution == used[i]) {
                document.getElementById("word").value = "";
                alert("Már felhasznált karakter!")
                return
            }      
        }
    }
    document.getElementById("word").value = "";
    var isFound = false
    if (!used.includes(solution)) {
        used.push(solution)
    }
    
    
    for (let i = 0; i < word.length; i++) {
        if (word[i] == solution) {
            tmp[i] = tmp[i].replace('*',word[i])
            isFound = true
            if (!used.includes(word[i])) {
                used.push(word[i])
            }
            
        }
    }
    if (!isFound) {
        life -= 1
        switch (life) {
            case 8:
                drawLine(ctx, 400, 450, 400, 100);
                break;
            case 7:
                drawLine(ctx, 400, 100, 550, 100);
                break;
            case 6:
                drawLine(ctx, 550, 100, 550, 150);
                break;
            case 5:
                ctx.beginPath();
                ctx.arc(550, 170, 20, 0, 2 * Math.PI);
                ctx.stroke();
                break;
            case 4:
                drawLine(ctx, 550, 190, 550, 300);
                break;
            case 3:
                drawLine(ctx, 550, 190, 510, 230);
                break;
            case 2:
                drawLine(ctx, 550, 190, 590, 230);
                break;
            case 1:
                drawLine(ctx, 550, 300, 590, 340);
                break;
            case 0:
                drawLine(ctx, 550, 300, 510, 340);
                break;
            default:
                break;
        }
    }
    document.getElementById('solution').innerText = tmp
    
    ctx.clearRect(0,0,200,200)
    ctx.fillText("Élet: " + life,10,30);
    ctx.fillText("Karakterek: " + used,10,60);
    if (life == 0) {
        alert("GAME OVER")
        init()
    }
    isWin()
}

function drawLine(ctx, x1, y1, x2,y2) {
    ctx.beginPath();

    ctx.moveTo(x1, y1);

    ctx.lineTo(x2, y2);

    ctx.strokeStyle = 'black';

    ctx.lineWidth = 3;

    ctx.stroke();
}










