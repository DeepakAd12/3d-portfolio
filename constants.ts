import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Deepak Adhikari",
  contact: {
    location: "Ranikhet, Uttarakhand - 263652/INDIA",
    phone: "+91-6399851956",
    email: "adhikarideepak719@gmail.com",
    linkedin: "LinkedIn",
    github: "GitHub",
    linkedinUrl: "#", // Placeholder as actual URL wasn't in OCR
    githubUrl: "#"    // Placeholder as actual URL wasn't in OCR
  },
  summary: "Web Developer skilled in HTML, CSS, JavaScript, and Tailwind CSS, with a strong passion for UI/UX design. Experienced in building responsive, user-focused websites and collaborating effectively through GitHub. Dedicated to continuous learning, optimizing user experience, and contributing to team success through clean, efficient, and scalable code.",
  education: [
    {
      institution: "Amrapali Group of Institutes – Haldwani",
      degree: "Bachelors of Computers Application (BCA)",
      year: "2022–2025"
    }
  ],
  skills: {
    technical: [
      "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React JS", "Node Js", "Git & GitHub", "AI Tools"
    ],
    other: [
      "UI/UX Design", "Responsive Design", "Time Management", "Creative Thinking"
    ]
  },
  experience: [
    {
      role: "Web Dev Intern",
      company: "Vault of Codes (Remote)",
      period: "Jun–Jul 2025",
      highlights: [
        "Created web pages using HTML, CSS, JavaScript",
        "Used Git & GitHub for collaboration"
      ]
    }
  ],
  projects: [
    {
      title: "To-Do List Web App",
      description: "GitHub Task manager with add/delete/complete features."
    },
    {
      title: "Stopwatch / Timer",
      description: "An interactive web-based Countdown Timer and Stopwatch application built with HTML, CSS, and JavaScript."
    },
    {
      title: "Portfolio Website",
      description: "GitHub Responsive personal portfolio using HTML & CSS."
    },
    {
      title: "Survey Form",
      description: "GitHub Form built with semantic HTML and styled with CSS."
    }
  ],
  certifications: [
    {
      name: "Web Development Internship",
      issuer: "Vault of Codes",
      year: "2025",
      description: "Focusing on creating responsive websites, improving UI/UX, and enhancing practical coding skills."
    },
    {
      name: "AI for Beginners",
      issuer: "HP LIFE (HP Foundation)",
      year: "Completed July 2025",
      description: "Gained foundational knowledge of artificial intelligence (AI), its applications in business, importance of data and ethical implications."
    },
    {
      name: "JavaScript Fundamentals to Advanced: Full Stack Development",
      issuer: "Udemy",
      year: "Completed: July 2025",
      description: "Gained hands-on experience in core JavaScript concepts, DOM."
    }
  ],
  languages: ["Hindi (Native)", "English (Professional)"],
  interests: ["Front-end development", "UI/UX design", "Web performance optimization", "Exploring modern JavaScript tools"]
};