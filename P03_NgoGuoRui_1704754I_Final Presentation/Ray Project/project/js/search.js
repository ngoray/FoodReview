//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon

function showFood() {
    getAllSearch();
    var messageModal = new Modal(document.getElementById("searchModal")); messageModal.show();

}
function getAllSearch() {

    var request = new XMLHttpRequest();
    request.open('GET', search_url, true);

    //This function will be called when data returns from the web api
    request.onload = function () {
        //get all the movies records into our movie array
        search_array = JSON.parse(request.responseText);
        console.log(search_array);

        //call the function so as to display all movies tiles for "Now Showing"
        displaySearch();
    };
    //This command starts the calling of the movies web api
    request.send();
}

//This function is to display the movies tiles
//that filters based on "Now Showing" or "Coming Soon"
function displaySearch() {
    var modal = document.getElementById("foodmodal");
    var searchCount = 0;
    var message = "";

    modal.innerHTML = "";
    totalSearch = search_array.length;

    for (var count = 0; count < totalSearch; count++) {

        var thumbnail = search_array[count].thumb;
        console.log(thumbnail);
        var title = search_array[count].title;

        var cell = '<div class="" >                                                                                                                                                                                                     \
        <div class="flip-container" >                                                                                                                                                                                       \
            <div class="flipper">                                                                                                                                                                                           \
                <div class="front">                                                                                                                                                                                         \
                    <a id="movies" class="movies" href="#" data-toggle="modal" data-target="#movieModal" item=' + count + '>                                                                                                \
                        <img class="img-fluid img-thumbnail" style="width:100%;height:130px; float:left;" src="' + thumbnail + '" />                                                                                                                                       \
                    </a>                                                                                                                                                                                                    \
                </div>                                                                                                                                                                                                      \
                <div class="back">                                                                                                                                                                                          \
                    <div class="mystyle text-center py-3" > \                                                                                                                                        \
                        <span class="black" style="">' + title + '</span><br>  \
                        <button href="#" item="' + count + '" type="button" class="comments btn strong btn-sm" onClick="showDetails(this)" >Show More</button>                    \
                    </div>                                                                                                                                                               \
                </div>                                                                                                                                             \  \
            </div>                                                                                                                                                     \
        </div>                                                                                                                                                        \
    </div>';

        modal.insertAdjacentHTML('beforeend', cell);
        searchCount++;
    }
    message = searchCount + " Search ";
}

function showDetails(element) {

    var item = element.getAttribute("item");
    console.log(search_array[item].title);

    var detailsModal = new Modal(document.getElementById("detailsModal"));
    var searchModal = new Modal(document.getElementById("searchModal"));

    document.getElementById("searchTitle").innerHTML = search_array[item].title;
    document.getElementById("searchPoster").src =  search_array[item].thumb;
    document.getElementById("category").innerHTML = "<strong>Category:</strong>" + search_array[item].avaliability;
    document.getElementById("info").href=search_array[item].link;
    document.getElementById("trailer1").src = 'https://www.youtube.com/embed/'+ search_array[item].video1;

    searchModal.hide();
    detailsModal.show();
}