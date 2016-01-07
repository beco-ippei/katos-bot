/*
 * copy from 'node_modules/botkit/bot.js'
 * Read all about it here:
 *   -> http://howdy.ai/botkit
 */

var Botkit = require('botkit/lib/Botkit.js')
request = require('request');

controller = Botkit.slackbot({
  debug: false,
});

bot = controller.spawn(
  {
    token:process.env.token
  }
).startRTM();

MENTIONS = 'direct_message,direct_mention,mention';
AMBIENT = 'ambient';


require('coffee-script');
require('coffee-script/register');

// file is included here:
(function() {
  var fs = require('fs');

  var files = fs.readdirSync('lib');
  for (i in files) {
    require("./lib/" + files[i]);
  }

  var files = fs.readdirSync('scripts');
  for (i in files) {
    require("./scripts/" + files[i]);
  }
})();

