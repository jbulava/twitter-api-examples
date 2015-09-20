/*!
 * Twitter REST and Streaming Examples
 *
 * This Node.js application demonstrates how to use:
 *   - REST API search
 *   - Streaming API 1% sample
 *   - Streaming API search
 *
 * For more information on these endpoints, see the following:
 *
 *   https://dev.twitter.com/rest/public/search
 *   https://dev.twitter.com/rest/reference/get/search/tweets
 *   https://dev.twitter.com/streaming/reference/get/statuses/sample
 *   https://dev.twitter.com/streaming/reference/post/statuses/filter
 *
 * Before running:
 *   - Make sure to comment out all but one of the examples at a time.
 *   - Create an app at t.co/apps to get consumer keys and generate access tokens for lines 30-33.
 *
 * To run:
 *   npm install twit (only required once)
 *   node twitter-rest-and-streaming.js
 *
 * By @jbulava
 */

var Twit = require('twit');

var T = new Twit({
    consumer_key:         ''
  , consumer_secret:      ''
  , access_token:         ''
  , access_token_secret:  ''
});

/* REST API - Search for past Tweets */
/*************************************/
T.get('search/tweets', { q: '#HackPR', count: 1 }, function(err, data, response) {
  console.log(data.statuses[0].text);
})

/* Streaming API - 1% sample of Twitter */
/****************************************/
var sample_stream = T.stream('statuses/sample');
sample_stream.on('tweet', function (tweet) {
  console.log('@' + tweet.user.screen_name + ': ' + tweet.text);
})

/* Streaming API - Real time search */
/************************************/
var filter_stream = T.stream('statuses/filter', { track: '#HackPR' });

// Indicate when a connection has been established
filter_stream.on('connect', function (request) {
  console.log('Listening ...');
})

// Listen for tweets
filter_stream.on('tweet', function (tweet) {
  console.log('@' + tweet.user.screen_name + ': ' + tweet.text);
})