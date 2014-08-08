var authorData = require('./authors');
var _          = require('lodash');
var S          = require('string');

var defaultBlog = {
	title       : "Default Title",	// The title of the blog post that will be display to the readers. This will also be converted to be used as the url of the blog post
	postImage   : "none", //The image you want to use in the http://roadmunk.com/blog/ meta page that holds all the posts. This can be the same as image or different.
	image       : "default", //The image you want to use in the top header. 
	icon        : "star", //The icon you want to use on the main blog page. You can choose from any of the ones found here: http://getbootstrap.com/components/#glyphicons. All you need to do is add the name of the icon following `gylphicon-`
	bioOn       : false, //Whether you want the biography on or off at the bottom of the page
	date        : "May 4, 1994", //The date the blog post was published.
	description : "A blog post regarding the popular product roadmapping software by Roadmunk", //The META description of the blog post
	partial     : "A blog post regarding the Roadmunk prodcut roadmapping software", //The short partial on the main blog page describing the blog post
	url         : false, //The URL of the blog post. This is generated automatically.
	nextBlogURL : false, //The URL of the next blog post. This is generated automatically. 
	banner      : false, //Whether to use a banner at the end of you blog post
	bannerURL   : 'banner.png', //The default image for the blog banner
	content     : "blogPost" //What type of post this is. Used for some control flow 
};

var latifBlogPost = _.defaults(defaultBlog, { author : authorData.latif });

var blogData = module.exports = {

	blogs : [
	/*
		//Roadmunk Release August 12
		_.defaults({
			title       : "Horizontal Headers",
			postImage   : "/images/blog/roadmunk-launch.png",
			icon        : "plane",
			date        : "August 12, 2014",
			description : "Roadmunk's Release Notes from August 12th release. Rotate Headers on Timeline View.",
			partial     : "Having trouble viewing all the text on Timeline’s vertical headers? No sweat. Try out our new ‘Horizontal Headers’ feature."
		}, latifBlogPost),	
*/
		//Roadmunk Release August 5
		_.defaults({
			title       : "Fit to PowerPoint and Download to HTML",
			postImage   : "/images/blog/fit-to-powerpoint-final.png",
			icon        : "star",
			date        : "August 5, 2014",
			description : "Roadmunk's Release Notes from August 5th release. Fit and download to PowerPoint and Keynote. Download and Publish to HTML.",
			partial     : "Product managers are challenged by balancing content and design on their roadmap slides, especially when they’re trying to condense it onto a presentation slide."
		}, latifBlogPost),	
		//Roadmunk Launch Blog Post
		_.defaults({
			title       : "Roadmunk Launch!",
			postImage   : "/images/blog/roadmunk-launch.png",
			icon        : "plane",
			date        : "June 20, 2014",
			description : "Blog post regarding Roadmunk's launch of their popular roadmapping software out of beta",
			partial     : "Roadmunk is officially launching on August 31, 2014! Thank you to the hundreds that reached out and provided critical feedback on the development and design of our platform. We couldn’t have done it without you. Existing Roadmunk accounts can be transitioned over to one our new plans. To see our pricing options, click below or contact us at support@roadmunk.com."
		}, latifBlogPost),
		//Roadmunk Release May 21
		_.defaults({
			title       : "New Timeline Layout, Subheaders &#38; Tagging",
			postImage   : "/images/blog/new-timeline.png",
			date        : "May 21, 2014",
			description : "New Timeline Layout, Sub-headers &#38; Tagging - all new features for the Roadmunk roadmap software which allows you to easily create product or software roadmaps",
			partial     : "Read more for all the information on the updates to the Roadmunk software"
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
			description : "Roadmunk Release Notes from February 21, 2014. Discusses the all new Roadmunk Item Dialog Box for your roadmap. Product roadmapping just keeps getting easier.",
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
			partial     : "People love talking about latest software on the market. Whether you can touch your iPhone and have a song created by the pulse of your heart or visualize the layers of code on a browser page via Firefox 3D view, we just have to try it."
		}, latifBlogPost),
		//Building a Start-up, Take Two
		_.defaults({
			title       : "Building a Start-up, Take Two",
			postImage   : "/images/blog/take-2.png",
			date        : "January 14, 2013",
			description : "Tips on how building a startup from the ground up - written by the founders of Roadmunk, the incredibly popular product and software roadmapping software",
			partial     : "I did this once before. It was 2006 and I was 22. I was surrounded by four of my best friends and we shot for the moon. Problem was, our ambition was met with a lack of knowledge about product development and design that put us out of orbit."
		}, latifBlogPost)
	]
};

_.forEachRight(blogData.blogs, function(post, index) {
	post.url = S(post.title).decodeHTMLEntities().slugify().s;
	if (blogData.blogs[index+1]) {
		post.nextBlogURL = blogData.blogs[index+1].url;
	}
});