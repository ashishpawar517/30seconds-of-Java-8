
//http currently further will use express
const http = require('http');
//file system module
const fs = require('fs');
//for dir path
const path = require('path');
//for directory access
const dirpath = path.join(__dirname, 'snippets');
// get card
const get_card = require('./app.js');
//truncate
const truncate = require('./truncate.js');
//header
const header = require('./header.js');
//render 
const render = require('./render.js');
//read
const run = require('./read.js');

var express = require('express');
var app = express();

const doAll = async () => {

    await truncate();
    await header();

    const cards = await run();
    console.log('done');

};
doAll();
// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
