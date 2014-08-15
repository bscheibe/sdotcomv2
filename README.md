Roadmunk Consumer Facing Site
================================

Setup
========
0. Installs
    - Install Git via http://git-scm.com/book/en/Getting-Started-Installing-Git and have acces rights to repo https://github.com/latifnanji/roadmunkWebsite
    - Install Node via http://nodejs.org/
1. Open terminal
2. type cd `~/Documents` (change directory to your documents)
3. type `git init` (intialize git repository on local disk)
4. type `git clone https://github.com/latifnanji/roadmunkWebsite.git` (copies files from repo to local disk) and enter credentials if needed
5.. type `git remote add production https://github.com/latifnanji/roadmunkWebsite.git ` (adds a remote to the repo so you can add code)
6. type `cd roadmunkWebsite` (takes you into the repo you just cloned on your local disk)
7. type `node server.js` (runs the server on your local host)
8. copy and paste `http://localhost:3030` into your browser and your good to go
    - Imagine as if `http://localhost:3030` represented `http://roadmunk.com` and all the routes were the same off the link
    - So `http://localhost:3030/pricing` would go to our pricing page

Accessing On Subsequent Visits
=================================
1. Open terminal (or if already open type `cd`)
2. Type `cd ~/Documents/roadmunkWebsite` (just changing directories to where the files are located)
3. Type `git pull production` **(Do this step only if you want to update your local code with the code from the online repo)**
4. Type `node server.js` (runs the server on your local host)
5. copy and paste `http://localhost:3030` into your browser and you good to go

