'use client';

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="absolute inset-0 hero-gradient-light"></div>
          <div className="relative flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-24 min-h-[600px]">
            <div className="flex-1 space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Next-Gen Intelligence
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tighter text-navy">
                Architecting the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">AI Future</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                We build production-ready AI solutions that scale. From custom LLMs to predictive analytics, we engineer the software that defines tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
                <Link
                  href="/work-with-us"
                  className="bg-primary hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition-all shadow-lg shadow-primary/20 text-center"
                >
                  Launch Your Project
                </Link>
                <Link
                  href="/services"
                  className="bg-white hover:bg-slate-50 border border-slate-200 text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition-all text-center"
                >
                  View Process
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full aspect-square max-w-[520px]">
              <div className="absolute inset-4 bg-primary/5 blur-3xl rounded-full"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-2">
                <Image
                  alt="Abstract neural network visualization"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjRBFFvnA6j6wqzxood7D_4lyRFi_lpfTs9AGS_I32ptBB00DcW7igsMqZnGsBTZmoDDfg6ZhXhRhEsCGAbeKbzj2vMMRg4ybpM-Ncqr2-F5dS5cDGeQZjgAbMn0G5QsBsu4keSvzcM49S8fc9ZKGDaUa9YcLc6T6DDsrJduWZI1xgYilfn7YN-JGKtSA7OuJ7Q9QuZBaRuauwKupcFaoVrcQCdK-MtSepEs9Bfkzk8nfEgXMLTn1n4PcEARNuwTGckudWQVnFclo"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 520px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 