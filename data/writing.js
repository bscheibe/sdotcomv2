var authorData = require('./authors');
var _          = require('lodash');

var defaultArticle = {
	title       : "Default Title",	// The title of the blog post that will be display to the readers. This will also be converted to be used as the url of the blog post
	postImage   : "none", //The image you want to use in the http://roadmunk.com/blog/ meta page that holds all the posts. This can be the same as image or different.
	category    : "coaching", //The category of the blog post. Currently choose from ReleaseNotes, Startups & General. You can attach multiple just put a space in between them
	icon        : "star", //The icon you want to use on the main blog page. You can choose from any of the ones found here: http://getbootstrap.com/components/#glyphicons. All you need to do is add the name of the icon following `gylphicon-`
	date        : "May 4, 1994", //The date the blog post was published.
	partial     : "A article by Brent Scheibelhut", //The short partial on the main blog page describing the blog post
	url         : false, //The URL of the blog post. This is generated automatically.
};

var brentArticle = _.defaults(defaultArticle, { author : authorData.brent });

var writingData = module.exports = {

	categories : [
		"Coaching",
		"Recognition",
		"Support"
	],

	articles : [

		_.defaults({
			title       : "Recognize and Motivate via Salesforce",
			postImage   : "/images/writing/recognize1.jpg",
			icon        : "edit",
			category    : "recognition",
			date        : "October 28th, 2013",
			partial     : "3 Ways to Recognize and Motivate Employees published by Salesforce",
			url         : "http://blogs.salesforce.com/company/2013/10/motivate-employees.html"
		}, brentArticle),

		_.defaults({
			title       : "Recognize and Motivate via Work.com",
			postImage   : "/images/writing/recognize2.jpg",
			icon        : "edit",
			category    : "recognition",
			date        : "November 15, 2013",
			partial     : "3 Ways to Recognize and Motivate Employees Using Salesforce published by Work.com",
			url         : "http://work.com/blog/2013/11/5-tips-tricks-badge-recognition-within-work-com-salesforce/"
		}, brentArticle),

		_.defaults({
			title       : "Coaching via Salesforce",
			postImage   : "/images/writing/coaching.jpg",
			icon        : "edit",
			category    : "coaching",
			date        : "December 9, 2013",
			partial     : "3 Sales Coaching Tips with Salesforce.com",
			url         : "http://blogs.salesforce.com/company/2013/12/sales-coaching.html"
		}, brentArticle),

		/*_.defaults({
			title       : "Jack Frost &#58; 0 Schybo &#58; 1",
			postImage   : "/images/blog/jack-frost.jpg",
			image       : "/images/blog/jack-frost.jpg",
			icon        : "edit",
			category    : "editorials",
			date        : "February 8th, 2013",
			description : "Jack Frost vs. Brent Scheibelhut",
			partial     : "Brent faces off against Jack Frost"
		}, brentArticle),*/
	
	]
};
//Would be cool if you sorted by date, instead of the order they appeared

//Add the all category for the blog category
writingData.categories.unshift("All");