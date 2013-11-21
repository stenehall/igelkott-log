var Fs = require('fs'),
    Colors = require('colors');


var Log = function Log () {

  this.listeners = {sending: this.sending, receiving: this.receiving};

  // Lets create the db folder if it doesn't exist
  Fs.stat('./log', function(err, stat) {
    if(err !== null && err.code === 'ENOENT')
    {
        Fs.mkdir('log');
    }
  });

  this.igelkott.composer.on('data', function(message) {
    this.igelkott.emit('sending', message);
  }.bind(this));

  this.igelkott.parser.on('data', function(message) {
    this.igelkott.emit('receiving', message);
  }.bind(this));

  this.igelkott.log = function log(text) {
    text = "Message   | "+text;
    console.log(text.yellow);
  };
};

Log.prototype.sending = function sending (message) {
  var log = "Sending   > " + message.toString().replace("\r\n",'');
  console.log(log.green);
  Fs.appendFile("./log/log", message.toString().replace("\r\n",'') + "\n");
}.bind(this);

Log.prototype.receiving = function receiving (message) {
  var log = "Receiving < " + message.toString().replace("\r\n",'');
  console.log(log.cyan);
  Fs.appendFile("./log/log", message.toString().replace("\r\n",'') + "\n");
}.bind(this);


exports.Plugin = Log;