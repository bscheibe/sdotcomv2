var authorData = require('./authors');

var blogData = {
	
	//If you don't want to have a header image, then set image to none
	//You can choose from any of the bootstrap icons

	//Home Page Data
	blogs : [
		//This is one blog post
		/*{
			title       : "Roadmunk's First Blog Post", //
			postImage   : "/images/blog/blog-image2.jpg", //
			image       : "default", //
			icon        : "home", //
			author      : authorData.latif,
			bioOn		: true,
			date        : "November 12, 2013", //
			description : "Roadmunk's First Blog",
			partial     : "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don’t know exactly when we turned on each other, but I know that seven of us survived the slide… and only five made it out. Now we took an oath, that I’m breaking now. We said we’d say it was the snow that killed the other two, but it wasn’t. Nature is lethal but it doesn’t hold a candle to man.",
			url         : "blog1",
			nextBlog    : "blog2",
			banner      : false,
			bannerURL   : "banner.png",
			id          : '-1', //
			content     : "/blog/blog-layout", //
			filename    : true //
		},
		//This is another blog post
		{
			title       : "Wow A SECOND blog",
			postImage   : "none",
			image       : "none",
			icon        : "home",
			author      : authorData.latif,
			bioOn		: true,
			date        : "November 12, 2013",
			description : "Roadmunk's Second Blog",
			partial     : "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don’t know exactly when we turned on each other, but I know that seven of us survived the slide… and only five made it out. Now we took an oath, that I’m breaking now. We said we’d say it was the snow that killed the other two, but it wasn’t. Nature is lethal but it doesn’t hold a candle to man.",
			url         : "blog2",
			nextBlog    : "roadmunk-launch",
			banner      : false,
			bannerURL   : "banner.png",
			id          : '0',
			content     : "/blog/blog-layout",
			filename    : true
		},*/
		//Roadmunk Launch Blog Post
		{
			title       : "Roadmunk Launch!",
			postImage   : "/images/blog/roadmunk-launch.png",
			image       : "default",
			icon        : "plane",
			author      : authorData.latif,
			bioOn		: false,
			date        : "June 20, 2014",
			description : "Blog post regarding Roadmunk's launch of their popular roadmapping app out of beta",
			partial     : "Roadmunk is officially launching on August 31, 2014! Thank you to the hundreds that reached out and provided critical feedback on the development and design of our platform. We couldn’t have done it without you. Existing Roadmunk accounts can be transitioned over to one our new plans. To see our pricing options, click below or contact us at support@roadmunk.com.",
			url         : "roadmunk-launch",
			nextBlog    : "new-timeline-layout-subheaders-tagging",
			banner      : false,
			bannerURL   : "banner.png",
			id          : '9',
			content     : "/blog/blog-layout",
			filename    : true
		},
		//Roadmunk Release May 21
		{
			title       : "New Timeline Layout, Sub-headers &#38; Tagging",
			postImage   : "/images/blog/new-timeline.png",
			image       : "default",
			icon        : "star",
			author      : authorData.latif,
			bioOn		: false,
			date        : "May 21, 2014",
			description : "New Timeline Layout, Sub-headers &#38; Tagging - all new features for the Roadmunk roadmap app",
			partial     : "Read more for all the information on the updates to the Roadmunk app",
			url         : "new-timeline-layout-subheaders-tagging",
			nextBlog    : "create-items-from-roadmap-views",
			banner      : false,
			bannerURL   : "banner.png",
			id          : '8',
			content     : "/blog/blog-layout",
			filename    : true
		},
		//Roadmunk Release March 24
		{
			title       : "Create Items from Roadmap Views",
			postImage   : "/images/blog/roadmap-views.png",
			image       : "default",
			icon        : "star",
			author      : authorData.latif,
			bioOn		: false,	date        : "March 24, 2014",
			description : "Roadmunk Release Notes from March 24th, 2014. Create items easily from any roadmap view",
			partial     : "It can be cumbersome to create items only from the Table View. Now users can create items on the Timeline or Swimlane View and drag them onto their roadmap.",
			url         : "create-items-from-roadmap-views",
			nextBlog    : "sort-and-prioritize-the-table-view",
			banner      : false,
			bannerURL   : "banner.png",
			id          : '7',
			content     : "/blog/blog-layout",
			filename    : true
		},
		//Roadmunk Release March 7
		{
			title       : "Sort and Prioritzie the Table View",
			postImage   : "/images/blog/sort-table.png",
			image       : "default",
			icon        : "star",
			author      : authorData.latif,
			bioOn		: false,	date        : "March 7, 2014",
			description : "Roadmunk Release Notes from March 7th, 2014. Sort and prioritize items in the table view for your roadmpa",
			partial     : "Click a column header to sort. Its too easy.",
			url         : "sort-and-prioritize-the-table-view",
			nextBlog    : "roadmunk-item-dialog-box",
			banner      : false,
			bannerURL   : "banner.png",
			id          : '6',
			content     : "/blog/blog-layout",
			filename    : true
		},
		//Roadmunk Release February 21
		{
			title       : "Roadmunk’s Item Dialogue Box",
			postImage   : "/images/blog/item-dialogue.png",
			image       : "default",
			icon        : "star",
			author      : authorData.latif,
			bioOn		: false,	date        : "February 21, 2014",
			description : "Roadmunk Release Notes from February 21, 2014. Discusses the all new Roadmunk Item Dialog Box for your roadmap",
			partial     : "Viewing and editing information should be quick. With our new Item Dialogue Box you can the edit item label, dates and custom properties without going back to the table view. Simple? We think so too.",
			url         : "roadmunk-item-dialog-box",
			nextBlog    : "publish-and-share-your-roadmap",
			banner      : false,
			bannerURL   : "banner.png",
			id          : '5',
			content     : "/blog/blog-layout",
			filename    : true
		},
		//Roadmunk Release January 20
		{
			title       : "Publish and Share your Roadmap",
			postImage   : "/images/blog/publish.png",
			image       : "default",
			icon        : "star",
			author      : authorData.latif,
			bioOn		: false,	date        : "January 20, 2014",
			description : "Roadmunk Release Notes from January 20, 2014. Explains how to publish and share your roadmap",
			partial     : "Have you ever wanted to share your roadmap privately with your team or clients? Now you can! Users can publish and share their roadmap via URL through the export menu.",
			url         : "publish-and-share-your-roadmap",
			nextBlog    : "color-roadmaps-on-roadmunk",
			banner      : false,
			bannerURL   : "banner.png",
			id          : '4',
			content     : "/blog/blog-layout",
			filename    : true
		},
		//Roadmunk Release November 25th 
		{
			title       : "Color Roadmaps on Roadmunk",
			postImage   : "/images/blog/color-item.png",
			image       : "default",
			icon        : "star",
			author      : authorData.latif,
			bioOn		: false,	date        : "November 25th, 2013",
			description : "Roadmunk Release Notes from November 25th, 2013. Color and personalize your personal roadmap with palettes handpicked by designers",
			partial     : "Design is at the center of Roadmunk and we want to create the greatest visual experience for our users. Therefore, we’ve introduced the capability to color items using three beautifully designed palettes. Simply select a field to Color by (eg. status), and assign the different values to a color to create the perfect roadmap.",
			url         : "color-roadmaps-on-roadmunk",
			nextBlog    : "productivity-tools-for-product-managers",
			banner      : false,
			bannerURL   : "banner.png",
			id          : '3',
			content     : "/blog/blog-layout",
			filename    : true
		},
		//Productivity Tools for Product Managers 
		{
			title       : "Productivity Tools for Product Managers",
			postImage   : "/images/blog/productivity.png",
			image       : "default",
			icon        : "star",
			author      : authorData.latif,
			bioOn		: false,	date        : "February 11, 2013",
			description : "Tips for practical software tools for product managers to keep us productive. Roadmap.",
			partial     : "People love talking about latest apps on the market. Whether you can touch your iPhone and have a song created by the pulse of your heart or visualize the layers of code on a browser page via Firefox 3D view, we just have to try it.",
			url         : "productivity-tools-for-product-managers",
			nextBlog    : "building-a-startup-take-two",
			banner      : false,
			bannerURL   : "banner.png",
			id          : '2',
			content     : "/blog/blog-layout",
			filename    : true
		},
		//Building a Start-up, Take Two
		{
			title       : "Building a Start-up, Take Two",
			postImage   : "/images/blog/take-2.png",
			image       : "default",
			icon        : "star",
			author      : authorData.latif,
			bioOn		: false,	date        : "January 14, 2013",
			description : "Tips on how building a startup from the ground up - written by the founders of Roadmunk, the icnredibly popular roadmapping app",
			partial     : "I did this once before. It was 2006 and I was 22. I was surrounded by four of my best friends and we shot for the moon. Problem was, our ambition was met with a lack of knowledge about product development and design that put us out of orbit.",
			url         : "building-a-startup-take-two",
			nextBlog    : false,
			banner      : false,
			bannerURL   : "banner.png",
			id          : '1',
			content     : "/blog/blog-layout",
			filename    : true
		}
	]
};

module.exports = blogData;