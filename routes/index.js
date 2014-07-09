var express = require('express');
var pageData = require('../data/index');
var blogData = require('../data/blog');
var router = express.Router();

var data = new pageData();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('layout', data.home);
});

/* GET Features page. */
router.get('/features', function(req, res) {
  res.render('layout', data.features);
});

/* GET Pricing page. */
router.get('/pricing', function(req, res) {
  res.render('layout', data.pricing);
});

/* GET Blog page. */
router.get('/blog', function(req, res) {
  res.render('layout', data.blog);
});

/* Create all the blog routes */
blogData.blogs.forEach(function (blog) {
  /* GET Blog page. */
  router.get(blog.content, function(req, res) {
    res.render('layout', blog);
  });
});

/* GET Company page. */
router.get('/company', function(req, res) {
  res.render('layout', data.company);
});

/* GET Privacy Policy page. */
router.get('/privacypolicy', function(req, res) {
  res.render('layout', data.privacypolicy);
});

/* GET Security Page */
router.get('/security', function(req, res) {
  res.render('layout', data.security);
});

/* GET Support page. */
router.get('/support', function(req, res) {
  res.render('layout', data.support);
});

/* GET Terms and Conditions page. */
router.get('/termsandconditions', function(req, res) {
  res.render('layout', data.termsandconditions);
});

/* The 404 route */
router.get('*', function (req, res) {
	res.render('layout', data.fourohfour);
});

module.exports = router;
