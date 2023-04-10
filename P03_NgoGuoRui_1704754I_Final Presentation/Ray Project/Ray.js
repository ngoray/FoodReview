"use strict"

const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const routeComments = require('./routes/routeComments');
const routeSearch = require('./routes/routeSearch');
const routeSearchcomment = require('./routes/routeSearchcomment');
const routeAuth = require('./routes/routeLogin');

var app = express();
var host = "127.0.0.1";
var port = 1111;
var home_file = "/index.html";

app.use(express.static('./project'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routeComments.routeComments(app); 
routeSearch.routeSearch(app);
routeSearchcomment.routeSearchcomment(app); 
routeAuth.routeMember(app);


function gotoIndex(f, request, respond) {
    respond.sendFile(__dirname + f);
}

app.get(home_file, gotoIndex);

// Starts the Web Server
var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});