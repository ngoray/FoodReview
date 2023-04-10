//Set comment variable to either remote_comment or local_comment
var comment_url="/comments";
var comment_array = [];

var search_url = "/search";
var search_array = [];
var category = "chinese";

var isLoggedIn = false;
var version = '1.0.8';

var username = sessionStorage.getItem("name");

if (sessionStorage.getItem("token") != null) { //Not login
    // document.getElementById("myAcc").classList.add("notLogin");
    // document.getElementById("signUp").classList.remove("notLogin");
    
    document.getElementById("myAcc").classList.remove("notLogin");
    document.getElementById("signUp").classList.add("notLogin");
    document.getElementById("signin").innerText = "Logout";
    document.getElementById("signin").setAttribute("onclick", "logout()");
    
    
}
else{ //Login
    document.getElementById("myAcc").classList.add("notLogin");
    document.getElementById("signUp").classList.remove("notLogin");


    // document.getElementById("myAcc").classList.remove("notLogin");
    // document.getElementById("signUp").classList.add("notLogin");
    // document.getElementById("signin").innerText = "Logout";
    // document.getElementById("signin").onclick = logout();
    

}

function version() {
    console.log(version)
}

function logout(){
    sessionStorage.clear();
    location.href= "index.html"
}

function showForget() {
    var signupModal = new Modal(document.getElementById("signinModal"));
    var termModal = new Modal(document.getElementById("forgetModal"));
    signupModal.hide();
    termModal.show();
}

function showSignin() {
    var messageModal = new Modal(document.getElementById("signinModal")); 
    messageModal.show(); 
    clear();
}

function showTerm() {
    var signupModal = new Modal(document.getElementById("signupModal"));
    var termModal = new Modal(document.getElementById("termModal"));
    signupModal.hide();
    termModal.show();
}

function showBack() {
    var signupModal = new Modal(document.getElementById("signupModal"));
    var termModal = new Modal(document.getElementById("termModal"));
    termModal.hide();
    signupModal.show();
}

function showSignup() {
    var messageModal = new Modal(document.getElementById("signupModal"));
    messageModal.show(); 
    clear();
}

function mySearch() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    div = document.getElementById("myMod");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}  

function clear() {
    var input = document.getElementById('login').reset();
    var input = document.getElementById('register').reset();
}

function Blog() {

    if (sessionStorage.getItem('name') == null) {
        alert("Please login to your account.")
    }
    else{
    getAllSearch();
    window.location.href="/Blog.html";
    }

}