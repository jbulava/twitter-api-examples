/*!
 * Twitter User Streams Example
 *
 * This Node.js application demonstrates how to use:
 *   User Streams - User-based events
 *
 * For documentation, see the following:
 *   https://github.com/ttezel/twit#twit
 *   https://dev.twitter.com/streaming/userstreams
 *   https://t.co/TweetObject
 *
 * Before running:
 *   Create an app at t.co/apps to get consumer keys and generate access keys.
 *   Add these keys to your config.js file (if you have not created this yet, 
 *   copy config.sample.js to a file named config.js).
 *
 * To run:
 *   npm install twit (only required once)
 *   node userstream.js
 *
 * By @jbulava
 */

var config = require('./config.js'); // Config file for API keys
var TwitPackage = require('twit');   // Requiring the Twit package
var T = new TwitPackage(config);     // Creating an instance of the Twit package

/* Define which Twitter handle to track */
var screen_name = 'jbulava';

/* Create a Twitter User Stream connection */
var user_stream   = T.stream('user');

/* Listen for favorite events */
user_stream.on('favorite', function (eventMsg) {
  // An if statement to exclude favorites BY the screen_name defined above
  if (eventMsg.target.screen_name = screen_name) {
    console.log('@' + eventMsg.source.screen_name + ' has favorited a Tweet.');
  }
});

/* Listen for follow events */
user_stream.on('follow', function (eventMsg) {
  // An if statement to exclude follows BY the screen_name defined above
  if (eventMsg.target.screen_name = screen_name) {
    console.log('@' + eventMsg.source.screen_name + ' is a now a follower.');
  }
});

// Note: For other functions, events, and parameters, go here:
// https://github.com/ttezel/twit#usage