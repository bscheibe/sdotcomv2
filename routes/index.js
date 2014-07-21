var express    = require('express');
var path       = require('path');
var pageData   = require('../data/index');
var blogData   = require('../data/blog');
var router     = express.Router();

pageData.forEach( function (objData) {
  if (objData.content == "home") {
    router.get('/', function(req, res) {
      res.render(objData.content, objData); // key instead of 'layout'
    });
  } else {
    router.get(path.join('/', objData.content), function(req, res) {
      res.render(objData.content, objData); // key instead of 'layout'
    });
  }
});

//Sitemap for Google and Yahoo search engines
router.get('/sitemap.xml', function(req, res) {
    res.sendfile('./sitemap.xml');
});

/* Create all the blog routes */
blogData.blogs.forEach(function (blog) {
  /* GET Blog page. */
  console.log(blog.url);
  router.get(path.join('/blog/', blog.url), function(req, res) {
    res.render('blog/' + blog.url, blog);
  });
});

router.get('*', function (req, res) {
  res.render('layout', 
  {
    title       : "Roadmunk 404",
    description : "Roadmunk 404 - Page Not Found. Product and software roadmapping at its best",
    author      : "Brent Scheibelhut",
    content     : "404"
  })
});

module.exports = router;
