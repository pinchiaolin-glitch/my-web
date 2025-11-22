import React from 'react';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  image: string | null;
  onClose: () => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ image, onClose }) => {
  if (!image) return null;
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-300 cursor-zoom-out"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-6 right-6 p-3 text-white/70 hover:text-white transition-colors"><X className="w-8 h-8" /></button>
      <img 
        src={image} 
        alt="Full screen" 
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" 
        onClick={(e) => e.stopPropagation()} 
      />
    </div>
  );
};

export default ImageLightbox;