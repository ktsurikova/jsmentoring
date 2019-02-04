const News = require('./news');

exports.add = function (req, res) {
  let news = new News({
    title: req.body.title,
    author: req.body.author,
    text: req.body.text,
    date: Date.now()
  });
  news.save(function (err) {
    if (err) {
      return next(err);
    }
      res.send('news was added successfully');
  })
};

exports.getAll = function (req, res) {
  News.find({}, function (err, result) {
    if (err) return next(err);
    res.send(result);
  })
};

exports.getById = function (req, res) {
  News.findById(req.params.id, function (err, result) {
    if (err) return next(err);
    res.send(result);
  })
};

exports.update = function (req, res) {
  News.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, result) {
    if (err) return next(err);
    res.send('news was udpated successfully');
  });
};

exports.remove = function (req, res) {
  News.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send('new was deleted successfully');
  })
}
