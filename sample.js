/*!
 * Twitter 1% Sample Streaming Example
 *
 * This Node.js application demonstrates how to use:
 *   Sample Stream - Receive 1% of all Tweets
 *
 * For documentation, see the following:
 *   https://github.com/ttezel/twit#twit
 *   https://dev.twitter.com/streaming/reference/get/statuses/sample
 *   https://t.co/TweetObject
 *
 * Before running:
 *   Create an app at t.co/apps to get consumer keys and generate access keys.
 *   Add these keys to your config.js file (if you have not created this yet, 
 *   copy config.sample.js to a file named config.js).
 *
 * To run:
 *   npm install twit (only required once)
 *   node sample.js
 *
 * By @jbulava
 */

var config = require('./config.js'); // Config file for API keys
var TwitPackage = require('twit');   // Requiring the Twit package
var T = new TwitPackage(config);     // Creating an instance of the Twit package

/* Streaming API - 1% sample of Twitter */
var sample_stream = T.stream('statuses/sample');

/* When a Tweet is sent, this code will run */
sample_stream.on('tweet', function (tweet) {
  console.log("\n" + tweet.text);
  console.log('by ' + tweet.user.name + ' (@' + tweet.user.screen_name + ')');
});

// Note: For other functions, events, and parameters, go here:
// https://github.com/ttezel/twit#usage