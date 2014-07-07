Roadmunk Consumer Facing Site
================================

Setup
========
0. Install Git via http://git-scm.com/book/en/Getting-Started-Installing-Git and have acces rights to repo https://github.com/latifnanji/roadmunkWebsite
1. Open terminal
2. type `git init` (intialize git repository on local disk)
3. type `git remote add production https://github.com/latifnanji/roadmunkWebsite.git ` (adds a remote to the repo)
4. type `git clone production` (copies files from repo to local disk)
5. type `cd roadmunkWebsite` (takes you into the repo you just cloned on your local disk)
6. type `node server.js` (runs the server on your local host)
7. copy and paste `http://localhost:3030` into your browser and your good to go
    - Imagine as if `http://localhost:3030` represented `http://roadmunk.com` and all the routes were the same off the link
    - So `http://localhost:3030/pricing` would go to our pricing page

Accessing On Subsequent Visits
=================================
1. Open terminal (or if already open type `cd`)
2. Type `cd roadmunkWebsite`
3. Type `node server.js` (runs the server on your local host)
4. copy and paste `http://localhost:3030` into your browser and you good to go 

Adding a New Page
====================
1. Create the new `.ejs` with the appropiate prefix in the views folder
2. Add the route to the new file in the under `routes/index.js`
    - Copy and paste an existing route
    - Add appropiate comment at the top
    - Replace the link in quotes `''` on the first line with the route you want to occur on the site (typically the ejs file name)
    - Replace the text after `data.` to the name of the ejs file you created
3. Head over to `data/index.js` to add the meta and other data for the new page
    - Copy and paste an existing data file 
    - Update the title, description, author with the correct data for the page
    - Replace the current content text with the name of the ejs file you created in the view folder

That's it. Run node server.js and your new page is live!

###Note
**Do not call you page content.ejs, otherwise it will use this page for all routes instead of the content variable route**

Adding a New Stylesheet
=========================
1. Create the new stylesheet in the `/public/stylesheets` folder and use the suffix `.less`
2. Open `/public/stylesheets/style.less` and type `@import ` + your stylesheet file name without the `.less` suffix

All done! Try and use LESS where possible but LESS accepts pure CSS as well.

Adding a New Section
=====================
1. Copy and paste a section code from `/views/home.ejs` and paste it where you want the new section
2. If the above section is black (excluding a top section) then use the class `black-white` and similarily if the above section is white use the class `white-black` on the classes attached to the section.
3. You want to alternate the SVG row so copy over the correct one and past in just below the section header (SHOULDO: Hook up a javascript binding that does this for us)

Adding a New Transition
=========================
1. Add the class `hidden` to the element you want to transition in (this makes sure you don't get the brief transition as it goes off screen)
2. In the local javascript file utilize the document scroll function found on another or the one currently in use. Use control flow to initate the transition at the correct location on the screen.
3. Get the class by its ID using jquery and add class `animated` as well as the name of animation class you want to use. Please see http://daneden.github.io/animate.css/ for the animations possible

EJS Templating
======================

EJS templating is very similar to `PHP` templating. It allows you to use cut and dry html but helps you adhere to the DRY (Don't Repeat Yourself) pricinple. Our main layout file is currently stored under the views folder as `layout.ejs` this layout includes the head, the header (top-bar), footer, and scripts (javascripts needed by the page).

What you need to know is that you don't need to include the html, head, or body tags and can get right into the content you want on the page.

## Note
To allow block contenting of pages similar to Jade we have used this pull request which has currently not been pulled into the main repo yet.

Here is the pull request - it's a minor one only adding a few lines:

https://github.com/visionmedia/ejs/pull/156/files

This allows the variable 'content' to be used as a variable to hold which body content should be added to the layout file. This saves us from using a control flow mechanism.
