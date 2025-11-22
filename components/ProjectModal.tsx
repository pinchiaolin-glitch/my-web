import React from 'react';
import { X, Sparkles, Globe, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#111] w-full max-w-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black rounded-full text-white transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="h-64 overflow-hidden relative flex-shrink-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
          <div className="absolute bottom-4 left-6">
             <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full mb-2 inline-block">{project.category}</span>
             <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          </div>
        </div>
        <div className="p-8 overflow-y-auto">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {project.fullDescription}
          </p>
          <div className="mb-8">
            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" /> Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack && project.stack.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
             <button className="flex-1 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
               <Globe className="w-4 h-4" /> Live Demo
             </button>
             <button className="flex-1 py-3 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
               <Github className="w-4 h-4" /> View Code
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;