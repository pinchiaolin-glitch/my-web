import React from 'react';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { PERSONAL_INFO, GALLERY_IMAGES } from '../constants';
import AnimationWrapper from './AnimationWrapper';

interface AboutViewProps {
  setSelectedImage: (img: string) => void;
}

const AboutView: React.FC<AboutViewProps> = ({ setSelectedImage }) => (
  <div className="pt-32 pb-16 px-6 max-w-5xl mx-auto min-h-screen">
    <AnimationWrapper>
      <h2 className="text-5xl font-bold text-white mb-12 flex items-center gap-4">
         <span className="w-3 h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full inline-block"></span>
         About Me
      </h2>
    </AnimationWrapper>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      <div className="md:col-span-2 space-y-8 text-gray-300 text-lg leading-relaxed">
        <AnimationWrapper delay={100}>
           <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-purple-500 first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
             {PERSONAL_INFO.longBio}
           </p>
        </AnimationWrapper>
        
        <AnimationWrapper delay={200}>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl border-l-4 border-l-purple-500">
            <p className="italic text-gray-200">"我相信設計不僅僅是讓事物看起來美觀，更重要的是解決問題並創造價值。我的設計哲學融合了理性分析與感性訴求，致力於為用戶帶來直觀且愉悅的體驗。"</p>
          </div>
        </AnimationWrapper>
        
        <AnimationWrapper delay={300}>
           <div className="pt-4">
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-[1px] bg-gray-500"></span> Skills & Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-[#111] border border-white/10 rounded-full text-sm text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all cursor-default hover:-translate-y-1">
                    {tag}
                  </span>
                ))}
              </div>
           </div>
        </AnimationWrapper>
      </div>
      
      <AnimationWrapper delay={400}>
        <div className="glass-card p-8 rounded-3xl h-fit sticky top-32">
           <h3 className="text-white font-bold mb-6 text-xl">Connect</h3>
           <div className="space-y-4">
             {Object.entries(PERSONAL_INFO.socials).map(([key, value], idx) => (
               <a 
                 key={key} 
                 href={value} 
                 className="flex items-center justify-between text-gray-400 hover:text-white p-4 hover:bg-white/5 rounded-2xl transition-all capitalize group border border-transparent hover:border-white/10"
                 style={{ transitionDelay: `${idx * 50}ms` }}
               >
                 <span className="font-medium">{key}</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform text-purple-500" />
               </a>
             ))}
           </div>
        </div>
      </AnimationWrapper>
    </div>

    <AnimationWrapper delay={500}>
      <h3 className="text-3xl font-bold text-white mb-8">Visual Playground</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
         {GALLERY_IMAGES.map((img, idx) => (
           <div 
            key={idx} 
            onClick={() => setSelectedImage(img)}
            className={`rounded-3xl overflow-hidden border border-white/10 relative group cursor-zoom-in hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:z-10 transition-all duration-500 ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}
           >
             <img src={img} alt="Gallery" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <Maximize2 className="text-white drop-shadow-lg w-8 h-8 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
             </div>
           </div>
         ))}
      </div>
    </AnimationWrapper>
  </div>
);

export default AboutView;