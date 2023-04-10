var login_url = "/login";
var signup_url = "/signup";

function login() {
    var loginUser = new XMLHttpRequest();
    loginUser.open('POST', login_url, true);


    var userName = document.getElementById("name").value;
    var logPassword = document.getElementById("pass").value;

    var loginData = {
        "username": userName,
        "password": logPassword
    };

    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload = function () {
        var output = JSON.parse(loginUser.responseText);
        if (output.token) {
            sessionStorage.setItem("token", output.token);
            sessionStorage.setItem("name", output.username);
            alert("Welcome "+ userName);
            window.location.href = "/index.html";
        } else {
            alert("Your username or pasword might be wrong");
        }
    };
    loginUser.send(JSON.stringify(loginData));
}

function register() {
    var registerUser = new XMLHttpRequest();
    registerUser.open('POST', signup_url, true);
    

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var signupModal = new Modal(document.getElementById("signupModal"));
    var signinModal = new Modal(document.getElementById("signinModal"));

//console.log(regUserName);


    var registerData = {
        "username": username,
        "email": email,
        "password": password
    }

    console.log(registerData)

    registerUser.setRequestHeader("Content-Type", "application/json");
    registerUser.onload = function () {
        var output = JSON.parse(registerUser.responseText);
        if (output.token) {
            alert("Register successfully");
            signupModal.hide();
            signinModal.show();
            sessionStorage.setItem("token", output.token);
            sessionStorage.setItem("username", output.username);
        } else {
            alert("Your Username or Email has been taken");
            signupModal.show();
        }
    };
    registerUser.send(JSON.stringify(registerData));
}


function editUser() {

    window.location.href="./User.html";

}