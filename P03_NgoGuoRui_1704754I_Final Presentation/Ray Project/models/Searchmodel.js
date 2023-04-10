"use strict";

class Searchmodel {
    constructor(id, title, thumb, avaliability, link, video1) { this.id = id; this.title = title; this.thumb = thumb; this.avaliability = avaliability; this.link = link; this.video1 = video1; }
    getId() { return this.id; }
    getTitle() { return this.title; }
    getThumb() { return this.thumb; }
    getAvaliability() { return this.avaliability; }
    getLink() { return this.link; }
    getVideo1() { return this.video1; }
    setTitle(title) { this.title = title; }
    setThumb(thumb) { this.thumb = this.thumb; }
    setAvaliability(avaliability) { this.avaliability = avaliability; }
    setLink(link) { this.link = link; }
    setVideo1(video1) { this.video1 = video1; }
}
module.exports = Searchmodel;