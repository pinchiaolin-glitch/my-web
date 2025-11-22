import React, { useState } from 'react';
import { Sparkles, Copy, Loader } from 'lucide-react';
import { callGeminiAPI } from '../services/geminiService';

const IcebreakerGenerator: React.FC = () => {
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateIcebreaker = async () => {
    setIsLoading(true);
    const result = await callGeminiAPI("Generate a short professional email opening line.");
    setGeneratedText(result);
    setIsLoading(false);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 max-w-md mx-auto">
       <div className="bg-gradient-to-br from-purple-900/20 to-gray-900 border border-purple-500/30 rounded-2xl p-6 text-left shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <h4 className="text-white font-bold text-sm">Icebreaker Generator</h4>
          </div>
          {generatedText ? (
            <div className="bg-black/50 rounded-xl p-4 border border-white/10 relative group">
               <p className="text-gray-300 text-sm italic">"{generatedText}"</p>
               <button onClick={copyToClipboard} className="absolute top-2 right-2 p-1 text-white hover:text-purple-400 transition-colors">
                 <Copy className="w-3 h-3" />
               </button>
               {copied && <span className="absolute top-2 right-8 text-xs text-green-400">Copied!</span>}
            </div>
          ) : (
            <button onClick={generateIcebreaker} disabled={isLoading} className="w-full py-2 bg-purple-600/20 text-purple-200 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-purple-600/30 transition-colors">
              {isLoading ? <Loader className="w-4 h-4 animate-spin" /> : "✨ Generate"}
            </button>
          )}
       </div>
    </div>
  );
};

export default IcebreakerGenerator;