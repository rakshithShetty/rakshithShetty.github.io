import React from 'react';
import { Link } from 'gatsby';

const ProjectCard = ({ title, desc, img, link }) => (
	<div className="card">
		<Link to={link}>
			<img className="card-image" alt="project" src={img} />
			<div className="card-text">
				<h4>{title}</h4>
				<p>{desc}</p>
			</div>
		</Link>
	</div>
);

export default ProjectCard;
