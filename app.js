var express = require("express"),
  app = express(),
  server = require('http').createServer(app),
  fs = require('fs'),
  path = require('path');

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
