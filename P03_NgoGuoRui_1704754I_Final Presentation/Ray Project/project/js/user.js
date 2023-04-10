var deleteuser_url = "/signup";
var user_url = "/signup";
var deleteuser_array = [];

function logout(){
    sessionStorage.clear();
    location.href= "index.html"
}

function getUserData() {
    var request = new XMLHttpRequest();
    request.open('GET', user_url, true);
    request.onload = function () {
        user_array = JSON.parse(request.responseText);
        console.log(user_array);
        displayUserInfo();
        console.log(sessionStorage.getItem("name"));
    };
    request.send();
}

function displayUserInfo() {
    for (var i = 0; i < user_array.length; i++) {

        if (sessionStorage.getItem("name") == user_array[i].username) {

            var html = '<div class="comment-modify">\
            </div>\
            <div class="card-body" id="card"> \
            <input class="black" placeholder=Username:' + user_array[i].username +'></input> \
            <input class="black" placeholder=Email:' + user_array[i].email +'></input> \
            <input class="black" placeholder=Password:' + user_array[i].password +'></input> \
            <button class="button" type="button" item=' + i + ' onclick="editUser(this)" style="width: 407px">Edit Account</button>\
            <img src="/images/delete.png" item =' + user_array[i]._id + " id='trash' onclick='deleteUser(this);'>\
            </div>"; 

            document.getElementById("profile").insertAdjacentHTML('beforeend', html);
        
        }
    }
}

function deleteUser(delitem) {
    var response = confirm("Are you sure you want to deactivate your account?");

    if (response == true) {

        var count_id = delitem.getAttribute("item")
        console.log("item")
        var postUser = new XMLHttpRequest();

        var edit_deleteuser_url = deleteuser_url + "/" + count_id;
        console.log(count_id);


        postUser.open("DELETE", edit_deleteuser_url); 
        postUser.onload = function () {
            alert("Your Account has been deactivated")
        };
        postUser.send();
        logout();
    }
}

function editUser() {
    var editUserModal = new Modal(document.getElementById("userModal"));
    editUserModal.show();
    for (var i = 0; i < user_array.length; i++) {
        if (sessionStorage.getItem("name") == user_array[i].username) {
            document.getElementById("uName").value = user_array[i].username;
            document.getElementById("uEmail").value = user_array[i].email;
            document.getElementById("uPassword").value = user_array[i].password;
        }
    }
}

function updateUser() {
    var response = confirm("Are you sure you want to edit your information?");

    var username = document.getElementById("uName").value;
    var email = document.getElementById("uEmail").value;
    var password = document.getElementById("uPassword").value;

    var editedUser = {
        "username": username,
        "email": email,
        "password": password
    }
    console.log(editedUser);

    if (response == true) {
        for (var i = 0; i < user_array.length; i++) {
            if (sessionStorage.getItem("name") == user_array[i].username) {
                var edit_user_url = user_url + "/" + user_array[i]._id;
            }
        }
        var updateUser = new XMLHttpRequest();
        updateUser.open("PUT", edit_user_url, true);
        updateUser.setRequestHeader("Content-Type", "application/json");

        updateUser.onload = function() {

            sessionStorage.setItem("name", editedUser.username);
            alert("Your user information has been edited.");
            window.location.href="./User.html";
        }
    }
    updateUser.send(JSON.stringify(editedUser));
}
