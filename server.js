import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT || 5000;

// Get current file path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // timestamp 00:56:32

const server = http.createServer((req, res) => {

    try {
        // Check if GET request
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Welcome to the Home Page');
            } else if (req.url === '/about') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Welcome to the About Page');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Page Not Found');
            }
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
    }

});

server.listen(8000, () => {
    console.log(`Server is running on port ${PORT}`)
})

// Next step to install nodemon for auto-reloading | video timestamp: 00:35:17