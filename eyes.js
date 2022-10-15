
var trip = new Boolean(false);

document.addEventListener('mousemove', (e) =>{
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    
    const morty = document.getElementById('eye1')
    const rick = document.getElementById('eye3')
    const rekt1 = morty.getBoundingClientRect();
    const rekt2 = rick.getBoundingClientRect();
    const mortyX = rekt1.left + rekt1.width / 2;
    const mortyY = rekt1.top + rekt1.height / 2;

    console.log(mortyX, mortyY);

    const rickX = rekt2.left + rekt2.width / 2;
    const rickY = rekt2.top + rekt2.height / 2;

    const mortyangleDeg = angle(mouseX,mouseY,mortyX,mortyY);
    const rickangleDeg = angle(mouseX,mouseY,rickX,rickY);

    const eye1 = document.getElementById('eye1')
    const eye2 = document.getElementById('eye2') 
    const eye3 = document.getElementById('eye3') 
    const eye4 = document.getElementById('eye4') 

    eye1.style.transform = `rotate(${90 + mortyangleDeg}deg)`;
    eye2.style.transform = `rotate(${90 + mortyangleDeg}deg)`;
    eye3.style.transform = `rotate(${90 + rickangleDeg}deg)`;
    eye4.style.transform = `rotate(${90 + rickangleDeg}deg)`;


    if(trip){
        morty.style.filter = `hue-rotate(${mortyangleDeg}deg)`;
        rick.style.filter = `hue-rotate(${rickangleDeg}deg)`;
    }else{
        morty.style.filter = `hue-rotate(0deg)`;
        rick.style.filter = `hue-rotate(0deg)`;
    }
    
    

    
})

function angle(cx,cy,ex,ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy,dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}
function tripping(){
    if(trip){
        trip = false;
    }else{
        trip = true;
    }
    console.log(trip);
}

