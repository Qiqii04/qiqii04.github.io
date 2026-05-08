/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  FileText, 
  Terminal, 
  Cpu, 
  Code2, 
  ExternalLink,
  Laptop,
  Gamepad2,
  User,
  Coffee,
  Briefcase,
  GraduationCap
} from "lucide-react";
import React, { useState, useEffect } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Cat Cafe Website",
    desc: "An aesthetic and simple cafe website with menus and contact forms.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Qiqii04/catcafedemo",
    icon: <Coffee className="w-8 h-8 text-retro-pink" />
  },
  {
    id: 2,
    title: "Hotel Occupancy App",
    desc: "Android app to calculate floor-wise and overall occupancy rates.",
    tech: ["Kotlin", "Android Studio"],
    link: "https://github.com/Qiqii04/HotelOccupancyApp",
    icon: <Laptop className="w-8 h-8 text-retro-blue" />
  },
  {
    id: 3,
    title: "WhatsApp Chatbot",
    desc: "Auto-reply chatbot for customer inquiry at Junzo Sdn Bhd.",
    tech: ["PHP", "JavaScript", "API"],
    link: "https://junzo.my/",
    icon: <Terminal className="w-8 h-8 text-retro-green" />
  }
];

const SKILLS = [
  "Python", "C++", "Kotlin", "Java", "PHP", 
  "HTML/CSS", "JavaScript", "MySQL", "MongoDB",
  "OOP", "UI Design", "Data Structures",
  "MS Office (Word, Excel, PowerPoint)", "Canva", "CapCut"
];

function PixelWindow({ title, children, className = "" }: { title: string, children: React.ReactNode, className?: string }) {
  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className={`bg-retro-surface pixel-border p-0 mb-12 overflow-hidden ${className}`}
    >
      <div className="bg-retro-blue text-white px-2 py-1 font-press-start text-[8px] flex justify-between items-center">
        <span className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white/20"></div>
          {title}
        </span>
        <div className="flex gap-1">
          <div className="w-4 h-4 bg-retro-bg border border-black flex items-center justify-center text-black font-bold">_</div>
          <div className="w-4 h-4 bg-retro-bg border border-black flex items-center justify-center text-black font-bold text-[6px]">X</div>
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
}

function DesktopIcon({ icon: Icon, label, x, y, href }: { icon: any, label: string, x: string, y: string, href?: string }) {
  const content = (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center gap-1 group cursor-pointer select-none"
    >
      <div className="p-2 group-hover:bg-retro-blue/20 border border-transparent group-active:border-dotted group-active:border-black transition-colors">
        <Icon className="w-8 h-8 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]" />
      </div>
      <span className="font-vt323 text-white text-lg px-2 bg-black/30 backdrop-blur-sm group-hover:bg-retro-blue drop-shadow-[1px_1px_0px_rgba(0,0,0,0.8)]">
        {label}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="absolute inline-block" style={{ left: x, top: y }}>
        {content}
      </a>
    );
  }

  return (
    <div className="absolute" style={{ left: x, top: y }}>
      {content}
    </div>
  );
}

