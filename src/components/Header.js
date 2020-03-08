import React from 'react';
import { Link } from 'gatsby';
import Footer from './Footer';
import { introText } from '../assets/data/data';
import avatar from '../assets/images/rakshith.png';

class Header extends React.Component {
	render() {
		return (
			<header id="header">
				<div className="inner">
					<Link to="/" className="image avatar">
						<img src={avatar} alt="Rakshith" />
					</Link>
					<h1>
						<strong>I am Rakshith, </strong>
						{introText}
						<br />
					</h1>
				</div>
				<Footer />
			</header>
		);
	}
}

export default Header;
