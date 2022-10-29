const http = require("http")
const port = 3000;

const rotas ={
    '/': 'curso de node',
    '/livros': 'entrei na pag de livros',
    '/autores': 'listagem de autores'
}
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
  });