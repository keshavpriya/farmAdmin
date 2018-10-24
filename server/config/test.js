var request = require('request');

exports.getdemoData = function (req, res, next) {
  request.get('http://httpbin.org/ip', function (err, response, body) {
    if (err) {
      console.log("Error get real time Data" + err);
    }
    console.log(JSON.parse(body));
  });
}

