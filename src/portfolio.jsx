import React, { useState, useEffect } from "react";
import {
  Terminal,
  Cloud,
  Server,
  Code2,
  Database,
  Shield,
  GitBranch,
  Cpu,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
  ChevronRight,
  Menu,
  X,
  Layers,
  Activity,
  Globe,
} from "lucide-react";

/**
 * Complete Portfolio component
 * - Uses Tailwind CSS classes (make sure tailwind is configured)
 * - Put this file at src/portfolio.jsx
 */

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const NavLink = ({ to, children, mobile }) => (
    <button
      onClick={() => scrollTo(to)}
      className={`text-sm font-medium transition-all duration-300 relative group
        ${mobile ? "w-full text-left py-4 text-lg border-b border-slate-800" : ""}
        ${activeSection === to ? "text-cyan-400" : "text-slate-400 hover:text-cyan-300"}`}
    >
      {children}
      {!mobile && (
        <span
          className={`absolute -bottom-2 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
            activeSection === to ? "w-full" : "w-0 group-hover:w-1/2"
          }`}
        />
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-md border-slate-800 shadow-lg shadow-cyan-900/10 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div
            className="font-mono text-xl font-bold tracking-tighter text-cyan-400 flex items-center gap-2 cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            <Terminal size={22} strokeWidth={2.5} />
            <span className="text-slate-100 tracking-widest">
              SHIVA<span className="text-cyan-400">PONNAM</span>
            </span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <NavLink key={item} to={item.toLowerCase()}>
                {item}
              </NavLink>
            ))}
          </div>

          <button className="md:hidden text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 pb-6">
            {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <NavLink key={item} to={item.toLowerCase()} mobile>
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in-up">
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
              Hello, I'm <span className="text-cyan-400">Shiva Ponnam</span>
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 pb-2">
              Cloud & DevOps Engineer
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mt-4"></div>
          </div>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Aspiring DevOps engineer with strong hands-on experience in AWS deployments, CI/CD automation, and Kubernetes orchestration. Passionate about scalable architectures and production-grade reliability.
          </p>

          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 md:px-10 inline-flex flex-col md:flex-row flex-wrap gap-6 md:gap-12 items-center justify-center mx-auto mb-10 shadow-2xl shadow-black/50">
            <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
              <div className="p-2 bg-slate-800 rounded-full text-cyan-400">
                <Mail size={18} />
              </div>
              <span className="text-sm font-medium">shivaponnam77@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
              <div className="p-2 bg-slate-800 rounded-full text-violet-400">
                <Phone size={18} />
              </div>
              <span className="text-sm font-medium">+91 7330979920</span>
            </div>

            <a
              href="https://www.linkedin.com/in/shiva-ponnam"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
            >
              <div className="p-2 bg-slate-800 rounded-full text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <Linkedin size={18} />
              </div>
              <span className="text-sm font-medium">LinkedIn Profile</span>
            </a>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-900/20 transition-all transform hover:-translate-y-1"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-3.5 bg-transparent border border-slate-600 hover:border-cyan-400 text-white font-medium rounded-lg transition-all hover:bg-slate-800/50"
              >
                Contact Me
              </button>
            </div>

            <div className="flex items-center gap-6 text-slate-400">
              <a href="https://github.com/Shiva-77-P" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/shiva-ponnam" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 border-t border-slate-900 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
          <div className="text-lg text-slate-400 leading-relaxed space-y-6 text-justify md:text-center">
            <p>
              I’m a <strong className="text-cyan-400">Cloud & DevOps Engineer</strong> with hands-on experience in building cloud infrastructure, automating deployment pipelines, and optimizing development workflows. I work extensively with AWS, Terraform, Docker, Jenkins, and Kubernetes to create scalable, secure, and production-ready environments.
            </p>
            <p>
              My expertise includes implementing end-to-end CI/CD pipelines, automating infrastructure provisioning with Terraform, containerizing applications with Docker, and orchestrating cloud-native workloads using Kubernetes. I’m passionate about improving system reliability, reducing manual effort through automation, and building efficient cloud-native architectures.
            </p>
            <p>
              I’m currently preparing for AWS certification while expanding my skills in Terraform, GitOps practices, and cloud security. I thrive in Agile teams, enjoy solving complex engineering problems, and consistently aim to deliver high-performance, automation-driven solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 text-center">
              <div className="p-4 bg-slate-900 rounded border border-slate-800">
                <div className="text-3xl font-bold text-white mb-1">AWS</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Cloud</div>
              </div>
              <div className="p-4 bg-slate-900 rounded border border-slate-800">
                <div className="text-3xl font-bold text-cyan-400 mb-1">3+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Key Projects</div>
              </div>
              <div className="p-4 bg-slate-900 rounded border border-slate-800">
                <div className="text-3xl font-bold text-violet-400 mb-1">90%</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Reliability</div>
              </div>
              <div className="p-4 bg-slate-900 rounded border border-slate-800">
                <div className="text-3xl font-bold text-emerald-400 mb-1">K8s</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Orchestration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Technical Proficiency</h2>
            <p className="text-slate-400">A comprehensive toolkit for modern infrastructure.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl hover:shadow-blue-900/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-400">Cloud Platforms</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300">
                  <Cloud className="text-blue-400 shrink-0" size={18} />
                  <span>AWS (EC2, S3, IAM, VPC)</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Cloud className="text-blue-400 shrink-0" size={18} />
                  <span>AWS (RDS, EKS, ECS, Lambda)</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Globe className="text-blue-400 shrink-0" size={18} />
                  <span>Route 53, CloudWatch</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl hover:shadow-cyan-900/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-cyan-500/10 rounded-lg text-cyan-400"><Layers size={22} /></div>
                <h3 className="text-xl font-bold text-cyan-100">DevOps Tools</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  <span>Docker & Docker Hub</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  <span>Kubernetes (Minikube, EKS, AKS)</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  <span>Helm Charts</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  <span>ArgoCD (GitOps)</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl hover:shadow-violet-900/10 hover:border-violet-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-violet-500/10 rounded-lg text-violet-400"><Code2 size={22} /></div>
                <h3 className="text-xl font-bold text-violet-100">Infrastructure as Code</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                  <span>Terraform (IaC)</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                  <span>Packer (Basics)</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                  <span>K8s ConfigMaps & Secrets</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl hover:shadow-orange-900/10 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-orange-500/10 rounded-lg text-orange-400"><GitBranch size={22} /></div>
                <h3 className="text-xl font-bold text-orange-100">CI/CD & Automation</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                  <span>Jenkins</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                  <span>GitHub Actions</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                  <span>GitLab CI</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl hover:shadow-emerald-900/10 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-400"><Activity size={22} /></div>
                <h3 className="text-xl font-bold text-emerald-100">Monitoring & Security</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span>Prometheus</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span>Grafana Dashboards</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span>Elastic Stack (ELK)</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl hover:shadow-slate-800/50 hover:border-slate-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-slate-700/30 rounded-lg text-slate-300"><Terminal size={22} /></div>
                <h3 className="text-xl font-bold text-slate-200">Other Technologies</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
                  <span>Git, GitHub, GitLab</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
                  <span>Linux (Ubuntu/CentOS)</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
                  <span>Bash, Python, YAML</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Key Projects</h2>
              <p className="text-slate-400">Hands-on experience with cloud-native technologies.</p>
            </div>
            <a href="https://github.com/Shiva-77-P" className="text-cyan-400 text-sm font-mono flex items-center gap-2 hover:underline">
              View all on GitHub <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Cloud-Native Microservices Deployment",
                desc: "Containerized microservices and deployed on AWS EKS; infrastructure automated with Terraform.",
                responsibilities: [
                  "Managed deployments with Helm and configured versioned releases.",
                  "Implemented CI/CD pipeline using GitHub Actions for automated builds.",
                  "Reduced deployment time from 20 minutes to 3 minutes.",
                ],
                stack: ["AWS EKS", "Terraform", "GitHub Actions"],
              },
              {
                title: "GitOps Delivery Pipeline",
                desc: "Used ArgoCD + GitLab CI to manage K8s state from Git and auto-deploy images.",
                responsibilities: [
                  "Configured ArgoCD to auto-sync and deploy microservices using Helm.",
                  "Built GitLab CI pipeline for automated image builds.",
                ],
                stack: ["ArgoCD", "GitLab CI", "Helm"],
              },
            ].map((project, idx) => (
              <div key={idx} className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all">
                <div className="h-1 bg-gradient-to-r from-cyan-500 to-violet-500" />
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <a href="https://github.com/Shiva-77-P" className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white" title="View Code">
                      <Github size={20} />
                    </a>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-cyan-200 border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto bg-slate-950/50 p-6 rounded-xl border border-slate-800/50">
                    <h4 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">Key Responsibilities:</h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      {project.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500" />
                          <div>{r}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 px-6 bg-slate-950 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Education & Certifications</h2>
          <div className="relative pl-8 md:pl-0 space-y-16">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>

            <div className="md:flex items-center justify-between gap-12">
              <div className="hidden md:block w-1/2 text-right">
                <div className="text-cyan-400 font-mono text-sm mb-1">2023 - 2025</div>
                <h3 className="text-xl font-bold text-white">Master of Computer Applications (MCA)</h3>
                <div className="text-slate-400">Sai Sudhir PG College, Hyderabad</div>
              </div>

              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-slate-950 border-2 border-cyan-500 rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-1.5"></div>

              <div className="md:hidden mb-2">
                <div className="text-cyan-400 font-mono text-sm">2023 - 2025</div>
                <h3 className="text-xl font-bold text-white">MCA</h3>
                <div className="text-slate-400">Sai Sudhir PG College</div>
              </div>

              <div className="md:w-1/2 text-slate-400 text-sm">Aggregate: 80%. Focused on advanced computing and software applications.</div>
            </div>

            <div className="md:flex items-center justify-between gap-12 md:flex-row-reverse">
              <div className="hidden md:block w-1/2">
                <div className="text-cyan-400 font-mono text-sm mb-1">2017 - 2022</div>
                <h3 className="text-xl font-bold text-white">Bachelor of Science (B.Sc)</h3>
                <div className="text-slate-400">Lal Bahadur College</div>
              </div>

              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-slate-950 border-2 border-violet-500 rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-1.5"></div>

              <div className="md:hidden mb-2">
                <div className="text-cyan-400 font-mono text-sm">2017 - 2022</div>
                <h3 className="text-xl font-bold text-white">Bachelor of Science</h3>
                <div className="text-slate-400">Lal Bahadur College</div>
              </div>

              <div className="md:w-1/2 text-right text-slate-400 text-sm">Aggregate: 82%. Strong foundation in computer science principles.</div>
            </div>

            <div className="md:flex items-center justify-between gap-12">
              <div className="hidden md:block w-1/2 text-right">
                <div className="text-cyan-400 font-mono text-sm mb-1">Certification</div>
                <h3 className="text-xl font-bold text-white">Serverless on Kubernetes</h3>
                <div className="text-slate-400">Linux Foundation</div>
              </div>

              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-slate-950 border-2 border-blue-500 rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-1.5"></div>

              <div className="md:hidden mb-2">
                <div className="text-cyan-400 font-mono text-sm">Certification</div>
                <h3 className="text-xl font-bold text-white">Serverless on Kubernetes</h3>
                <div className="text-slate-400">Linux Foundation</div>
              </div>

              <div className="md:w-1/2 text-slate-400 text-sm">Gained knowledge in deploying and managing serverless workloads on Kubernetes.</div>
            </div>

            <div className="md:flex items-center justify-between gap-12 md:flex-row-reverse">
              <div className="hidden md:block w-1/2">
                <div className="text-cyan-400 font-mono text-sm mb-1">Certification</div>
                <h3 className="text-xl font-bold text-white">DevOps on AWS</h3>
                <div className="text-slate-400">AWS Training</div>
              </div>

              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-slate-950 border-2 border-emerald-500 rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-1.5"></div>

              <div className="md:hidden mb-2">
                <div className="text-cyan-400 font-mono text-sm">Certification</div>
                <h3 className="text-xl font-bold text-white">DevOps on AWS</h3>
                <div className="text-slate-400">AWS Training</div>
              </div>

              <div className="md:w-1/2 text-right text-slate-400 text-sm">Fundamental understanding of AWS DevOps tools and practices.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Initialize Communication</h2>
            <p className="text-slate-400">Open to internship opportunities and DevOps roles.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-2xl">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded p-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Recruiter Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Email</label>
                  <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded p-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="recruiter@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Message</label>
                  <textarea rows="4" className="w-full bg-slate-900 border border-slate-800 rounded p-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Discussing an opportunity..." />
                </div>
                <button type="button" className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded transition-all transform active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
                <p className="text-slate-400">
                  Passionate about automation, scalable architectures, and production-grade reliability. Feel free to reach out via phone or email.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 bg-slate-900 rounded-full text-cyan-400"><Mail size={20} /></div>
                  <div>
                    <div className="text-xs text-slate-500">Email</div>
                    <div>shivaponnam77@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 bg-slate-900 rounded-full text-violet-400"><Phone size={20} /></div>
                  <div>
                    <div className="text-xs text-slate-500">Phone</div>
                    <div>+91 7330979920</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 bg-slate-900 rounded-full text-emerald-400"><MapPin size={20} /></div>
                  <div>
                    <div className="text-xs text-slate-500">Location</div>
                    <div>Hyderabad, Telangana, India</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800 flex gap-6">
                <a href="https://github.com/Shiva-77-P" className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/shiva-ponnam" className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-all"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-900 bg-slate-950 text-center text-slate-600 text-sm font-mono">
        <p>&copy; {new Date().getFullYear()} Shiva Ponnam. Engineered for performance.</p>
      </footer>
    </div>
  );
};

export default Portfolio;

