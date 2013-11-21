var assert = require('chai').assert,
Stream = require('stream'),

Igelkott = require('igelkott'),
Log = require('../igelkott-log.js').Plugin;


describe('Log', function() {

  var igelkott,
  config,
  s,
  server;

  beforeEach(function () {
    s = new Stream.PassThrough({objectMode: true});

    config = {
      "server": {
        "nick": "igelkott",
      },
      plugins:['privmsg'],
      'adapter': s, 'connect': function() { this.server.emit('connect'); }
    };

    igelkott = new Igelkott(config);
  });


  it('Should create a log/ folder on load');
  it('Should log all outgoing messages in log/log');
  it('Should log all incomming messages in log/log');

});
