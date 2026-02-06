'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Globe,
  ChevronRight,
  Layers,
  Loader2,
  CheckCircle2,
  User,
  FileDown
} from 'lucide-react';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';
import { type TablesInsert } from '@/database.types';
import { sendContactEmail } from './actions';

const getGoogleDriveImageUrl = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;

const galleryItems = [
  {
    url: getGoogleDriveImageUrl("11L0BHHmLf5ZVIroh1loUMR4eETvai6OC"),
    title: "IT Department",
    category: "JGEC_24"
  },
  {
    url: getGoogleDriveImageUrl("1-No2B_X4D_rYcqNGb-m8LLONsOdMznVn"),
    title: "College Days",
    category: "JGEC_24"
  },
  {
    url: getGoogleDriveImageUrl("1JnulFdVz53XWFIk0Wwkexz21AgY3pld0"),
    title: "Kangchenjunga",
    category: "Away from the screen"
  },
  {
    url: getGoogleDriveImageUrl("1MSoWYu1OSjAlDcP8sjeWJe07lzp4byAw"),
    title: "Adventure Time",
    category: "Weekend getaway"
  },
];

const projects = [
  {
    title: "Zenvy-EV-Website",
    description: "A modern electric vehicle (EV) car selling platform built with Next.js and TypeScript. Scalable, responsive, and user-friendly.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    link: "https://zenvyev.netlify.app",
    github: "https://github.com/ritam0102/Zenvy-EV-Website"
  },
  {
    title: "Ev-Car-Selling-Website",
    description: "Modern electric vehicle (EV) car selling platform foundation for showcasing electric cars and managing listings.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "React"],
    link: "https://github.com/ritam0102/Ev-Car-Selling-Website",
    github: "https://github.com/ritam0102/Ev-Car-Selling-Website"
  },
  {
    title: "2D-Car-Racing-Game",
    description: "A 2D car racing game developed using JavaScript and HTML5, where players control a car to navigate a vertical scrolling track.",
    tech: ["JavaScript", "HTML5", "CSS"],
    link: "https://2-d-car-racing-game.vercel.app",
    github: "https://github.com/ritam0102/2D-Car-Racing-Game"
  },
  {
    title: "The-Mario-The-Bugs-Game",
    description: "A funny and interesting Mario-style game built with JavaScript.",
    tech: ["JavaScript", "HTML5", "Game Dev"],
    link: "https://github.com/ritam0102/The-Mario-The-Bugs-Game",
    github: "https://github.com/ritam0102/The-Mario-The-Bugs-Game"
  },
  {
    title: "AI-CHATBOT",
    description: "An AI-powered chatbot implementation using Python.",
    tech: ["Python", "AI", "NLP"],
    link: "https://github.com/ritam0102/AI-CHATBOT",
    github: "https://github.com/ritam0102/AI-CHATBOT"
  },
  {
    title: "wa.massage-repeater",
    description: "A tool to send unlimited messages in WhatsApp, Telegram, and Instagram using Python automation.",
    tech: ["Python", "Automation", "PyAutoGUI"],
    link: "https://github.com/ritam0102/wa.massage-repeater",
    github: "https://github.com/ritam0102/wa.massage-repeater"
  }
];

const skills = [
  { category: "Languages", items: ["TypeScript", "Go", "Java", "Python", "Rust"] },
  { category: "Backend", items: ["Node.js", "Spring Boot", "PostgreSQL", "Redis", "GraphQL"] },
  { category: "Infrastructure", items: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] }
];

