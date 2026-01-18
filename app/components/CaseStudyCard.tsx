'use client';

import Image from 'next/image';

interface CaseStudyCardProps {
  title: string;
  description: string;
  category: string;
  status: string;
  image: string;
  tags: string[];
  link: string;
}

const CaseStudyCard = ({ title, description, category, status, image, tags, link }: CaseStudyCardProps) => {
  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/50 shadow-lg hover:bg-white/80 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/12 hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10 opacity-60"></div>
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
            {category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 z-20">
          <span className="flex items-center gap-1.5 text-xs font-bold text-white drop-shadow-sm">
            <span className="size-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
            {status}
          </span>
        </div>
        <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: `url(${image})`}}></div>
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-1 bg-white/40">
        <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors text-slate-900">
          {title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
          {description}
        </p>
        <div className="mt-auto flex items-center">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-[10px] bg-slate-100 px-2 py-1 rounded font-bold text-slate-500 uppercase tracking-tighter"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
