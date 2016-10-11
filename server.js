var p = process;
"use strict"

var http = require('http'),
	url = require('url'),
	path = require('path'),
	fs = require('fs');

var mimeTypes = {
	"html": "text/html",
	"png": "image/png",
	"js": "text/javascript",
	"css": "text/css"
};


var dirAplicacion = p.argv[2];

http.createServer(staticServer).listen(3000);
console.log('escuchando... '+ dirAplicacion+' Mira en http://localhost:3000 ');

function staticServer(req, res) {
	if(req.url.indexOf('jspm_packages')<0 && req.url.indexOf('refs')<0) console.log("req.url: " + req.url);
	var urlParseada = url.parse(req.url);
	var pathname = urlParseada.pathname;
	fileServer(res, pathname);
}

function fileServer(res, pathName) {
	if(pathName==="/") pathName = "/index.html";
	var fileName = path.join(p.cwd(),dirAplicacion, pathName);
	var extension = path.extname(fileName).split(".")[1];
	if (!extension) {
		extension = "html";
		fileName += "." + extension;
	}
	fs.exists(fileName, ifExists);

	function ifExists(exists) {
		if (exists) {
			sendFile(res, extension, fileName);
		} else {
			console.log("no encuentro: " + fileName);
			notFound(res);
		}
	}
}

function sendFile(res, extension, fileName) {
	var mimeType = mimeTypes[extension];
	res.writeHead(200, {
		'Content-Type': mimeType
	});
	fs.createReadStream(fileName).pipe(res);
}

function notFound(res) {
	res.writeHead(404, {
		'Content-Type': 'text/html'
	});
	res.write('404 - No he encontrado nada por aquí :-(');
	res.end();
}