export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-transparent text-retro-text selection:bg-retro-blue selection:text-white">
      {/* Scanline overlay */}
      <div className="scanline" />

      {/* Desktop Icons */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none z-0">
        <div className="pointer-events-auto">
          <DesktopIcon icon={User} label="Profile" x="40px" y="40px" href="#about" />
          <DesktopIcon icon={GraduationCap} label="Education" x="40px" y="140px" href="#education" />
          <DesktopIcon icon={Briefcase} label="Experience" x="40px" y="240px" href="#experience" />
          <DesktopIcon icon={Laptop} label="Projects" x="40px" y="340px" href="#projects" />
          <DesktopIcon icon={FileText} label="Resume.pdf" x="40px" y="440px" href="#resume" />
        </div>
      </div>

      {/* Top Taskbar */}
      <header className="fixed top-0 left-0 right-0 bg-retro-surface border-b-2 border-black z-50 px-2 py-1 flex justify-between items-center font-press-start text-[8px] shadow-md">
        <div className="flex gap-2 items-center">
          <span className="bg-black text-white px-3 py-1 cursor-pointer flex items-center gap-2 hover:bg-retro-blue transition-colors">
            <Cpu className="w-3 h-3" /> START
          </span>
          <span className="bg-white text-black px-3 py-1 font-bold">
            CHEE MUN KHEI
          </span>
        </div>
        <div className="flex gap-4 items-center border-l-2 border-black/20 pl-4">
          <div className="hidden md:flex items-center gap-3 mr-2">
            <div className="flex flex-col items-end">
              <span className="text-[6px] font-press-start text-black mb-1">COFFEE_LVL</span>
              <div className="w-20 h-2 bg-white border border-black p-[0.5px]">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-retro-blue shadow-[inset_1px_1px_0px_0px_rgba(255,255,255,0.3)]"
                />
              </div>
            </div>
            <Coffee className="w-4 h-4 text-retro-blue opacity-80" />
          </div>
          <span className="text-black font-vt323 text-xl">{time}</span>
          <div className="w-3 h-3 bg-retro-green border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-20 pb-32 max-w-4xl relative z-10">
        {/* Hero Section */}
        <section id="about" className="mb-20 mt-8 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-48 h-48 bg-retro-surface pixel-border p-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] overflow-hidden"
          >
            <div className="bg-black text-white px-2 py-1 font-press-start text-[6px] flex justify-between items-center h-5">
              <div className="flex items-center gap-2">
                <span className="text-retro-blue">■</span>
                <span>AVATAR.PIC</span>
              </div>
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 border border-white/40 flex items-center justify-center">_</div>
                <div className="w-2.5 h-2.5 border border-white/40 flex items-center justify-center">□</div>
                <div className="w-2.5 h-2.5 border border-white/40 flex items-center justify-center bg-retro-red/50">×</div>
              </div>
            </div>
            <div className="p-1 flex items-center justify-center h-[calc(100%-20px)] bg-slate-100">
              <div className="w-full h-full border border-black overflow-hidden bg-white relative group">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextEl = e.currentTarget.nextElementSibling;
                    if (nextEl) nextEl.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-50">
                  <User className="w-24 h-24 text-black opacity-10" />
                  <span className="absolute font-vt323 text-black text-xs text-center px-4">IMG_NOT_FOUND<br/>[RETRYING...]</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex-1">
            <motion.h1 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-press-start text-4xl md:text-6xl text-black mb-6 leading-tight tracking-tight"
            >
              HI, I'M <br/>
              <span className="text-retro-blue glitch leading-relaxed inline-block mt-2" data-text="CHEE MUN KHEI!">CHEE MUN KHEI!</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-2xl text-gray-600 mb-6 font-vt323"
            >
              Final Year Computer Science Student at UOW Malaysia KDU.
              Seeking IT Internship opportunities for Sep 2026.
            </motion.p>
            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a href="#contact" className="pixel-button font-press-start text-[10px]">
                CONTACT_ME();
              </a>
              <a href="#resume" className="pixel-button font-press-start text-[10px] flex items-center gap-2">
                <FileText className="w-3 h-3" /> RESUME.PDF
              </a>
            </motion.div>
          </div>
        </section>

        {/* About & Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PixelWindow title="PROFILE.TXT">
            <p className="font-vt323 text-xl leading-relaxed text-black">
              I'm Chee Mun Khei, a final year computer science student at UOW MALAYSIA (expected to graduate in December 2026). My hometown is Butterworth, Penang. 
              <br /><br />
              I'm looking for internship starting <span className="bg-retro-blue/20 px-1 border-b-2 border-retro-blue font-bold">14 Sept to 4 Dec 2026</span>, open for full-time job opportunities afterwards :)
            </p>
            <div className="mt-4 flex flex-col gap-1 text-retro-blue text-sm font-press-start text-[8px]">
            </div>
          </PixelWindow>

          <PixelWindow title="SKILLS_MATRIX.SYS">
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill, index) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-black text-white px-3 py-1 text-sm font-press-start text-[8px]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-200">
              <h3 className="font-press-start text-[10px] mb-3 text-retro-blue underline">CERTIFICATES.DAT</h3>
              <div className="flex flex-wrap gap-2">
                <span className="border-2 border-black px-3 py-1 text-sm font-press-start text-[8px]">TRIZ LEVEL 1</span>
                <span className="border-2 border-black px-3 py-1 text-sm font-press-start text-[8px]">TRIZ LEVEL 2</span>
              </div>
            </div>
          </PixelWindow>
        </div>

        {/* Education Section */}
        <section id="education" className="mt-32">
          <h2 className="font-press-start text-xl text-black mb-8 border-b-4 border-black inline-block pb-2">
            EDUCATION.EXE
          </h2>
          <div className="grid grid-cols-1 gap-8">
            <PixelWindow title="BACHELOR_DEGREE.LOG">
              <div className="font-vt323">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-2xl font-bold underline">UOW Malaysia KDU | Bachelor of Computer Science (Hons)</h3>
                  <span className="text-retro-blue text-lg">2024 - PRESENT</span>
                </div>
                <div className="text-lg pl-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-retro-blue">▶</span>
                    <span>Current CGPA: <span className="font-bold">3.41</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-retro-blue">▶</span>
                    <span>Expected Graduation: <span className="font-bold">DEC 2026</span></span>
                  </div>
                  <div className="border-t border-black/10 pt-2 mt-2">
                    <p className="font-bold text-retro-blue underline mb-1 italic">FINAL_YEAR_PROJECT.EXE:</p>
                    <p className="mb-2">Predictive Maintenance System for Factory Machinery using Edge AI</p>
                    <ul className="text-sm space-y-1 opacity-80">
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>Developing a predictive maintenance system for <span className="font-bold">Safetyware Sdn Bhd</span>. (Currently in progress)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </PixelWindow>

            <PixelWindow title="DIPLOMA_IT.LOG">
              <div className="font-vt323">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-2xl font-bold underline">UOW Malaysia KDU | Diploma in Information Technology</h3>
                  <span className="text-retro-blue text-lg">2022 - 2024</span>
                </div>
                <div className="text-lg pl-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-retro-blue">▶</span>
                    <span>Graduated in August 2024 with a CGPA of <span className="font-bold">3.65</span></span>
                  </div>
                  
                  <div className="border-t border-black/10 pt-2 mt-2">
                    <p className="font-bold text-retro-blue underline mb-1 italic">FINAL_YEAR_PROJECT.EXE:</p>
                    <p className="mb-2">Weii Café Website Development</p>
                    <ul className="text-sm space-y-1 opacity-80">
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>Developed a PHP-based website for Weii Cafe, with admin and customer side for easier management of the cafe.</span>
                      </li>
                      <li className="flex gap-2">
                        <span>-</span>
                        <span>Special features include social media integration.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 text-retro-blue text-sm font-press-start text-[8px]">
                    HONORS: DEAN'S LIST RECIPIENT ( SEPT 2023 )
                  </div>
                </div>
              </div>
            </PixelWindow>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mt-32">
          <h2 className="font-press-start text-xl text-black mb-8 border-b-4 border-black inline-block pb-2">
            EXPERIENCE.EXE
          </h2>
          <div className="grid grid-cols-1 gap-8">
            <PixelWindow title="IT_INTERN_LOG.TXT">
              <div className="font-vt323">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-2xl font-bold underline">Junzo Sdn Bhd | IT Intern</h3>
                  <span className="text-retro-blue text-lg">MAY 2024 - AUG 2024</span>
                </div>
                <ul className="text-lg space-y-3 pl-4">
                  <li className="flex gap-3">
                    <span className="text-retro-blue mt-1">▶</span>
                    <span>Developed WhatsApp Auto-reply chatbot for streamlining customer inquiries.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-retro-blue mt-1">▶</span>
                    <span>Integrated sales forecasting system using PHP, MySQL, and JavaScript logic.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-retro-blue mt-1">▶</span>
                    <span>Maintained official company website and executed digital media content edits.</span>
                  </li>
                </ul>
              </div>
            </PixelWindow>

            <PixelWindow title="COMMUNITY_ACTIVITY.LOG">
              <div className="font-vt323">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-2xl font-bold underline">UOW Malaysia KDU | GDSC Member</h3>
                  <span className="text-retro-blue text-lg">2023 - PRESENT</span>
                </div>
                <div className="text-lg pl-4 space-y-2">
                  <div className="flex items-start">
                    <span className="text-retro-blue mr-3 mt-1 text-sm">▶</span>
                    <span>Active participant in Google Developer Student Clubs</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-retro-blue mr-3 mt-1 text-sm">▶</span>
                    <span>Attending workshops on modern web technologies to gain more knowledge from seniors in the IT fields.</span>
                  </div>
                </div>
              </div>
            </PixelWindow>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12">
          <h2 className="font-press-start text-xl text-black mb-8 border-b-4 border-black inline-block pb-2">
            ./PROJECT_FILES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_black] group"
              >
                <div className="mb-6 flex justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  {project.icon}
                </div>
                <h3 className="font-press-start text-[10px] text-black mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-snug">
                  {project.desc}
                </p>
                <a href={project.link} className="text-black inline-flex items-center gap-2 text-xs font-press-start hover:underline">
                  OPEN() <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="mt-32">
          <h2 className="font-press-start text-xl text-black mb-8 border-b-4 border-black inline-block pb-2">
            DOCUMENT_VIEWER.EXE
          </h2>
          
          <PixelWindow title="RESUME_PREVIEW.PDF" className="max-w-4xl mx-auto shadow-2xl">
            <div className="bg-gray-800 p-1 min-h-[700px] border-2 border-black relative overflow-hidden group">
              <iframe 
                src="/resume.pdf#view=FitH" 
                className="w-full h-[700px] bg-white relative z-10 border-0"
                title="Resume PDF"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 p-10 text-center pointer-events-none group-hover:pointer-events-auto">
                <FileText className="w-20 h-20 text-retro-blue mb-4 opacity-20" />
                <p className="text-white/20 font-press-start text-sm">PDF_VIEWER_LOADED</p>
              </div>
              
              {/* Tooltip Overlay */}
              <div className="absolute top-2 right-2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black text-white text-[8px] font-press-start px-2 py-1 border border-white">
                  CTRL+P TO PRINT
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center gap-4">
              <a href="/resume.pdf" download className="pixel-button !bg-black !text-white font-press-start text-[10px] flex items-center gap-2 hover:opacity-80">
                <FileText className="w-4 h-4" /> DOWNLOAD_PDF
              </a>
              <a href="#contact" className="pixel-button font-press-start text-[10px] flex items-center gap-2">
                 HIRE_ME();
              </a>
            </div>
          </PixelWindow>
        </section>

        {/* Contact Footer */}
        <footer id="contact" className="mt-40 mb-20">
          <div className="bg-white border-4 border-black p-12 text-center shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)]">
            <h2 className="font-press-start text-xl text-black mb-12 underline decoration-retro-blue decoration-4 underline-offset-8">INIT_LINKAGE</h2>
            <div className="flex flex-wrap justify-center gap-12 mb-12 items-center">
              <motion.a whileHover={{ y: -5 }} href="https://github.com/Qiqii04" target="_blank" className="text-black hover:text-retro-blue">
                <Github className="w-8 h-8" />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="https://www.linkedin.com/in/chee-mun-khei/" target="_blank" className="text-black hover:text-retro-blue">
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <div className="flex items-center gap-3 text-black">
                <Mail className="w-8 h-8" />
                <span className="font-vt323 text-2xl">cmkhei@gmail.com</span>
              </div>
            </div>
            <div className="font-press-start text-[8px] text-gray-400">
              LOCATION: BUTTERWORTH, PENANG // YEAR: 2026
            </div>
          </div>
        </footer>
      </main>

      {/* Subtle decoration */}
      <div className="fixed top-20 right-10 w-8 h-8 border-2 border-black/5" />
      <div className="fixed bottom-20 left-10 w-12 h-12 border-4 border-black/5" />
    </div>
  );
}
