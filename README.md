# Personal website / Portfolio based on Gatsby strata template

## Installation

1. Clone the repo - `git clone https://github.com/abhishek-rs/rakshith-rs.git`
2. Run `npm install`
3. Install gatsby cli - `npm install -g gatsby-cli`
4. Go to the project folder - `cd rakshith-rs`
5. Run `gatsby develop`, the website should be accessible on the browser at `localhost:8000`

## Editing the website 

1. All the data used on the website is editable and is saved in `/src/assets/data/data.js`
2. What each data item refers to should be self-explanatory. Feel free to edit the data and check the updated site on the browser. 
3. Updating resources like `resume.pdf` or images can be done by just replacing the file with a replacement with the same file name in the same location. 

## Adding new projects 

1. Adding new projects involves two steps.
2. Copy-paste an existing project object in `projectData` of `/src/assets/data/data.js` and edit it. Do not delete any attributes. For example, if you don't want any gallery images for a project, just leave the gallery attribute with an empty array `[]` and empty string '' for string attributes.
3. You will also need to add a new project item in `/src/assets/data/projects.json`. Here you just need to update the dataId and the link to the new project on the site. Make sure this is the same as the link attribute you use in the previous step. 
4. Unlike other changes on the site that would just get updated in run time on the browser, if you want to see the changes from adding a new project you will need to stop `gatsby develop` process running in the terminal (ctrl+c) and restart it. 

## Uploading the project to your github and deploying

1. Setup a repository on github by the name `your-github-name.github.io` - More info https://pages.github.com/
2. Once you setup the repository on github, it'll show you how to push to it. 
3. But first, remove the .git folder from the root folder of this project and then follow the instructions shown by github to push to the new repo. 
4. Run `npm run deploy`. The website should be available at `your-github-name.github.io`.

Gatsby starter based on the Strata site template, designed by [HTML5 UP](https://html5up.net/strata). Check out https://codebushi.com/gatsby-starters/ for more Gatsby starters and templates.

