// Run this code in Terminal through command: node server.js
// ============================================================================
// Code for videos 13,14
// ============================================================================

var http = require('http');

// Giving 404 response
function send404Response(response) {
    response.writeHead(404,{"Context-Type":"text/plain"});
    response.write("Error 404; Page not found");
    response.end();
}

// Here request is made by the user and response is send by the server
function onRequest(request, response) {

    // URL validation for GET request
    if(request.method == 'GET' && request.url == '/') {
        response.writeHead(200,{"Context-Type":"text/html"});
    }

    // Code for Video-13
    // // Here, it prints 2 times, '/', and '/favicon.ico'
    // console.log("User made a request " + request.url);
    
    // // 200 indicates everything is good and 
    // // second arguement indicates, reponse is in plain text format
    // response.writeHead(200, {"Context-Type":"text/plain"});
    
    // // content of the response
    // response.write("This is the data...");
    // response.end();


}

// The parameter onRequest is the code that runs on server
// when user tries to connect to the server
// 8888 is the port that the server is running on..
http.createServer(onRequest).listen(8888);
console.log("server is now running...")