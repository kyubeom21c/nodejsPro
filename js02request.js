console.log("Hello request");
var request = require('request');
request('http://yangssem.blog.me',
        function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});
