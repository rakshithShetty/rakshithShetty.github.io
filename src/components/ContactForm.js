import React, { Component } from 'react';
import { contactForm } from '../assets/data/data';
import done from '../assets/images/done.png';

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			submitted: false,
			name: '',
			email: '',
			message: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onNameChange = this.onNameChange.bind(this);
		this.onMessageChange = this.onMessageChange.bind(this);
	}

	handleSubmit() {
		let contactMessage =
			'You have a new message! Name: ' +
			this.state.name +
			', Email: ' +
			this.state.email +
			', Message: ' +
			this.state.message;

		fetch(
			`https://api.telegram.org/bot444339892:AAEgkoe-VeNctlho85kv88E1IYWE5vY-Mek/sendMessage?chat_id=${
				contactForm.chatId
			}&text=${contactMessage}`
		).then((err, res) => {
			this.setState({
				submitted: true,
			});
		});
	}

	onEmailChange(e) {
		this.setState({ email: e.target.value });
	}

	onNameChange(e) {
		this.setState({ name: e.target.value });
	}

	onMessageChange(e) {
		this.setState({ message: e.target.value });
	}

	render() {
		return (
			<div>
				<h2>Get In Touch</h2>
				<p>{contactForm.intro}</p>
				<div className="row">
					{this.state.submitted ? (
						<div className="submitted">
							<img alt="done" src={done} />
							<p>{contactForm.thankYouMessage}</p>
						</div>
					) : (
						<div className="8u 12u$(small)">
							<form method="post" action="#">
								<div className="row uniform 50%">
									<div className="6u 12u$(xsmall)">
										<input
											type="text"
											name="name"
											id="name"
											value={this.state.name}
											placeholder="Name"
											onChange={this.onNameChange}
										/>
									</div>
									<div className="6u 12u$(xsmall)">
										<input
											type="email"
											name="email"
											id="email"
											placeholder="Email"
											value={this.state.email}
											onChange={this.onEmailChange}
										/>
									</div>
									<div className="12u">
										<textarea
											name="message"
											id="message"
											placeholder="Message"
											rows="4"
											value={this.state.message}
											onChange={this.onMessageChange}
										/>
									</div>
								</div>
							</form>
							<ul className="actions">
								<li>
									<input
										type="submit"
										value="Send Message"
										onClick={this.handleSubmit}
									/>
								</li>
							</ul>
						</div>
					)}

					<div className="4u 12u$(small)">
						<ul className="labeled-icons">
							{contactForm.address && (
								<li>
									<h3 className="icon fa-home">
										<span className="label">Address</span>
									</h3>
									{contactForm.address.line1}
									<br />
									{contactForm.address.line2}
									<br />
									{contactForm.address.line3}
								</li>
							)}
							{contactForm.phoneNumber && (
								<li>
									<h3 className="icon fa-mobile">
										<span className="label">Phone</span>
									</h3>
									<a
										href={`tel:${contactForm.phoneNumber}`}
										rel="noopener noreferrer">
										{contactForm.phoneNumber}
									</a>
								</li>
							)}
							<li>
								<h3 className="icon fa-envelope-o">
									<span className="label">Email</span>
								</h3>
								<a rel="noopener noreferrer" href={`mailto:${contactForm.email}`}>
									{contactForm.email}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactForm;
