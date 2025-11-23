import React, { useState, useEffect } from 'react';
import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Briefcase, GraduationCap, Trophy, Globe, MousePointer2 } from 'lucide-react';
import { RESUME_DATA } from './constants';
import { ChatWidget } from './components/ChatWidget';
import { TiltCard } from './components/TiltCard';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handlePrint = () => {
    window.print();
  };

  // Global mouse tracker for background parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'skills', 'education'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden scene-3d print:bg-white print:text-black">
      
      {/* 3D Moving Background - Hidden on Print */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#020617] no-print">
         <div className="grid-floor"></div>
         {/* Ambient Glows */}
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/10 via-transparent to-[#020617]"></div>
         <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] transition-transform duration-1000 ease-out"
            style={{ transform: `translate(${mousePos.x * -2}px, ${mousePos.y * -2}px)` }}
         />
         <div 
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] transition-transform duration-1000 ease-out"
            style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` }}
         />
      </div>

      {/* Navigation - Floating Glass */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50 shadow-2xl no-print">
        <div className="px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold font-display tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            DA<span className="text-slate-600">.3D</span>
          </span>
          <div className="hidden md:flex gap-1 bg-slate-800/50 p-1 rounded-xl border border-slate-700/50">
            {['Home', 'Experience', 'Projects', 'Skills', 'Education'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.toLowerCase() 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl text-sm font-medium transition-all duration-300 border border-slate-700 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            <Download size={16} />
            <span className="hidden sm:inline">Save PDF</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 print:pt-0 max-w-5xl mx-auto px-4 sm:px-6 space-y-32 print:space-y-8 pb-32">
        
        {/* Hero Section */}
        <section id="home" className="min-h-[70vh] flex flex-col justify-center print:min-h-0 print:block perspective-1000 relative">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 text-blue-400 text-sm font-medium border border-blue-500/20 animate-fade-in no-print backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Open for Opportunities
            </div>
            
            <div className="relative transform-style-3d">
              <h1 className="text-6xl sm:text-8xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 tracking-tighter text-3d-shadow animate-float print:text-black print:text-5xl print:shadow-none print:animate-none">
                {RESUME_DATA.name}
              </h1>
              {/* Reflection */}
              <h1 className="absolute top-full left-0 text-6xl sm:text-8xl font-bold font-display text-slate-800 tracking-tighter scale-y-[-0.5] opacity-20 blur-sm select-none pointer-events-none no-print">
                {RESUME_DATA.name}
              </h1>
            </div>
            
            <TiltCard className="max-w-2xl bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 print:border-none print:bg-transparent print:p-0">
               <div className="text-xl sm:text-2xl text-slate-300 leading-relaxed font-light print:text-black">
                {RESUME_DATA.summary}
               </div>
            </TiltCard>

            {/* Contact Info Grid */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-400 pt-8 print:text-black print:text-xs">
              <TiltCard className="inline-block bg-slate-900/50 rounded-xl border border-slate-800 print:hidden">
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-3 px-5 py-3 hover:text-blue-400 transition-colors">
                  <Mail size={18} className="text-blue-500" />
                  {RESUME_DATA.contact.email}
                </a>
              </TiltCard>
              
              <TiltCard className="inline-block bg-slate-900/50 rounded-xl border border-slate-800 print:hidden">
                <span className="flex items-center gap-3 px-5 py-3">
                  <Phone size={18} className="text-emerald-500" />
                  {RESUME_DATA.contact.phone}
                </span>
              </TiltCard>

              <TiltCard className="inline-block bg-slate-900/50 rounded-xl border border-slate-800 print:hidden">
                 <span className="flex items-center gap-3 px-5 py-3">
                  <MapPin size={18} className="text-purple-500" />
                  {RESUME_DATA.contact.location}
                </span>
              </TiltCard>

              {/* Print Only Contact */}
              <div className="hidden print:flex flex-col gap-1">
                 <div>{RESUME_DATA.contact.email}</div>
                 <div>{RESUME_DATA.contact.phone}</div>
                 <div>{RESUME_DATA.contact.location}</div>
              </div>

              <div className="flex gap-4 print:hidden">
                <TiltCard className="rounded-xl overflow-hidden bg-slate-800">
                  <a href={RESUME_DATA.contact.githubUrl} className="block p-3 hover:bg-slate-700 text-white transition-colors">
                    <Github size={20} />
                  </a>
                </TiltCard>
                <TiltCard className="rounded-xl overflow-hidden bg-slate-800">
                  <a href={RESUME_DATA.contact.linkedinUrl} className="block p-3 hover:bg-slate-700 text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>


        {/* Experience Section */}
        <section id="experience" className="print:break-inside-avoid scroll-mt-24">
          <div className="flex items-center gap-4 mb-10 print:mb-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
               <Briefcase className="text-blue-400 print:text-black" size={24} />
            </div>
            <h2 className="text-4xl font-bold font-display text-white print:text-black">Experience</h2>
          </div>
          
          <div className="space-y-8">
            {RESUME_DATA.experience.map((exp, idx) => (
              <TiltCard key={idx} className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 print:border-none print:p-0 print:bg-transparent">
                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white print:text-black">{exp.role}</h3>
                      <div className="text-blue-400 font-medium text-lg flex items-center gap-2 print:text-gray-800">
                        {exp.company}
                      </div>
                    </div>
                    <span className="text-sm font-mono text-slate-400 bg-slate-800/50 border border-slate-700 px-3 py-1 rounded-full print:border-gray-300 print:bg-gray-100 print:text-black">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-slate-300 print:text-black">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)] print:shadow-none" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="print:break-inside-avoid scroll-mt-24">
          <div className="flex items-center gap-4 mb-10 print:mb-4">
            <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Code className="text-emerald-400 print:text-black" size={24} />
            </div>
            <h2 className="text-4xl font-bold font-display text-white print:text-black">Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-4">
            {RESUME_DATA.projects.map((project, idx) => (
              <TiltCard 
                key={idx} 
                className="group h-full bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 print:border-none print:p-0 print:bg-transparent"
                glowColor="rgba(16, 185, 129, 0.4)"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-900/30 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors print:hidden">
                       <MousePointer2 size={16} className="text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 print:text-black group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink size={18} className="text-slate-600 group-hover:text-emerald-400 transition-colors print:hidden" />
                </div>
                <p className="text-slate-400 print:text-black text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 print:hidden">
                   {/* Mock tags for visual depth */}
                   <span className="text-xs font-mono text-emerald-500/70 bg-emerald-900/10 px-2 py-1 rounded">HTML</span>
                   <span className="text-xs font-mono text-emerald-500/70 bg-emerald-900/10 px-2 py-1 rounded">CSS</span>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="print:break-inside-avoid scroll-mt-24">
          <div className="flex items-center gap-4 mb-10 print:mb-4">
            <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <Database className="text-purple-400 print:text-black" size={24} />
            </div>
            <h2 className="text-4xl font-bold font-display text-white print:text-black">Skills</h2>
          </div>
          
          <div className="space-y-8">
            <TiltCard className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 print:border-none print:p-0 print:bg-transparent" glowColor="rgba(168, 85, 247, 0.4)">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2 print:text-gray-600">
                <span className="w-8 h-[1px] bg-slate-600"></span>
                Technical Arsenal
              </h3>
              <div className="flex flex-wrap gap-3">
                {RESUME_DATA.skills.technical.map((skill) => (
                  <div key={skill} className="group relative">
                    <div className="absolute inset-0 bg-purple-600 rounded-xl blur opacity-20 group-hover:opacity-60 transition-opacity duration-300 print:hidden"></div>
                    <span className="relative block px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-slate-300 text-sm font-medium hover:text-white hover:border-purple-500 transition-all print:bg-gray-100 print:text-black print:border-gray-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </TiltCard>

            <TiltCard className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 print:border-none print:p-0 print:bg-transparent" glowColor="rgba(168, 85, 247, 0.4)">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2 print:text-gray-600">
                <span className="w-8 h-[1px] bg-slate-600"></span>
                Design & Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {RESUME_DATA.skills.other.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-400 text-sm hover:bg-slate-800 transition-colors print:bg-gray-100 print:text-black print:border-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Education & Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 print:block print:gap-0 print:space-y-8">
          
          <section id="education" className="print:break-inside-avoid scroll-mt-24">
            <div className="flex items-center gap-4 mb-8 print:mb-4">
               <div className="p-2 bg-slate-800 rounded-xl border border-slate-700">
                 <GraduationCap className="text-slate-300 print:text-black" size={20} />
               </div>
              <h2 className="text-2xl font-bold font-display text-white print:text-black">Education</h2>
            </div>
            <div className="space-y-6">
              {RESUME_DATA.education.map((edu, idx) => (
                <TiltCard key={idx} className="bg-slate-900/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 print:border-none print:p-0 print:bg-transparent">
                  <div className="text-blue-400 print:text-black font-semibold mb-1 text-lg">{edu.degree}</div>
                  <div className="text-slate-200 print:text-gray-800 font-medium">{edu.institution}</div>
                  <div className="text-slate-500 print:text-gray-600 text-sm mt-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500/50"></span>
                    {edu.year}
                  </div>
                </TiltCard>
              ))}
            </div>
          </section>

          <section id="certifications" className="print:break-inside-avoid scroll-mt-24">
            <div className="flex items-center gap-4 mb-8 print:mb-4">
              <div className="p-2 bg-slate-800 rounded-xl border border-slate-700">
                <Trophy className="text-amber-400 print:text-black" size={20} />
              </div>
              <h2 className="text-2xl font-bold font-display text-white print:text-black">Certifications</h2>
            </div>
            <div className="space-y-6">
              {RESUME_DATA.certifications.map((cert, idx) => (
                <TiltCard key={idx} className="bg-slate-900/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 print:border-none print:p-0 print:bg-transparent" glowColor="rgba(251, 191, 36, 0.2)">
                  <div className="text-amber-400/90 print:text-black font-semibold mb-1">{cert.name}</div>
                  <div className="flex justify-between items-center text-sm mb-3">
                    <span className="text-slate-300 print:text-gray-800">{cert.issuer}</span>
                    <span className="text-slate-500 print:text-gray-600 text-xs">{cert.year}</span>
                  </div>
                  <p className="text-slate-400 print:text-black text-sm leading-relaxed opacity-80 border-t border-slate-800/50 pt-3">
                    {cert.description}
                  </p>
                </TiltCard>
              ))}
            </div>
          </section>
        </div>

        {/* Interests & Languages */}
        <section className="print:break-inside-avoid pb-12">
           <TiltCard className="bg-slate-900/20 border border-slate-800/50 rounded-3xl p-8 print:border-none print:p-0 print:bg-transparent" disableHover={true}>
            <div className="grid md:grid-cols-2 gap-12">
               <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="text-slate-400 print:text-black" size={20} />
                    <h3 className="text-lg font-bold text-white print:text-black">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.languages.map(lang => (
                      <span key={lang} className="text-slate-300 print:text-black text-sm border border-slate-700/50 print:border-gray-300 bg-slate-800/30 px-4 py-2 rounded-lg">
                        {lang}
                      </span>
                    ))}
                  </div>
               </div>
               <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-5 h-5 rounded-full border-2 border-slate-500 print:border-black flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-slate-500 print:bg-black rounded-full" />
                    </div>
                    <h3 className="text-lg font-bold text-white print:text-black">Interests</h3>
                  </div>
                   <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.interests.map(interest => (
                      <span key={interest} className="text-slate-300 print:text-black text-sm border border-slate-700/50 print:border-gray-300 bg-slate-800/30 px-4 py-2 rounded-lg">
                        {interest}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </TiltCard>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800/50 text-center text-slate-500 text-sm no-print relative z-10 backdrop-blur-sm">
        <div className="flex justify-center gap-6 mb-4">
             {/* Socials minimal */}
             <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-white transition-colors">GitHub</a>
             <a href="#" className="hover:text-emerald-400 transition-colors">Email</a>
        </div>
        <p>&copy; {new Date().getFullYear()} {RESUME_DATA.name}. 3D Portfolio Experience.</p>
      </footer>

      {/* Chat Bot */}
      <ChatWidget />
    </div>
  );
}

export default App;