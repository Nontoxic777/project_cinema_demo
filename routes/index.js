var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tao-phim', function(req, res, next) {
  res.render('movie/tao-phim', { title: 'Create New Movie' });
});


module.exports = router;
