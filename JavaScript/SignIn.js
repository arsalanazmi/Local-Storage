function SignIn(){
    var em = document.getElementById("email1").value;
    var pass = document.getElementById("pwd").value;

    if(em === localStorage.getItem("Email") && pass === localStorage.getItem("Password")){
        alert("Login Successfull")
        window.open("Login_Page.html")
    } 
    else{
        alert("Either Email or Password is incorrect")
    }
}