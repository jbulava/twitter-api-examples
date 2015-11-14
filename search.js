/*!
 * Twitter REST Search Example
 *
 * This Node.js application demonstrates how to use:
 *   Search - REST API endpoint for past Tweets
 *
 * For documentation, see the following:
 *   https://dev.twitter.com/rest/public/search
 *   https://dev.twitter.com/rest/reference/get/search/tweets
 *
 * Before running:
 *   Create an app at t.co/apps to get consumer keys and generate access tokens for lines 24-27.
 *
 * To run:
 *   npm install twit (only required once)
 *   node search.js
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

/* REST API - Search for past Tweets */
T.get('search/tweets', { q: '#HackPrinceton', count: 10 }, function(err, data, response) {
  for (x in data.statuses) {
    console.log(data.statuses[x].text);
  }
})