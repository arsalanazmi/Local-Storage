function password(){
    var email1 = document.getElementById("email1").value;
    var pass1 = document.getElementById("pwd4").value;
    var cpdw = document.getElementById("pwd5").value;
    
    if(email1 == localStorage.getItem("Email")){
        if(pass1 == cpdw){
            localStorage.removeItem("Password")
            localStorage.setItem("Password",pass1);
            window.open("SignIn.html");
        }
        else{
            alert("Password doesn't match with Confirm Password")
        }
    }
    else{
        alert("Given email doesn't exist")
    }
}