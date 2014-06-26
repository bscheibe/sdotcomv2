var express = require('express');
var pageData = require('../data/index');
var router = express.Router();

var data = new pageData();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Roadmunk' });
});

/* GET test page. */
router.get('/test', function(req, res) {
  res.render('layout', data.home);
});

module.exports = router;
