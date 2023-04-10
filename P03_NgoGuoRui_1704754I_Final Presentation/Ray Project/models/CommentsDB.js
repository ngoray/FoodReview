"use strict"
var db = require('../dbconnection');  //references of dbconnection
class CommentsDB {

    getAllComments(callback) {
        var sql = "Select * FROM beststandard.comment";

        return db.query(sql, callback);
    }

    addFeed(comment, callback) {
        var sql = "INSERT INTO comment (review, datePosted) VALUES (?, ?)";

        db.query(sql, [comment.getReview(), comment.getDatePosted()], callback);
    }

    updateComment(comment, callback) {
        var sql = "UPDATE comment SET review = ?, datePosted = ? WHERE _id = ?";

        return db.query(sql, [comment.getReview(), comment.getDatePosted(), comment.getId()], callback);
    }

    deleteComment(id, callback) {
        var sql = "DELETE FROM comment WHERE _id = ?";

        return db.query(sql, id, callback);
    }


}
module.exports = CommentsDB;