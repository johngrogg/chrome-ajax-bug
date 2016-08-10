# Chrome 52 AJAX Bug
There is currently a bug in Chrome 52 (and Canary 54) with the way GET AJAX Requests that are triggered one within the response of another, with matching ETags are handled.

Not all of the events are triggered for the 2nd response, most importantly the load event. This means in most javascript libraries (Angular, jQuery, etc) that the second request never completes.

To re-create simple run the following commands:

1. `npm install`
2. `bower install`
2. `node app.js`


Then, browse to [http://localhost:3001](http://localhost:3001) and click the "Test GET Http Calls" button. The first request will complete, displaying the result, but the second nested request does not complete.

If you open Chrome's Developer Tools and go to the Console tab, further information about the events will appear.

Note that I've overriden Angular's default xhrFactory to simply add an additional "test" attribute to more easily differentiate which XMLHttpRequest object the event responses were for.
