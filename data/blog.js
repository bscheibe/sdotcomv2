var authorData = require('./authors');
var _          = require('lodash');
var S          = require('string');

var defaultBlog = {
	title       : "Default Title",	// this is what title does'
	postImage   : "none", //If you don't want to have a header image, then set image to none
	image       : "default",
	icon        : "star", //You can choose from any of the bootstrap icons
	bioOn       : false,
	date        : "May 4, 1994",
	description : "A blog post regarding the popular roadmapping app by Roadmunk",
	partial     : "A blog post regarding the Roadmunk roadmapping app",
	url         : false,
	nextBlogURL : false,
	banner      : false,
	bannerURL   : 'banner.png',
	content     : "/blog/blog-layout"
};

var latifBlogPost = _.defaults(defaultBlog, { author : authorData.latif });

var blogData = module.exports = {
	
	blogs : [
		//Roadmunk Launch Blog Post
		_.defaults({
			title       : "Roadmunk Launch!",
			postImage   : "/images/blog/roadmunk-launch.png",		
			icon        : "plane",
			date        : "June 20, 2014",
			description : "Blog post regarding Roadmunk's launch of their popular roadmapping app out of beta",
			partial     : "Roadmunk is officially launching on August 31, 2014! Thank you to the hundreds that reached out and provided critical feedback on the development and design of our platform. We couldn’t have done it without you. Existing Roadmunk accounts can be transitioned over to one our new plans. To see our pricing options, click below or contact us at support@roadmunk.com."
		}, latifBlogPost),
		//Roadmunk Release May 21
		_.defaults({
			title       : "New Timeline Layout, Subheaders &#38; Tagging",
			postImage   : "/images/blog/new-timeline.png",
			date        : "May 21, 2014",
			description : "New Timeline Layout, Sub-headers &#38; Tagging - all new features for the Roadmunk roadmap app which allows you to easily create product or software roadmaps",
			partial     : "Read more for all the information on the updates to the Roadmunk app"
		}, latifBlogPost),
		//Roadmunk Release March 24
		_.defaults({
			title       : "Create Items from Roadmap Views",
			postImage   : "/images/blog/roadmap-views.png",
			date        : "March 24, 2014",
			description : "Roadmunk Release Notes from March 24th, 2014. Create items easily from any roadmap view for easy product roadmapping",
			partial     : "It can be cumbersome to create items only from the Table View. Now users can create items on the Timeline or Swimlane View and drag them onto their roadmap."
		}, latifBlogPost),
		//Roadmunk Release March 7
		_.defaults({
			title       : "Sort and Prioritize the Table View",
			postImage   : "/images/blog/sort-table.png",
			date        : "March 7, 2014",
			description : "Roadmunk Release Notes from March 7th, 2014. Sort and prioritize items in the table view for your roadmap. Allowing for quick and simple product development.",
			partial     : "Click a column header to sort. Its too easy."
		}, latifBlogPost),
		//Roadmunk Release February 21
		_.defaults({
			title       : "Roadmunk’s Item Dialogue Box",
			postImage   : "/images/blog/item-dialogue.png",
			date        : "February 21, 2014",
			description : "Roadmunk Release Notes from February 21, 2014. Discusses the all new Roadmunk Item Dialog Box for your roadmap. Product development just keeps getting easier.",
			partial     : "Viewing and editing information should be quick. With our new Item Dialogue Box you can the edit item label, dates and custom properties without going back to the table view. Simple? We think so too."
		}, latifBlogPost),
		//Roadmunk Release January 20
		_.defaults({
			title       : "Publish and Share your Roadmap",
			postImage   : "/images/blog/publish.png",
			date        : "January 20, 2014",
			description : "Roadmunk Release Notes from January 20, 2014. Explains how to publish and share your roadmap! Now the whole company can easily be involved in your product or software roadmapping.",
			partial     : "Have you ever wanted to share your roadmap privately with your team or clients? Now you can! Users can publish and share their roadmap via URL through the export menu."
		}, latifBlogPost),
		//Roadmunk Release November 25th 
		_.defaults({
			title       : "Color Roadmaps on Roadmunk",
			postImage   : "/images/blog/color-item.png",
			date        : "November 25th, 2013",
			description : "Roadmunk Release Notes from November 25th, 2013. Color and personalize your personal roadmap with palettes handpicked by designers. Create your roadmap with style",
			partial     : "Design is at the center of Roadmunk and we want to create the greatest visual experience for our users. Therefore, we’ve introduced the capability to color items using three beautifully designed palettes. Simply select a field to Color by (eg. status), and assign the different values to a color to create the perfect roadmap."
		}, latifBlogPost),
		//Productivity Tools for Product Managers 
		_.defaults({
			title       : "Productivity Tools for Product Managers",
			postImage   : "/images/blog/productivity.png",
			date        : "February 11, 2013",
			description : "Tips for practical software tools for product managers to keep us productive. Roadmunk's roadmaps also go a long way with product development",
			partial     : "People love talking about latest apps on the market. Whether you can touch your iPhone and have a song created by the pulse of your heart or visualize the layers of code on a browser page via Firefox 3D view, we just have to try it."
		}, latifBlogPost),
		//Building a Start-up, Take Two
		_.defaults({
			title       : "Building a Start-up, Take Two",
			postImage   : "/images/blog/take-2.png",
			date        : "January 14, 2013",
			description : "Tips on how building a startup from the ground up - written by the founders of Roadmunk, the incredibly popular product and software roadmapping app",
			partial     : "I did this once before. It was 2006 and I was 22. I was surrounded by four of my best friends and we shot for the moon. Problem was, our ambition was met with a lack of knowledge about product development and design that put us out of orbit."
		}, latifBlogPost)
	]
};

_.forEachRight(blogData.blogs, function(post, index) {
	post.url = S(post.title).decodeHTMLEntities().slugify().s;	
	if (blogData.blogs[index+1]) {
		post.nextBlogURL = blogData.blogs[index+1].url
	}
});