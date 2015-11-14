/*!
 * Twitter Filter Streaming Example
 *
 * This Node.js application demonstrates how to use:
 *   Filter Stream - Receive Tweets matching a query
 *
 * For documentation, see the following:
 *   https://dev.twitter.com/streaming/reference/post/statuses/filter
 *
 * Before running:
 *   Create an app at t.co/apps to get consumer keys and generate access tokens for lines 23-26.
 *
 * To run:
 *   npm install twit (only required once)
 *   node filter.js
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

/* Streaming API - Real time search */
var filter_stream = T.stream('statuses/filter', { track: '#Paris' });

filter_stream.on('tweet', function (tweet) {
  console.log(tweet.text + "\n");
})