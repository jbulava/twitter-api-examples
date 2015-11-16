/*!
 * Twitter REST Search Example
 *
 * This Node.js application demonstrates how to use:
 *   Search - REST API endpoint for past Tweets
 *
 * For documentation, see the following:
 *   https://github.com/ttezel/twit#twit
 *   https://dev.twitter.com/rest/public/search
 *   https://dev.twitter.com/rest/reference/get/search/tweets
 *   https://t.co/TweetObject
 *
 * Before running:
 *   Create an app at t.co/apps to get consumer keys and generate access keys.
 *   Add these keys to your config.js file (if you have not created this yet, 
 *   copy config.sample.js to a file named config.js).
 *
 * To run:
 *   npm install twit (only required once)
 *   node search.js
 *
 * By @jbulava
 */

var config = require('./config.js'); // Config file for API keys
var TwitPackage = require('twit');   // Requiring the Twit package
var T = new TwitPackage(config);     // Creating an instance of the Twit package

/* REST API - Search for past Tweets */
T.get('search/tweets', { q: '#NowPlaying', count: 10 }, function(err, data, response) {
  for (x in data.statuses) {
  	console.log("\n" + data.statuses[x].text);
  	console.log('by ' + data.statuses[x].user.name + ' (@' + data.statuses[x].user.screen_name + ')');
  }
});

// Note: For other functions, events, and parameters, go here:
// https://github.com/ttezel/twit#usage