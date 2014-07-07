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

/* GET Blog page. */
router.get('/blog1', function(req, res) {
  res.render('layout', blogData.blogs[0]);
});

/* GET Company page. */
router.get('/company', function(req, res) {
  res.render('layout', data.company);
});

/* GET Privacy Policy page. */
router.get('/privacy-policy', function(req, res) {
  res.render('layout', data.privacyPolicy);
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
