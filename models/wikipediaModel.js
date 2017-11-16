const request = require('request')

var wikipediaModel = (search, callback) => {
  var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&limit=1&search=' + search
  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    const result = JSON.parse(body)

    var hasil = {}
    hasil.tempat = result[0]
    hasil.penjelasan = result[2][0]
    hasil.link = result[3][0]


    callback(hasil)
  })
}

module.exports = wikipediaModel;
