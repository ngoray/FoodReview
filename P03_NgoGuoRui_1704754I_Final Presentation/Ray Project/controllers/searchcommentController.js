"use strict"
const Searchcomment = require('../models/Searchcommentmodel');
const SearchcommentDB = require('../models/SearchcommentDB');
var searchcommentDB = new SearchcommentDB();
function getAllSearchcomment(request, respond) {

    searchcommentDB
        .getAllSearchcomment(function (error, result) {

            if (error) {
                respond.json(error);
            } else {

                respond.json(result);
            }

        });

    }

    function addSearchcomment(request, respond) {
        var now = new Date();

        var searchcomment = new Searchcomment(null, request.body.searchid, request.body.category, request.body.comment, request.body.searchid, now.toString());

        searchcommentDB.addSearchcomment(searchcomment, function (error, result) {


            if (error) {
                respond.json(error);
            } else {
                respond.json(result);
            }

        });

    }

    function updateSearchcomment(request, respond) {
        var now = new Date();
        var searchcomment = new Searchcomment(parseInt(request.params.id), request.body.searchid, request.body.category, request.body.comment, now.toString());

        searchcommentDB.updateSearchomment(searchcomment, function (error, result) {

            if (error) {
                respond.json(error);
            } else {
                respond.json(result);
            }

        });
    }

    function deleteSearchcomment(request, respond) {
        searchcommentDB.deleteSearchcomment(request.params.id, function (error, result) {

            if (error) {
                respond.json(error);
            } else {
                respond.json(result);
            }
        });
    }

module.exports = { getAllSearchcomment,addSearchcomment, updateSearchcomment, deleteSearchcomment };