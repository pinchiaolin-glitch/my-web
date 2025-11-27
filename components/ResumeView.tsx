
import React from 'react';
import { Download, Mail, Link as LinkIcon, Phone, MapPin, Quote, Sparkles, Video } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, PROFILE_IMAGE, SKILLS, RESUME_LANGUAGES, RESUME_SPECIFIC_SKILLS } from '../constants';
import AnimationWrapper from './AnimationWrapper';

const ResumeView: React.FC = () => (
  <div className="pt-32 pb-16 px-6 max-w-6xl mx-auto min-h-screen">
    <AnimationWrapper>
      <div className="bg-white text-black rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Left Sidebar */}
            <div className="space-y-12">
                {/* Profile Profile */}
                <div className="text-center lg:text-left">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden mx-auto lg:mx-0 mb-6 border-4 border-gray-100 shadow-lg">
                        <img src={PROFILE_IMAGE} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2 text-gray-900">{PERSONAL_INFO.name}</h1>
                    <p className="text-xl font-semibold text-purple-600 mb-6">{PERSONAL_INFO.role}</p>
                    
                    {/* Quote */}
                    <div className="relative p-6 bg-gray-50 rounded-2xl mb-10">
                        <Quote className="w-6 h-6 text-purple-300 absolute -top-3 -left-2 fill-purple-100" />
                        <p className="text-gray-600 italic leading-relaxed text-sm font-medium">
                            "Every great design begins with an even better story."
                        </p>
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                   <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6 border-b border-gray-100 pb-2">Contact</h3>
                   <div className="space-y-6">
                       <div className="flex items-start gap-4">
                           <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-600">
                               <Mail className="w-5 h-5" />
                           </div>
                           <div>
                               <p className="text-xs text-gray-400 font-medium uppercase mb-1">Email</p>
                               <p className="text-sm font-bold text-gray-800 break-all">{PERSONAL_INFO.email}</p>
                           </div>
                       </div>
                       
                       {/* Website (using Socials) */}
                       {PERSONAL_INFO.socials.linkedin && (
                           <div className="flex items-start gap-4">
                               <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-600">
                                   <LinkIcon className="w-5 h-5" />
                               </div>
                               <div>
                                   <p className="text-xs text-gray-400 font-medium uppercase mb-1">LinkedIn</p>
                                   <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="text-sm font-bold text-gray-800 hover:text-purple-600 transition-colors">
                                       View Profile
                                   </a>
                               </div>
                           </div>
                       )}

                       <div className="flex items-start gap-4">
                           <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-600">
                               <MapPin className="w-5 h-5" />
                           </div>
                           <div>
                               <p className="text-xs text-gray-400 font-medium uppercase mb-1">Address</p>
                               <p className="text-sm font-bold text-gray-800">{PERSONAL_INFO.location}</p>
                           </div>
                       </div>
                   </div>
                </div>

                {/* Languages */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6 border-b border-gray-100 pb-2">Languages</h3>
                    <div className="space-y-4">
                        {RESUME_LANGUAGES.map((lang, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <span className="text-2xl">{lang.flag}</span>
                                <div>
                                    <p className="text-sm font-bold text-gray-800">{lang.language}</p>
                                    <p className="text-xs text-gray-500 font-medium">{lang.level}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Main Content */}
            <div className="lg:col-span-2 space-y-16">
                
                {/* Experience */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                        <span className="w-2 h-8 bg-purple-500 rounded-full mr-4"></span>
                        Experience
                    </h2>
                    
                    <div className="space-y-8 pl-2">
                        {EXPERIENCE.map((exp) => (
                            <div key={exp.id} className="relative pl-8 border-l-2 border-gray-100 pb-8 last:pb-0">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-purple-500"></div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                                    <div className="md:col-span-1">
                                         <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">{exp.period}</span>
                                         <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200">
                                                <img src={exp.logo} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-sm font-bold text-gray-700">{exp.company}</span>
                                         </div>
                                    </div>
                                    <div className="md:col-span-2">
                                         <h3 className="text-lg font-bold text-gray-900 mb-2">{exp.role}</h3>
                                         <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                        <span className="w-2 h-8 bg-purple-500 rounded-full mr-4"></span>
                        Skills
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Design Skills */}
                        <div>
                             <div className="flex items-center gap-2 mb-4">
                                 <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                     <Sparkles className="w-4 h-4" />
                                 </div>
                                 <h3 className="font-bold text-gray-800">Design</h3>
                             </div>
                             <div className="flex flex-wrap gap-2">
                                 {RESUME_SPECIFIC_SKILLS.design.map((skill, i) => (
                                     <span key={i} className="px-4 py-3 bg-purple-50 text-purple-700 text-sm font-medium rounded-xl flex-grow text-center">
                                         {skill}
                                     </span>
                                 ))}
                             </div>
                        </div>

                        {/* Video Skills */}
                        <div>
                             <div className="flex items-center gap-2 mb-4">
                                 <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                     <Video className="w-4 h-4" />
                                 </div>
                                 <h3 className="font-bold text-gray-800">Video</h3>
                             </div>
                             <div className="flex flex-wrap gap-2">
                                 {RESUME_SPECIFIC_SKILLS.video.map((skill, i) => (
                                     <span key={i} className="px-4 py-3 bg-blue-50 text-blue-700 text-sm font-medium rounded-xl flex-grow text-center">
                                         {skill}
                                     </span>
                                 ))}
                             </div>
                        </div>
                    </div>
                </section>

                {/* Tools */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                        <span className="w-2 h-8 bg-purple-500 rounded-full mr-4"></span>
                        Tools
                    </h2>
                    
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                        {SKILLS.map((tool, i) => (
                            <div key={i} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
                                <div className={`mb-2 grayscale group-hover:grayscale-0 transition-all duration-300 ${tool.color}`}>
                                    {tool.icon}
                                </div>
                                <span className="text-xs font-bold text-gray-600 text-center">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>

        {/* Floating Download Button */}
        <div className="text-center pt-12 border-t border-gray-100 mt-12">
           <button className="inline-flex items-center px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-purple-600 hover:scale-105 transition-all shadow-xl">
              <Download className="w-5 h-5 mr-2" /> Download PDF Resume
           </button>
        </div>

      </div>
    </AnimationWrapper>
  </div>
);

export default ResumeView;
