import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import app from './app';

const PORT = 4000;

app.set('port',PORT);

let server;
let runOnHTTPS = true;

if (runOnHTTPS) {
	const key = fs.readFileSync(
		path.resolve(__dirname, './ssl/server.key'),
		'utf8'
	);
	const cert = fs.readFileSync(
		path.resolve(__dirname, './ssl/server.crt'),
		'utf8'
	);
	server = https.createServer({ key, cert }, app);
} else {
	server = http.createServer(app);
}

server.listen(PORT);

server.on('listening', () => {
	console.log(`Server is listening on port ${PORT}....!`);
});
