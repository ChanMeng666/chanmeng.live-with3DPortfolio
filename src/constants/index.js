import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  figma,
  nodejs,
  mongodb,
  git,
  aws,
  nextjs,
  python,
  threejs,
  icon1,
  icon2,
  icon3,
  hobby_travelling,
  hobby_snorkelling,
  hobby_tidying,
  hobby_programming,
  hobby_hiking,
  CORDE,
  AgrihireSolutions,
  SwimmingClub,
  MathematicsTeacher,
  smart_offline_data_collection_system,
  agrihire_solutions_system,
  EastCoastAnglersClub,
  githubREADME,
} from '../../static';

const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'project',
    title: 'Projects',
  },
  {
    id: 'hobby',
    title: 'Life',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile Developer',
    icon: mobile,
  },
  {
    title: 'Mathematics Teacher',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'ReactJS',
    icon: reactjs,
  },
  {
    name: 'React Native',
    icon: reactjs,
  },
  {
    name: 'NodeJS',
    icon: nodejs,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'Three.js',
    icon: threejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'TailwindCSS',
    icon: tailwind,
  },
];

const experiences = [
  {
    title: 'Application Full Stack Developer',
    company_name: 'CORDE',
    icon: CORDE,
    iconBg: '#383E56',
    date: 'Jun 2024 – Present • Hybrid • Internship',
    points: [
      'Deeply involved in the design and development of a pioneering mobile application using React Native and Android, focused on enhancing offline data management and synchronization.',
      'Innovated with ArcGIS integration to boost asset management capabilities and operational efficiency.',
      'Crafted an intuitive and visually appealing user interface using Native Base, improving user engagement.',
      'Demonstrated technical proficiency in development environments like WebStorm and Android Studio, ensuring robust application performance through extensive testing on multiple platforms.',
      'Advanced secure data handling with TypeScript and SQL, fortified by SQLite for reliable offline data storage.',
    ],
  },
  {
    title: 'Web Full Stack Developer',
    company_name: 'Agrihire Solutions',
    icon: AgrihireSolutions,
    iconBg: '#E6DEDD',
    date: 'May 2024 – Jun 2024 • Hybrid • Full-time',
    points: [
      'Key responsibilities included designing a robust data model and a user-friendly GUI using a diverse tech stack (HTML, CSS, JavaScript, Python, Bootstrap, MySQL).',
      'Leveraged tools such as MaxKB API, leaflet.js, SendGrid, and ECharts to enhance functionality and user interaction.',
      'Employed Agile methodologies to develop and deploy a system that improved real-time tracking, inventory management.',
    ],
  },
  {
    title: 'Web Full Stack Developer',
    company_name: 'Swimming Club',
    icon: SwimmingClub,
    iconBg: '#383E56',
    date: 'Mar 2024 – Apr 2024 • Hybrid • Full-time',
    points: [
      'Actively involved in developing a sophisticated management system for the Countryside Community Swimming Club, employing Python, Flask, and front-end technologies including HTML, CSS, Jinja, JavaScript, and Bootstrap.',
      'Played a key role in creating a secure and efficient MySQL data model.',
      'Engaged fully in the agile development process, enhancing functionality and user interface, which led to improved operational efficiency and user satisfaction.',
      'The system automated key functions like membership management and scheduling, providing a scalable solution for future enhancements.',
    ],
  },
  {
    title: 'Mathematics Teacher',
    company_name: 'Various Educational Institutions',
    icon: MathematicsTeacher,
    iconBg: '#E6DEDD',
    date: 'Aug 2016 – Mar 2023 • On-site • Full-time',
    points: [
      'Delivered mathematics tutoring to junior and senior high school students, boosting their numerical skills and confidence.',
      'Provided counselling for university entrance examinations and physical education admission tests.',
      'Integrated IT tools to enhance educational practices and engaged in professional development training for faculty.',
    ],
  },
];

