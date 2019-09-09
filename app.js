var http = require('http');  
var url = require('url');  
var fs = require('fs');  
var express = require('express');
var app = express();
  


var server = http.createServer(function(request, response) {  
    var path = url.parse(request.url).pathname;  

// REQUEST HANDLER














// WEBSITE PAGE LOCATOR
  









    switch (path) {  
     
        case '/':  
            fs.readFile('./index.html', function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
        case '/pages/login.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break; 
            case '/admin/control.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
            case '/codebase.pacocascript':  
            response.writeHead(200, {  
                'Content-Type': 'text/html'  
            });  
            response.write("Comunism Works");  
            response.end();  
            break;  

            case '/admin/notes.html':  
            // fs.readFile("notes.txt", 'utf8', function(err, data) {
            //     if (err) throw err;
            //     response.writeHead(200, {  
            //         'Content-Type': 'text/html'  
            //     });  
            //     response.write(data);  
            //     response.end();  
            //   });
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            }); 
            break;  
          
            case '/notes.txt':  
            fs.readFile("/notes.txt", 'utf8', function(err, data) {
                    if (err) throw err;
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                  });
            break;  
        default:  
            response.writeHead(404);  
            response.write("FAILED TO LOCATE FILE - ERROR TYPE: 404");  
            response.end();  
            break;  
    }  
});  
server.listen(21094);  











