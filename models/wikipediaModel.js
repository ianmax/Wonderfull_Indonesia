const request = require('request')

var wikipediaModel = (search, callback) => {
  var url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&titles=${search}&redirects=true`
  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    const result = JSON.parse(body)
    var coba = result.query.pages
    var property = Object.getOwnPropertyNames(coba)[0]

    callback(result.query.pages[property])
  })
}

module.exports = wikipediaModel;
