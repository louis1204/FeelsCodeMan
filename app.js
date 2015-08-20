var express = require("express"),
	app = express(),
	server = require('http').createServer(app),
  sockjs  = require('sockjs'),
	fileStatusSocket = sockjs.createServer({}),
	chokidar = require('chokidar'),
	fs = require('fs'),
  path = require('path');

var watcher = chokidar.watch('gallery', {ignored: /[\/\\]\./, persistent: true});

fileStatusSocket.on('connection', function(conn) {

	['add', 'addDir', 'change', 'unlink', 'unlinkDir'].forEach(function(eventType){
		watcher.on(eventType, function(path){
			setTimeout(function(){
				conn.write(JSON.stringify({ type : eventType, path : "/" + path}));
			},500);
		});
	});

	fs.readdir('gallery', function(err, files){
			if (!err){
				var initialFiles = files.filter(function(filename){
					return !(filename.match(/^\./));
				});
				initialFiles.forEach(function(filename){
					conn.write(JSON.stringify({ type : 'add', path : "/gallery/" + filename}));
				});
			}
	});

    conn.on('data', function(message) {});
    conn.on('close', function() {});
});


fileStatusSocket.installHandlers(server, {prefix:'/filestatus'});

app.use(express.static(__dirname+'/client'));

app.get('/thumbs/gallery/*', function(req, res, next) {
	var src_path = __dirname + '/gallery/' + req.params[0];
    var dst_path = __dirname + '/thumbs/' + req.params[0];
    fs.exists(dst_path, function(exists) {
	  if (exists) {
	    res.sendfile(dst_path);
	  }
	});

});

app.use("/gallery",  express.static(__dirname + '/gallery'));



server.listen(process.env.PORT || 8000);
if (process.env.PORT) {
  console.log('Listening on localhost:' + process.env.PORT);
} else {
  console.log('Listening on localhost:8000');
}
