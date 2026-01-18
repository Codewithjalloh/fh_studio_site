'use client';

import Link from 'next/link';

const ServicesHero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="relative overflow-hidden rounded-2xl bg-cover bg-center p-8 md:p-16 flex flex-col items-center text-center gap-6" style={{backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjUBFcdPnQW7nKOxcOEWhn9I6DwZjk00w24WR6EZHCGZhmg56VoMoza5be0iyTZ2ZXGPZTIh7ZpKK5AwywKHJhCgG1J88wfBMK3qRHRkbOTs8_QRFjFXaAVeDuObiw2G56lHeUVmXKHivgv72C-AwpqVHcdAb9BB7bCUba6DEmSqOZJNXiW9PtdyehtH1wLSDX4dK6oo9KuPMbp7Rscl85evndYM07_v4Yk-YlEvNw5oOVmV02l4FwsZgjS4gOguKir8amSvGrWhY')"}}>
        <div className="max-w-3xl flex flex-col gap-4">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Innovation in Motion</span>
          <h1 className="text-slate-900 text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Transforming Vision into <span className="text-primary">Intelligence</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-normal max-w-2xl mx-auto">
            Fieldhouse Studio specializes in cutting-edge AI software development, helping you build the future of technology today with precision and scale.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/work-with-us" className="bg-primary text-white px-6 md:px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-primary/20 transition-all text-center">
            Explore Offerings
          </Link>
          <Link href="/services#our-process" className="bg-white text-slate-900 px-6 md:px-8 py-3 rounded-lg font-bold border border-slate-200 hover:bg-slate-50 transition-all text-center">
            Our Process
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
