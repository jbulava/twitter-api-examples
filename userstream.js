/*!
 * Twitter User Streams Example
 *
 * This Node.js application demonstrates how to use:
 *   User Streams - User-based events
 *
 * For documentation, see the following:
 *   https://dev.twitter.com/streaming/userstreams
 *
 * Before running:
 *   Create an app at t.co/apps to get consumer keys and generate access tokens for lines 23-26.
 *
 * To run:
 *   npm install twit (only required once)
 *   node userstream.js
 *
 * By @jbulava
 */

var Twit = require('twit');

var T = new Twit({
    consumer_key:         'ADD-KEY-HERE'
  , consumer_secret:      'ADD-KEY-HERE'
  , access_token:         'ADD-KEY-HERE'
  , access_token_secret:  'ADD-KEY-HERE'
});

// Define which Twitter handle to track
var screen_name = 'jbulava';

// Create a Twitter User Stream connection
var user_stream   = T.stream('user');

// Listen for favorite events
user_stream.on('favorite', function (eventMsg) {
  // An if statement to exclude favorites BY the screenname
  if (eventMsg.target.screen_name = screen_name) {
    console.log('@' + eventMsg.source.screen_name + ' has favorited a Tweet.');
  }
});

// Listen for follow events
user_stream.on('follow', function (eventMsg) {
  // An if statement to exclude follows BY the screenname
  if (eventMsg.target.screen_name = screen_name) {
    console.log('@' + eventMsg.source.screen_name + ' is a now a follower.');
  }
});