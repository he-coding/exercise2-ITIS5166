
const http = require('http'); // http module
const fs = require('fs'); // file system module

const port = 8080; // port number
const host = 'localhost'; // host name

// create server
const server = http.createServer((req, res) =>{
    res.statusCode = 200; // status code
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';  // path to views folder

    // check the url and set the path
    if(req.url === '/contact') {
        path = path + 'contact.html';
    } else if(req.url === '/about'){
        path = path + 'about.html';
    } else if(req.url === '/index'){
        path = path + 'index.html';
    }  else {
        res.statusCode = 404;
        path = path + 'error404.html';
    }
    // read the file and send the response
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end(); // end the response
        } else {
            res.write(data); // write the data to the response
            res.end();
        }
    });

});

// listen for requests
server.listen(port, host, () => {
    console.log('The server is running on port', port);
});