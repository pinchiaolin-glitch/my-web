
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Download, Cpu, Quote, ChevronDown, ChevronUp, Cat, PawPrint, Check } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, CLIENT_LOGOS, PROJECTS, EXPERIENCE, TESTIMONIALS, PROFILE_IMAGE } from '../constants';
import { Project } from '../types';
import AnimationWrapper from './AnimationWrapper';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  setSelectedProject: (project: Project) => void;
}

const DraggableCat = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 }); // Mouse position at start
  const elementStartPos = useRef({ x: 0, y: 0 }); // Element translation at start

  const handleStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    dragStartPos.current = { x: clientX, y: clientY };
    elementStartPos.current = { x: pos.x, y: pos.y };
  };

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent text selection
    handleStart(e.clientX, e.clientY);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX, e.touches[0].clientY);
  };

  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      if (!isDragging) return;
      const dx = clientX - dragStartPos.current.x;
      const dy = clientY - dragStartPos.current.y;
      setPos({
        x: elementStartPos.current.x + dx,
        y: elementStartPos.current.y + dy,
      });
    };

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX, e.touches[0].clientY);
    
    const onEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [isDragging]);

  return (
    <div 
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className="absolute -top-6 -left-1 md:-top-9 md:-left-2 z-50 cursor-grab active:cursor-grabbing group touch-none"
    >
      {/* Inner wrapper for float animation so it doesn't conflict with drag transform */}
      <div className={`transition-transform ${!isDragging ? 'animate-float' : ''}`}>
         <Cat className="w-12 h-12 md:w-16 md:h-16 -rotate-12 fill-white/5 text-gray-200 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-0 group-hover:text-white" />
      </div>
    </div>
  );
};

