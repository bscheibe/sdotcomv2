var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Roadmunk' });
});

var homeData = {
	title : "Roadmunk Landing Page",
	description : "Create Brilliant Roadmaps with Roadmunk",
	author : "Brent Scheibelhut",
	content : "home",
	filename: true
}

/* GET test page. */
router.get('/test', function(req, res) {
  res.render('layout', homeData);
});

module.exports = router;
