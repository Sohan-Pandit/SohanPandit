
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Author Sohan Pandit
*/

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Linkedin, Github, 
  ChevronRight, Moon, Sun, 
  BookOpen, Code, FlaskConical, Globe, GraduationCap, Award,
  Users, Briefcase, Microscope, MousePointer2, ExternalLink,
  CheckCircle2, Send, Wind, AlertTriangle, CloudRain, Waves
} from 'lucide-react';
import { EarthScene } from './components/EarthScene';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
        followerRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="custom-cursor-follower" />
    </>
  );
};

const SectionHeading = ({ children, subtitle }: { children?: React.ReactNode, subtitle?: string }) => (
  <div className="mb-16">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-2"
    >
      <div className="h-[1px] w-8 bg-earth-500" />
      <span className="text-xs font-bold tracking-[0.3em] uppercase text-earth-500">{subtitle}</span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="font-serif text-4xl md:text-5xl text-premium-ink dark:text-premium-cream"
    >
      {children}
    </motion.h2>
  </div>
);

const ProjectCard = ({ title, guide, desc, date, tags, icon: Icon }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group relative p-8 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:border-earth-500/30"
  >
    <div className="flex justify-between items-start mb-6">
      <span className="text-[10px] font-bold tracking-widest text-earth-500 uppercase">{date}</span>
      <Icon className="w-5 h-5 text-earth-400 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <h3 className="font-serif text-2xl mb-2 group-hover:text-earth-600 dark:group-hover:text-earth-400 transition-colors">{title}</h3>
    <p className="text-sm italic text-stone-500 dark:text-stone-400 mb-4">{guide}</p>
    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
      {desc}
    </p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag: string) => (
        <span key={tag} className="px-3 py-1 bg-stone-100 dark:bg-stone-800 text-[10px] font-bold uppercase tracking-wider text-stone-500 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const researchProjects = [
  {
    title: "Geostatistical Approach for Filling the Gaps in Wind Field Data",
    guide: "Guide: Dr. Sanjeev Kumar Jha, IISER-B",
    date: "11/2025 – Present",
    icon: Wind,
    tags: ["MPS", "Deep Learning", "Himalayas"],
    desc: "Developed advanced gap-filling methodologies using Multiple-Point Statistics (MPS) and Deep Learning for wind field data reconstruction in the Indian Himalayan Region. Addressing sensor failures in complex terrain, achieving over 90% reconstruction accuracy to support climate modeling and renewable energy assessment."
  },
  {
    title: "Fog Impacts in Central and Northern India: A Comparative Analysis",
    guide: "Guide: Dr. Sanjeev Kumar Jha, IISER-B",
    date: "04/2025 – 10/2025",
    icon: Globe,
    tags: ["Meteorology", "ML", "Aviation Safety"],
    desc: "Analyzing meteorological characteristics of fog events in Bhopal and Lucknow (2016-2024). Studied humidity, dew-point spread, and aerosol inhibition. Validating fog prediction models using machine learning with a target accuracy of >80% to build safer transportation systems."
  },
  {
    title: "Deep Learning-based Downscaling of Surface Wind Fields",
    guide: "Guide: Dr. Sanjeev Kumar Jha, IISER-B",
    date: "08/2025 – Present",
    icon: Code,
    tags: ["Downscaling", "Bias Correction", "Hydrology"],
    desc: "Developing a deep learning framework to enhance spatial resolution and accuracy of surface wind data. Integrates advanced learning models with statistical correction for terrain-wind interactions, critical for snowpack and hydrological modeling in the Himalayas."
  },
  {
    title: "Vulnerability Assessments of Extreme Events in Indian Himalayan Region",
    guide: "Guide: Dr. Sanjeev Kumar Jha, IISER-B",
    date: "06/2025 – Present",
    icon: AlertTriangle,
    tags: ["IPCC AR5/AR6", "GIS", "Risk Reduction"],
    desc: "District-level vulnerability assessment of floods, landslides, and avalanches. Assessing socio-economic factors and local infrastructure based on IPCC methodology to provide an objective basis for disaster risk reduction interventions."
  },
  {
    title: "Prediction of Extreme Rainfall Using Machine Learning: Yamuna Basin",
    guide: "Guide: Dr. Pankaj Chauhan, WIHG",
    date: "05/2024 – 07/2024",
    icon: CloudRain,
    tags: ["LSTM", "CatBoost", "Temporal Engineering"],
    desc: "Evaluated multiple ML/DL models (Bayesian Ridge, CatBoost, LSTM) for predicting extreme rainfall. Processed historical hydro-meteorological datasets with temporal feature engineering to capture lagged dependencies, improving disaster preparedness in the Uttarakhand Himalaya."
  },
  {
    title: "Assessment of Flood Hazards in the Narmada River Basin",
    guide: "Guide: Dr. Somil Swarnkar, IISER-B",
    date: "12/2023 – 01/2024",
    icon: Waves,
    tags: ["Anthropogenic Study", "Time-series", "Python/MATLAB"],
    desc: "Focused on evaluating flood hazards integrating climatic and anthropogenic variables (urbanization, deforestation). Analyzed river discharge and precipitation trends to identify spatial hotspots of vulnerability for adaptive flood management strategies."
  }
];

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xpqqlkpk", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('sent');
      } else {
        setFormStatus('idle');
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      setFormStatus('idle');
      alert("Oops! There was a problem submitting your form");
    }
  };

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  return (
    <div className="relative font-sans overflow-hidden">
      <CustomCursor />
      
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-earth-500 z-[100] origin-left" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-500 glass">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-earth-900 dark:bg-earth-100 rounded-full flex items-center justify-center text-white dark:text-earth-900 font-serif font-bold text-xl group-hover:scale-110 transition-transform">S</div>
            <span className="font-serif font-bold text-lg tracking-tight">SOHAN PANDIT</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-stone-500 dark:text-stone-400">
            <a href="#about" className="hover:text-earth-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-earth-500 transition-colors">Research</a>
            <a href="#experience" className="hover:text-earth-500 transition-colors">Experience</a>
            <a href="#education" className="hover:text-earth-500 transition-colors">Education</a>
            <a href="#skills" className="hover:text-earth-500 transition-colors">Expertise</a>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 z-0">
          <EarthScene />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-premium-cream/50 to-premium-cream dark:via-premium-ink/50 dark:to-premium-ink" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-earth-100 dark:bg-earth-900/30 text-earth-700 dark:text-earth-300 text-[10px] font-bold tracking-[0.3em] uppercase rounded-full mb-8 border border-earth-200 dark:border-earth-800">
              <Globe size={12} /> Earth & Environmental Scientist
            </div>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9]">
              Decoding our <br />
              <span className="italic text-earth-600">Planet's Future.</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 font-light max-w-2xl leading-relaxed mb-12">
              Final-year BSMS student at IISER Bhopal, blending Geostatistics, Machine Learning, and Earth Sciences to solve critical environmental challenges.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a href="#projects" className="px-8 py-4 bg-earth-900 dark:bg-earth-100 text-white dark:text-earth-950 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-earth-800 dark:hover:bg-earth-200 transition-all flex items-center gap-2">
                View Research <ChevronRight size={16} />
              </a>
              <div className="flex items-center gap-4">
                 <a href="mailto:sohan21@iiserb.ac.in" className="p-4 rounded-full border border-stone-200 dark:border-stone-800 hover:text-earth-500 transition-colors"><Mail size={20} /></a>
                 <a href="https://www.linkedin.com/in/sohan-pandit" target="_blank" className="p-4 rounded-full border border-stone-200 dark:border-stone-800 hover:text-earth-500 transition-colors"><Linkedin size={20} /></a>
                 <a href="https://github.com/Sohan-Pandit" target="_blank" className="p-4 rounded-full border border-stone-200 dark:border-stone-800 hover:text-earth-500 transition-colors"><Github size={20} /></a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
           <div className="w-[1px] h-12 bg-stone-400" />
        </div>
      </header>

      {/* Profile / About Section with Animated Image */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-6">
            <SectionHeading subtitle="Profile">The Vision</SectionHeading>
            <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-8">
              Deeply passionate about earth and environmental science, I am driven to make a meaningful impact through research. 
              My goal is to explore the boundless possibilities within the Earth and Environmental Sciences, contributing to positive 
              change while immersing in all facets of this captivating discipline.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-3xl font-serif mb-2">90%+</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Spatiotemporal Reconstruction Accuracy</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif mb-2">80%+</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Fog and flood prediction Validation</p>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-6 border-l-2 border-earth-500 bg-earth-50/50 dark:bg-earth-900/10 italic text-stone-600 dark:text-stone-400"
            >
              "Decoding the intricate language of our planet requires not just observation, but a synthesis of classical science and modern computation."
            </motion.div>
          </div>
          
          <div className="md:col-span-6 relative flex justify-center">
            {/* Signature Frame Background Animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
              whileInView={{ opacity: 0.1, scale: 1, x: 40, y: 40 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute w-[80%] aspect-[4/5] bg-earth-900 rounded-3xl -z-10"
            />
            
            {/* Main Image Container with Breathing Animation */}
            {/* Fix: Merged duplicate transition attributes into a single transition object */}
            <motion.div 
              initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1],
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="w-full max-w-md aspect-[4/5] rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 relative overflow-hidden group shadow-2xl"
            >
               {/* Replace 'profile.jpg' with your actual photo path */}
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.8 }}
                 className="absolute inset-0 bg-[url('/profile.jpg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-earth-950/40 via-transparent to-transparent opacity-60" />
               <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
               
               {/* Decorative Overlay Label */}
               <div className="absolute bottom-8 left-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/80 drop-shadow-lg">Sohan Pandit</span>
                  <div className="h-px w-8 bg-earth-500 mt-2" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section id="projects" className="py-32 bg-stone-50 dark:bg-stone-950">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Research Portfolio">Featured Works</SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 1. PROFESSIONAL EXPERIENCE SECTION */}
      <section id="experience" className="py-32 bg-white dark:bg-premium-ink overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Career Path">Leadership & Professional Experience</SectionHeading>
          
          <div className="relative max-w-5xl">
            {/* The progression line */}
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-stone-200 dark:bg-stone-800" />
            
            <div className="space-y-20">
              {[
                {
                  title: "Placement Associate of Placement Cell",
                  org: "Indian Institute of Science Education and Research (IISER), Bhopal",
                  date: "06/2023 – Present",
                  icon: <Briefcase className="w-5 h-5" />,
                  details: "Coordinating recruitment cycles, managing industry outreach, and assisting graduating batches in career placement activities."
                },
                {
                  title: "Co-Ordinator, Earth and Environmental Sciences (EES) Club",
                  org: "IISER Bhopal",
                  date: "08/2022 – 2023",
                  icon: <Users className="w-5 h-5" />,
                  details: "Spearheaded club initiatives, academic workshops, and environmental awareness seminars for the student community."
                },
                {
                  title: "Mess president",
                  org: "IISER Bhopal",
                  date: "11/2025 – Present",
                  icon: <Users className="w-5 h-5" />,
                  details: "Organized mess activities, managed mess logistics, and ensured smooth running of mess operations."
                },
                {
                  title: "Core Committee Member, Computing and Networking Council (CNC)",
                  org: "IISER Bhopal",
                  date: "08/2022 – Present",
                  icon: <Code className="w-5 h-5" />,
                  details: "Providing technical infrastructure support, community management, and event management for the council."
                },
                {
                  title: "Website Development | HamaraCampus",
                  org: "Bootstrapped Start-up",
                  date: "2021",
                  icon: <MousePointer2 className="w-5 h-5" />,
                  details: "Lead developer for a student-focused food aggregator platform. Implemented responsive UI using Bootstrap and managed site logistics for a seamless user experience."
                }
              ].map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="relative pl-16 group"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-0 w-12 h-12 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-full flex items-center justify-center group-hover:bg-earth-900 group-hover:text-white transition-all duration-500 shadow-sm z-10">
                    {exp.icon}
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                       <h3 className="font-serif text-2xl group-hover:text-earth-600 transition-colors">{exp.title}</h3>
                       <span className="text-[10px] font-bold uppercase tracking-widest text-earth-500">{exp.date}</span>
                    </div>
                    <p className="text-stone-500 dark:text-stone-400 font-medium text-sm mb-4">{exp.org}</p>
                    <div className="bg-stone-50 dark:bg-stone-900/50 p-6 rounded-2xl border border-stone-100 dark:border-stone-800/50 group-hover:border-earth-500/30 transition-all">
                       <p className="text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl">{exp.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. EDUCATION SECTION */}
      <section id="education" className="py-32 bg-stone-50 dark:bg-stone-950">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Academic Journey">Academic Foundation</SectionHeading>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {[
                { 
                  title: "BS-MS (Earth and Environmental Science)", 
                  place: "IISER Bhopal", 
                  date: "2021 – Present",
                  desc: "Current research focuses on geostatistical modeling for wind field data reconstruction and fog prediction validation using machine learning."
                },
                { 
                  title: "Higher Secondary", 
                  place: "Bankura Municipal High School", 
                  date: "2019 – 2021",
                  desc: "Focused on core sciences with emphasis on environmental studies and mathematics."
                },
                { 
                  title: "Secondary", 
                  place: "Fulkushma High School (HS)", 
                  date: "2013 – 2019",
                  desc: "Foundation schooling with academic excellence across general science subjects."
                }
              ].map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <GraduationCap size={80} />
                  </div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-earth-100 dark:bg-earth-900/30 text-earth-600 rounded-xl">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{edu.date}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-2">{edu.title}</h3>
                  <p className="text-earth-600 dark:text-earth-400 font-medium mb-4">{edu.place}</p>
                  <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-2xl">{edu.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-earth-900 text-white rounded-3xl shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-earth-800 rounded-full -mr-16 -mt-16 opacity-30" />
                <h4 className="font-serif text-2xl mb-6 relative z-10">Field Experiences</h4>
                <ul className="space-y-6 relative z-10">
                  <li className="flex gap-4">
                    <Microscope className="w-5 h-5 flex-shrink-0 text-earth-300" />
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider mb-1">Basic Field Geology</p>
                      <p className="text-xs text-stone-300">Jan 2024</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Globe className="w-5 h-5 flex-shrink-0 text-earth-300" />
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider mb-1">Advance Field Studies</p>
                      <p className="text-xs text-stone-300">Earth & Env. Sciences</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl shadow-sm"
              >
                <h4 className="font-serif text-2xl mb-6 flex items-center gap-2">
                   <Award className="w-6 h-6 text-earth-500" /> Online Courses
                </h4>
                <div className="space-y-4">
                  {[
                    "GIS Mapping - Univ. Toronto",
                    "GIS Data Acquisition & Map Design",
                    "Machine Learning with Python - IBM",
                    "Earthquake Engineering - École Polytechnique"
                  ].map(course => (
                    <div key={course} className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-300 group cursor-default">
                      <div className="w-1.5 h-1.5 rounded-full bg-earth-500 group-hover:scale-150 transition-transform" /> {course}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-white dark:bg-premium-ink">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <SectionHeading subtitle="Technical Stack">Expertise & Specialized Skills</SectionHeading>
              <div className="space-y-12">
                {[
                  { label: "Programming", items: ["Python", "C", "SQL", "HTML"] },
                  { label: "Geospatial", items: ["QGIS", "Google Earth Engine", "ArcMap", "WRF"] },
                  { label: "Computational", items: ["MATLAB", "Mathematica", "Stata", "Latex"] },
                  { label: "Labs", items: ["Geophysical Interpretation", "Spectrophotometry", "Water Quality Analysis"] }
                ].map(group => (
                  <div key={group.label}>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-4">{group.label}</h4>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map(skill => (
                        <span key={skill} className="px-5 py-2 rounded-full border border-stone-200 dark:border-stone-800 text-sm hover:border-earth-500 transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="p-12 bg-stone-950 text-white rounded-[40px] relative overflow-hidden shadow-2xl border border-stone-800">
                <div className="absolute top-0 right-0 w-64 h-64 bg-earth-900 rounded-full -mr-32 -mt-32 opacity-20" />
                <h3 className="font-serif text-4xl mb-8 relative z-10">Achievement Awards</h3>
                <div className="space-y-10 relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-earth-900/40 rounded-xl text-earth-300">
                       <Award size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Science Exhibition Winner</p>
                      <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">Bankura District Administration | 2018</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-earth-900/40 rounded-xl text-earth-300">
                       <Code size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-lg">HackerRank Certified</p>
                      <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">Global Logic & Coding Benchmarking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
            {/* 3. CONTACT SECTION */}
            <section id="contact" className="py-32 bg-stone-50 dark:bg-stone-900">
              <div className="container mx-auto px-6">
                <SectionHeading subtitle="Connect">Get In Touch</SectionHeading>
          
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-8">
                I am always open to discussing new research opportunities, academic collaborations, or environmental projects. Feel free to reach out through any of these channels.
              </p>
              
              <motion.a 
                href="mailto:sohan21@iiserb.ac.in"
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-white dark:bg-stone-900 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-sm group"
              >
                <div className="p-4 bg-earth-100 dark:bg-earth-900/30 text-earth-600 rounded-2xl group-hover:bg-earth-900 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Email Me</p>
                  <p className="font-serif text-lg">sohan21@iiserb.ac.in</p>
                </div>
              </motion.a>


              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-white dark:bg-stone-900 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-sm group"
              >
                <div className="p-4 bg-earth-100 dark:bg-earth-900/30 text-earth-600 rounded-2xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Location</p>
                  <p className="font-serif text-lg">IISER Bhopal, India</p>
                </div>
              </motion.div>
  
            </div>

            
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-stone-900 p-8 md:p-12 rounded-[40px] border border-stone-100 dark:border-stone-800 shadow-2xl relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {formStatus === 'sent' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="font-serif text-3xl mb-4">Message Sent!</h3>
                      <p className="text-stone-500 dark:text-stone-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                      <button 
                        onClick={() => setFormStatus('idle')}
                        className="mt-8 text-earth-600 font-bold uppercase tracking-widest text-xs hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleFormSubmit} 
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Your Name</label>
                          <input 
                            required
                            type="text" 
                            name="name"
                            className="w-full px-6 py-4 bg-stone-50 dark:bg-stone-950 border border-stone-100 dark:border-stone-800 rounded-2xl focus:outline-none focus:border-earth-500 transition-colors"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Email Address</label>
                          <input 
                            required
                            type="email" 
                            name="email"
                            className="w-full px-6 py-4 bg-stone-50 dark:bg-stone-950 border border-stone-100 dark:border-stone-800 rounded-2xl focus:outline-none focus:border-earth-500 transition-colors"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Subject</label>
                        <input 
                          required
                          type="text" 
                          name="subject"
                          className="w-full px-6 py-4 bg-stone-50 dark:bg-stone-950 border border-stone-100 dark:border-stone-800 rounded-2xl focus:outline-none focus:border-earth-500 transition-colors"
                          placeholder="Research Collaboration"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Message</label>
                        <textarea 
                          required
                          rows={5}
                          name="message"
                          className="w-full px-6 py-4 bg-stone-50 dark:bg-stone-950 border border-stone-100 dark:border-stone-800 rounded-2xl focus:outline-none focus:border-earth-500 transition-colors resize-none"
                          placeholder="Tell me more about your project..."
                        ></textarea>
                      </div>
                      <button 
                        type="submit"
                        disabled={formStatus === 'sending'}
                        className="w-full py-5 bg-earth-900 dark:bg-earth-100 text-white dark:text-earth-950 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-earth-800 dark:hover:bg-earth-200 transition-all disabled:opacity-50"
                      >
                        {formStatus === 'sending' ? 'Sending...' : (
                          <>Send Message <Send size={16} /></>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-premium-ink text-stone-400">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div>
              <h2 className="font-serif text-5xl text-white mb-8">Let's shape the <br /><span className="italic text-earth-500">future of our Earth.</span></h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><Mail className="w-4 h-4" /> sohan21@iiserb.ac.in</div>
                <div className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Bhopal, India</div>
              </div>
            </div>
            <div className="flex flex-col justify-end items-end gap-6">

              <p className="text-[10px] uppercase tracking-widest">© 2026 SOHAN PANDIT. PORTFOLIO</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
