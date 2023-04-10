"use strict";

class Comment {
constructor(id, review, datePosted) { this.id = id; this.review = review; this.datePosted = datePosted; }
getId() { return this.id; }
getReview() { return this.review; }
getDatePosted() { return this.datePosted; }
setReview(review) { this.review = review; }
setDatePosted(datePosted) { this.datePosted = datePosted; }
}
module.exports = Comment;