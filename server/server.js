var express 	= require('express');
var app         = express();
var bodyParser  = require('body-parser');



var test=require('./config/test');

var port = process.env.PORT || 1993;


// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('body-parser').json({ type : '*/*' }));



// Enable CORS from client-side
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// basic routes

app.get('/', function(req, res) {
  res.send('Expense Watch API is running at http://localhost:' + port + '/api');
});



// express router
var apiRoutes = express.Router();

app.get('/gettestData',test.getdemoData);
app.use('/api', apiRoutes);





// authenticated routes
apiRoutes.get('/', function(req, res) {
  res.status(201).json({ message: 'Welcome to the authenticated routes!' });
});





// kick off the server
app.listen(port);
console.log('Expense Watch app is listening at http://localhost:' + port);
