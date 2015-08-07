var path = require('path');
var ghost = require('ghost');

ghost({
  config: path.join(__dirname, '/blog/config.js')
}).then(function (ghostServer) {
  ghostServer.start();
});
