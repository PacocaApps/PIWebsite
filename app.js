var http = require('http');
var fs = require('fs');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    fs.readFile('./index.html',null,function(error,data){
    if(error) {
        response.writeHead(404);
        response.write("File Not Found Error Type 404 ")
    }else{
        console(__dirname)
        console(__filename)
        response.write(data);
        
    }
    response.end();


    })

}
http.createServer(onRequest).listen(21094);