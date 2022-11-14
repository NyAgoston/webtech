
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function bg_color(){
    var color1 = document.getElementById("color1");
    var color2 = document.getElementById("color2");
    var checked = document.getElementById("original");
    if (checked.checked == true) {
        document.getElementsByTagName('body')[0].style.background = 'linear-gradient('
    + 120 + 'deg, ' + "#2980b9" + ', ' + "#2e9963" + ')';
    }else{
        document.getElementsByTagName('body')[0].style.background = 'linear-gradient('
    + 120 + 'deg, ' + color1.value + ', ' + color2.value + ')';
    }

    
}