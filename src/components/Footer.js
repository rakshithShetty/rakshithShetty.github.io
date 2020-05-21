import React from 'react';
import { links } from '../assets/data/data';
import resume from '../assets/resume.pdf';

class Footer extends React.Component {
	render() {
		return (
			<div id="footer">
				<div className="inner">
					<ul className="labeled-icons">
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={resume}
								className="icon fa-address-card">
								<span className="label"> Curriculum Vitae</span>
							</a>
						</li>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={links.scholar}
								className="icon fa-graduation-cap">
								<span className="label"> Google Scholar</span>
							</a>
						</li>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={links.github}
								className="icon fa-github">
								<span className="label"> Github</span>
							</a>
						</li>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={links.linkedin}
								className="icon fa-linkedin">
								<span className="label"> LinkedIn</span>
							</a>
						</li>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={links.mail}
								className="icon fa-envelope-o">
								<span className="label"> Contact</span>
							</a>
						</li>
					</ul>
					<ul className="copyright">
						<li>
							Designed and developed with &hearts; by{' '}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/abhishek-rs">
								Abhishek
							</a>{' '}
							using{' '}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.gatsbyjs.org/docs/">
								GatsbyJS
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Footer;
