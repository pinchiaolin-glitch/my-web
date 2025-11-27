
import React, { useEffect } from 'react';
import { X, Sparkles, Globe, Github, LayoutTemplate } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenCaseStudy?: (project: Project) => void;
}

// Memoized Iframe component to prevent re-renders causing video reload/stutter
const VideoEmbed = React.memo(({ src }: { src: string }) => (
  <div className="mb-8 flex justify-center bg-black/30 rounded-xl p-4 border border-white/5 transform-gpu">
    <iframe 
      src={src} 
      width="500" 
      height="500" 
      style={{border:'none', maxWidth: '100%'}} 
      scrolling="yes"
      frameBorder="0" 
      allowFullScreen={true} 
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      className="rounded-lg shadow-lg"
      title="Project Video"
      loading="lazy"
    ></iframe>
  </div>
));

VideoEmbed.displayName = 'VideoEmbed';

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenCaseStudy }) => {
  
  // Effect to trigger Facebook XFBML parsing when a FB video is present
  useEffect(() => {
    if (project?.facebookVideoUrl && (window as any).FB) {
      try {
        (window as any).FB.XFBML.parse();
      } catch (e) {
        console.error("FB Parse error", e);
      }
    }
  }, [project]);

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
        <div className="h-64 overflow-hidden relative flex-shrink-0 bg-black">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
          <div className="absolute bottom-4 left-6">
             <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full mb-2 inline-block">{project.category}</span>
             <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          </div>
        </div>
        <div className="p-8 overflow-y-auto">
          
          {/* Facebook Video SDK Implementation */}
          {project.facebookVideoUrl ? (
             <div className="mb-8 flex justify-center bg-black/30 rounded-xl p-4 border border-white/5 min-h-[300px] items-center">
               <div 
                 className="fb-video" 
                 data-href={project.facebookVideoUrl} 
                 data-width="500" 
                 data-show-text="false"
               ></div>
             </div>
          ) : project.embedUrl ? (
             <VideoEmbed src={project.embedUrl} />
          ) : null}
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6 whitespace-pre-wrap">
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
             {project.hasCaseStudy ? (
                 <button
                   onClick={() => onOpenCaseStudy && onOpenCaseStudy(project)}
                   className="flex-1 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                 >
                   <LayoutTemplate className="w-4 h-4" />
                   View Project
                 </button>
             ) : project.type !== '平面設計' && project.type !== '活動企劃' ? (
                 project.link ? (
                   <a 
                     href={project.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                   >
                     <Globe className="w-4 h-4" />
                     {project.type === '影音' ? 'Watch Video' : 'View Project'}
                   </a>
                 ) : (
                   <button className="flex-1 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 opacity-50 cursor-not-allowed">
                     <Globe className="w-4 h-4" /> Live Demo
                   </button>
                 )
             ) : null}
             
             {project.type !== '影音' && project.type !== '平面設計' && project.type !== '活動企劃' && (
               <button className="flex-1 py-3 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                 <Github className="w-4 h-4" /> View Code
               </button>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
