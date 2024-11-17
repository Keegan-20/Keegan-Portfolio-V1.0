import projects1 from "../assets/project1.webp";
import projects2 from "../assets/project2.webp";
import projects3 from "../assets/project3.webp";
import projects4 from "../assets/project4.webp";
import projects5 from "../assets/project5.webp";


export const LINKS = [
  { href: "#home", label: "Home"},
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export const ABOUT_ME = {
  About_me: "About Me",
  para1:
    "I’m Keegan, a creative frontend developer, crafting immersive and intuitive web experiences, I transform creative visions into seamless digital experiences, also i have a keen eye for design and user experience.I chose frontend development because it sits at the intersection of creative design and technical problem-solving.",

    para2:"I love the immediate visual feedback of my work and the challenge of creating interfaces that delight users while maintaining clean, efficient code.I thrive on crafting intuitive user interfaces that not only look beautiful but also solve real-world problems.",

    para3:" Let's connect and bring your vision to life through impactful web solutions.",

  resumeLinkText: "Download CV",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "ImagiFix",
    description: "A Photo Editing Progresive Web App Built Using Vanilla Js Only.",
    image: projects1,
    link: "https://github.com/your-github/streamerzz",
  },
  {
    name: "YumBites Food",
    description: "A Food Ordering Web App",
    image: projects2,
    link: "https://github.com/your-github/nutritrack",
  },
  {
    name: "HairRevive",
    description: "A platform for hair regrowth solutions powered by science",
    image: projects3,
    link: "https://github.com/your-github/hairrevive",
  },
  {
    name: "DevDeck",
    description:
      "Interactive dashboard for developers to track coding activity",
    image: projects4,
    link: "https://github.com/your-github/devdeck",
  },
  {
    name: "FitConnect",
    description: "Fitness social network to connect athletes and trainers",
    image: projects5,
    link: "https://github.com/your-github/fitconnect",
  },

];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like React, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "keegancolaco201@gmail.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/yourprofile",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/yourprofile",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Keegan Colaco. All rights reserved.`,
};
