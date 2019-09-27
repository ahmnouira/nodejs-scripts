// to run ex: HOST=192.168.1.3 PORT=4000 node app.js 
var http = require('http')

const host = process.env.HOST || 'localhost',
          port = process.env.PORT || '4000',
          path = '/api/vendeur'

http.get('http://' + host + ':' + port + path, (res) => {
    console.log('GET to :', 'http://' + host + ':' + port + path, '\n')
    var data = '';
    res.on('data', (chunk) => {
        data += chunk
    })
    res.on('end', () => {
        console.log(JSON.parse(data))
    })
}).on('error', (err) => {
    console.log(err)
}).end()




