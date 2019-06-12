import full01 from '../images/projects/unicorns/01.jpg';
import full02 from '../images/projects/unicorns/02.jpg';
import full03 from '../images/projects/unicorns/03.jpg';
import full04 from '../images/projects/manbearpig/04.jpg';
import full05 from '../images/projects/manbearpig/05.jpg';
import full06 from '../images/projects/manbearpig/06.jpg';

export const links = {
	scholar: 'https://scholar.google.co.in/citations?user=nubwxloAAAAJ&hl=en&oi=ao',
	github: 'https://github.com/rakshithShetty',
	linkedin: 'https://www.linkedin.com/in/rakshith-shetty-a80a941b/',
	mail: 'mailto:rakshith.rs@gmail.com',
};

export const introText = 'a super complicated boi!';

export const contactForm = {
	intro:
		'Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.',
	address: {
		line1: '1234 Somewhere Rd.',
		line2: 'Nashville, TN 00000',
		line3: 'Germany',
	},
	phoneNumber: '000-000-0000',
	email: 'rakshith.rs@gmail.com',
	chatId: '13428459',
	thankYouMessage: 'Thanks for reaching out, expect an email from me soon! Have a good day!',
};

export const mainPage = {
	siteTitle: 'Rakshith Shetty - Portfolio',
	siteDescription: 'Rakshith Shetty - Portfolio',
	introHeading: "Hi, I'm rakshith, and this is my life's work!",
	introtext:
		'Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.',
};

export const projectData = [
	{
		title: 'ManBearPig!',
		link: '/man-bear-pig',
		shortDesc:
			'Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate.',
		description:
			'Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.',
		links: [
			{
				title: 'Paper',
				link: 'https://google.com',
			},
			{
				title: 'Blog',
				link: 'https://example.com',
			},
		],
		mainThumb: full01,
		gallery: [
			{
				id: '1',
				src: full01,
				caption: 'Photo 1',
				description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
			},
			{
				id: '2',
				src: full02,
				caption: 'Photo 2',
				description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
			},
			{
				id: '3',
				src: full03,
				caption: 'Photo 3',
				description: 'Lorem dscsd dolor sit amet nisl sed nullam feugiat.',
			},
		],
	},
	{
		title: 'Unicorns?',
		link: '/unicorns',
		shortDesc:
			'Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate.',
		description:
			'Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.',
		links: [
			{
				title: 'Paper',
				link: 'https://google.com',
			},
			{
				title: 'Blog',
				link: 'https://example.com',
			},
		],
		mainThumb: full04,
		gallery: [
			{
				id: '4',
				src: full04,
				caption: 'Photo 4',
				description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
			},
			{
				id: '5',
				src: full05,
				caption: 'Photo 5',
				description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
			},
			{
				id: '6',
				src: full06,
				caption: 'Photo 6',
				description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
			},
		],
	},
];
