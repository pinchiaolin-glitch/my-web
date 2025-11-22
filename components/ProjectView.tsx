
import React from 'react';
import { PenTool, Layout, Video, ArrowRight, ChevronLeft } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project, Category } from '../types';
import AnimationWrapper from './AnimationWrapper';

interface ProjectViewProps {
  selectedProjectCategory: string | null;
  setSelectedProjectCategory: (category: string | null) => void;
  setSelectedProject: (project: Project) => void;
}

const ProjectView: React.FC<ProjectViewProps> = ({ 
  selectedProjectCategory, 
  setSelectedProjectCategory, 
  setSelectedProject 
}) => {
  const categories: Category[] = [
    { type: "平面設計", icon: <PenTool className="w-8 h-8" />, desc: "Brand Identity & Visuals", color: "from-pink-500 to-rose-500" },
    { type: "活動企劃", icon: <Layout className="w-8 h-8" />, desc: "Event Planning & Strategy", color: "from-purple-500 to-indigo-500" },
    { type: "影音", icon: <Video className="w-8 h-8" />, desc: "Motion & Editing", color: "from-blue-500 to-cyan-500" }
  ];

  // Filter projects based on category
  const filteredProjects = selectedProjectCategory 
    ? PROJECTS.filter(p => p.type === selectedProjectCategory)
    : [];

  return (
    <div className="pt-32 pb-16 px-6 max-w-6xl mx-auto min-h-screen">
      {!selectedProjectCategory ? (
        // Category Selection View
        <>
          <AnimationWrapper>
            <h2 className="text-5xl font-bold text-white mb-4 text-center">Choose a Category</h2>
            <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto text-lg">Explore my work across different disciplines.</p>
          </AnimationWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <AnimationWrapper key={cat.type} delay={idx * 100}>
                <div 
                  onClick={() => setSelectedProjectCategory(cat.type)}
                  className="group relative h-96 rounded-[2.5rem] border border-white/10 overflow-hidden cursor-pointer hover:border-white/40 transition-all duration-500 bg-[#0a0a0a] hover:-translate-y-2 shadow-xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-5 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Animated Background blob */}
                  <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${cat.color} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                    <div className={`w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 border border-white/10 shadow-2xl`}>
                      {cat.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">{cat.type}</h3>
                    <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">{cat.desc}</p>
                    
                    <div className="mt-10 flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-white/10 backdrop-blur-sm">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </>
      ) : (
        // Project List View
        <div>
           <AnimationWrapper>
             <button 
               onClick={() => setSelectedProjectCategory(null)}
               className="flex items-center text-gray-400 hover:text-white mb-12 group transition-colors px-4 py-2 rounded-full hover:bg-white/5 w-fit"
             >
               <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
               Back to Categories
             </button>
           </AnimationWrapper>
           
           <AnimationWrapper delay={100}>
             <div className="flex items-end justify-between mb-12">
               <div>
                 <h2 className="text-4xl font-bold text-white mb-2">{selectedProjectCategory}</h2>
                 <p className="text-gray-400">Selected Works</p>
               </div>
             </div>
           </AnimationWrapper>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {filteredProjects.length > 0 ? (
               filteredProjects.map((project, idx) => (
                 <AnimationWrapper key={project.id} delay={idx * 150}>
                   <div 
                     onClick={() => setSelectedProject(project)}
                     className="group relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] cursor-pointer hover:-translate-y-2"
                   >
                     <div className="h-64 overflow-hidden relative">
                       <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                       <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2.5 rounded-full text-white border border-white/10 shadow-lg">
                         {project.icon}
                       </div>
                     </div>
                     <div className="p-8">
                       <p className="text-purple-400 text-xs font-bold mb-3 uppercase tracking-wider">{project.category}</p>
                       <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">{project.title}</h3>
                       <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                         {project.description}
                       </p>
                       <span className="text-xs font-bold text-white border-b border-white/30 pb-1 group-hover:border-purple-400 group-hover:text-purple-400 transition-colors">
                         Read More
                       </span>
                     </div>
                   </div>
                 </AnimationWrapper>
               ))
             ) : (
               <p className="text-gray-500 col-span-full py-12 text-center">No projects found in this category yet.</p>
             )}
           </div>
        </div>
      )}
    </div>
  );
};

export default ProjectView;
