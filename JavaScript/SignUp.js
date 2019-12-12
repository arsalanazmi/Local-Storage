function signUp(){
    var user_name = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd1").value;
    var confirm_password = document.getElementById("pwd2").value;
    var d_o_b = document.getElementById("dob").value;
    
    var date = d_o_b.split("-")
    newDate=[]
    newDate[0]=date[2]
    newDate[1]=date[1]
    newDate[2]=date[0]
    var newDate1 = newDate.join("-")

    if (password == confirm_password) {
        localStorage.setItem("User Name", user_name)
        localStorage.setItem("Email", email)
        localStorage.setItem("Password", password)
        localStorage.setItem("Date Of Birth",newDate1)
        
        var nationality = document.getElementsByTagName("option"); 
        for (var i = 0; i < nationality.length; i++) {
            if (nationality[i].selected == true) {
                localStorage.setItem("Nationality",nationality[i].value); 
            }
        }

        var radios = document.getElementsByName("optradio");
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked == true) {
                localStorage.setItem("Gender",radios[i].value); 
            }
        }
        
        window.open("SignIn.html")
    }
    else{
        alert("Password doesn't match with Confirm Password")
    }
}

