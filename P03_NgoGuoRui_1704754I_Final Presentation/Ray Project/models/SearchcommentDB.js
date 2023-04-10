"use strict"
var db = require('../dbconnection');  //references of dbconnection
class SearchcommentDB {

    getAllSearchcomment(callback) {
        var sql = "Select * FROM beststandard.searchcomment";

        return db.query(sql, callback);
    }

    addSearchcomment(searchcomment, callback) {
        var sql = "INSERT INTO searchcomment (searchid, category, comment, datePosted) VALUES (?, ?, ?, ?)";

        db.query(sql, [searchcomment.getSearchid(), searchcomment.getCategory(), searchcomment.getComment(), searchcomment.getDatePosted()], callback);
    }

    updateSearchomment(searchcomment, callback) {
        var sql = "UPDATE searchcomment SET comment = ?, datePosted = ? WHERE _id = ?";

        return db.query(sql, [searchcomment.getComment(), searchcomment.getDatePosted(), searchcomment.getId()], callback);
    }

    deleteSearchcomment(id, callback) {
        var sql = "DELETE FROM searchcomment WHERE _id = ?";

        return db.query(sql, id, callback);
    }


}
module.exports = SearchcommentDB;