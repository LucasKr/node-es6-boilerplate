import http from 'http';

export const port = 8080;
export const address = '127.0.0.1';

export default function start() {
  http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello\n');
  }).listen(port, address);
};
