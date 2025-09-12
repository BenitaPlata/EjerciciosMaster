
// Importa el módulo http para crear el servidor
const http = require('http');

// Función que maneja las solicitudes entrantes
const requestHandler = (req, res) => {
  if (req.url === '/hello') {
    res.setHeader('Content-Type', 'text/plain'); // texto plano
    res.writeHead(200);
    res.end('Hello from NodeJS!');
  } else if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200);
    res.end('Bienvenido a la página principal');
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(404);
    res.end('Ruta no encontrada');
  }
};

// Define el puerto del servidor
const PORT = 3000;

// Crea el servidor con el manejador definido
const server = http.createServer(requestHandler);

// Inicia el servidor y muestra mensaje cuando esté listo
server.listen(PORT, () => {
  console.log(`Server started in <http://localhost>:${PORT}`);
});