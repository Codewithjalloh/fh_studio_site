'use client';

import Link from 'next/link';

const ServicesCTA = () => {
  return (
    <section className="mb-20">
      <div className="bg-primary rounded-3xl p-10 md:p-16 text-center flex flex-col items-center gap-6 relative overflow-hidden shadow-2xl shadow-primary/30">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)'}}></div>
        <h2 className="text-white text-3xl md:text-5xl font-bold max-w-2xl relative z-10">Ready to build the future of your business?</h2>
        <p className="text-white/80 text-lg max-w-xl relative z-10">Contact our engineering team today to discuss your AI requirements and receive a detailed roadmap.</p>
        <Link
          href="/work-with-us"
          className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all transform hover:scale-105 relative z-10 shadow-lg"
        >
          Start a Project
        </Link>
      </div>
    </section>
  );
};

export default ServicesCTA;
