var http  = require('http');
var https = require('https');
var app   = require('./app');
var fs    = require('fs');

var ports   = {};
ports.http  = process.env.PORT || 3030;
ports.https = ports.http == 80 ? 443 : ports.http + 1;

var environment = process.env.NODE_ENV || "development";

https.createServer({
	key  : fs.readFileSync('roadmunk-key-' + environment + '.pem'),
	cert : fs.readFileSync('certificates/roadmunk-' + environment + '.cer'),
	ca   : fs.readdirSync('certificates/intermediate').map(function(file) {
		return fs.readFileSync('certificates/intermediate/' + file);
	})
}, app).listen(ports.https);

// redirect server on unencrypted http port
http.createServer(function(req, res) {
	var host = req.headers.host;

	if (!host || host === '') {
		res.statusCode = 400;
		res.end('client must send host header');
		return;
	}

	host = host.split(':', 2);

	if (!host || host.length === 0) {
		res.statusCode = 400;
		res.end('bad host header');
		return;
	}

	res.statusCode = 301;
	res.setHeader('Location', 'https://' + host[0] + ':' + ports.https + req.url);
	res.end();
}).listen(ports.http);

console.log('Listening on http://localhost:' + ports.http);
console.log('Listening on https://localhost:' + ports.https);
