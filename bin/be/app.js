var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const recursiveReadSync = require('recursive-readdir-sync')
const contains = require("string-contains")
const expressValidator = require('express-validator');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator());
app.use('/', express.static(path.join(path.normalize(__dirname), '../../views')));

try {
  recursiveReadSync('logic/processes').forEach(file => {
    if (!contains(file, '.gitkeep')) {
      //require('../../' + file)(app);
      app.use('/api',require('../../' + file)(app));
    }
  });
} catch (err) {
  if (err.errno === 34) {
    console.log('Path does not exist');
  } else {
    //something unrelated went wrong, rethrow
    throw err;
  }
}

/**
 * avoid cors
*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



/**
 * welcome backend route
*/
app.get('/api/version', (req,res)=>{
	res.status(200).json({hello:"world"})
});

app.get('/', (req, res) => {
  res.json({
      message : 'vApp backend is running',
      data: new Date()
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;