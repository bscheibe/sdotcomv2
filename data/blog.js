var authorData = require('./authors');

var blogData = {
	
	//If you don't want to have a header image, then set image to none
	//You can choose from any of the bootstrap icons

	//Home Page Data
	blogs : [
		//This is one blog post
		{
			title       : "Roadmunk's First Blog Post", //
			image       : "/images/blog-image1.png", //
			icon        : "home", //
			author      : authorData.latif, //
			date        : "November 12, 2013", //
			description : "Roadmunk's First Blog",
			partial     : "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don’t know exactly when we turned on each other, but I know that seven of us survived the slide… and only five made it out. Now we took an oath, that I’m breaking now. We said we’d say it was the snow that killed the other two, but it wasn’t. Nature is lethal but it doesn’t hold a candle to man.",
			content     : "/blog/blog1", //
			banner      : false,
			bannerURL   : "banner.png",
			id          : '1', //
			filename    : true //
		},
		//This is another blog post
		{
			title       : "Wow A SECOND blog",
			image       : "none",
			icon        : "home",
			author      : authorData.latif, //
			date        : "November 12, 2013",
			description : "Roadmunk's Second Blog",
			partial     : "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don’t know exactly when we turned on each other, but I know that seven of us survived the slide… and only five made it out. Now we took an oath, that I’m breaking now. We said we’d say it was the snow that killed the other two, but it wasn’t. Nature is lethal but it doesn’t hold a candle to man.",
			content     : "/blog/blog2",
			banner      : false,
			bannerURL   : "banner.png",
			id          : '2',
			filename    : true
		}
	]
};

module.exports = blogData;