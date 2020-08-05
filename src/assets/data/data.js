import vqaimg from '../images/projects/causalvqa/teaser.gif';
import carimg from '../images/projects/notusingcar/teaser.png';
import remimg from '../images/projects/objremoval/teaser.gif';
import antimg from '../images/projects/a4nt/teaser.png';
import spkimg from '../images/projects/speaklikhum/teaser.gif';
import payatt from '../images/projects/payatt/teaser.gif';
import semadv from '../images/projects/semadv/teaser.gif';
import paper3570 from '../3570.pdf';
import React from 'react'

export const links = {
	scholar: 'https://scholar.google.co.in/citations?user=nubwxloAAAAJ&hl=en&oi=ao',
	github: 'https://github.com/rakshithShetty',
	linkedin: 'https://www.linkedin.com/in/rakshith-shetty-a80a941b/',
	mail: 'mailto:rakshith.rs@gmail.com',
};

export const introText = 'a PhD Student in Computer Vision and Machine Learning!';

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
	introHeading: "Hi, I'm Rakshith",
	introtext: ['I am a 4th year PhD student at the ',
        <a href="https://www.mpi-inf.mpg.de/departments/computer-vision-and-machine-learning/"> Max Planck Institute for Informatics. </a>,
        ' I am supervised by ',
        <a href="https://www.mpi-inf.mpg.de/departments/computer-vision-and-machine-learning/people/bernt-schiele/"> Prof. Dr. Bernt Schiele </a>,
        ' and ',
        <a href="https://cispa.saarland/group/fritz/"> Prof. Dr. Mario Fritz </a>,
        '. My primary research interest is in designing robust computer vision models. My recent works have focused on developing automatic visual manipulation tools to synthesize rare hard examples. These tools enable efficiently creating corner cases which break the target perception model, allowing us to quantify and improve the robustness of these systems before real world deployment. I also have a strong interest in integrating vision and language, having worked on image captioning, visual question answering and text style transfer tasks.'],
};

