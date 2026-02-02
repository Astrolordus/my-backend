const http = require('http');
const fs = require('fs'); 
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
  
    /*fs.readFile('./index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Ошибка загрузки страницы');
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });*/
	 res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Сервер работает на Node.js!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Page not found');
  }
});

server.listen(PORT, () => {
  console.log(` HTML-сервер запущен: http://localhost:${PORT}`);
  function logRequest(req, status, message = '') {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} | ${req.method} ${req.url} | Status: ${status} | ${message}\n`;
  
  
  console.log(logMessage.trim());
  
  
  fs.appendFile('server.log', logMessage).catch(err => {
    console.error('Ошибка записи в лог:', err.message);
  });
}
}); 
