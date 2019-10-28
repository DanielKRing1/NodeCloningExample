// Cloning example
// Run with 'pm2 [rngServer.js] -i -1'
// to run cluster of processes
// Pm2 will handle load balancing between processes

// Can test with 'loadtest -n 2000 http://localhost:4000'

const http = require('http');

const server = http.createServer((req, res) => {
    const rng = Math.random();

    const payload = JSON.stringify({
        processID: process.pid,
        rng
    });

    console.log(`Rng ${rng}...\n...from Process ${process.pid}\n\n`)

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(payload);
}).listen(4000);