Changing Text/Code/Image
=======================
1. Install Sublime Text: http://www.sublimetext.com/3 and have the local hosted site up on `http://localhost:3030`
2. Open your Documents folder and locate the folder called `roadmunkWebsite` and drag it onto the SublimeText Launcher Icon
3. You have two options of how to change text/code/image

  **3.1.** The code is layed out in clear and concise manner allowing you to find pages easily
    1. Specific webpages such as `www.roadmunk.com/pricing` are found in `views` with the names of the webpages being identical to their url (ie. `www.roadmunk.com/pricing` is named `pricing.ejs`)
    2. Styling is found under `public/stylesheets` with the name of styling for the page identical to their url. 
    3. Make your changes and save the file though `Cmd+S`
    4. Refresh your local broswer the changes should be displayed

  **3.2.** If you want to change some text/code but don't know the location press `command+shift+f`
    1. In the find column type some of the text/code/image that you want to change
    2. In the where columns put `~/Documents/roadmunkWebsite` (you should only have to place this once)
    3. Click find (**don't click replace**)
    4. A new file should appear with locations of where the find text was found. Click on the white box surrounding the correct location - this will open up the correct file.
    5. Change what needs changing. Then save the file through `Cmd+S`
    6. Refresh your local browser. The changes should be displayed

  **3.3.** If you want to change and image:
    1. Open up Finder and navigate to `~/Documents/roadmunkWebsite/public/image`
    2. Copy over the image your new image into this folder and remember it's name
    3. Follow the steps in 2.2 (to locate the old image) and in the find box type the URL of the image. You can find this URL by inspecting the element in your local browser.
    4. Update the URL of the image after the `/images/` to the name of the image you just recently added
    5. Save the file through `Cmd+S`
    6. Regresh your local broser. The changes should be displayed

4. Once all your changes are finished open Terminal
5. Type `cd ~/Documents/roadmunkWebsite`
6. Type `git add -A`
7. Type `git commit -m "YOUR COMMIT MESSAGE GOES HERE"`
8. Type `git push production master` and enter your credentials if needed 

Adding a New Blog Post
=======================
1. Open your Documents folder and locate the folder called `roadmunkWebsite` and drag it onto the SublimeText Launcher Icon
2. If you do not already have a writer account then:
    -Open up `data/blog/authors.js`
    -Copy Data from a previous author and fill in the required fields. Remember to change the name from say `latif` to your name
    -SHOULDDO: Create a different image for an author
3. Go to Finder and open up the folder `~/Documents/roadmunkWebsite/views/blog`. Duplicate any file in the folder and rename it to the title of the blog, except with '-' instead of spaces. This is the url you will see after `roadmunk.com/blog/`. 
4. Go back to Sublime Text and navigate to the file under `views/blog`. Open it up. 
5. Type your blog post in the blog content div using HTML. Refer to this page for the formatting tags: http://www.w3schools.com/html/html_formatting.asp. Always remember to close your tag after your are done formatting the text you want. Ignore the banner if statement. Save your changes with `Cmd+S`
6. Open up `data/blog/blog.js`.
    - Copy over a previous blog post's data (from `_.defaults` to `latifBlogPost)` and and paste it below it. **Remember to add commas after each blog post like so`{...},` except for the last one**
    - The blog has a default object at the top of of `blog.js`. These fields will be used as defaults and will be overwritten if you overwrite them in your specific post. For example if you wanted to overwrite the default 'star' icon then include `icon: youIconHere,` in the new blog post.
    - Fill in the blog post data. Each are described below:
        - **title**: The title of the blog post that will be display to the readers. This will also be converted to be used as the url of the blog post. **So be sure to name the blog file the same as the output of the slugified title.**
        - **postImage** : The image you want to use in the http://roadmunk.com/blog/ meta page that holds all the posts. This can be the same as image or different.
        - **image**: The image you want to use in the top header. If you don't want to use one just put 'none'. If you do put in a image remember to place it in the `roadmunkWebsite/images/` directory and refer to 3.3 above
        - **icon** : The icon you want to use on the main blog page. You can choose from any of the ones found here: http://getbootstrap.com/components/#glyphicons. All you need to do is add the name of the icon following `gylphicon-`
        - **bioOn** : whether you would like the short biography at the bottom of the post. This is good for guest posts. It will pull data from the author object.
        - **author** : Put your author data here. It will be of the form `authorData.YOURNAME`
        - **date** : The date you publish your post
        - **description** : The META description field for the post. Keep it less than 50 words. 
        - **partial** : The text you want to have display in the partial blog post displayed on the blog page
        - **content** : What kind of blogPost this is. Used in some controlFlow.
        - **banner** : Put this to true if you want to use a CTA banner in your post. Put this to false if you do not want to.
        - **bannerURL** : The name of the banner image you want to use. It is assumed you have placed the file in the `/images/` directory
        - **url** : The url of the blog post. This is generated automatically from the title of the blog post.
        - **nextBlogURL** : The url of the new blog. This is also generated automatically.
    - Save your changes with `Cmd+S`. 
7. Follow steps 4-8 of adding code to the repo above to push your change live. 

Adding a New Page
====================
1. Create the new `.ejs` with the appropiate prefix in the views folder
2. Head over to `data/index.js` to add the meta and other data for the new page
    - Copy and paste an existing data file 
    - Update the title, description, author with the correct data for the page
    - Replace the current content text with the name of the ejs file you created in the view folder

That's it. Run node server.js and your new page is live!

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

Changing Prices
=========================
1. Go to `/public/javascripts/pricing.js` file and change the pricing variables at the top of the page.

Adding a New Category
=============================
1. Go to `/data/blog` and in the `categories` array add a comma at the end of the last element and make a new line. Type the new category you want on this line. This name will show as the category on the blog page.
2. Go to `/public/javascripts/blog.js`. In the function filterBlogs add a new else if by copy and pasting lines between an `}` and the next `}` but not both. 
3. Change the ... text in the `filter == ...` to say the name of your new category you made in 1 + the word 'Filter'
4. Change the ... and xxx text in `category != ...` and `$(.xxx).show()` to the name of the filter you made in 1 except with all lower case letters.
5. Add the filter to your post in all lowercase letters!

Adding a New Transition
=========================
1. Add the class `hidden` to the element you want to transition in (this makes sure you don't get the brief transition as it goes off screen)
2. In the local javascript file utilize the document scroll function found on another or the one currently in use. Use control flow to initate the transition at the correct location on the screen.
3. Get the class by its ID using jquery and add class `animated` as well as the name of animation class you want to use. Please see http://daneden.github.io/animate.css/ for the animations possible

Best Practices
====================

- When creating a new view, please use '-' to represent spaces
- When creating a new less file please '-' to represent spaces

EJS Templating
======================

EJS templating is very similar to `PHP` templating. It allows you to use cut and dry html but helps you adhere to the DRY (Don't Repeat Yourself) principle. Our two main layout files are currently stored under the views folder as `start.ejs` and `end.ejs`. `start.ejs` contains the header (top-bar), meta, and stylesheets. The `end.ejs` contains the footer, go-top button, and scripts (javascripts needed by the page).

What you need to know is that you don't need to include the html, head, or body tags and can get right into the content you want on the page.

Releasing To Production
=============================
1. Commit all changes to release to your local repo.
2. Push your repo to Github.
3. Mount your production key TrueCrypt file located on your USB key. (Colin has this figured out on OSX)
4. Mount the roadmunk42.tc TrueCrypt file located Google Drive/Roadmunk/Product Management/Certificates/roadmunk42.tc
5. ssh to roadmunk.com (using the credentials in the roadmunk42.tc vault)
6. type: `cd /var/www/roadmunk`
7. type: `git pull` (will prompt you for your github credentials)
8. if the pull goes well (ie. no conflicts are reported), type: `forever restart server.js`