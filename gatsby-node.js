/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require('fs');
const path = require('path');
//const { projectData } = require('./src/assets/data/data');

const readJsonAsync = (filepath, callback) => {
	return new Promise((resolve, reject) => {
		fs.readFile(filepath, 'utf-8', function(err, data) {
			if (err) {
				reject(err);
			} else {
				const result = JSON.parse(data);
				if (result) {
					resolve(result);
				} else {
					throw new Error('Json parse error');
				}
			}
		});
	});
};

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const templateComponent = path.resolve(`./src/components/project.js`);

		readJsonAsync(path.resolve(`./src/assets/data/projects.json`)).then(data => {
			data.projects.forEach(pageData => {
				const pagePath = pageData.pagePath;
				//	pageData.projectData = projectData;
				createPage({
					path: pagePath,
					component: templateComponent,
					context: pageData,
				});
			});
			resolve();
		});
	});
};
