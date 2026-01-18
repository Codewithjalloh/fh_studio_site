'use client';

import Image from 'next/image';

const PartnersSection = () => {
  const partners = [
    {
      name: 'NexTech Systems',
      category: 'Enterprise Solutions',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCytu_N4Oxcuzl6zOO1q3VyQOYac9X_8zjJvmuKyHUL93TeSvGP_1FlJKoC75LOGTPJMwH-z_uPASPaOP6ieQ6eqcMvB3fM3mpt-C5QFbZC1uptbfj0qlO67iwkJ_1QgjyAvK8kjexnurY1815YKyekFmn7ZGgP4Hsk-kVrczuBMSxf3OUfAfeRaTOBo3VNypTLsSdLSmA49wfxJJ01K0RFN_aIijEPXDBZIUTplq6Ttt3cP6aqU8DNkU924pfNjHG7_6gVBMI8R1w'
    },
    {
      name: 'Quantum Labs',
      category: 'AI Research',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDQsQHMEsOFfUPCC5Ez4waRSjyS3zvudP6AlzO-rZeDRAemEOjbsIJGQCHlgv8V2_clIAI6pxMkq8eUCWQo3RcfbOXDjCJ0nzIhQFFf0YfE_O6YFX6ux25lXzn_sdMfmOhgn0UgPeWlX3J6TGQUo3Rafx-getrFdBBMJbEI-yl-LPNvdI5WQwCSSFq_0zy-CCB-5EwXB9Tsy3XlJf0RKetx-wNRpKKcWmbmNyuZqGubQ_6uKuMwR4RbiZ6z-o4YncxkZ60N_x5wRg'
    },
    {
      name: 'Aura Dynamics',
      category: 'Creative Automation',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEFH_OTca7Nd-fX3qKKBzy9c8_TlvN7a5QVhcY9pbSoSNckqsr1q3Rv6eQXRDhr0Hq4IBv41RvR8OB-ez8pi8PTiMc_X4Dzlp3Ln80G1ex4zbojQCQkzlgKa6_9dwlb8jyU82BeSDUxFsRfwr0ulnLdbzuWh9jbfTHuobMzXVuOZw8B0q8ghZMPUC_69j39-TomRoo5wBFanI83SpdKgZo8iU97jCCFaPQRnuWBRWtBk4fXSmZZTaUNANfZVIfwk0Dabgva6C7yIc'
    },
    {
      name: 'Vortex Global',
      category: 'Logistics AI',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDag6BMmr13gbNExwjGV5t9qkP7uNRlNDAnILHftop1-nF0FGyzJclswXsfZjwS0M4lIDHM46PDtutk7RkKBH71-pbs2JrBzHM3BjHrykZp0n4HJxAa0wtX7lmOanDr8_bx1YUDaw6oFiyHYYxtNxvg8lFkrkKitZEDHT19LPGGTbKwOYb-ZEAEh-ABhbQPzDIp7Rc8aReZidkmdUXNS_KAl94iORJcWrDMR1I5ylEXF2SOvWc8cxvJBj5vU93_OtsNpJ_n9AZrte0'
    },
    {
      name: 'Cipher Edge',
      category: 'Security Tech',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaih04GYQ9vXzgrk6MN1J11qxFBR4ULk-rK4fm_HodF3FZfdpGjNx8jRAje_OLQbb6uGdEqPWakaFAXXGwRPzRoGtORg0fihG9sw62A-oBReePsqDOaZ_8K088xxfHrwniuf1L3PGkLNFoP16pwOcxf7Qde_Py-kbcVCS7bkFiUJYpeTaDqNZDhsay_3MHnPOaJqk5fG-RaXGOPPm7dJh0QklEkjv9t-SMoU_5EUBx9Ljpq5GLdjDP2p4J8Yu1_Y7mAb0OgqIs3FU'
    }
  ];

  return (
    <section className="py-24 border-t border-slate-100 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="text-center text-slate-400 uppercase tracking-[0.3em] text-xs font-bold">Global Innovation Partners</p>
      </div>
      <div className="flex overflow-x-auto pb-8 snap-x no-scrollbar">
        <div className="flex items-stretch px-6 gap-8 min-w-full">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex-none w-80 rounded-2xl bg-white border border-slate-200 p-6 space-y-5 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full aspect-video bg-slate-100 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <Image
                  alt={partner.name}
                  src={partner.image}
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
              <div>
                <p className="font-bold text-navy">{partner.name}</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">{partner.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
