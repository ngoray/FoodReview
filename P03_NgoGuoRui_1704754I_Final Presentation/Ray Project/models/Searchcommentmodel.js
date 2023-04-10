"use strict";

class Searchcommentmodel {
    constructor(id, searchid, category, comment, datePosted) { this.id = id; this.searchid = searchid; this.category = category; this.comment = comment; this.datePosted = datePosted; }
    getId() { return this.id; }
    getSearchid() { return this.searchid; }
    getCategory() { return this.category; }
    getComment() { return this.comment; }
    getDatePosted() { return this.datePosted; }
    setSearchid(searchid) { this.searchid = searchid; }
    setCategory(category) { this.category = category; }
    setComment(comment) { this.comment = comment; }
    setDatePosted(datePosted) { this.datePosted = datePosted; }
}
module.exports = Searchcommentmodel;