Twitter REST and Streaming Examples
=========================

This Node.js application demonstrates how to use:
------------
 - REST API - search (search.js)
 - Streaming API - 1% sample (sample.js)
 - Streaming API - filter (filter.js)
 - Streaming API - user stream (userstream.js)

Documentation for these endpoints
------------
 - https://dev.twitter.com/rest/public/search
 - https://dev.twitter.com/rest/reference/get/search/tweets
 - https://dev.twitter.com/streaming/reference/get/statuses/sample
 - https://dev.twitter.com/streaming/reference/post/statuses/filter
 - https://dev.twitter.com/streaming/userstreams

Before running
------------
 - Create an app at t.co/apps to get consumer keys and generate access tokens.
 - Add these tokens to the block intializing the Twit object (typically starts around line 23).

Install twit
------------
	npm install twit 

To run
-----------
	node filter.js
	node sample.js
	node search.js
	node userstream.js

By [@jbulava](https://twitter.com/jbulava)
