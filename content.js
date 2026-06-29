/* ============================================================================
   SITE CONTENT — edit this file to update the website, then `git push`.
   No build step. Everything below is rendered by site.js into index.html.

   Quick how-to:
   - Change your intro:        edit SITE.intro (HTML allowed).
   - Add/edit a publication:   add/edit an object in SITE.publications.
   - Update a link:            edit SITE.profile.links.
   - Add personal projects:    fill in SITE.projects (template at the bottom).
   ============================================================================ */

const SITE = {
  // ---- Sidebar / profile -------------------------------------------------
  profile: {
    name: "I am Rakshith,",
    subtitle: "an AI Researcher & Engineer",
    avatar: "assets/avatar.jpg",
    links: {
      cv: "cv/CV_Rakshith.pdf",
      scholar: "https://scholar.google.co.in/citations?user=nubwxloAAAAJ&hl=en&oi=ao",
      github: "https://github.com/rakshithShetty",
      linkedin: "https://www.linkedin.com/in/rakshith-shetty-a80a941b/",
      mail: "mailto:rakshith.rs@gmail.com",
    },
  },

  // ---- Intro section -----------------------------------------------------
  introHeading: "Hi, I'm Rakshith",
  // HTML is allowed here. Each string in the array becomes a <p>.
  intro: [
    "AI researcher and engineer with a PhD and 10+ years applying machine learning across many domains. Currently an Applied Scientist at Amazon Berlin, where I take ideas from research concept to deployed product — with a track record of measurable real-world impact (models running inference for 500M+ customers). My experience spans computer vision, NLP &amp; LLMs, generative AI, and large-scale production systems.",
    "I did my PhD at the <a href=\"https://www.mpi-inf.mpg.de/departments/computer-vision-and-machine-learning/\" target=\"_blank\" rel=\"noopener noreferrer\">Max Planck Institute for Informatics</a>, supervised by <a href=\"https://www.mpi-inf.mpg.de/departments/computer-vision-and-machine-learning/people/bernt-schiele/\" target=\"_blank\" rel=\"noopener noreferrer\">Prof. Dr. Bernt Schiele</a> and <a href=\"https://cispa.de/en/people/mario.fritz\" target=\"_blank\" rel=\"noopener noreferrer\">Prof. Dr. Mario Fritz</a>, where I worked on building controllable generative models for images and text, and leveraged them to build robust computer vision models.",
    "Outside of work, I have a deep interest in robotics — currently building hobby projects with the LeKiwi robot and IsaacSim simulator (<a href=\"https://42dof.org\" target=\"_blank\" rel=\"noopener noreferrer\">42dof.org</a>, coming soon). I also love gaming and have been working on my own football strategy game, <a href=\"https://rakshithshetty.github.io/hexball/\" target=\"_blank\" rel=\"noopener noreferrer\">HexBall</a>.",
  ],

  // ---- Research showcase -------------------------------------------------
  // To add a paper: copy one block, drop a thumbnail in assets/teasers/,
  // and point `thumb` at it. `oral: true` shows the red "Oral" tag.
  researchHeading: "Research",
  researchIntro:
    'Selected publications from my PhD on robust and controllable computer vision and vision-and-language. Full list on <a href="https://scholar.google.co.in/citations?user=nubwxloAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">Google Scholar</a>.',
  publications: [
    {
      title: "Towards automated testing and robustification by semantic adversarial data generation",
      authors: "<strong>Rakshith Shetty</strong>, Mario Fritz, Bernt Schiele",
      venue: "ECCV, 2020",
      oral: true,
      tldr: "Semantic adversarial attack using a disentangled generator to find targeted hard samples to fool an object detector.",
      thumb: "assets/teasers/semadv.gif",
      links: [
        { label: "Paper", url: "https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123470477.pdf" },
        { label: "Video", url: "https://youtu.be/1TiXRTJJikE" },
      ],
      bibtex: `@inproceedings{shetty2020SemAdv,
  title={Towards automated testing and robustification by semantic adversarial data generation},
  author={Shetty, Rakshith and Fritz, Mario and Schiele, Bernt},
  booktitle={European Conference on Computer Vision (ECCV)},
  year={2020}
}`,
    },
    {
      title: "Towards Causal VQA: Revealing and Reducing Spurious Correlations by Invariant and Covariant Semantic Editing",
      authors: "Vedika Agarwal, <strong>Rakshith Shetty</strong>, Mario Fritz",
      venue: "CVPR, 2020",
      oral: false,
      tldr: "Quantifying spurious context dependence in VQA models through image editing.",
      thumb: "assets/teasers/causalvqa.png",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/1912.07538" },
        { label: "Project page", url: "https://rakshithshetty.github.io/CausalVQA/" },
      ],
      bibtex: `@inproceedings{agarwal2020towards,
  title={Towards Causal VQA: Revealing and Reducing Spurious Correlations by Invariant and Covariant Semantic Editing},
  author={Agarwal, Vedika and Shetty, Rakshith and Fritz, Mario},
  booktitle={Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition},
  year={2020}
}`,
    },
    {
      title: "Not Using the Car to See the Sidewalk — Quantifying and Controlling the Effects of Context in Classification and Segmentation",
      authors: "<strong>Rakshith Shetty</strong>, Bernt Schiele, Mario Fritz",
      venue: "CVPR, 2019",
      oral: false,
      tldr: "Measuring and mitigating over-reliance on context in classification and segmentation models.",
      thumb: "assets/teasers/context.gif",
      links: [
        { label: "Paper", url: "http://openaccess.thecvf.com/content_CVPR_2019/papers/Shetty_Not_Using_the_Car_to_See_the_Sidewalk_--_Quantifying_CVPR_2019_paper.pdf" },
        { label: "Poster", url: "https://datasets.d2.mpi-inf.mpg.de/rakshith/notusingcar/poster.pdf" },
      ],
      bibtex: `@inproceedings{shetty2019not,
  title={Not Using the Car to See the Sidewalk--Quantifying and Controlling the Effects of Context in Classification and Segmentation},
  author={Shetty, Rakshith and Schiele, Bernt and Fritz, Mario},
  booktitle={Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition},
  pages={8218--8226},
  year={2019}
}`,
    },
    {
      title: "Adversarial Scene Editing: Automatic Object Removal from Weak Supervision",
      authors: "<strong>Rakshith Shetty</strong>, Mario Fritz, Bernt Schiele",
      venue: "NeurIPS, 2018",
      oral: false,
      tldr: "Learning an object removal GAN using weak supervision from unpaired data.",
      thumb: "assets/teasers/objectremoval.png",
      links: [
        { label: "Paper", url: "https://papers.nips.cc/paper/7997-adversarial-scene-editing-automatic-object-removal-from-weak-supervision.pdf" },
        { label: "Poster", url: "https://datasets.d2.mpi-inf.mpg.de/rakshith/object_removal_nips/NIPS2018_poster.pdf" },
      ],
      bibtex: `@inproceedings{shetty2018adversarial,
  title={Adversarial scene editing: Automatic object removal from weak supervision},
  author={Shetty, Rakshith R and Fritz, Mario and Schiele, Bernt},
  booktitle={Advances in Neural Information Processing Systems},
  pages={7706--7716},
  year={2018}
}`,
    },
    {
      title: "A<sup>4</sup>NT: Author Attribute Anonymity by Adversarial Training of Neural Machine Translation",
      authors: "<strong>Rakshith Shetty</strong>, Bernt Schiele, Mario Fritz",
      venue: "USENIX Security, 2018",
      oral: true,
      tldr: "Learning to transfer writing style with adversarial training in order to obfuscate private attributes.",
      thumb: "assets/teasers/a4nt.gif",
      links: [
        { label: "Paper", url: "https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-shetty.pdf" },
        { label: "Talk", url: "https://www.youtube.com/watch?v=_mz5VtLA8XQ" },
      ],
      bibtex: `@inproceedings{217499,
  author={Rakshith Shetty and Bernt Schiele and Mario Fritz},
  title={A4NT: Author Attribute Anonymity by Adversarial Training of Neural Machine Translation},
  booktitle={27th USENIX Security Symposium (USENIX Security 18)},
  year={2018},
  isbn={978-1-939133-04-5},
  address={Baltimore, MD},
  pages={1633--1650},
  publisher={USENIX Association},
  month=aug
}`,
    },
    {
      title: "Speaking the Same Language: Matching Machine to Human Captions by Adversarial Training",
      authors: "<strong>Rakshith Shetty</strong>, Marcus Rohrbach, Lisa Anne Hendricks, Mario Fritz, Bernt Schiele",
      venue: "ICCV, 2017",
      oral: false,
      tldr: "GAN-based image captioning model to produce more diverse captions.",
      thumb: "assets/teasers/captiongan.gif",
      links: [
        { label: "Paper", url: "http://openaccess.thecvf.com/content_ICCV_2017/papers/Shetty_Speaking_the_Same_ICCV_2017_paper.pdf" },
        { label: "Code", url: "https://github.com/rakshithShetty/captionGAN" },
        { label: "Poster", url: "https://datasets.d2.mpi-inf.mpg.de/rakshith/caption_gan/poster.pdf" },
      ],
      bibtex: `@InProceedings{Shetty_2017_ICCV,
  author={Shetty, Rakshith and Rohrbach, Marcus and Anne Hendricks, Lisa and Fritz, Mario and Schiele, Bernt},
  title={Speaking the Same Language: Matching Machine to Human Captions by Adversarial Training},
  booktitle={The IEEE International Conference on Computer Vision (ICCV)},
  month={Oct},
  year={2017}
}`,
    },
    {
      title: "Paying Attention to Descriptions Generated by Image Captioning Models",
      authors: "Hamed R. Tavakoli, <strong>Rakshith Shetty</strong>, Ali Borji, Jorma Laaksonen",
      venue: "ICCV, 2017",
      oral: false,
      tldr: "Quantifying agreement between object referrals in captions and visual saliency.",
      thumb: "assets/teasers/attention.gif",
      links: [
        { label: "Paper", url: "http://openaccess.thecvf.com/content_ICCV_2017/papers/Tavakoli_Paying_Attention_to_ICCV_2017_paper.pdf" },
      ],
      bibtex: `@InProceedings{Tavakoli_2017_ICCV,
  author={Tavakoli, Hamed R. and Shetty, Rakshith and Borji, Ali and Laaksonen, Jorma},
  title={Paying Attention to Descriptions Generated by Image Captioning Models},
  booktitle={The IEEE International Conference on Computer Vision (ICCV)},
  month={Oct},
  year={2017}
}`,
    },
  ],

  // ---- Personal projects (deferred) --------------------------------------
  // Leave this array empty to hide the section. When ready, add entries in the
  // same shape as the template below and the "Personal Projects" section will
  // appear automatically (above Research). `links` is optional.
  projects: [
    // {
    //   title: "HexBall",
    //   blurb: "A solo-developed football strategy game.",
    //   thumb: "assets/teasers/hexball.gif",
    //   links: [
    //     { label: "Play", url: "https://rakshithshetty.github.io/hexball/" },
    //   ],
    // },
  ],
};
