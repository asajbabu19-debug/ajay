/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Terminal, Cpu, Database, Globe, Mail, Phone, Linkedin, 
  ChevronRight, ExternalLink, Code, Layers, BrainCircuit, X
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent tracking-tighter">
        SA.AVULA
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
        {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">{item}</a>
        ))}
      </div>
    </div>
  </nav>
);

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-bold text-white mb-2"
    >
      {children}
    </motion.h2>
    <div className="h-1 w-20 bg-blue-500 rounded-full" />
    {subtitle && <p className="mt-4 text-slate-400 max-w-2xl">{subtitle}</p>}
  </div>
);

// --- Main Page ---

const projects = [
  { 
    title: "AI Search Assistant", 
    platform: "Perplexity AI Platform", 
    desc: "LLM + RAG-based system for accurate, real-time search responses.",
    details: "Designed and developed an advanced LLM-powered AI search assistant using Retrieval-Augmented Generation (RAG) to deliver highly accurate, context-aware responses. Enhanced system performance by optimizing prompt strategies, implementing semantic retrieval, and applying re-ranking techniques to significantly reduce hallucinations and improve answer relevance at scale.",
    skills: "Prompt Engineering (Few-shot, Chain-of-Thought, ReAct) • RAG Architecture • Semantic Search & Embeddings • Re-ranking • LangChain • OpenAI GPT / Azure OpenAI • Vector Databases (Pinecone, FAISS) • Python • LLM Evaluation & Tuning • Scalable AI Systems"
  },
  { 
    title: "Banking AI Assistant", 
    platform: "Wells Fargo Project", 
    desc: "Secure enterprise AI assistant with heavy focus on compliance & RAG.",
    details: "Engineered a secure, enterprise-grade AI assistant for financial query handling using LLM + RAG pipelines, ensuring high accuracy, compliance, and controlled responses. Designed prompt guardrails and context-restricted generation to prevent hallucinations while maintaining reliability and scalability in a regulated environment.",
    skills: "LLM Optimization • Prompt Guardrails & Safety • RAG Pipelines • Azure OpenAI • LangChain • Secure AI Architecture • Compliance-Aware Systems • Python • API Integration • System Design • Latency & Cost Optimization"
  },
  { 
    title: "Healthcare CDSS", 
    platform: "Healthcare Clinical Decision Support System", 
    desc: "AI-driven diagnostic support system using advanced NLP & LLMs.",
    details: "Developed an AI-driven clinical decision support system leveraging NLP and LLMs to analyze structured and unstructured medical data. Improved diagnostic support by extracting meaningful insights and delivering context-aware recommendations, enhancing decision-making efficiency for healthcare use cases.",
    skills: "Natural Language Processing (NLP) • LLM Applications • Data Preprocessing & Feature Engineering • Healthcare Data Analysis • Model Evaluation Metrics • Python • AI System Design • Information Extraction • Context-Aware Reasoning"
  }
];

