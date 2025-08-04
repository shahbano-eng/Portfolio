// Skills Section Logo's
import htmlLogo from './assets/Tech_logo/html.png';
import cssLogo from './assets/Tech_logo/css.png';
import javascriptLogo from './assets/Tech_logo/javascript.png';
import reactjsLogo from './assets/Tech_logo/reactjs.png';
import tailwindcssLogo from './assets/Tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/Tech_logo/bootstrap.png';
import nodejsLogo from './assets/Tech_logo/nodejs.png';
import mysqlLogo from './assets/Tech_logo/mysql.png';
import mongodbLogo from './assets/Tech_logo/mongodb.png';
import cLogo from './assets/Tech_logo/c.png';
import cppLogo from './assets/Tech_logo/cpp.png';
import javaLogo from './assets/Tech_logo/java.png';
import pythonLogo from './assets/Tech_logo/python.png';
import typescriptLogo from './assets/Tech_logo/typescript.png';
import gitLogo from './assets/Tech_logo/git.png';
import githubLogo from './assets/Tech_logo/github.png';
import vscodeLogo from './assets/Tech_logo/vscode.png';
import postmanLogo from './assets/Tech_logo/postman.png';
import figmaLogo from './assets/Tech_logo/figma.png';
import PHPLogo from './assets/Tech_logo/php.png';
import NgrokLogo from './assets/Tech_logo/Ngrok.jpeg';
import csharpLogo from './assets/Tech_logo/csharp.png'; 


// Experience Section Logo's
import IstariLogo from './assets/Company_Logo/istari_logo.jpeg';
import PsutLogo from './assets/Company_Logo/PSUT_Logo.png';


// Education Section Logo's
import ittihadLogo from './assets/Education_Logo/Al-Ittihad_School.jpeg';
import Psut_Logo from './assets/education_logo/PSUT_Logo.png';

// Project Section Logo's
import MedishareLogo from './assets/work_logo/Medishare.png';
import GiftShopLogo from './assets/work_logo/S&T_Gifts.jpeg';
import RC from './assets/Work_logo/RC.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PHP', logo: PHPLogo }
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Ngrok', logo: NgrokLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: PsutLogo,
      role: "Research Assistant",
      company: "Princess Sumaya University For Technology",
      date: "March 2024 - July 2024",
      desc: "Conducted research on Blockchain Technology for Managing Massive Healthcare Records under the guidance of my professor. Assisted in data collection, analysis, and report writing. ",
      skills: [
        "Research Writting",
        "Fast API",
        "JavaScript",
        "React JS",
        "Blockchain Technology",
        "Healthcare Management",
        "Data Analysis",
        "Data Collection",
        "Report Writing",
        "Team Collaboration",
        "Problem Solving",
        "Time Management",
        "Communication Skills",
        "Attention to Detail",
        "Documentation",
        "Presentation Skills",
        "Technical Writing",
        "Data Visualization",
      ],
    },
    {
      id: 1,
      img: IstariLogo,
      role: "Didital Engineering (DE) Tool Intern",
      company: "Istari Digital Inc",
      date: "June 2023 - Oct 2024",
      desc: "At Istari Digital Inc., I worked on CAD modeling, improved project workflow efficiency, and managed project deadlines effectively. I learned to use new software tools, strengthened my time management, and enhanced my communication and teamwork skills. ",
      skills: [
        "C++",
        "Jira",
        "Software Deveopment Lifecycle",
        "CAD Modeling",
        "Project Management",
        "Workflow Optimization",
        "Time Management",
        "Communication Skills",
        "Team Collaboration",
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: Psut_Logo,
      school:"Princess Sumaya University For Technology",
      date: "Oct 2021 - Sep 2025",
      desc: "I completed my Bachelor's degree in  Software Engineering from Princess Sumaya University For Technology (PSUT) Amman , Jordan. Throughout my studies, I was immersed in a variety of Cources and Projects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at PSUT allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor’s in Software Engineering",
    },
    {
      id: 1,
      img: ittihadLogo,
      school: "Al Ittihad School, IGCSE Amman, Jordan",
      date: "Sept 2018 - Aug 2021",
      desc: "I completed my IGCSE and A-levels from Al Ittihad School, IG, Amman, where I studied Mathematics, Information Technology, and Biology as my core subjects. These subjects later provided me with a strong foundation in analytical thinking and problem-solving skills, which are essential in the field of software engineering.",
      degree: "IGCSE and A-levels",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "MediShare - Healthcare Management System",
      description:
        "A secure health records management system using React Native, Node.js, MongoDB, and Ngrok API. Enabled patients to share records with doctors through secure links and implemented a dual-interface system for both users and healthcare professionals. l and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: MedishareLogo,
      tags: ["React Native", "Node.js", "MongoDB", "React JS", "Ngrok API"],
    },
    {
      id: 1,
      title: "S&T Gifts - E-commerce Platform",
      description:
        "Designed a dynamic e-commerce platform using HTML, CSS, JavaScript, and PHP. Later secured the website by integrating security techniques such as password hashing, user authentication, authorization, and secure session management as part of the Secure Software Development course. full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: GiftShopLogo,
      tags: [ "HTML", "CSS", "JavaScript", "PHP", "Security Techniques"],

    },
        {
      id: 2,
      title: "SRC Smart Car – IoT-Based Automotive Project",
      description:
        "Designed and developed a WiFi-controlled RC smart car using ESP8266 and Arduino. The project integrated hardware and software components to enable real-time navigation and control over a wireless network. Implemented motor control, sensor integration, and secure communication protocols to ensure smooth operation and reliable performance.",
      image: RC,
      tags: [ "ESP8266", "Arduino", "DC motors", "sensors", "C++", "IoT Device Development", "Troubleshooting & Hardware-Software Integration", "Real-Time System Design", "Embedded Systems Programming"],

    },
  ];  