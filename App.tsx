
import React, { useState } from 'react';
import { Cat, Mail, X } from 'lucide-react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProjectView from './components/ProjectView';
import ResumeView from './components/ResumeView';
import CaseStudyView from './components/CaseStudyView';
import ProjectModal from './components/ProjectModal';
import ImageLightbox from './components/ImageLightbox';
import { PERSONAL_INFO } from './constants';
import { Project } from './types';

export default function App() {
  // State for page navigation
  const [activeTab, setActiveTab] = useState('home');
  
  // State for project filtering
  const [selectedProjectCategory, setSelectedProjectCategory] = useState<string | null>(null);
  
  // State for modals
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // State for Case Study
  const [caseStudyProject, setCaseStudyProject] = useState<Project | null>(null);
  
  // State for Cat Email Popup
  const [showEmailCat, setShowEmailCat] = useState(false);

  // Function to switch to project view and select a project
  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
  };

  // Function to open case study
  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(null); // Close modal
    setCaseStudyProject(project);
    setActiveTab('case-study');
  };

  // Function to handle back from case study
  const handleBackFromCaseStudy = () => {
    setCaseStudyProject(null);
    setActiveTab('project'); // Return to project list
  };

  return (
    <div className="bg-black min-h-screen font-sans selection:bg-purple-500/30 selection:text-purple-200 relative">
      
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="min-h-screen">
        {activeTab === 'home' && <HomeView setActiveTab={setActiveTab} setSelectedProject={handleProjectSelect} />}
        {activeTab === 'about' && <AboutView setSelectedImage={setSelectedImage} />}
        {activeTab === 'project' && (
          <ProjectView 
            selectedProjectCategory={selectedProjectCategory} 
            setSelectedProjectCategory={setSelectedProjectCategory}
            setSelectedProject={setSelectedProject}
          />
        )}
        {activeTab === 'resume' && <ResumeView />}
        {activeTab === 'case-study' && caseStudyProject && (
          <CaseStudyView project={caseStudyProject} onBack={handleBackFromCaseStudy} />
        )}
      </main>

      {/* Footer */}
      {activeTab !== 'resume' && activeTab !== 'case-study' && (
        <footer className="bg-gradient-to-b from-black to-gray-900 pt-20 pb-10 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
             
             {/* Cat Button Section */}
             <div className="mt-16 flex flex-col items-center relative z-10">
                {showEmailCat && (
                    <div className="absolute bottom-full mb-4 p-4 bg-white text-black rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-in fade-in slide-in-from-bottom-4 duration-300 z-20 flex items-center gap-3 min-w-[250px] justify-between">
                         <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-100 rounded-full">
                                <Mail className="w-4 h-4 text-purple-600" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Email Me</span>
                                <a href={`mailto:${PERSONAL_INFO.email}`} className="font-bold hover:text-purple-600 transition-colors">{PERSONAL_INFO.email}</a>
                            </div>
                         </div>
                         <button 
                           onClick={() => setShowEmailCat(false)} 
                           className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                         >
                            <X className="w-4 h-4 text-gray-400" />
                         </button>
                         {/* Triangle arrow */}
                         <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                    </div>
                )}
                
                <div className="relative group cursor-pointer" onClick={() => setShowEmailCat(!showEmailCat)}>
                   <button 
                      className={`relative p-4 rounded-full transition-all duration-300 border border-white/10 ${showEmailCat ? 'bg-white text-purple-600 scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'bg-[#111] text-gray-400 hover:bg-[#222] hover:text-white hover:border-purple-500/50 hover:scale-110'}`}
                   >
                      <Cat className={`w-6 h-6 ${showEmailCat ? 'fill-current' : ''}`} />
                   </button>
                   
                   {/* Notification Dot */}
                   {!showEmailCat && (
                     <span className="absolute top-0 right-0 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                     </span>
                   )}
                </div>
                <p className="mt-3 text-xs font-medium text-gray-600 uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">Contact</p>
             </div>

             <div className="text-gray-600 text-sm mt-8 border-t border-white/5 pt-8">
               &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
             </div>
          </div>
        </footer>
      )}

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onOpenCaseStudy={handleOpenCaseStudy}
      />
      <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
