import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'León Vila | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi !, my name is ',
  name: 'León',
  subtitle: "I'm a web developer & programmer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hello, my name is Leon and I am a full stack developer, I am from Buenos Aires. I have an attitude to always learn and solve problems of anything not only about code, all the time I'm looking for new things to learn but programming steals my heart.`,
  paragraphTwo: `Currently with other fellow developers we are finishing the final project in Henry which is a platform for online medical services, we do it following agile methodologies such as SCRUM, with sprints of one week and presenting to a Product Owner.`,
  paragraphThree:
    'I am familiar with a variety of languages and technologies, including: JavaScript (ES6), HTML, CSS, CSS modules, CSS frameworks, React.JS, Redux, Node.JS, React components libraries, Express.JS, Postman, AJAX, PostgreSQL, Sequelize ORM, Webpack, Jest, Mocha, Visual Studio Code, Git, Github, Supabase, Firebase, C, C#, Bash, RESTful API, SCRUM.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Integra',
    info:
      'Currently with other fellow developers we are finishing the final project in Henry which is a platform for online medical services.',
    info2: 'We used React.js, Redux, Node.js, CSS modules, Material UI, Firebase, Supabase',
    url: 'https://integra-platform.web.app/',
    repo: 'https://github.com/Ululette/PF8Samurai', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `I'm eager to talk to you!`,
  btn: 'Send me an email',
  email: 'leonvila98@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/leonvila/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/leonvila98',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
