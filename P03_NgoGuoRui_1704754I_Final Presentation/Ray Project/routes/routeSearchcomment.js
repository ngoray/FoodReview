"use strict"

const searchcommentController = require('../controllers/searchcommentController');



function routeSearchcomment(app) {
    
    app.route('/searchcomment')
    .get(searchcommentController.getAllSearchcomment)
    .post(searchcommentController.addSearchcomment);

    app.route('/searchcomment/:id')
    .put(searchcommentController.updateSearchcomment)
    .delete(searchcommentController.deleteSearchcomment);
}

module.exports = { routeSearchcomment };