const projects = [
  {
    name: 'Offline Data Collection',
    description: 'As a key participant in the development of CORDE\'s mobile app, this project facilitates offline data collection and synchronization with online databases when connectivity is restored. It incorporates ArcGIS to display crucial asset-related information, enhancing operational efficiency and data precision. The app, crafted using a hybrid of React Native and native Android, optimizes cross-platform performance. Native Base is employed for its intuitive UI, ensuring user engagement. API testing was conducted with APIfox, alongside comprehensive device and simulator testing to ensure reliability and compatibility.',
    tags: [
      {
        name: 'React Native',
        color: 'blue-text-gradient',
      },
      {
        name: 'Android Native',
        color: 'green-text-gradient',
      },
      {
        name: 'Native Base',
        color: 'orange-text-gradient',
      },
    ],
    image: smart_offline_data_collection_system,
    source_link: 'https://github.com/ChanMeng666/CORDE-Mobile-Application',
    website_link: 'https://overview-of-android-app--u8adh8r.gamma.site/',
    icon: 'github',
  },
  {
    name: 'Equipment and Order Management System',
    description: 'I helped design a user-friendly GUI and robust data model, utilizing technologies like HTML, CSS, JavaScript, Python, Bootstrap, and MySQL. The enhanced system includes features such as real-time tracking, efficient inventory management, and comprehensive reporting through integrations like MaxKB API, Leaflet.js, SendGrid, and ECharts. Our adoption of Agile methodologies ensured the platform significantly improved operational efficiency and customer satisfaction at AgriHire Solutions.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'orange-text-gradient',
      },
    ],
    image: agrihire_solutions_system,
    source_link: 'https://github.com/ChanMeng666/AgriHire-Solutions',
    website_link: 'https://agrihireaq.pythonanywhere.com/',
    icon: 'github',
  },
  {
    name: 'Swimming Club Management System',
    description: 'This system revolutionized club operations by enhancing user engagement with a user-friendly interface and secured transactions. I utilized Python, Flask, HTML, CSS, Jinja, JavaScript, Bootstrap, and MySQL to deliver significant improvements in operational efficiency and user satisfaction. My key contributions included designing a comprehensive SQL data model, crafting an intuitive GUI, and enhancing backend functionality. Through agile development, we created a scalable and robust platform poised for future expansion.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Flask',
        color: 'pink-text-gradient',
      },
      {
        name: 'Jinja',
        color: 'orange-text-gradient',
      },
    ],
    image: agrihire_solutions_system,
    source_link: 'https://github.com/ChanMeng666/Countryside-Community-Swimming-Club',
    website_link: 'https://github.com/ChanMeng666/Countryside-Community-Swimming-Club',
    icon: 'github',
  },
  {
    name: 'East Coast Anglers Club',
    description: 'This project showcases my endeavor to create dynamic and visually appealing home and login pages. Focused on delivering a seamless user experience, these pages feature interactive elements and responsive design, ensuring a delightful and efficient interaction for users.',
    tags: [
      {
        name: 'Bootstrap',
        color: 'blue-text-gradient',
      },
      {
        name: 'MySQL',
        color: 'orange-text-gradient',
      },
    ],
    image: EastCoastAnglersClub,
    source_link: 'https://github.com/ChanMeng666/Fishing-Club-Project',
    website_link: 'https://groupac.pythonanywhere.com/',
    icon: 'github',
  },
  {
    name: 'Exquisite GitHub README',
    description: 'Crafting an inspiring GitHub README involved meticulous attention to detail and transparency. The design showcases projects and technologies through visually engaging elements and intuitive organization, ensuring ease of navigation. Each project segment is detailed with icons and concise descriptions, emphasizing key technologies and features. Dynamic GitHub stats, streaks, and trophies are integrated using third-party services like Vercel and Heroku app, enhancing interactivity. Animated GIFs and programming quotes add a light-hearted touch. The repository is public, fostering an open-source community spirit, encouraging learning, adaptation, and innovation.',
    tags: [
      {
        name: 'Public Repository',
        color: 'blue-text-gradient',
      },
      {
        name: 'Interactive Elements',
        color: 'green-text-gradient',
      },
      {
        name: 'Third-Party Integrations',
        color: 'orange-text-gradient',
      },
    ],
    image: githubREADME,
    source_link: 'https://github.com/ChanMeng666/ChanMeng666',
    website_link: 'https://github.com/ChanMeng666',
    icon: 'github',
  },
];

const footerIcons = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/chanmeng666',
    icon: icon1,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/ChanMeng666',
    icon: icon2,
  },
  {
    name: 'Personal Website',
    link: 'https://www.chanmeng.live/',
    icon: icon3,
  },
];

const panelsData = [
  {
    name: 'Programming',
    imageUrl: hobby_programming,
  },
  {
    name: 'Snorkelling',
    imageUrl: hobby_snorkelling,
  },
  {
    name: 'Travelling',
    imageUrl: hobby_travelling,
  },
  {
    name: 'Hiking',
    imageUrl: hobby_hiking,
  },
  {
    name: 'Tidying',
    imageUrl: hobby_tidying,
  },
];

const toRotateText = [
  'Simplify, simplify.',
  'I wanted to live deep and suck out all the marrow of life.',
  'Rather than love, than money, than fame, give me truth.',
  'Time is but the stream I go a-fishing in.',
  'All good things are wild and free.',
  'Things do not change; we change.',
  'The universe is wider than our views of it.',
  'Be yourself - not your idea of what you think somebody else\'s idea of yourself should be.',
  'Heaven is under our feet as well as over our heads.',
  'Money is not required to buy one necessary of the soul.',
  'Perhaps it was more important to cultivate the fields of the spirit than of the earth.',
  'Live the life you have imagined.',
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  projects,
  toRotateText,
  footerIcons,
  panelsData,
};
