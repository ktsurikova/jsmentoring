const News = require('./news');

exports.add = function (req, res) {
  let news = new News({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    url: req.body.url,
    urlToImage: req.body.urlToImage,
    content: req.body.content,
    source: req.body.source,
    publishedAt: Date.now()
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
    let data = {
      news: result,
      totalResults: result.length
    };
    res.send(data);
  })
};

exports.getById = function (req, res) {
  News.find({url: req.params.id}, function (err, result) {
    if (err) return next(err);
    res.send(result);
  })
};

exports.update = function (req, res) {
  News.findOneAndUpdate({url: req.params.id}, {$set: req.body}, function (err, result) {
    if (err) return next(err);
    res.send({updated: true});
  });
};

exports.remove = function (req, res) {
  News.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send('new was deleted successfully');
  })
}
