/*!
 * Twitter 1% Sample Streaming Example
 *
 * This Node.js application demonstrates how to use:
 *   Sample Stream - Receive 1% of all Tweets
 *
 * For documentation, see the following:
 *   https://dev.twitter.com/streaming/reference/get/statuses/sample
 *
 * Before running:
 *   Create an app at t.co/apps to get consumer keys and generate access tokens for lines 23-26.
 *
 * To run:
 *   npm install twit (only required once)
 *   node sample.js
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

/* Streaming API - 1% sample of Twitter */
var sample_stream = T.stream('statuses/sample');

sample_stream.on('tweet', function (tweet) {
  console.log('@' + tweet.user.screen_name + ': ' + tweet.text + "\n");
})