import React from 'react';
import { PERSONAL_INFO } from '../constants';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
    <div 
      className="text-xl font-bold tracking-tighter text-white cursor-pointer hover:scale-105 transition-transform"
      onClick={() => setActiveTab('home')}
    >
      {PERSONAL_INFO.name.split(' ')[0]}<span className="text-purple-500">.</span>
    </div>
    <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
      {['Home', 'About', 'Project', 'Resume'].map((item) => (
        <button 
          key={item}
          onClick={() => setActiveTab(item.toLowerCase())}
          className={`hover:text-white hover:scale-110 transition-all relative px-2 ${activeTab === item.toLowerCase() ? 'text-white font-bold' : ''}`}
        >
          {item}
          {activeTab === item.toLowerCase() && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500 rounded-full animate-in fade-in zoom-in"></span>
          )}
        </button>
      ))}
    </div>
    <a 
      href={`mailto:${PERSONAL_INFO.email}`}
      className="px-4 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all"
    >
      Let's Talk
    </a>
  </nav>
);

export default Navbar;