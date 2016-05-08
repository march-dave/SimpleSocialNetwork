var express = require('express');
var router = express.Router();

var path = require('path');


// router.get('/', function(req, res, next) {
//   var indexPath = path.join(__dirname, '../views/index.html');
//   res.sendFile(indexPath);
// });

router.get('/', function(req, res, next) {
  res.render('index');

});

module.exports = router;
