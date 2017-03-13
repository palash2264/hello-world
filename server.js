var path = require('path');
var express = require("express");
var app = express();


app.use(express.static(path.join(__dirname, 'views')));
app.listen(8080, function () {
    console.log("listening");
});




//var http = require('http');
//var fs = require('fs');
//
//http.createServer(function (request, response) {
//
//    fs.readFile('index.html', function (errors, contents) {
//        response.writeHead(200, {
//            'Content-Type': 'text/html'
//        });
//        response.write(contents);
//        response.end();
//    });
//
//}).listen(8080);