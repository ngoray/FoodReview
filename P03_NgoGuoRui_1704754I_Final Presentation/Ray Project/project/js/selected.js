var search_url = "/search";
var search_array = [];

function getAllSearch1() {

    var request = new XMLHttpRequest();
    request.open('GET', search_url, true);

    //This function will be called when data returns from the web api
    request.onload = function () {
        //get all the movies records into our movie array
        search_array = JSON.parse(request.responseText);
        console.log(search_array);

        //call the function so as to display all movies tiles for "Now Showing"
        displaySelected(category);
        fetchSearchcomment();
    };
    //This command starts the calling of the movies web api
    request.send();
}

//This function is to display the movies tiles
//that filters based on "Now Showing" or "Coming Soon"
function displaySelected(category) {
    var selected = document.getElementById("selected");
    var searchCount = 0;
    var message = "";

    selected.innerHTML = "";
    totalSearch = search_array.length;

    for (var count = 0; count < totalSearch; count++) {
        if (search_array[count].avaliability === category) {
            var thumbnail = search_array[count].thumb;
            var title = search_array[count].title;

            var cell = '<div class="flip-container" >                                                                                                                                                                                       \
                <div class="flipper">                                                                                                                                                                                           \
                    <div class="front">                                                                                                                                                                                         \
                        <a id="movies" class="movies" href="#" data-toggle="modal" data-target="#movieModal" item=' + count + '>                                                                                                \
                            <img class="img-fluid img-thumbnail" style="width:100%;height:130px; float:left;" src="' + thumbnail + '" />                                                                                                                                       \
                        </a>                                                                                                                                                                                                    \
                    </div>                                                                                                                                                                                                      \
                    <div class="back">                                                                                                                                                                                          \
                        <div class="mystyle text-center py-3" > \                                                                                                                                        \
                            <span class="white" style="">' + title + '</span><br>  \
                            <button item="' + count + '" type="button" class="comments btn strong btn-sm" onClick="showDetails(this)" >Show More</button>\                                                                                                                                                                 \
                            <button item="' + count + '" type="button" class="comments btn strong btn-sm" onClick="deleteFlipper(this)">Delete</button>         \
                            <button item="' + count + '" type="button" class="comments btn strong btn-sm" onClick="showSearchComment(this)">Review</button>         \                                                                                                                                                                                               \
                    </div>                                                                                                                                                                                                      \
                </div>                                                                                                                                                                                                          \
            </div>                                                                                                                                                                                                              \
        </div>';

            selected.insertAdjacentHTML('beforeend', cell);
            searchCount++;
        }
    }

    message = searchCount + " Result " + category;
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}

function showBlog(){

    var messageModal = new Modal (document.getElementById("blogModal"));
    messageModal.show();
}

function addPost(){

    var messageModal = new Modal (document.getElementById("blogModal"));
    var search = new Object();

    messageModal.hide();
    search.title = document.getElementById("title").value;
    search.thumb = document.getElementById("thumb").value;
    search.avaliability = document.getElementById("avaliability").value;
    search.link = document.getElementById("link").value;
    search.video1 = document.getElementById("video1").value;
    

    var postSearch = new XMLHttpRequest(); // new HttpRequest instance 

    postSearch.open("POST", search_url, true); //For Local Comments DB


    postSearch.setRequestHeader("Content-Type", "application/json");
    postSearch.onload = function () {
        getAllSearch();
    };
    postSearch.send(JSON.stringify(search));
    window.location.href="./Blog.html"

}

function deleteFlipper(element) {
    var response = confirm("Are you sure you want to delete this post?");

    if (response == true) {

        var item = element.getAttribute("item");
        var delete_search_url = search_url + "/" + search_array[item]._id; //For Local Comments DB
        var eraseComment = new XMLHttpRequest();
        eraseComment.open("DELETE", delete_search_url, true);
        eraseComment.onload = function () {
            getAllSearch();
            alert("Sucessfully deleted");

        };
        eraseComment.send();
        window.location.href="./Blog.html"
    }
}

