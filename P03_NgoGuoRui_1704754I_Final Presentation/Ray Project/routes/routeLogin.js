"use strict"

const memberController = require('../controllers/member');

function routeMember(app) {
    app.route('/signup')
    .post(memberController.register)
    .get(memberController.getAllUsers);

    app.route('/login')
    .post(memberController.login)

    app.route('/signup/:_id')
    .put(memberController.updateUser)
    .delete(memberController.deleteUser);

}

module.exports =  {routeMember};