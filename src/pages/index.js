import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import ContactForm from '../components/ContactForm';
import resume from '../assets/resume.pdf';
import { mainPage, projectData } from '../assets/data/data';
import ProjectCard from '../components/ProjectCard';
class HomeIndex extends React.Component {
	render() {
		return (
			<Layout>
				<Helmet>
					<title>{mainPage.siteTitle}</title>
					<meta name="description" content={mainPage.siteDescription} />
				</Helmet>

				<div id="main">
					<section id="one">
						<header className="major">
							<h2>{mainPage.introHeading}</h2>
						</header>
						<p>{mainPage.introtext}</p>
						<ul className="actions">
							<li>
								<a
									href={resume}
									rel="noreferrer noopener"
									target="_blank"
									className="button">
									Curriculum Vitae
								</a>
							</li>
						</ul>
					</section>

					<section id="two">
						<h2>Work</h2>
						{projectData.map(({ title, shortDesc, mainThumb, link }, index) => (
							<ProjectCard
								key={index}
								title={title}
								desc={shortDesc}
								img={mainThumb}
								link={link}
							/>
						))}
					</section>

					<section id="three">
						<ContactForm />
					</section>
				</div>
			</Layout>
		);
	}
}

export default HomeIndex;
