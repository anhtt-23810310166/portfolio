"use client"

import { useState, useEffect } from "react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  User, 
  MapPin,
  MessageCircle,
  Home,
  FolderOpen,
  Wrench,
  Phone,
  ChevronDown,
  ArrowRight,
  Star,
  Music,
  ShoppingCart
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState("language");
  const [activeExpTab, setActiveExpTab] = useState("work");
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [avatarError, setAvatarError] = useState(false);

  const roles = ["Backend Developer", "NodeJS Developer", "Software Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["home", "about", "experience", "projects", "skills", "contact"];
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (typewriterIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(currentRole.substring(0, typewriterIndex + 1));
        setTypewriterIndex(typewriterIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypewriterText("");
        setTypewriterIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typewriterIndex, roleIndex]);

  const navLinks = [
    { name: "Home", href: "#home", id: "home", icon: <Home size={15} /> },
    { name: "About", href: "#about", id: "about", icon: <User size={15} /> },
    { name: "Experience", href: "#experience", id: "experience", icon: <Briefcase size={15} /> },
    { name: "Project", href: "#projects", id: "projects", icon: <FolderOpen size={15} /> },
    { name: "Skill", href: "#skills", id: "skills", icon: <Wrench size={15} /> },
    { name: "Contact", href: "#contact", id: "contact", icon: <Mail size={15} /> },
  ];

  const projects = [
    {
      title: "Audio Streaming Platform",
      description: "A streaming platform built with a Modular Monolith architecture, optimizing relational data queries and system security.",
      tech: ["NestJS", "Prisma", "PostgreSQL", "Docker", "JWT"],
      github: "https://github.com/anhtt-23810310166/music-web-nestjs",
      demo: "https://musicbox-z696.vercel.app",
      featured: true,
      icon: <Music size={40} className="text-muted" />
    },
    {
      title: "E-Commerce Backend",
      description: "A complete e-commerce system using MVC-S architecture, integrating online payments and a detailed internal management system.",
      tech: ["Node.js", "Express", "MongoDB", "Socket.io", "VNPAY"],
      github: "https://github.com/anhtt-23810310166/product-management-ssr-js",
      demo: "https://techzone-z696.onrender.com",
      featured: true,
      icon: <ShoppingCart size={40} className="text-muted" />
    },
  ];

  const skillGroups: Record<string, { name: string; badge?: string; badgeColor?: string }[]> = {
    language: [
      { name: "TypeScript", badge: "Primary", badgeColor: "bg-blue-100 text-blue-800 border-blue-300" },
      { name: "JavaScript", badge: "Core", badgeColor: "bg-yellow-100 text-yellow-800 border-yellow-300" },
      { name: "C#", badge: "DotNet", badgeColor: "bg-purple-100 text-purple-800 border-purple-300" },
      { name: "Java", badge: "OOP", badgeColor: "bg-orange-100 text-orange-800 border-orange-300" },
      { name: "Python", badge: "Scripting", badgeColor: "bg-blue-100 text-blue-800 border-blue-300" },
      { name: "PHP", badge: "Web Language", badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300" },
      { name: "C/C++", badge: "Core", badgeColor: "bg-gray-100 text-gray-800 border-gray-300" },
      { name: "SQL", badge: "Database", badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200" },
    ],
    frontend: [
      { name: "React", badge: "Library", badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-300" },
      { name: "Next.js", badge: "Framework", badgeColor: "bg-slate-100 text-slate-800 border-slate-300" },
      { name: "HTML/CSS", badge: "Foundation", badgeColor: "bg-orange-100 text-orange-800 border-orange-300" },
      { name: "SASS/SCSS", badge: "Preproc", badgeColor: "bg-pink-100 text-pink-800 border-pink-300" },
      { name: "Bootstrap", badge: "UI Lib", badgeColor: "bg-purple-100 text-purple-800 border-purple-300" },
      { name: "MUI/AntD", badge: "UI Lib", badgeColor: "bg-blue-100 text-blue-800 border-blue-300" },
      { name: "React Native", badge: "Mobile", badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-300" },
      { name: "Tailwind CSS", badge: "Styling", badgeColor: "bg-teal-100 text-teal-800 border-teal-300" },
      { name: "Redux", badge: "State", badgeColor: "bg-purple-100 text-purple-800 border-purple-300" },
    ],
    backend: [
      { name: "ASP.NET Core", badge: "Framework", badgeColor: "bg-purple-100 text-purple-800 border-purple-300" },
      { name: "Node.js", badge: "Runtime", badgeColor: "bg-green-100 text-green-700 border-green-200" },
      { name: "NestJS", badge: "Core Skill", badgeColor: "bg-red-100 text-red-700 border-red-200" },
      { name: "Express", badge: "API", badgeColor: "bg-gray-100 text-gray-700 border-gray-200" },
      { name: "Microservices", badge: "Architecture", badgeColor: "bg-sky-100 text-sky-800 border-sky-300" },
      { name: "RESTful API", badge: "Architecture", badgeColor: "bg-purple-100 text-purple-700 border-purple-200" },
      { name: "GraphQL", badge: "Query", badgeColor: "bg-pink-100 text-pink-700 border-pink-200" },
      { name: "Socket.io", badge: "Realtime", badgeColor: "bg-zinc-100 text-zinc-700 border-zinc-200" },
      { name: "WordPress", badge: "CMS", badgeColor: "bg-blue-100 text-blue-800 border-blue-300" },
    ],
    database: [
      { name: "PostgreSQL", badge: "Relational", badgeColor: "bg-blue-100 text-blue-700 border-blue-200" },
      { name: "MySQL", badge: "Relational", badgeColor: "bg-orange-100 text-orange-700 border-orange-200" },
      { name: "MongoDB", badge: "NoSQL", badgeColor: "bg-green-100 text-green-700 border-green-200" },
      { name: "Redis", badge: "Cache", badgeColor: "bg-red-100 text-red-700 border-red-200" },
      { name: "Prisma", badge: "ORM", badgeColor: "bg-slate-100 text-slate-700 border-slate-200" },
      { name: "TypeORM", badge: "ORM", badgeColor: "bg-red-100 text-red-800 border-red-300" },
      { name: "Sequelize", badge: "ORM", badgeColor: "bg-blue-100 text-blue-800 border-blue-300" },
      { name: "Mongoose", badge: "ODM", badgeColor: "bg-green-100 text-green-800 border-green-300" },
    ],
    devtools: [
      { name: "Docker", badge: "Container", badgeColor: "bg-blue-100 text-blue-700 border-blue-200" },
      { name: "Git Flow", badge: "VCS", badgeColor: "bg-orange-100 text-orange-700 border-orange-200" },
      { name: "AWS", badge: "Cloud", badgeColor: "bg-yellow-100 text-yellow-800 border-yellow-300" },
      { name: "Linux", badge: "OS", badgeColor: "bg-zinc-100 text-zinc-800 border-zinc-300" },
      { name: "Postman", badge: "API Tool", badgeColor: "bg-orange-100 text-orange-700 border-orange-200" },
      { name: "JWT/RBAC", badge: "Security", badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200" },
    ],
  };

  const skillTabLabels: Record<string, string> = {
    language: "Languages",
    frontend: "Frontend",
    backend: "Backend & APIs",
    database: "Databases",
    devtools: "Dev Tools",
  };

  const experiences = [
    {
      title: "Personal Projects",
      description: "Designed and developed comprehensive personal projects, taking full responsibility from system architecture to production deployment.",
      techs: ["NestJS", "Express", "PostgreSQL", "MongoDB", "Docker"],
    },
    {
      title: "Backend Developer (Learning)",
      description: "Researched and practiced building RESTful APIs, Modular Monolith Architecture, JWT Authentication, and security best practices.",
      techs: ["Node.js", "Express", "MongoDB", "Socket.io"],
    },
  ];

  const education = [
    {
      title: "Software Engineering",
      school: "Electric Power University (EPU)",
      period: "2024 - 2028 (Expected)",
      gpa: "3.24 / 4.0",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-background text-foreground transition-colors duration-300">
      {/* Floating Pill Nav */}
      <nav className="pill-nav">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={activeSection === link.id ? "active" : ""}
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
        <div style={{ marginLeft: 4 }}>
          <ThemeToggle />
        </div>
      </nav>

      <main>
        {/* ===== HERO SECTION ===== */}
        <section id="home" style={{ paddingTop: 100, paddingBottom: 80 }}>
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div className="space-y-3">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Hi, I&apos;m Tuan Anh
                  </h1>
                  <p className="text-xl md:text-2xl text-muted font-medium">
                    <span className="typewriter">{typewriterText}</span>
                  </p>
                </div>
                <p className="text-muted leading-relaxed text-base max-w-lg">
                  Software Engineering student at Electric Power University, highly passionate about building stable and optimized backend systems using Modular Monolith architecture.
                </p>
                <p className="text-sm text-muted flex items-center gap-2">
                  <MapPin size={16} className="text-red-500" /> Hanoi, Vietnam
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a href="#projects" className="btn-cta-primary">
                    View Projects <ArrowRight size={16} />
                  </a>
                  <a href="#contact" className="btn-cta-secondary">
                    Contact Me <ArrowRight size={16} />
                  </a>
                </div>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="avatar-wrapper">
                  {!avatarError ? (
                    <img 
                      src="/avatar.jpg" 
                      alt="Tuan Anh" 
                      onError={() => setAvatarError(true)}
                    />
                  ) : (
                    <div className="avatar-fallback">TA</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT SECTION ===== */}
        <section id="about">
          <div className="container-narrow">
            <h2 className="section-title text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="section-subtitle">Learn more about my background and what drives me</p>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-5">
                <p className="text-base leading-relaxed">
                  I am a Software Engineering student at Electric Power University. I am passionate about building stable and highly optimized backend systems. I always focus on writing clean, maintainable code and solving complex technical challenges using Modular Monolith architecture.
                </p>
                <p className="text-base leading-relaxed">
                  Beyond my academic studies, I continuously build personal projects to hone my practical skills and stay up-to-date with the latest technologies in Backend Development.
                </p>
              </div>
              <div className="space-y-6">
                <div className="exp-card">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap size={20} className="text-accent" />
                    <h3 className="font-bold text-lg">Education</h3>
                  </div>
                  <h4 className="font-bold">Software Engineering</h4>
                  <p className="text-muted text-sm">Electric Power University (EPU)</p>
                  <p className="text-sm font-medium mt-1">2024 - 2028 (Expected)</p>
                  <div className="mt-3 inline-block px-3 py-1 text-xs font-bold rounded-full border" style={{ borderColor: 'var(--accent)', color: 'var(--accent)', background: 'rgba(37,99,235,0.06)' }}>
                    GPA: 3.24 / 4.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== EXPERIENCE SECTION ===== */}
        <section id="experience">
          <div className="container-narrow">
            <h2 className="section-title text-3xl md:text-4xl font-bold">My Experience</h2>
            <p className="section-subtitle">Explore the practical experiences I have accumulated</p>
            
            <div className="tab-group">
              <button 
                className={`tab-btn ${activeExpTab === "work" ? "active" : ""}`}
                onClick={() => setActiveExpTab("work")}
              >
                Work Experience
              </button>
              <button 
                className={`tab-btn ${activeExpTab === "education" ? "active" : ""}`}
                onClick={() => setActiveExpTab("education")}
              >
                Education
              </button>
            </div>

            {activeExpTab === "work" && (
              <div className="grid md:grid-cols-2 gap-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="exp-card">
                    <h3 className="font-bold text-lg mb-2">{exp.title}</h3>
                    <p className="text-muted text-sm mb-4 leading-relaxed">{exp.description}</p>
                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.techs.map((t) => (
                          <span key={t} className="px-3 py-1 text-xs border rounded-full font-medium" style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeExpTab === "education" && (
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="exp-card">
                    <h3 className="font-bold text-lg mb-1">{edu.title}</h3>
                    <p className="text-muted text-sm">{edu.school}</p>
                    <p className="text-sm font-medium mt-2">{edu.period}</p>
                    <div className="mt-3 inline-block px-3 py-1 text-xs font-bold rounded-full border" style={{ borderColor: 'var(--accent)', color: 'var(--accent)', background: 'rgba(37,99,235,0.06)' }}>
                      GPA: {edu.gpa}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ===== PROJECTS SECTION ===== */}
        <section id="projects">
          <div className="container-narrow">
            <h2 className="section-title text-3xl md:text-4xl font-bold">My Projects</h2>
            <p className="section-subtitle">Explore the innovative projects and technology solutions I have developed</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className={`project-card ${project.featured ? "featured" : ""}`}>
                  {project.featured && (
                    <div className="featured-badge">
                      <Star size={12} /> Featured
                    </div>
                  )}
                  <div className="card-image">
                    {project.icon}
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-desc">{project.description}</p>
                    <div className="card-techs">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                    <div className="card-actions">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        <ExternalLink size={15} /> Live Demo
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        <Github size={15} /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SKILLS SECTION ===== */}
        <section id="skills">
          <div className="container-narrow">
            <h2 className="section-title text-3xl md:text-4xl font-bold">My Skills</h2>
            <p className="section-subtitle">Synthesis of skills and technologies that I have accumulated through many real projects</p>
            
            <div className="tab-group">
              {Object.entries(skillTabLabels).map(([key, label]) => (
                <button
                  key={key}
                  className={`tab-btn ${activeSkillTab === key ? "active" : ""}`}
                  onClick={() => setActiveSkillTab(key)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {(skillGroups[activeSkillTab] || []).map((skill) => (
                <div key={skill.name} className="skill-card aspect-square w-[140px] flex flex-col items-center justify-center text-center group">
                  <div className="skill-icon mb-3 w-12 h-12 text-lg transition-transform group-hover:scale-110">
                    {skill.name.substring(0, 2).toUpperCase()}
                  </div>
                  <h3 className="font-bold text-sm px-2">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT SECTION ===== */}
        <section id="contact">
          <div className="container-narrow">
            <h2 className="section-title text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="section-subtitle">Have a question or want to work together? Feel free to reach out!</p>
            
            <div className="grid md:grid-cols-2 gap-10">
              {/* Social Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="mailto:anhtt19012005@gmail.com" className="social-card">
                  <div className="social-icon" style={{ background: 'rgba(37,99,235,0.08)' }}>
                    <Mail size={22} className="text-accent" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p className="font-bold text-sm">Email</p>
                  </div>
                </a>

                <a href="https://zalo.me/0969861303" className="social-card">
                  <div className="social-icon" style={{ background: 'rgba(37,99,235,0.08)' }}>
                    <MessageCircle size={22} className="text-accent" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p className="font-bold text-sm">Zalo</p>
                  </div>
                </a>

                <a href="https://linkedin.com/in/yourprofile" className="social-card">
                  <div className="social-icon" style={{ background: 'rgba(37,99,235,0.08)' }}>
                    <Linkedin size={22} className="text-accent" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p className="font-bold text-sm">LinkedIn</p>
                  </div>
                </a>

                <a href="https://github.com/anhtt-23810310166" className="social-card">
                  <div className="social-icon" style={{ background: 'rgba(37,99,235,0.08)' }}>
                    <Github size={22} className="text-accent" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p className="font-bold text-sm">GitHub</p>
                  </div>
                </a>
              </div>

              {/* Contact Form */}
              <form 
                className="contact-form space-y-4" 
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                  
                  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
                  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                  
                  window.location.href = `mailto:anhtt19012005@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                <input type="text" name="name" placeholder="Your Name *" required />
                <input type="email" name="email" placeholder="Email Address *" required />
                <textarea name="message" placeholder="Your message..." rows={4}></textarea>
                <button type="submit" className="btn-send">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="modern-footer">
        <div className="container-narrow px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#f5f5f5' }}>Tuan Anh</h3>
              <div style={{ width: 40, height: 3, background: 'var(--accent)', borderRadius: 2, marginBottom: 16 }} />
              <p style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.7 }}>
                Backend developer passionate about building robust systems. 
                Turning ideas into reality through clean code and solid architecture.
              </p>
            </div>
            
            <div>
              <h4>
                <span className="dot" style={{ background: '#10b981' }} />
                Navigation
              </h4>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
              </ul>
            </div>

            <div>
              <h4>
                <span className="dot" style={{ background: '#3b82f6' }} />
                Services
              </h4>
              <ul>
                <li>Backend Development</li>
                <li>API Design</li>
                <li>Database Architecture</li>
                <li>System Integration</li>
              </ul>
            </div>

            <div>
              <h4>
                <span className="dot" style={{ background: '#f59e0b' }} />
                Get In Touch
              </h4>
              <div className="space-y-3" style={{ fontSize: 14 }}>
                <a href="mailto:anhtt19012005@gmail.com" className="flex items-center gap-3">
                  <Mail size={16} /> anhtt19012005@gmail.com
                </a>
                <a href="tel:0969861303" className="flex items-center gap-3">
                  <Phone size={16} /> 0969 861 303
                </a>
                <span className="flex items-center gap-3" style={{ opacity: 0.7 }}>
                  <MapPin size={16} /> Hanoi, Vietnam
                </span>
              </div>
            </div>
          </div>

          <div className="footer-divider">
            <span>© {mounted ? new Date().getFullYear() : "2026"} Tuan Anh. All rights reserved.</span>
            <span>Software Engineering @ EPU</span>
          </div>
        </div>
      </footer>

      {/* Scroll button */}
      {mounted && (
        <button onClick={scrollToTop} className="scroll-down-btn" aria-label="Scroll to top">
          <ChevronDown size={20} style={{ transform: 'rotate(180deg)' }} />
        </button>
      )}
    </div>
  );
}
