var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  }
  
request
  .get('http://google.com/img.png')
  .on('response', function(response) {
    console.log(response.statusCode)
    console.log(response.headers['content-type'])
  })
  .pipe(request.put('http://mysite.com/img.png'))

request
  .get('http://mysite.com/doodle.png')
  .on('error', function(err) {
    console.log(err)
  })

})
