import 'dotenv/config';
import http from 'http';
import * as fs from 'fs';

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Сервер работает на Node.js!');
    } else {
        res.writeHead(404);
        res.end('Page not found!');
    }
    
    
    const logMessage = `${new Date().toString()} | ${req.method} ${req.url} | Status: ${res.statusCode}`;
    console.log(logMessage); 
    fs.appendFile('server.log', logMessage + '\n', (err) => {
        if (err) console.error('Ошибка записи:', err);
    });
});
const data = await fetch("https://jsonplaceholder.typicode.com/posts");
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
console.log(data);
server.listen(PORT, () => {
    console.log(`HTML-сервер запущен: http://${HOST}:${PORT}`);
});