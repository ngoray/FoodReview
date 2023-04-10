"use strict"

const searchController = require('../controllers/searchController');



function routeSearch(app) {
    app.route('/search')
    .get(searchController.getAllSearch)
    .post(searchController.addPost);

    app.route('/search/:id')
    .delete(searchController.deleteFlipper);


}

module.exports = { routeSearch };