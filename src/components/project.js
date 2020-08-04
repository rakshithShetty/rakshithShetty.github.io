import React from 'react';
import Layout from './layout';
import Gallery from './Gallery';
import { projectData } from '../assets/data/data';

const ProjectDetail = ({ pageContext: { dataId, imagePath } }) => {
	const currentProject = projectData[dataId];
	const { title, description, gallery, links } = currentProject;
	return (
		<Layout>
			<div id="main">
				<h1>{title}</h1>
				<p>{description}</p>
				{gallery.length > 0 && <h3>Gallery</h3>}
				<Gallery
					images={gallery.map(({ id, src, caption, description }) => ({
						src,
						thumbnail: src,
						caption,
						description,
					}))}
				/>
				{links.length > 0 && <h3>Links</h3>}
				{links.map((l, i) => (
					<a
						href={l.link}
						key={i}
						className="project-link"
						target="_blank"
						rel="noopener noreferrer">
						{l.title}
					</a>
				))}
			</div>
		</Layout>
	);
};

export default ProjectDetail;
