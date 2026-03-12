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
import Image from "next/image";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState("language");
  const [activeExpTab, setActiveExpTab] = useState("work");
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [avatarError, setAvatarError] = useState(false);

  // Auto-hide contact form status message
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

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

  const skillGroups: Record<string, { name: string; color: string }[]> = {
    language: [
      { name: "TypeScript", color: "#3178c6" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "C#", color: "#239120" },
      { name: "Java", color: "#007396" },
      { name: "Python", color: "#3776ab" },
      { name: "PHP", color: "#777bb4" },
      { name: "C/C++", color: "#00599c" },
      { name: "SQL", color: "#4479a1" },
    ],
    backend: [
      { name: "NestJS", color: "#e0234e" },
      { name: "Node.js", color: "#339933" },
      { name: "ASP.NET Core", color: "#512bd4" },
      { name: "Microservices", color: "#000000" },
      { name: "RESTful API", color: "#0055ff" },
      { name: "GraphQL", color: "#e10098" },
      { name: "Socket.io", color: "#010101" },
      { name: "JWT / RBAC", color: "#000000" },
    ],
    database: [
      { name: "PostgreSQL", color: "#4169e1" },
      { name: "MySQL", color: "#4479a1" },
      { name: "MongoDB", color: "#47a248" },
      { name: "Redis", color: "#dc382d" },
      { name: "Prisma", color: "#2d3748" },
      { name: "TypeORM / Sequelize", color: "#2b3b4b" },
    ],
    frontend: [
      { name: "Next.js", color: "#000000" },
      { name: "React", color: "#61dafb" },
      { name: "React Native", color: "#61dafb" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "MUI / AntD", color: "#007fff" },
      { name: "HTML/CSS", color: "#e34f26" },
    ],
    devtools: [
      { name: "Docker", color: "#2496ed" },
      { name: "Git Flow", color: "#f05032" },
      { name: "AWS", color: "#ff9900" },
      { name: "Linux", color: "#fcc624" },
      { name: "Postman", color: "#ff6c37" },
      { name: "WordPress", color: "#21759b" },
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

  const navLinks = [
    { name: "Home", href: "#home", id: "home", icon: <Home size={15} /> },
    { name: "About", href: "#about", id: "about", icon: <User size={15} /> },
    { name: "Experience", href: "#experience", id: "experience", icon: <Briefcase size={15} /> },
    { name: "Projects", href: "#projects", id: "projects", icon: <FolderOpen size={15} /> },
    { name: "Skills", href: "#skills", id: "skills", icon: <Wrench size={15} /> },
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
      icon: <Image src="/musicbox.jpg" alt="MusicBox" width={400} height={200} className="w-full h-full object-cover" />
    },
    {
      title: "E-Commerce Backend",
      description: "A complete e-commerce system using MVC-S architecture, integrating online payments and a detailed internal management system.",
      tech: ["Node.js", "Express", "MongoDB", "Socket.io", "VNPAY"],
      github: "https://github.com/anhtt-23810310166/product-management-ssr-js",
      demo: "https://techzone-z696.onrender.com",
      featured: true,
      icon: <Image src="/e-commerce.jpg" alt="E-Commerce" width={400} height={200} className="w-full h-full object-cover" />
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
                  Software Engineering student focused on backend development. I build APIs and backend systems using Node.js, NestJS and PostgreSQL.
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
                    <Image 
                      src="/avatar.jpg" 
                      alt="Tuan Anh" 
                      width={400}
                      height={400}
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
                  I am particularly interested in how backend systems are designed and how different components interact in modern web applications. I enjoy learning about API architecture, database design and system scalability.
                </p>
                <p className="text-base leading-relaxed text-muted">
                  My goal is to continuously improve my backend engineering skills and gain experience building reliable and maintainable software systems.
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
                  <p className="text-sm font-medium mt-1">2023 - 2028 (Expected)</p>
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

            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {(skillGroups[activeSkillTab] || []).map((skill) => (
                <div 
                  key={skill.name} 
                  className="skill-card min-w-[160px]"
                  style={{ '--hover-bg': skill.color } as any}
                >
                  <div className="skill-glow" />
                  <div className="skill-icon">
                    {skill.name.substring(0, 2).toUpperCase()}
                  </div>
                  <h3>{skill.name}</h3>
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

                <a href="https://www.linkedin.com/in/anh-tuan-tran-01695a281" className="social-card">
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
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setSubmitStatus(null);
                  
                  const form = e.target as HTMLFormElement;
                  const formData = {
                    name: (form.elements.namedItem('name') as HTMLInputElement).value,
                    email: (form.elements.namedItem('email') as HTMLInputElement).value,
                    message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
                  };

                  try {
                    const res = await fetch('/api/contact', {
                      method: 'POST',
                      body: JSON.stringify(formData),
                    });
                    
                    const result = await res.json();
                    
                    if (res.ok) {
                      setSubmitStatus({ type: 'success', message: result.message || 'Message sent successfully!' });
                      form.reset();
                    } else {
                      throw new Error(result.error || 'Failed to send. Please try again.');
                    }
                  } catch (err: any) {
                    setSubmitStatus({ type: 'error', message: err.message || 'Failed to send. Please try again.' });
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <input type="text" name="name" placeholder="Your Name *" required />
                <input type="email" name="email" placeholder="Email Address *" required />
                <textarea name="message" placeholder="Your message..." rows={4}></textarea>
                
                {submitStatus && (
                  <div className={`p-3 rounded-lg text-sm font-medium ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitStatus.message}
                  </div>
                )}

                <button type="submit" className="btn-send" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
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
