var http = require('http');  
var url = require('url');  
var fs = require('fs');  


function execute(){
    
    var textedit = document.getElementById("text");
fs.readFile("notes.txt", 'utf8', function(err, data) {
                if (err) throw err;
             textedit.innerHTML = data;
           

              });}