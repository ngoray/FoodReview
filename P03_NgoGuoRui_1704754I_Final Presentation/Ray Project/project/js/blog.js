var search_url = "/search";
var search_array = [];
var category = "chinese";

var searchcomment_url = "/searchcomment";
var searchcomment_array = [];


//This function is to call the comments api and get all the comments
//for individual movies.
function fetchSearchcomment() {

    var request = new XMLHttpRequest();
    request.open('GET', searchcomment_url, true);

    //This function will be called when data returns from the web api
    request.onload = function () {
        //get all the movies records into our movie array
        searchcomment_array = JSON.parse(request.responseText);
        console.log(searchcomment_array);

    };
    //This command starts the calling of the movies web api
    request.send();

}

//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showSearchComment(element) {
    document.getElementById("empComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    var commentModal = new Modal(document.getElementById("comModal"));

    document.getElementById("review").textContent = "Review for " + search_array[item].title;
    document.getElementById("comBody").textContent = "";

    for (var i = 0; i < searchcomment_array.length; i++) {
        
        if (searchcomment_array[i].category.trim() === search_array[item].title.trim()) {
            document.getElementById("empComment").innerHTML = "";
            selectedsearchid = search_array[item]._id;

            var html = '<div class="text-center" style="width:100%;"> \
            <div class="card"> \
            <div class="comment-modify">\
            <img src="/images/delete.png" item =' + searchcomment_array[i]._id + ' onclick="deleteCom(this);">\
            <br>\
            <br>\
            <img src="/images/edit.png"  item=' + i + ' onClick="editCom(this);" />\
            </div>\
            <div class="card-body" id="card"> \
            <p class="black">' + searchcomment_array[i].comment + "</p> \
            <small>by " + "anonymous" + " @ " + searchcomment_array[i].datePosted + "</small> \
            </div> \
            </div> \
            </div>";

            document.getElementById("comBody").insertAdjacentHTML('beforeend', html);
        }  
    } 
    commentModal.show();
}

function newSearchcomment() {

    var commentModal = new Modal(document.getElementById("comModal"));
    var newCommentModal = new Modal(document.getElementById("nModal"));
    commentModal.hide();
    newCommentModal.show();
}

function addSearchcomment() {
    console.log(currentIndex);
    var newCommentModal = new Modal(document.getElementById("nModal"));

    var searchcomment = new Object();

    newCommentModal.hide();
    searchcomment.searchid = search_array[currentIndex]._id;
    searchcomment.category = search_array[currentIndex].title;
    searchcomment.comment = document.getElementById("useComment").value;
    searchcomment.datePosted = new Date().toString();

    var postSearchcomment = new XMLHttpRequest(); // new HttpRequest instance 

    postSearchcomment.open("POST", searchcomment_url, true); //For Local Comments DB


    postSearchcomment.setRequestHeader("Content-Type", "application/json");
    postSearchcomment.onload = function () {
        fetchSearchcomment();
        alert("Thank you for your time!");

    };
    postSearchcomment.send(JSON.stringify(searchcomment));
    console.log(currentIndex);
}

function showDetails(element) {

    var item = element.getAttribute("item");
    console.log(search_array[item].title);

    var detailsModal = new Modal(document.getElementById("detailsModal"));

    document.getElementById("searchTitle").innerHTML = search_array[item].title;
    document.getElementById("searchPoster").src = search_array[item].thumb;
    document.getElementById("category").innerHTML = "<strong>Category:</strong>" + search_array[item].avaliability;
    document.getElementById("info").href=search_array[item].link;
    document.getElementById("trailer1").src ='https://www.youtube.com/embed/'+ search_array[item].video1;

    detailsModal.show();
}

function deleteCom(delitem) {
    var response = confirm("Are you sure you want to delete this review?");

    if (response == true) {
        var commentModal = new Modal(document.getElementById("comModal"));
        var count_id = delitem.getAttribute('item')
        var postComment = new XMLHttpRequest(); // new HttpRequest instance
        commentModal.hide();
        var edit_searchcomment_url = searchcomment_url + "/" + count_id;
        console.log(count_id);


        postComment.open("DELETE", edit_searchcomment_url); //For Local Comments DB
        postComment.onload = function () {
            
            fetchSearchcomment();
            alert("Review has been deleted");
            window.location.href="./Blog.html";

        };

        // postComment.setRequestHeader("Content-Type", "application/json");
        postComment.send();
    }
}

function editCom(delitem) {
    var count_id = delitem.getAttribute('item');
    currentIndex = count_id;
    var commentModal = new Modal(document.getElementById("comModal"));
    commentModal.hide();
    var editCommentModal = new Modal(document.getElementById("edModal"));
    editCommentModal.show();
    document.getElementById("eduserComments").value = searchcomment_array[count_id].comment;
}

function updateSearchcomment() {
    var response = confirm("Are you sure you want to update this review?");

    if (response == true) {
        var commentModal = new Modal(document.getElementById("edModal"));
        commentModal.hide();

        var edit_searchcomment_url = searchcomment_url + "/" + searchcomment_array[currentIndex]._id; //For Remote Comments DB. Here the id looks abit different as it is the Cloud implementation

        var updateSearchcomment = new XMLHttpRequest(); // new HttpRequest instance 
        updateSearchcomment.open("PUT", edit_searchcomment_url, true);
        updateSearchcomment.setRequestHeader("Content-Type", "application/json");
        searchcomment_array[currentIndex].comment = document.getElementById("eduserComments").value;
        updateSearchcomment.onload = function () {
            fetchSearchcomment();
            alert("Review has been sucessfully Updated")
        };

        updateSearchcomment.send(JSON.stringify(searchcomment_array[currentIndex]));
    }
}