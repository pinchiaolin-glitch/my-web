
import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Project } from '../types';
import AnimationWrapper from './AnimationWrapper';

interface CaseStudyViewProps {
  project: Project;
  onBack: () => void;
}

const CaseStudyView: React.FC<CaseStudyViewProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black pt-24 pb-20 px-6 relative z-10">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-12">
        <button
          onClick={onBack}
          className="group flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <AnimationWrapper>
          <div className="mb-8">
            <span className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-4 block">{project.category}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{project.title}</h1>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimationWrapper>

        <AnimationWrapper delay={200}>
          {/* Changed from aspect-video to auto height to support vertical images properly */}
          <div className="w-full rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl bg-[#0a0a0a]">
            <img src={project.image} alt={project.title} className="w-full h-auto max-h-[85vh] object-contain mx-auto" />
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Metadata Sidebar */}
          <div className="space-y-8">
            <AnimationWrapper delay={300}>
              <div className="p-6 rounded-2xl bg-[#111] border border-white/10">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <User className="w-4 h-4 text-purple-500" /> Role
                </h3>
                <p className="text-gray-400">Lead Designer</p>
              </div>
            </AnimationWrapper>
            <AnimationWrapper delay={400}>
              <div className="p-6 rounded-2xl bg-[#111] border border-white/10">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                   <Calendar className="w-4 h-4 text-purple-500" /> Timeline
                </h3>
                <p className="text-gray-400">4 Weeks</p>
              </div>
            </AnimationWrapper>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <AnimationWrapper delay={300}>
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
                {project.fullDescription}
              </p>
            </AnimationWrapper>
            
            {/* Conditional rendering for extra sections if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyView;
