let http = require('http')
let port = 5000
http.createServer((req, res) => {
    if(req.url === '/') {
        let body = 'Hello!  my name is ahmed '
        res.writeHead(200, {'Content-Type': 'text/plain', 'Content-Length': body.length})
        res.end(body)   
    }
}).listen(port, () => {
    console.log('Server runnig at http://localhost:' + port)
})
