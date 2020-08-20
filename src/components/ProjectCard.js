import React, { useState } from 'react';
import { Link } from 'gatsby';

const ProjectCard = ({ title, desc, where, tldr, img, links }) => {
	const [showDetails, setShowDetails] = useState(false);
	const [details, setDetails] = useState(null);

	const divStyle = {
		display: showDetails ? 'block' : 'none',
	};
	return (
		<div className="card">
			<img className="card-image" alt="project" src={img} />
			<div className="card-text">
				<h4>{title}</h4>
				<p>{desc}</p>
				<p><i>{where}</i></p>
				<p><b>Tldr:</b> {tldr}</p>
				{links.map((l, i) =>
					l.isExpandable ? (
						<a
							className="project-link"
							key={i}
							onClick={() => {
								setShowDetails(!showDetails);
								setDetails({ __html: l.content });
							}}>
							{l.title}
						</a>
					) : (
						<a
							href={l.link}
							key={i}
							className="project-link"
							target="_blank"
							rel="noopener noreferrer">
							{l.title}
						</a>
					)
				)}
				<div className="details-panel" dangerouslySetInnerHTML={details} style={divStyle} />
			</div>
		</div>
	);
};

export default ProjectCard;
