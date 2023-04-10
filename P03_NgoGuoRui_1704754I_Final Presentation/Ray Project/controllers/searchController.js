"use strict"
const Search = require('../models/Searchmodel');
const SearchDB = require('../models/SearchDB');
var searchDB = new SearchDB();
function getAllSearch(request,respond) {

    searchDB.getAllSearch(function (error,result) {

        if (error) {
            respond.json(error);
        } else {    

            respond.json(result);
        }

    });
}

function addPost(request, respond) {

    var search = new Search(null, request.body.title, request.body.thumb, request.body.avaliability, request.body.link, request.body.video1);

// var search = {
//         "title": request.title,
//         "thumb": request.body.thumb,
//         "avaliability": request.body.avaliability,
//         "link": request.body.link,
//         "video1": request.body.video1
//      };

    searchDB.addPost(search, function (error, result) {


        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });

}

function deleteFlipper(request, respond) {
    searchDB.deleteFlipper(request.params.id, function (error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

module.exports = { getAllSearch, addPost, deleteFlipper};