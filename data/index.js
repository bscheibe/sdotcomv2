var blogData = require('./blog');
var writingData = require('./writing');

module.exports = [
	//Landing Page Data
	{
		title       : "Brent Scheibelhut | Developer. Designer. Athlete. Writer.",
		description : "Brent Scheibelhut. Developer. Designer. Athlete. Writer.",
		author      : "Brent Scheibelhut",
		content     : "home"
	},

	//Design Page Data
	{
		title       : "Designs | Brent's designs throughout the ages",
		description : "See Brent's designs throughout the ages",
		author      : "Brent Scheibelhut",
		content     : "designs"
	},

	//Writing Page Data
	{
		title       : "Writing",
		description : "See Brent's published articles",
		author      : "Brent Scheibelhut",
		content     : "writing",
		writingData : writingData
	},

	//Athletics Page Data
	{
		title       : "Athletics",
		description : "Learn Brent's athletic records and what makes him tick",
		author      : "Brent Scheibelhut",
		content     : "athletics"
	},

	//Style Guide Page Data
	{
		title       : "Style Guide",
		description : "The design that influences brentscheibelhut.com",
		author      : "Brent Scheibelhut",
		content     : "style-guide"
	},

	//Blog Page Data
	{
		title       : "Brent Scheibelhut's Blog | Short Stories, Editorials, and all the Updates ever.",
		description : "Get all the latest updates and new on Brent",
		author      : "Brent Scheibelhut",
		content     : "blog",
		blogData    : blogData
	}
];