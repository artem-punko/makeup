var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var image = require('./routes/image');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://makeup_collection:30secondstomars@ds119258.mlab.com:19258/makeup_collection', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/upload', express.static(path.join(__dirname, 'dist')));
app.use('/gallery', express.static(path.join(__dirname, 'dist')));
app.use('/profile', express.static(path.join(__dirname, 'dist')));
app.use('/image', image);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;




























// var express = require('express');
// var bodyParser = require('body-parser');
// const path = require('path');
// const http = require('http');

// var app = express();

// app.use(express.static(path.join(__dirname, 'dist')));

// app.use(bodyParser.json());


// app.post('/save', function (req, res) {

// });

// app.get('/upload', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });


// const port = process.env.PORT || '3001';
// app.set('port', port);

// const server = http.createServer(app);

// server.listen(port, () => console.log(`Running on localhost:${port}`));