function login() {
    var username = document.getElementById("usr_name").value;
    var password = document.getElementById("password").value;
    if (username == "") {
        alert("Adj meg egy felhasználónevet!");
    }else if(password == "") {
        alert("Adj meg egy jelszót!");
    }
    if (username == "xpnyeste" && password == "jelszo") {
        window.location.href = "index.html";
    }else if(username != "" && password != ""){
        alert("Nem megfelelő kombináció!");
    }
  }
function back(){
    document.getElementById("login_card").style.display = "block";
    document.getElementById("register_card").style.display = "none";
}
function register(){
    document.getElementById("login_card").style.display = "none";
    document.getElementById("register_card").style.display = "block";
}
function registered(){
    var remail = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("rusr_name").value;
    var password = document.getElementById("rpassword").value;
    var age = document.getElementById("date").value; 
    if (remail == "") {
        alert("Adj meg egy emailt")
        return
    }else if(username == ""){
        alert("Adj meg egy felhasználónevet!");
        return
    }else if(password == ""){
        alert("Adj meg egy jelszót!");
        return
    }else if(age == ""){
        alert("Nem adtál meg dátumot!")
        return
    }
    var date2 = parseInt(age);
    
    if (Math.abs(date2 - new Date().getFullYear()) <= 18) {
        alert("Nem múltál el 18 éves!")
        return
    }
    window.location.href = "index.html";
}