const http = require('http');


http.createServer((req, res) => {

    /// res.writeHead(200,{'Content-Type'}: 'application/json')
    /// res.setHeader('Content-Type', 'attachment; filename=lista.csv');
    /// res.writeHead(200,{'Content-Type'}: 'application/cvs')
    

    res.write('Hola mundo');
    res.end();
})
.listen (8080 );

console.log('Escuchando el puerto', 8080);