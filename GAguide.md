Google Analytics Quick Guide
==================================

Please refer to: https://analyticsacademy.withgoogle.com/explorer for more info

**Do Note:** Google Analytics changes the captured area of data every day. Currently it’s set at capturing the previous month from the current day. If you want to view a larger data set, change the captured area in the top right corner.

**Preface:** I’m going to go quickly through each subheader on the left hand side and outline the crucial aspects of each one

**Dashboard:** Allows you to create custom dashboards – allowing you to see you data in a visually appealing manner. I've created three dashboards `General Roadmunk`, `Mobile Ecommerce`, and `Site Performace`. `General Roadmunk` is the most valuable of the three.

**Shortcuts:** Not crucially important

**Intelligence Events:** Tracks goals most goals and some automatic events that GA setups. Not crucially important.

**Real Time:** Allows you to see what users, who are currently on the site, are clicking on and doing.

**Audience:** Useful. Gives you information of the users who are visiting your site.  The sub-headers allow you to dig deeper into the user information. Much of the useful information in this tab is served up nicely on the `General Roadmunk` dashboard.

**Acquisition:** How visitors arrive on the site. Includes referrals

**Behaviour:** How visitors interact with your site. Includes events. 

**Conversions:** This tab is generally only important for it's goals tabs. We don't make use of the other subtabs in this tab.

Important Stats
===================

**Sessions** – Number of visits to the site from users (distinct visits to the site)

**Users** – Number of distinct visitors

**Pageviews** – Number of distinct page views during a user’s session

**Pages / Session** – Pagesviews divided by session (anything  >1.5 is good)

**Avg. Session Duration** – How long users spent on the site

**Bounce rate** – % of users who started a session (travelled from somewhere else & viewed your page) and left without viewing anymore pages. You’d like around 50% bounce rate, anything less than that is great. It’s indicator of many things, but most importantly, it answer the question of if viewers are seeing what they expect to see when they first arrive at your site.

**% New Session** – The number of sessions in the timeframe that were from new users (users who hadn’t visited the site before) 

**Acquistion:** Find out where you acquiring the traffic to your site from. The overview tab has a nice pie-chart to indicate which streams the traffic is coming from:

- **Organic:** Users arrives from one of the major search engines to your page
- **Referral:** Users arrives from another domain other than your domain (that is not social)
- **Social:** Users arrives from a social media site (
    Facebook, Twitter, etc.)
- **Direct:** Direct to your site, no use of search engines
- **Paid Search:** User arrives via paid advertisement (usually Google AdWords)

These are very basic descriptions. If you’d like more information see the GA Academy resource at the top.

Useful Tabs
==================

**Acquisition > SEO > Queries:** Useful for finding out how were ranking on certain search. 

**Audience > User Flow:** See how visitors travel thought the site. Red's are drop off's. 'etnersapp' indicates that users have entered the app (a dummy link b/c we don't have GA on the site). Use the view (**Home > July 22**) to view the user flow so you don't get old data from before we had the new site set up. You can also use **Behaviour > Behaviour Flow** which tracks how user travel from one page **OR** event to the next. User flow only tracks pages. 

**Behaviour > Events > Overview > (click on button event ) >  (click on event label as primary dimension):** Indicates what events that users are using on the site:

- **cta** : any button on the roadmunk marketing site
- **login** : user has logged into the app without using the google login
- **google-login** : user has logged into the app using the google login button
- **signup** : user has signed up for the app, this includes google signups
- **general** : any of the general 'Build My Roadmap For Free' buttons 
- **google-sign** : user has signed up using the google sign in button
- **landing-button** : user has clicked on our landing button on the home page
- **free-trial** : user clicked on a free-trial button anyware across the site
- **learn-more** : user clicked on the learn-more button anywhere across the site
- **small-cta** : user has click on a small cta (I believe there is currently only one of these)

**Behaviour > In Page Analytics:** This is useful but cannot be viewed from GA because our code is in the footer. You can still view this by installing the GA chrome extension and going to http://roadmunk.com. Use the heatmap to see where users are travelling on the site and the interactions they do.

**Conversion > Goals** We currently have a few small goals set up that are being tracked here. You can set up more goals to track via the steps below.

Creating a New Goal
======================

1. Go to **Admin > View > Goals > New Goal** and follow the steps to create the goal.
    - Goal Setup: Doesn't matter to much what radio button you choose here just follow the descriptions.
    - Goal Description : Choose a specific name, and a option of how the goal is going to be tracked.
    - Goal details, more advanced setup of how the goal will work.

2. Make sure the goal is recording in the goal table.

Creating a New Filter
==========================

We currently have filters setup to block out IP's of our employee's and of our testing and local environments. 

If we gain a new employee who isn't on the IP address filter be sure to add them by going to **Admin > View > Filters > New Filter**

1. Add a filter name such as Filter + `EmployeeName`
2. Choose exlude > traffic from the ip address > that are equal to
3. Type the users IP Address into this filter. You can find your ip address by typing in `IP Address` into google.

Setting up an event
=========================

Events are setup on the backend of the marketing site and simply require a click handler to fire an event of to google analytics. 

See some examples of the events that are currently being fired under:

   - `roadmunkWebsiteDirtory/views/partials/scripts.ejs` 

Scroll down a bit and you should see something similar to this

`$('.cta').on('click', function() {
      ga('send', 'event', 'button', 'click', 'cta');
    });`

where `.cta` is the class that the event is being attached to. So whenever click on an element with the class `.cta` this event will fire. The `send` and `event` pars you don't need to change where as `button` is the event category and `click` indicates it was a click event. Finally `cta` is the label of the event.




