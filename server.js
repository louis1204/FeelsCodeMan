var path = require('path');
var ghost = require('ghost'),
express = require("express"),
app = express(),
server = require('http').createServer(app),
sockjs  = require('sockjs'),
fileStatusSocket = sockjs.createServer({}),
chokidar = require('chokidar'),
fs = require('fs');

ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  ghostServer.start();
});

app.get('/site', function (req, res) {
  var buffer = fs.readFileSync('client/index.html');
  var html = buffer.toString('utf-8');
  res.send(html);
});

app.get('/thumbs/gallery/*', function(req, res, next) {
	var src_path = __dirname + '/gallery/' + req.params[0];
    var dst_path = __dirname + '/thumbs/' + req.params[0];
    fs.exists(dst_path, function(exists) {
	  if (exists) {
	    res.sendfile(dst_path);
	  }
		/*else { hi
	    im.crop({
  		srcPath: src_path,
  		dstPath: dst_path,
  		width:   200,
  		height: 120
  		}, function(err, stdout, stderr){
			if (!err){res.sendfile(dst_path);}
		});
	}*/
	});

});

app.use("/gallery",  express.static(__dirname + '/gallery'));



server.listen(process.env.PORT || 8000);
if (process.env.PORT) {
  console.log('Listening on localhost:' + process.env.PORT);
} else {
  console.log('Listening on localhost:8000');
}
