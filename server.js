const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => {
    // res.write("Hello, Node.");
    // res.end();
    let method = req.method+ " ";
    let url = req.url + "\n\n";
    let headers = JSON.stringify(req.headers, null, 4);

    res.writeHead(200, {'content-Type': 'text/plain'});
    res.write(method);
    res.write(url);
    res.write(headers);
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});