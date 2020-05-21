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
						<h2>News and Events</h2>
                        <ul>
                        <li> <b>March '20:</b> <a href="https://rakshithshetty.github.io/CausalVQA/"> Towards Causal VQA </a> accepted at CVPR 2020 and datasets released</li>
                        <li> <b>June '19: </b> <a href="https://datasets.d2.mpi-inf.mpg.de/rakshith/notusingcar/poster.pdf">Not using car</a> poster presented at CVPR 2020</li>
                        <li> <b>Dec '18: </b> Presenting object removal work at Qualcomm headquarters at San Diego </li>
                        <li> <b>Aug '18: </b> Presenting <a href="https://www.youtube.com/watch?v=_mz5VtLA8XQ">A<sup>4</sup>NT</a> in USENIX 18 at Baltimore, MD</li>
                        <li> <b>May '18: </b> I recieved the <a href="https://www.qualcomm.com/invention/research/university-relations/innovation-fellowship/winners"> Qualcomm Innovation Fellowship</a> to support my research</li>
                        <li> <b>Jul '17: </b> My <a href="https://aaltodoc.aalto.fi/handle/123456789/22839"> Masters Thesis</a> on image and video captioning recieved awards from the <a href="https://www.aalto.fi/en/news/three-thesis-awards-to-the-department-of-computer-science">Finnish society for Computer Science</a>, <a href="https://wiki.aalto.fi/display/CSnews/2017/06/07/CS+News+9.6.2017">Aalto Univeristy School of Science</a> and <a href="https://www.mediaalantutkimussaatio.fi/tutkimukset/korkeakoulustipendit-2017/">Media industry research foundation</a></li>
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
