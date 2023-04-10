function showInfo() { 
    var messageModal = new Modal(document.getElementById("infoModal"));
     messageModal.show();
    
    
    }

function showSupport() { 
    document.getElementById("emptyComment").innerHTML = "";

    var messageModal = new Modal(document.getElementById("commentModal")); 
    

    document.getElementById("review").textContent = "";
    document.getElementById("commentBody").textContent = "";
      for (var i = 0; i < comment_array.length; i++) {
            var html = '<div class="text-center" style="width:100%;"> \
            <div class="card"> \
            <div class="comment-modify">\
            <img src="/images/delete.png" item =' + comment_array[i]._id + ' id="trash" onclick="deleteComment(this);">\
            <br>\
            <br>\
            <img src="/images/edit.png"  item=' + i + ' onClick="editComment(this);" />\
            </div>\
            <div class="card-body" id="card"> \
            <p class="black">' + comment_array[i].review + "</p> \
            <small>by " + "anonymous" + " @ " + comment_array[i].datePosted + "</small> \
            </div> \
            </div> \
            </div>"; 

            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);
      }
      messageModal.show();
}

function showEmail() { var messageModal = new Modal(document.getElementById("emailModal")); messageModal.show(); }

function showNew() {
    var commentModal = new Modal(document.getElementById("commentModal"));
    var newCommentModal = new Modal(document.getElementById("newModal"));
    commentModal.hide();
    newCommentModal.show();
}