export const projectData = [
	{
		title: 'Towards automated testing and robustification by semantic adversarial data generation',
		shortDesc: [<strong> Rakshith Shetty, </strong>,
                    'Mario Fritz, ',
                    'Bernt Schiele'
        ],
		where:'ECCV, 2020 (oral)',
		links: [
			{
				title: 'Paper',
				link: paper3570,
			},
			{
				title: 'Bibtex',
				isExpandable: true,
                link: 'abc',
				content: `@inproceedings{shetty2020SemAdv,\n\
                          title={Towards automated testing and robustification by semantic adversarial data generation},\n \
                          author={Shetty, Rakshith and Fritz, Mario and Schiele, Bernt}, \n\
                          booktitle={European Conference on Computer Vision (ECCV)}, \n\
                          year={2020}, \n\
                          }`
			},
		],
		mainThumb: semadv,
		gallery: [
		],
	},
	{
		title: 'Towards Causal VQA: Revealing and Reducing Spurious Correlations by Invariant and Covariant Semantic Editing',
		shortDesc: ['Vedika Agarwal, ',
                    <strong> Rakshith Shetty, </strong>,
                    'Mario Fritz'],
		where:'CVPR, 2020',
		links: [
			{
				title: 'Paper',
				link: 'https://arxiv.org/abs/1912.07538',
			},
			{
				title: 'Project page',
				link: 'https://rakshithshetty.github.io/CausalVQA/',
			},
			{
				title: 'Bibtex',
				isExpandable: true,
                link: 'abc',
				content: `@inproceedings{agarwal2020towards,\n\
                          title={Towards Causal VQA: Revealing and Reducing Spurious Correlations by Invariant and Covariant Semantic Editing},\n \
                          author={Agarwal, Vedika and Shetty, Rakshith and Fritz, Mario}, \n\
                          booktitle={Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition}, \n\
                          year={2020}, \n\
                          }`
			},
		],
		mainThumb: vqaimg,
		gallery: [
		],
	},
	{
		title: 'Not Using the Car to See the Sidewalk--Quantifying and Controlling the Effects of Context in Classification and Segmentation',
		shortDesc: [<strong> Rakshith Shetty</strong>,
                    ', Bernt Schiele, ',
                    'Mario Fritz'],
		where:
			'CVPR, 2019',
		links: [
			{
				title: 'Paper',
				link: 'http://openaccess.thecvf.com/content_CVPR_2019/papers/Shetty_Not_Using_the_Car_to_See_the_Sidewalk_--_Quantifying_CVPR_2019_paper.pdf',
			},
            {
                title: 'Poster',
                link: 'https://datasets.d2.mpi-inf.mpg.de/rakshith/notusingcar/poster.pdf',
            },
			{
				title: 'Bibtex',
				isExpandable: true,
                link: 'abc',
				content: `@inproceedings{shetty2019not,\n\
                           title={Not Using the Car to See the Sidewalk--Quantifying and Controlling the Effects of Context in Classification and Segmentation},\n\
                           author={Shetty, Rakshith and Schiele, Bernt and Fritz, Mario},\n \
                           booktitle={Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition}, \n\
                           pages={8218--8226}, \n\
                           year={2019}\n \
                         }`
			},
		],
		mainThumb: carimg,
		gallery: [
		],
	},
	{
		title: 'Adversarial Scene Editing: Automatic Object Removal from Weak Supervision',
		shortDesc: [<strong> Rakshith Shetty</strong>,
                    ' Mario Fritz, ',
                    'Bernt Schiele, ',
                    ],
		where:
			'NeurIPS, 2018',
		links: [
			{
				title: 'Paper',
				link: 'https://papers.nips.cc/paper/7997-adversarial-scene-editing-automatic-object-removal-from-weak-supervision.pdf',
			},
            {
                title: 'Poster',
                link: 'https://datasets.d2.mpi-inf.mpg.de/rakshith/object_removal_nips/NIPS2018_poster.pdf',
            },
			//{
			//	title: 'Poster',
			//	link: 'https://rakshithshetty.github.io/CausalVQA/',
			//},
			{
				title: 'Bibtex',
				isExpandable: true,
                link: 'abc',
				content: `@inproceedings{shetty2018adversarial,\n\
                            title={Adversarial scene editing: Automatic object removal from weak supervision},\n\
                            author={Shetty, Rakshith R and Fritz, Mario and Schiele, Bernt},\n\
                            booktitle={Advances in Neural Information Processing Systems},\n\
                            pages={7706--7716},\n\
                            year={2018}\n\
                          }`
			},
		],
		mainThumb: remimg,
		gallery: [
		],
	},
	{

		title: ['A', <sup>4</sup>, 'NT: Author Attribute Anonymity by Adversarial Training of Neural Machine Translation'],
		shortDesc: [<strong> Rakshith Shetty</strong>,
                    ', Bernt Schiele, ',
                    'Mario Fritz'],
		where:
			'USENIX, 2018 (Oral)',
		links: [
			{
				title: 'Paper',
				link: 'https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-shetty.pdf',
			},
            {
                title: 'Talk',
                link: 'https://www.youtube.com/watch?v=_mz5VtLA8XQ'
            },
			//{
			//	title: 'Poster',
			//	link: 'https://rakshithshetty.github.io/CausalVQA/',
			//},
			{
				title: 'Bibtex',
				isExpandable: true,
                link: 'abc',
				content: `@inproceedings {217499,\n\
                          author = {Rakshith Shetty and Bernt Schiele and Mario Fritz},\n\
                          title = {A4NT: Author Attribute Anonymity by Adversarial Training of Neural Machine Translation},\n\
                          booktitle = {27th {USENIX} Security Symposium ({USENIX} Security 18)},\n\
                          year = {2018},\n\
                          isbn = {978-1-939133-04-5},\n\
                          address = {Baltimore, MD},\n\
                          pages = {1633--1650},\n\
                          publisher = {{USENIX} Association},\n\
                          month = aug,\n\
                          }`
			},
		],
		mainThumb: antimg,
		gallery: [
		],
	},
	{
		title: 'Speaking the Same Language: Matching Machine to Human Captions by Adversarial Training',
		shortDesc: [<strong> Rakshith Shetty</strong>,
                    ', Marcus Rohrbach, Lisa Anne Hendricks, Mario Fritz, Bernt Schiele',
                    ],
		where:
			'ICCV, 2017',
		links: [
			{
				title: 'Paper',
				link: 'http://openaccess.thecvf.com/content_ICCV_2017/papers/Shetty_Speaking_the_Same_ICCV_2017_paper.pdf',
			},
			{
				title: 'Code',
				link: 'https://github.com/rakshithShetty/captionGAN',
			},
            {
                title: 'Poster',
                link: 'https://datasets.d2.mpi-inf.mpg.de/rakshith/caption_gan/poster.pdf',
            },
			{
				title: 'Bibtex',
				isExpandable: true,
                link: 'abc',
				content: `@InProceedings{Shetty_2017_ICCV,\n\
                           author = {Shetty, Rakshith and Rohrbach, Marcus and Anne Hendricks, Lisa and Fritz, Mario and Schiele, Bernt},\n\
                           title = {Speaking the Same Language: Matching Machine to Human Captions by Adversarial Training},\n\
                           booktitle = {The IEEE International Conference on Computer Vision (ICCV)},\n\
                           month = {Oct},\n\
                           year = {2017}\n\
                           }`
			},
		],
		mainThumb: spkimg,
		gallery: [
		],
	},
	{
		title: 'Paying attention to descriptions generated by image captioning models',
		shortDesc: ['Hamed R Tavakoli, ',
                    <strong> Rakshith Shetty</strong>,
                    ', Ali Borji, Jorma Laaksonen',
                    ],
		where:
			'ICCV, 2017',
		links: [
			{
				title: 'Paper',
				link: 'http://openaccess.thecvf.com/content_ICCV_2017/papers/Tavakoli_Paying_Attention_to_ICCV_2017_paper.pdf',
			},
			{
				title: 'Bibtex',
				isExpandable: true,
                link: 'abc',
				content: `@InProceedings{Tavakoli_2017_ICCV,\n\
                           author = {Tavakoli, Hamed R. and Shetty, Rakshith and Borji, Ali and Laaksonen, Jorma},\n\
                           title = {Paying Attention to Descriptions Generated by Image Captioning Models},\n\
                           booktitle = {The IEEE International Conference on Computer Vision (ICCV)},\n\
                           month = {Oct},\n\
                           year = {2017}\n\
                           }`
			},
		],
		mainThumb: payatt,
		gallery: [
		],
	},
];
