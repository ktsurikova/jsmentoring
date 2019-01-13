const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let newsRouter = require('./routes/news');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const logFormat = printf(req => {
  return `${req.timestamp} method: ${req.message.method} url: ${JSON.stringify(req.message.url)} body: ${JSON.stringify(req.message.body)}`;
});
const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'winston.log' })
  ]
});

const mongoose = require('mongoose');
let uri = 'mongodb://root:2021Kate123@ds217138.mlab.com:17138/newsapp';
mongoose.connect(uri);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  logger.log({
    level: 'info',
    message: req
  });
  next();
});

app.use('/news', newsRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
