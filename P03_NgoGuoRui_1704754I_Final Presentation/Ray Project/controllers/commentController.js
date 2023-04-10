"use strict"
const Comment = require('../models/Comment');
const CommentsDB = require('../models/CommentsDB');
var commentsDB = new CommentsDB();
function getAllComments(request, respond) {

    commentsDB
        .getAllComments(function (error, result) {

            if (error) {
                respond.json(error);
            } else {

                respond.json(result);
            }

        });
}


function addFeed(request, respond) {
    var now = new Date();
    var comment = new Comment(null, request.body.review, now.toString());

    commentsDB.addFeed(comment, function (error, result) {


        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });

}

function updateComment(request, respond) {
    var now = new Date();
    var comment = new Comment(parseInt(request.params.id), request.body.review, now.toString());

    commentsDB.updateComment(comment, function (error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

function deleteComment(request, respond) {
    commentsDB.deleteComment(request.params.id, function (error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}
module.exports = { getAllComments,  addFeed, updateComment, deleteComment };