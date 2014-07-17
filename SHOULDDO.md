Current Bugs
================
- [x] When you collapse the screen the menu becomes an 'x' instead of the triple bars. After clicking twice it becomes the triple bars. This is due to the fact that the collapsed class is not getting attached to the class after the screen is collapsed.
- [ ] Remove the animate.css file and replace it with only the animations you are using from the file. Do once you have all animations finished.
- [x] Only load the css needed by the select page? Or would it be better to just let it all load at once and have it cached? [Use only one to reduce http requests]
- [x] Update crossBrowser.less so it contains all the browser prefixes not just some of them
- [ ] Go through and make CSS as efficient as possible while still being easy to change
- [ ] Go through CSS at end and have one main file which has the css used by more than one page
- [x] Get rid of 'image-row' class on features page and use col-md instead?
- [ ] Compress images for the web (Photoshop) such as those icons on the first page etc.
- [x] Don't use 'move-up' class for the button on pricing and TnC page 
- [ ] Rename landing page class to something better
- [x] For filenames use only '_' or '-' but not both. Specify which one in the guide
- [ ] Fix the top header issue (ie. figure out a better way then `header` classes)
- [ ] What's with the error handling in app.js
- [ ] Use bootstrap on the footer columns
- [x] Have webkit font-smoothing on the body?
- [ ] Clean up image folder
- [ ] Have colors stated at top
- [x] Add markup to blog for ease of use [should be solved via Bootstrap]
- [ ] Wrap each page in it's own div if you haven't done so already
- [x] Change all border-radiuses to .border-radius()
- [x] Have a global css page imported first and a general one that is import last to reset styles (so you won't have to use !important)
- [x] Can you do a double layout for the blog (ie. reuse the original layout) [Not possible with EJS - had to simplify layout as much as possible]
- [ ] Get minify assets working
- [x] Uninstall flexslider if not working
- [x] Split up Meta and stylesheets
- [x] Put some assets in the gitignore so they do not included with the site. [Were not going to be using heroku for hosting so this shouldn' be an issues]

Ones you can do after release
===============================
- [ ] Have underline on the current page link
- [ ] Changes transitions from all to only where needed

Ones to think on 
=================
- [ ] Would automatically search blog images folder on blog pages
- [ ] Find a better way of adding the correct javascript files to the page instead of control flow?