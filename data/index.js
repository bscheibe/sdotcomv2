var blogData = require('./blog');

var Data = function() {
	
	//Home Page Data
	this.home = {
		title       : "Roadmunk Landing Page",
		description : "Create Brilliant Roadmaps with Roadmunk",
		author      : "Brent Scheibelhut",
		content     : "home",
		filename    : true
	}

	//Features Page Data
	this.features = {
		title       : "Roadmunk Features",
		description : "Roadmunk Features Help Build Brilliant Roadmaps",
		author      : "Brent Scheibelhut",
		content     : "features",
		filename    : true
	}

	//Pricing Page Data
	this.pricing = {
		title       : "Roadmunk Pricing",
		description : "Pricing for the Roadmunk Roadmap App",
		author      : "Brent Scheibelhut",
		content     : "pricing",
		filename    : true
	}

	//Terms and Conditions Page Data
	this.termsandconditions = {
		title       : "Roadmunk's Terms and Conditions",
		description : "Terms and Conditions Roadmunk Roadmap App",
		author      : "Brent Scheibelhut",
		content     : "terms-and-conditions",
		filename    : true
	}

	//Privacy Policy Page Data
	this.privacypolicy = {
		title       : "Roadmunk's Privacy Policy",
		description : "Privacy Policy for Roadmunk's Roadmap App",
		author      : "Brent Scheibelhut",
		content     : "privacy-policy",
		filename    : true
	}

	//Security Page Data
	this.security = {
		title       : "Roadmunk's Security Offering",
		description : "Security offered by Roadmunk's Roadmap App",
		author      : "Brent Scheibelhut",
		content     : "security",
		filename    : true
	}

	//Security Page Data
	this.company = {
		title       : "About Roadmunk and the Company",
		description : "Learn what behind the team at the ever popular Roadmunk App",
		author      : "Brent Scheibelhut",
		content     : "company",
		filename    : true
	}

	//404 Page Data
	this.styleguide = {
		title       : "Roadmunk's Style Guide'",
		description : "All you would ever need to know about the styling for the incredibly popular Roadmunk roadmapping app",
		author      : "Brent Scheibelhut",
		content     : "style-guide",
		filename    : true
	}

	//404 Page Data
	this.fourohfour = {
		title       : "Roadmunk 404",
		description : "Roadmunk 404 - Page Not Found",
		author      : "Brent Scheibelhut",
		content     : "404",
		filename    : true
	}

	//Roadmunk Blog Page Data
	this.blog = {
		title       : "Roadmunk Blog",
		description : "Get all the latest updates and new on the Roadmunk App",
		author      : "Brent Scheibelhut",
		content     : "blog",
		blogData    : blogData,
		filename    : true
	}
};

module.exports = Data;