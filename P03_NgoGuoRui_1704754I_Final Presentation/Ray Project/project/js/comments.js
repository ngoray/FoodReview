//This function is to call the comments api and get all the comments
//for individual movies.
function fetchComments() {
    console.log("fetch");
    var request = new XMLHttpRequest();
    request.open('GET', comment_url, true);

    //This function will be called when data returns from the web api
    request.onload = function () {
        //get all the movies records into our movie array
        comment_array = JSON.parse(request.responseText);
        console.log(comment_array);

        //call the function so as to display all movies tiles for "Now Showing"
        //displayMovies(category);
    };
    //This command starts the calling of the movies web api
    request.send();

}

function newComment() {

    var commentModal = new Modal(document.getElementById("commentModal"));
    var newCommentModal = new Modal(document.getElementById("newModal"));
    commentModal.hide();
    newCommentModal.show();
    document.getElementById("useCommenta").value = "";
}

function clear() {
    var textarea = document.getElementById('userComments').reset();
}

function addFeed() {

    var comment = new Object();

    comment.review = document.getElementById("userComments").value;
    comment.datePosted = new Date().toString();

    var postComment = new XMLHttpRequest(); // new HttpRequest instance 

    postComment.open("POST", comment_url, true); //For Local Comments DB


    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function () {
        fetchComments();
    };
    postComment.send(JSON.stringify(comment));

}

function deleteComment(delitem) {
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
        var commentModal = new Modal(document.getElementById("commentModal"));
        var count_id = delitem.getAttribute('item')
        var postComment = new XMLHttpRequest(); // new HttpRequest instance
        commentModal.hide();
        var edit_comment_url = comment_url + "/" + count_id;
        console.log(count_id);


        postComment.open("DELETE", edit_comment_url); //For Local Comments DB
        postComment.onload = function () {
            fetchComments();
            var thankyouModal = new Modal(document.getElementById("thankyouModal"));
            thankyouModal.show();

        };

        // postComment.setRequestHeader("Content-Type", "application/json");
        postComment.send();
    }
}

/********** Edit Comment  Function****************/
//this function is called when the user clicks on the pencil icon

function editComment(delitem) {
    var count_id = delitem.getAttribute('item');
    currentIndex = count_id;
    var commentModal = new Modal(document.getElementById("commentModal"));
    commentModal.hide();
    var editCommentModal = new Modal(document.getElementById("editModal"));
    editCommentModal.show();
    document.getElementById("edituserComments").value = comment_array[count_id].review;
}

/*********update function when user click on update comment button****************/
function updateComment() {
    var response = confirm("Are you sure you want to update this comment ?");

    if (response == true) {
        var commentModal = new Modal(document.getElementById("editModal"));
        commentModal.hide();

        var edit_comment_url = comment_url + "/" + comment_array[currentIndex]._id; //For Remote Comments DB. Here the id looks abit different as it is the Cloud implementation

        var updateComment = new XMLHttpRequest(); // new HttpRequest instance 
        updateComment.open("PUT", edit_comment_url, true);
        updateComment.setRequestHeader("Content-Type", "application/json");
        comment_array[currentIndex].review = document.getElementById("edituserComments").value;
        updateComment.onload = function () {
            fetchComments();
            var thankyouModal = new Modal(document.getElementById("thankyouModal"));
            thankyouModal.show();

        };

        updateComment.send(JSON.stringify(comment_array[currentIndex]));
    }
}