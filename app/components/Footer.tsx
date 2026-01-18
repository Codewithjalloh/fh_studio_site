'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 py-12 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <div className="flex items-center gap-3">
            <div className="size-6 text-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="text-lg font-bold uppercase tracking-tight text-navy">Fieldhouse Studio</span>
          </div>
          <p className="text-slate-600 max-w-sm font-medium leading-relaxed">
            Leading the charge in AI development. We bridge the gap between speculative research and production-grade software.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-navy mb-8">Services</h4>
          <ul className="space-y-4 text-sm font-semibold text-slate-500">
            <li><Link href="/services" className="hover:text-primary transition-colors">AI & Machine Learning</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Website Development</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Business Consultancy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-navy mb-8">Contact</h4>
          <ul className="space-y-4 text-sm font-semibold text-slate-500">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">mail</span>
              <a href="mailto:info@fieldhousestudio.com" className="hover:text-primary transition-colors">info@fieldhousestudio.com</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">location_on</span> 128 City Road, London, EC1V 2NX
            </li>
            <li className="pt-2">
              <Link href="/work-with-us" className="text-primary font-bold hover:underline">Book a Consultation</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 sm:mt-24 pt-6 sm:pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between gap-4 sm:gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
        <p className="text-center md:text-left">© 2024 Fieldhouse Studio. All Rights Reserved.</p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center md:justify-end">
          <Link href="/privacy-policy" className="hover:text-navy transition-colors text-center">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-navy transition-colors text-center">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