const countryCodes = [
  { code: "+1", country: "US/CA" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "IN" },
  { code: "+61", country: "AU" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+81", country: "JP" },
  { code: "+86", country: "CN" },
  { code: "+7", country: "RU" },
  { code: "+55", country: "BR" },
];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const countryCode = formData.get('countryCode') as string;
    const phoneNumber = formData.get('phone') as string;

    const data: TablesInsert<'contacts'> = {
      name: formData.get('name') as string,
      phone: phoneNumber ? `${countryCode} ${phoneNumber}` : null,
      address: formData.get('address') as string,
      message: formData.get('message') as string,
    };

    const supabase = createClient();
    const { error: submitError } = await (supabase.from('contacts') as any)
      .insert([data]);

    if (submitError) {
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    } else {
      // Send email notification
      await sendContactEmail(data);

      setIsSubmitted(true);
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            RS PORTFOLIO
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Home / Hero Section */}
        <section id="home" className="mb-32 min-h-[60vh] flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h2 className="text-blue-400 font-mono mb-4">Hi, my name is</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              RITAM SAMANTA. <br />
              <span className="text-gray-500">I build scalable systems.</span>
            </h1>
            <p className="max-w-xl text-gray-400 text-lg mb-10 leading-relaxed">
              Software Engineer specializing in distributed systems and cloud infrastructure.
              Currently focused on building high-performance backend services and developer tools.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center gap-2">
                View Projects <ChevronRight size={18} />
              </a>
              <div className="flex gap-2">
                <a href="https://github.com/ritam0102" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ritams" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/10 p-2 overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden bg-white/5 relative">
                <Image
                  src="/dp.svg"
                  alt="Ritam Samanta"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-32 scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold">About Me</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-400 leading-relaxed"
            >
              <p>
                I am a passionate Software Development Engineer with a strong foundation in building
                robust and scalable backend systems. My journey in tech started with a deep curiosity
                about how complex systems handle millions of requests.
              </p>
              <p>
                With expertise in <span className="text-white">Go, Rust, and TypeScript</span>, I focus on
                creating efficient architectures that solve real-world problems. I enjoy diving deep
                into distributed systems, cloud infrastructure, and performance optimization.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or writing about technical concepts on my blog.
              </p>
              <div className="pt-4">
                <a
                  href="https://drive.google.com/file/d/1Dl1q3POaC5uqAkk203b5XOg17RNu924X/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-all text-white"
                >
                  <FileDown size={18} />
                  View CV
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="text-blue-400/20 absolute inset-0 flex items-center justify-center">
                  <Code2 size={200} />
                </div>
                <div className="z-10 text-center p-8">
                  <div className="text-4xl font-bold text-white mb-2">B.Tech in Information Technology </div>
                  <div className="text-gray-400 text-sm uppercase tracking-widest">Jalpaiguri Government Engineering College</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold">Technical Arsenal</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors group"
              >
                <h3 className="text-blue-400 font-mono text-sm mb-4 uppercase tracking-wider">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold">Featured Work</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-white/10 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                    <Terminal size={24} />
                  </div>
                  <div className="flex gap-3 text-gray-500">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={20} className="hover:text-white cursor-pointer" />
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} className="hover:text-white cursor-pointer" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="mb-32 scroll-mt-24">
          <div className="flex items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-4 flex-1">
              <h2 className="text-2xl font-bold">Gallery</h2>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-400 text-xs font-mono mb-1 uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-400">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5"
            >
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-400 hover:underline font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name *</label>
                      <input
                        required
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-400 ml-1">Phone No.</label>
                      <div className="flex gap-2">
                        <select
                          name="countryCode"
                          className="w-24 px-2 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all text-sm"
                          defaultValue="+91"
                        >
                          {countryCodes.map((c) => (
                            <option key={c.code} value={c.code} className="bg-[#1a1a1a]">
                              {c.code} ({c.country})
                            </option>
                          ))}
                        </select>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="0000000000"
                          className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium text-gray-400 ml-1">Address *</label>
                    <input
                      required
                      id="address"
                      name="address"
                      type="text"
                      placeholder="123 Street, City, Country"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message *</label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="How can I help you?"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  )}

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10 text-center text-gray-500 text-sm">
        <p>© 2026 RS PORTFOLIO. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}