const ExperienceCard = ({ exp }: { exp: typeof EXPERIENCE[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="glass-card p-6 rounded-2xl cursor-pointer group relative overflow-hidden"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex flex-col md:flex-row gap-6 relative z-10">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-2 flex-shrink-0 shadow-lg shadow-purple-900/20 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
            <img src={exp.logo} alt="logo" className="w-full h-full object-contain rounded-full" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
            <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{exp.company}</h4>
            <span className="text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 group-hover:border-purple-500/30 transition-colors">{exp.period}</span>
          </div>
          <p className="text-lg text-purple-300 mb-2">{exp.role}</p>
          
          <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-60'}`}>
             <div className="overflow-hidden">
               <p className="text-gray-400 text-sm leading-relaxed pl-4 border-l-2 border-purple-500/30">
                 {exp.description}
                 <br/>
                 <span className="block mt-2 text-xs text-gray-500">Click to collapse</span>
               </p>
             </div>
          </div>
          
          {!isExpanded && (
             <div className="mt-2 flex items-center text-xs text-gray-500 font-medium uppercase tracking-wider gap-1 group-hover:text-white transition-colors">
                <span>More Details</span>
                <ChevronDown className="w-3 h-3 animate-bounce" />
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

const HomeView: React.FC<HomeViewProps> = ({ setActiveTab, setSelectedProject }) => (
  <div className="relative overflow-hidden">
    
    {/* Dynamic Background */}
    <div className="absolute top-0 left-0 w-full h-[120vh] -z-10 overflow-hidden pointer-events-none">
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
       <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
       <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
       
       {/* Decorative Cat Elements in Background */}
       <div className="absolute top-1/4 right-[10%] text-white/5 rotate-12 animate-float animation-delay-1000 mix-blend-overlay">
         <PawPrint className="w-24 h-24" />
       </div>
       <div className="absolute bottom-1/3 left-[5%] text-white/5 -rotate-12 animate-float animation-delay-3000 mix-blend-overlay">
         <PawPrint className="w-16 h-16" />
       </div>
       <div className="absolute top-[15%] left-[15%] text-white/5 rotate-45 animate-float animation-delay-4000 mix-blend-overlay">
         <PawPrint className="w-12 h-12" />
       </div>
    </div>

    {/* Hero Section */}
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Content */}
        <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
          <AnimationWrapper delay={200}>
            <div className="relative inline-block">
              {/* Draggable Cat Component */}
              <DraggableCat />
              
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter relative z-10">
                I'M <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x">
                  PINCHIAO
                </span>
              </h1>
            </div>
          </AnimationWrapper>

          <AnimationWrapper delay={400}>
            <p className="text-xl md:text-2xl text-gray-400 max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
              {PERSONAL_INFO.bio}
            </p>
          </AnimationWrapper>

          <AnimationWrapper delay={600}>
            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <button className="group relative flex items-center px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </span>
              </button>
              <button 
                onClick={() => setActiveTab('project')}
                className="group flex items-center px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                View Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </AnimationWrapper>
        </div>

        {/* Right Content - The Floating Profile Card System */}
        <div className="flex-1 w-full flex justify-center items-center relative mt-10 lg:mt-0">
           <AnimationWrapper delay={500} className="relative w-full max-w-[500px] flex justify-center">
             
             {/* Main Container with float animation */}
             <div className="relative w-[320px] h-[400px] md:w-[380px] md:h-[480px] animate-float">
                
                {/* Main Profile Card */}
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-gray-900 group">
                   <img 
                     src={PROFILE_IMAGE}
                     alt="Profile" 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                   
                   <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center text-center pb-20">
                      <p className="font-mono text-purple-300 text-sm tracking-widest bg-purple-900/40 px-4 py-1 rounded-full border border-purple-500/30 backdrop-blur-sm">Product Designer</p>
                   </div>
                </div>

                {/* Floating Badge: Palette (Top Right) */}
                <div className="absolute -top-6 -right-4 md:-right-10 w-20 h-20 bg-[#1a1a1a] rounded-3xl border border-white/10 flex items-center justify-center shadow-xl animate-float animation-delay-2000 z-20 hover:scale-110 transition-transform duration-300 hover:border-purple-500/50">
                    <span className="text-3xl filter drop-shadow-lg">🎨</span>
                </div>

                {/* Floating Badge: Open to work (Bottom Left) */}
                <div className="absolute bottom-6 -left-8 md:-left-16 bg-[#1a1a1a] py-3 px-6 rounded-full border border-white/10 flex items-center gap-3 shadow-2xl animate-float animation-delay-4000 z-20 hover:bg-gray-800 transition-colors">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-white font-bold text-sm whitespace-nowrap">Open to work</span>
                </div>

                {/* Floating Badge: Based in Taiwan (Right Side) */}
                <div className="absolute top-1/3 -right-8 md:-right-24 bg-[#1a1a1a]/80 backdrop-blur-xl py-3 px-5 rounded-2xl border border-white/10 flex items-center gap-3 shadow-xl animate-float animation-delay-1000 z-10 hover:bg-[#1a1a1a] transition-colors">
                    <span className="text-xl">📍</span>
                    <div className="text-left">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Based in</p>
                        <p className="text-white font-bold text-sm">Taiwan</p>
                    </div>
                </div>

                {/* Floating Badge: Experience (Left Side) */}
                <div className="absolute top-20 -left-6 md:-left-20 bg-[#1a1a1a]/80 backdrop-blur-xl py-3 px-5 rounded-2xl border border-white/10 flex items-center gap-3 shadow-xl animate-float animation-delay-3000 z-10 hover:bg-[#1a1a1a] transition-colors">
                    <span className="text-xl">✨</span>
                    <div className="text-left">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Experience</p>
                        <p className="text-white font-bold text-sm">3+ Years</p>
                    </div>
                </div>

                {/* Floating Badge: Cat (Bottom Right) */}
                <div className="absolute bottom-24 -right-5 md:-right-10 w-14 h-14 bg-[#1a1a1a] rounded-2xl border border-white/10 flex items-center justify-center shadow-xl animate-float animation-delay-1500 z-30 hover:scale-110 transition-transform duration-300 hover:border-pink-400/50 group/cat cursor-pointer">
                    <Cat className="w-7 h-7 text-pink-400 group-hover/cat:animate-bounce" />
                </div>

             </div>
           </AnimationWrapper>
        </div>
      </div>
    </section>

    {/* Skills Section - Animated Marquee */}
    <section className="py-16 border-y border-white/5 bg-white/[0.02]">
       <AnimationWrapper>
         <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
               <Cpu className="w-5 h-5 text-purple-400" />
               <h3 className="text-lg font-bold text-white">Tools & Technologies</h3>
            </div>
         </div>
       </AnimationWrapper>
       
       <div className="relative w-full overflow-hidden mask-gradient-sides">
         {/* Scrolling Row */}
         <div className="flex animate-marquee-skills space-x-6 w-max hover:[animation-play-state:paused] py-4">
           {[...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS].map((skill, i) => (
             <div 
                key={i} 
                className="flex items-center gap-3 px-8 py-4 bg-[#111] border border-white/10 rounded-2xl hover:border-purple-500/50 hover:bg-purple-900/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 group cursor-default min-w-max"
             >
                <div className={`group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 ${skill.color}`}>{skill.icon}</div>
                <span className="text-gray-300 font-bold text-lg group-hover:text-white transition-colors">{skill.name}</span>
             </div>
           ))}
         </div>
       </div>

       <style>{`
        @keyframes marquee-skills {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-skills {
          animation: marquee-skills 60s linear infinite;
        }
        .mask-gradient-sides {
           mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
       `}</style>
    </section>

    {/* Client Logos Marquee */}
    <section className="py-12 border-b border-white/5 bg-white/[0.02] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 mb-8">
         <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] text-center">Trusted By Industry Leaders</p>
      </div>
      <div className="relative w-full overflow-hidden mask-gradient">
         <div className="flex animate-marquee space-x-12 w-max items-center hover:[animation-play-state:paused]">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
               <div key={idx} className="w-48 h-24 flex items-center justify-center bg-white rounded-xl p-5 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg shadow-black/20 overflow-hidden">
                  <img src={logo.url} alt="Client Logo" className={`w-full h-full object-contain mix-blend-multiply ${logo.scale}`} />
               </div>
            ))}
         </div>
         <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .mask-gradient {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        `}</style>
      </div>
    </section>

    {/* Selected Works Grid */}
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-16">
         <AnimationWrapper>
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Selected Works</h2>
           <p className="text-gray-400 text-lg">Curated projects that defined my career.</p>
         </AnimationWrapper>
         <AnimationWrapper delay={200}>
           <button 
             onClick={() => setActiveTab('project')}
             className="hidden md:flex items-center text-white hover:text-purple-400 transition-colors group font-medium"
           >
             View All Projects <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
           </button>
         </AnimationWrapper>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {PROJECTS.slice(0, 3).map((project, idx) => (
           <AnimationWrapper key={project.id} delay={idx * 200}>
             <div 
               onClick={() => setSelectedProject(project)}
               className="group relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] cursor-pointer hover:-translate-y-2"
             >
               <div className="h-72 overflow-hidden relative">
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                 <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-full text-white border border-white/10 group-hover:rotate-12 transition-transform duration-300">
                   {project.icon}
                 </div>
                 <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-purple-400 text-xs font-bold mb-2 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">{project.title}</h3>
                 </div>
               </div>
             </div>
           </AnimationWrapper>
         ))}
      </div>
    </section>

    {/* Experience Section - Interactive */}
    <section className="py-20 px-6 max-w-4xl mx-auto">
       <AnimationWrapper>
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience Journey</h2>
       </AnimationWrapper>
       <div className="space-y-6">
         {EXPERIENCE.map((exp, idx) => (
           <AnimationWrapper key={exp.id} delay={idx * 150}>
             <ExperienceCard exp={exp} />
           </AnimationWrapper>
         ))}
       </div>
    </section>

    {/* Testimonials Section - Chat Box Mode */}
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <AnimationWrapper>
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What People Say</h2>
           <p className="text-gray-400 max-w-2xl mx-auto">Kind words from partners and clients I've had the pleasure of working with.</p>
        </div>
      </AnimationWrapper>
      
      <div className="relative">
        {/* Decorative Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 blur-3xl -z-10 rounded-[3rem]"></div>
        
        {/* Chat Container */}
        <div className="bg-[#050505] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl relative ring-1 ring-white/5">
            
            {/* Header */}
            <div className="bg-[#111]/80 backdrop-blur-md border-b border-white/5 p-4 md:p-6 flex items-center justify-between sticky top-0 z-20">
                <div className="flex items-center gap-4">
                   <div className="flex -space-x-4 overflow-hidden pl-1">
                      {TESTIMONIALS.map((t, i) => (
                         <img key={i} src={t.avatar} className="w-10 h-10 rounded-full border-2 border-[#111] object-cover relative z-10" style={{zIndex: 10-i}} alt="" />
                      ))}
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-sm md:text-base">Client Feedback</h4>
                      <p className="text-xs text-purple-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        Online now
                      </p>
                   </div>
                </div>
                <div className="hidden md:flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-[#333] border border-white/10"></div>
                   <div className="w-3 h-3 rounded-full bg-[#333] border border-white/10"></div>
                </div>
            </div>

            {/* Messages Area */}
            <div className="p-6 md:p-10 space-y-8 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-100 min-h-[400px]">
                
                {/* Date Divider */}
                <div className="flex justify-center mb-6">
                   <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest bg-[#111] px-3 py-1 rounded-full border border-white/5">Today</span>
                </div>

                {TESTIMONIALS.map((t, idx) => (
                  <AnimationWrapper key={t.id} delay={idx * 600} className="flex gap-4 items-end group w-full">
                      <div className="flex-shrink-0 self-end">
                         <img src={t.avatar} alt={t.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-white/10 shadow-lg" />
                      </div>
                      <div className="flex-1 max-w-[85%] md:max-w-[75%] space-y-1">
                         <div className="flex items-center gap-2 ml-1">
                            <span className="text-xs font-bold text-gray-400">{t.name}</span>
                            <span className="text-[10px] text-gray-600">• {t.company}</span>
                         </div>
                         <div className="p-5 rounded-3xl rounded-bl-none bg-[#1a1a1a] border border-white/5 text-gray-200 shadow-lg relative group-hover:bg-[#222] transition-colors duration-300">
                            <p className="leading-relaxed text-sm md:text-base">"{t.text}"</p>
                         </div>
                      </div>
                  </AnimationWrapper>
                ))}

                {/* Animated User Reply */}
                <AnimationWrapper delay={TESTIMONIALS.length * 600 + 400} className="flex gap-4 items-end justify-end w-full">
                    <div className="flex-1 max-w-[85%] md:max-w-[75%] space-y-1 flex flex-col items-end">
                       <div className="p-5 rounded-3xl rounded-br-none bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-900/20">
                          <p className="leading-relaxed text-sm md:text-base">Thank you all! It was a pleasure working with you. 💜</p>
                       </div>
                       <div className="flex items-center gap-1 mr-1">
                          <span className="text-[10px] text-gray-500">Sent 1m ago</span>
                          <Check className="w-3 h-3 text-purple-500" />
                       </div>
                    </div>
                    <div className="flex-shrink-0 self-end">
                         <img src={PROFILE_IMAGE} alt="Me" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-white/10 shadow-lg" />
                    </div>
                </AnimationWrapper>
                
                {/* Typing Indicator */}
                 <AnimationWrapper delay={TESTIMONIALS.length * 600 + 1000}>
                    <div className="flex gap-3 items-end ml-2 mt-4 opacity-50">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                 </AnimationWrapper>

            </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomeView;
