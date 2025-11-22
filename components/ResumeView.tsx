import React from 'react';
import { Download, Linkedin, Globe } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, TESTIMONIALS } from '../constants';
import AnimationWrapper from './AnimationWrapper';

const ResumeView: React.FC = () => (
  <div className="pt-32 pb-16 px-6 max-w-4xl mx-auto min-h-screen">
    <AnimationWrapper>
      <div className="bg-white text-black rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Decorative background element for resume */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>

        {/* Resume Header */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b-2 border-black pb-8 mb-10 relative z-10">
          <div>
             <h1 className="text-5xl font-bold uppercase tracking-tight mb-2">{PERSONAL_INFO.name}</h1>
             <p className="text-2xl font-medium text-gray-600">{PERSONAL_INFO.role}</p>
          </div>
          <div className="mt-6 md:mt-0 text-right space-y-1 text-sm font-medium text-gray-600">
             <p>{PERSONAL_INFO.email}</p>
             <p>{PERSONAL_INFO.location}</p>
             <div className="flex gap-3 justify-end mt-4">
               <a href="#" className="p-2 bg-gray-100 rounded-full text-black hover:bg-black hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
               <a href="#" className="p-2 bg-gray-100 rounded-full text-black hover:bg-black hover:text-white transition-colors"><Globe className="w-5 h-5"/></a>
             </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-12 relative z-10">
           <h3 className="text-xl font-bold uppercase tracking-wider mb-8 flex items-center">
             <span className="w-8 h-1 bg-black mr-3"></span> Experience
           </h3>
           <div className="space-y-10">
             {EXPERIENCE.map((exp, idx) => (
               <AnimationWrapper key={exp.id} delay={idx * 100} threshold={0.2}>
                 <div className="flex gap-5 group">
                    <div className="w-14 h-14 rounded-full border border-gray-200 p-2 flex-shrink-0 bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                       <img src={exp.logo} alt="logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold group-hover:text-purple-700 transition-colors">{exp.role}</h4>
                       <div className="flex items-center text-sm text-gray-500 mb-3 font-medium">
                          <span className="text-gray-800">{exp.company}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span>{exp.period}</span>
                       </div>
                       <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                    </div>
                 </div>
               </AnimationWrapper>
             ))}
           </div>
        </div>

        {/* Testimonials inside Resume */}
        <div className="mb-12 relative z-10">
           <h3 className="text-xl font-bold uppercase tracking-wider mb-8 flex items-center">
             <span className="w-8 h-1 bg-black mr-3"></span> References
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {TESTIMONIALS.map((t, idx) => (
               <AnimationWrapper key={t.id} delay={idx * 100} threshold={0.2}>
                 <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                   <p className="italic text-gray-600 text-sm mb-4 leading-relaxed">"{t.text}"</p>
                   <div className="flex items-center gap-3">
                     <img src={t.avatar} className="w-10 h-10 rounded-full grayscale" alt="avatar" />
                     <div>
                        <p className="text-sm font-bold">{t.name}</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wide">{t.company}</p>
                     </div>
                   </div>
                 </div>
               </AnimationWrapper>
             ))}
           </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-200 relative z-10">
          <button className="inline-flex items-center px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-purple-700 hover:scale-105 transition-all shadow-lg">
             <Download className="w-5 h-5 mr-2" /> Download PDF Version
          </button>
        </div>

      </div>
    </AnimationWrapper>
  </div>
);

export default ResumeView;