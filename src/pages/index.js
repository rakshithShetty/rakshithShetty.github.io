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
					</section>

					<section id="two">
						<h2>News</h2>
                        <ul>
                        <li> Great stuff</li>
                        <li> Better stuff</li>
                        </ul>
					</section>

					<section id="three">
						<h2>Publications</h2>
						{projectData.map(({ title, shortDesc, where, mainThumb, links }, index) => (
							<ProjectCard
								key={index}
								title={title}
								desc={shortDesc}
                                where={where}
								img={mainThumb}
								links={links}
							/>
						))}
					</section>

				</div>
			</Layout>
		);
	}
}

export default HomeIndex;
