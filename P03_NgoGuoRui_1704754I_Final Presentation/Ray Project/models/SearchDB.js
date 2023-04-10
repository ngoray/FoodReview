"use strict"
var db = require('../dbconnection');  //references of dbconnection
class SearchDB {

    getAllSearch(callback) {
        var sql = "Select * FROM beststandard.search";

        return db.query(sql,callback);
    }

    addPost(search, callback) {
        var sql = "INSERT INTO search (title, thumb, avaliability, link, video1) VALUES (?, ?, ?, ?, ?)";

        db.query(sql, [search.title, search.thumb, search.avaliability, search.link, search.video1], callback);
    }

    deleteFlipper(id, callback) {
        var sql = "DELETE FROM search WHERE _id = ?";

        return db.query(sql, id, callback);
    }
}
module.exports = SearchDB;