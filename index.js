const http = require('http');
const fs = require('fs')

let server = http.createServer((req, res) => {
    res.writeHead(200,  {'Content-Type': 'text/html; charset=utf-8'})
   
    if(req.url == '/'){
        fs.createReadStream('./teamplates/main.html').pipe(res)
    }else if(req.url == '/about'){
        fs.createReadStream('./teamplates/about.html').pipe(res)
    }else{
        fs.createReadStream('./teamplates/error.html').pipe(res)
    }
})

const HOST = 'localhost'
const PORT = 3001

server.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`)
})