const expertiseDetails = [
  {
    title: "AI System Design",
    content: "Design and architect scalable, production-ready AI systems leveraging LLMs and modern AI frameworks. Experienced in building end-to-end pipelines that integrate Retrieval-Augmented Generation (RAG), semantic search, and agent-based workflows to deliver reliable and context-aware solutions. Proven ability to structure modular architectures using LangChain, vector databases (Pinecone, FAISS, ChromaDB), and cloud platforms like AWS and Azure, ensuring performance, maintainability, and scalability across enterprise applications in healthcare, banking, and AI platforms."
  },
  {
    title: "LLM Optimization",
    content: "Specialized in improving the performance, accuracy, and reliability of large language models through advanced prompt engineering and evaluation techniques. Expertise in few-shot, chain-of-thought, and ReAct prompting, prompt chaining, and iterative tuning to reduce hallucinations and enhance output quality. Skilled in designing evaluation frameworks, optimizing token usage, reducing latency, and implementing context-aware RAG pipelines to ensure grounded and high-quality responses in real-world applications."
  },
  {
    title: "Enterprise AI Solutions",
    content: "Deliver robust enterprise-grade AI solutions tailored for real-world business environments, with a strong focus on security, compliance, and scalability. Hands-on experience building AI assistants for banking and healthcare systems, incorporating secure data handling, prompt guardrails, and context-restricted generation. Adept at integrating LLMs into existing workflows, automating processes, and developing AI-driven systems that improve operational efficiency and decision-making across organizations."
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = React.useState<typeof projects[0] | null>(null);
  const [selectedExpertise, setSelectedExpertise] = React.useState<typeof expertiseDetails[0] | null>(null);

  // Contact form state
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you! Your message has been sent.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to connect to the server. Please check your connection.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen font-sans selection:bg-blue-500/30">
      <Navbar />

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-3xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 md:p-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-blue-500 font-medium">{selectedProject.platform}</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Project Overview</h4>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {selectedProject.details}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">🔹 Skills Highlighted</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.skills.split(' • ').map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm border border-blue-500/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex justify-end">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all"
                >
                  Close Details
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Expertise Detail Modal */}
      {selectedExpertise && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedExpertise(null)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 md:p-10">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-bold text-white">{selectedExpertise.title}</h3>
                <button 
                  onClick={() => setSelectedExpertise(null)}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed text-lg">
                  {selectedExpertise.content}
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 flex justify-end">
                <button 
                  onClick={() => setSelectedExpertise(null)}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all"
                >
                  Got it
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Srinivasa Ajay <br/>
              <span className="text-blue-500">Babu Avula</span>
            </h1>
            <p className="mt-6 text-xl text-slate-400 font-light max-w-lg">
              AI Engineer | Prompt Engineering Specialist | LLM Architect
            </p>
            <p className="mt-4 text-slate-500 italic">
              “Building intelligent, scalable AI systems using LLMs, RAG, and advanced prompt engineering.”
            </p>
            <div className="mt-10 flex gap-4">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/20 inline-block">
                View Projects
              </a>
              <a href="#contact" className="border border-slate-700 hover:border-slate-500 px-8 py-3 rounded-full font-semibold transition-all inline-block">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-[450px] md:w-96 md:h-[550px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800">
              <img 
                src="profile.jpg" 
                alt="Srinivasa Ajay Babu Avula" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* About & Education */}
      <section id="about" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionHeading>About Me</SectionHeading>
              <p className="text-lg text-slate-300 leading-relaxed">
                Computer Science graduate from the University of Southern Mississippi with 4+ years of experience in AI and prompt engineering. Specialized in LLM-driven applications using OpenAI GPT, Azure OpenAI, LangChain, and RAG architectures.
              </p>
              <div className="mt-8 space-y-4">
                {expertiseDetails.map((item) => (
                  <button 
                    key={item.title} 
                    onClick={() => setSelectedExpertise(item)}
                    className="flex items-center gap-3 text-blue-400 font-medium text-lg hover:text-blue-300 transition-colors w-full text-left group"
                  >
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" /> {item.title}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/40 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                <Layers size={20} className="text-blue-500" /> Education
              </h3>
              <div className="space-y-8 border-l border-slate-700 ml-2 pl-6 relative">
                {[
                  { title: "MS in Computer Science", school: "University of Southern Mississippi", date: "Jan 2024 – Dec 2025" },
                  { title: "B.Tech in Information Technology", school: "Lakireddy Bali Reddy College of Eng.", date: "2019–2023" },
                  { title: "Intermediate", school: "Sri Chaitanya Junior College", date: "2017–2019" }
                ].map((edu, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[31px] top-1 w-3 h-3 bg-blue-500 rounded-full border-4 border-slate-900 shadow-glow" />
                    <h4 className="font-bold text-white">{edu.title}</h4>
                    <p className="text-sm text-slate-400">{edu.school}</p>
                    <p className="text-xs text-blue-500 mt-1 uppercase tracking-widest">{edu.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Crafting the future of enterprise intelligence.">Experience</SectionHeading>
          <div className="grid gap-6">
            {[
              { 
                role: "AI Prompt Engineer", company: "Perplexity AI Platform", date: "Aug 2025 – Present",
                points: ["Designed and optimized LLM-based systems", "Improved accuracy and reduced hallucinations"] 
              },
              { 
                role: "AI Engineer", company: "Wells Fargo Project", date: "Oct 2024 – Jul 2025",
                points: ["Built RAG pipelines and AI assistants", "Developed scalable enterprise AI solutions"] 
              },
              { 
                role: "AI Developer", company: "Healthcare CTS Project", date: "Jun 2021 – Dec 2023",
                points: ["Engineered diagnostic support systems", "Optimized LLM performance for clinical data"] 
              }
            ].map((exp, idx) => (
              <motion.div 
                whileHover={{ x: 10 }}
                key={idx} 
                className="group p-8 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                  <p className="text-blue-500 font-medium">{exp.company}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((p, i) => <li key={i} className="text-slate-400 text-sm flex gap-2"><span>•</span> {p}</li>)}
                  </ul>
                </div>
                <div className="text-slate-500 font-mono text-sm whitespace-nowrap bg-slate-950 px-4 py-2 rounded-lg border border-white/5">
                  {exp.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading>Expertise</SectionHeading>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { cat: "Prompt Engineering", skills: "Few-shot, CoT, ReAct, Chaining", icon: <BrainCircuit/> },
              { cat: "LLM Dev", skills: "OpenAI GPT, Azure, Agents", icon: <Cpu/> },
              { cat: "RAG Systems", skills: "Semantic Search, Embeddings", icon: <Database/> },
              { cat: "Frameworks", skills: "LangChain, Pinecone, ChromaDB", icon: <Terminal/> },
              { cat: "Programming", skills: "Python, SQL", icon: <Code/> },
              { cat: "Cloud", skills: "AWS, Azure", icon: <Globe/> },
            ].map((skill, idx) => (
              <div key={idx} className="p-6 bg-slate-800/20 rounded-xl border border-white/5 hover:bg-slate-800/40 transition-all group">
                <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h4 className="font-bold text-white mb-1">{skill.cat}</h4>
                <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-tighter">{skill.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading>Featured Projects</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={idx} 
                className="relative overflow-hidden group bg-slate-900 rounded-3xl border border-white/10 p-8 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                      <ExternalLink size={24} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
                  <p className="text-blue-500 text-sm font-medium mb-4">{proj.platform}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{proj.desc}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <button 
                    onClick={() => setSelectedProject(proj)}
                    className="text-white text-sm font-semibold flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    View Details <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading>Get In Touch</SectionHeading>
          <div className="grid md:grid-cols-3 gap-12 mt-16 max-w-4xl mx-auto">
             <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"><Phone/></div>
                <p className="text-white">+1 769-280-0769</p>
             </div>
             <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"><Mail/></div>
                <p className="text-white">asajbabu19@gmail.com</p>
             </div>
             <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"><Linkedin/></div>
                <a href="https://www.linkedin.com/in/ajay-babu-avula-75219721a" target="_blank" className="text-white hover:text-blue-400 transition-colors">LinkedIn Profile</a>
             </div>
          </div>
          
          <form 
            onSubmit={handleContactSubmit}
            className="mt-20 max-w-2xl mx-auto bg-slate-900/50 p-10 rounded-3xl border border-white/5 text-left"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-slate-950 border border-slate-800 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white" 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-slate-950 border border-slate-800 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white" 
              />
            </div>
            <textarea 
              placeholder="Your Message" 
              rows={5} 
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white mb-6"
            ></textarea>
            
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${
                submitStatus.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-white/5 text-slate-500 text-sm">
        © {new Date().getFullYear()} Srinivasa Ajay Babu Avula. All rights reserved.
      </footer>
    </div>
  );
};

export default function App() {
  return <Portfolio />;
}

