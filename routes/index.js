var express = require('express');
var router = express.Router();

var path = require('path');


router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var indexPath = path.join(__dirname, '../views/index.html');
  res.sendFile(indexPath);
});

module.exports = router;
