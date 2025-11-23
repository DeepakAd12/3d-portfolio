export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin?: string;
  github?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tech?: string;
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  description: string;
}

export interface ResumeData {
  name: string;
  contact: ContactInfo;
  summary: string;
  education: Education[];
  skills: {
    technical: string[];
    other: string[];
  };
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  languages: string[];
  interests: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}