'use client';

import ContactForm from '../components/ContactForm';
import BookingCalendar from '../components/BookingCalendar';
import Link from 'next/link';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="bg-background-light text-slate-900 min-h-screen">
      <main className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4 text-slate-900">Start Your AI Journey</h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Ready to transform your business with custom intelligence? Tell us about your project or book a direct technical session with our lead engineers.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <ContactForm />
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-2 rounded-full bg-green-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Headquarters</span>
                </div>
                <p className="font-bold text-slate-900">London, UK</p>
                <p className="text-xs text-slate-500">128 City Road, EC1V 2NX</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-2 rounded-full bg-green-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Contact</span>
                </div>
                <p className="font-bold text-slate-900 text-xs">info@fieldhousestudio.com</p>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Trusted by innovators at</p>
              <div className="flex flex-wrap gap-10 grayscale opacity-40">
                <div className="h-6 w-24 bg-slate-200 rounded flex items-center justify-center text-[10px] font-black text-slate-600">QUANTUM</div>
                <div className="h-6 w-24 bg-slate-200 rounded flex items-center justify-center text-[10px] font-black text-slate-600">NEURALIX</div>
                <div className="h-6 w-24 bg-slate-200 rounded flex items-center justify-center text-[10px] font-black text-slate-600">SYNTHETIC</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <BookingCalendar />
            <div className="mt-auto border-t border-slate-200 pt-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">General Inquiries</p>
              <a
                className="text-lg font-bold text-slate-900 hover:text-primary transition-colors underline decoration-primary underline-offset-4 block"
                href="mailto:info@fieldhousestudio.com"
              >
                info@fieldhousestudio.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20">
        <div className="relative h-[450px] w-full rounded-3xl overflow-hidden bg-slate-50 border border-slate-200">
          <Image
            className="w-full h-full object-cover opacity-10 mix-blend-multiply filter grayscale scale-110"
            alt="Light styled world map outline"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSrhQYD5xxC-ykzVZkOHdtrUeM12UmfrlAayByDmlmO5ifNhrrJkxo4gtC4T7oA-GPAfKeRPnO9V9-yDRHhYrCPqOJefLK3rwge2pMPJyfZyKnW9OeiqlFBHfSl2k8uUzJZt9Lp2xDiWu8gIttEqaDitjqY3VhO_t-OuuIgXFNGpOmKj43Shv-R0SFFfORETE7-vdYFYdU0LTG1DOWyvSqh0jlIYtzt1i1laU41Jq8jF4H9nsQw0V1PSJhngSrdfQ_2PJUX1lLqGY"
            fill
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="size-16 rounded-full bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl text-primary">public</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">Global Engineering Presence</h2>
            <p className="text-slate-500 max-w-sm">Specialized AI teams operating across 4 continents to deliver round-the-clock innovation.</p>
            <div className="mt-8 flex gap-3">
              <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 shadow-sm">London, UK</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 