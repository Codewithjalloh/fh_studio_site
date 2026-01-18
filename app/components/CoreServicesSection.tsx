'use client';

const CoreServicesSection = () => {
  const services = [
    {
      icon: 'psychology',
      title: 'Machine Learning',
      description: 'Custom predictive models and automated data pipelines designed to extract value from complex datasets.',
      features: ['Deep Learning', 'MLOps Automation', 'Data Engineering']
    },
    {
      icon: 'auto_awesome',
      title: 'Generative AI',
      description: 'Bespoke creative tools using Stable Diffusion, GANs, and multimodal architectures for unique needs.',
      features: ['Video Synthesis', 'Prompt Engineering', 'Creative Automation']
    },
    {
      icon: 'database',
      title: 'LLM Integration',
      description: 'Fine-tuning and deploying large language models with RAG for enterprise-grade precision and accuracy.',
      features: ['Vector Databases', 'Semantic Search', 'Model Fine-tuning']
    }
  ];

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 sm:gap-4 mb-12 sm:mb-20 text-center items-center">
          <h2 className="text-primary text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">Capabilities</h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy px-4">Core AI Services</h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-medium px-4">
            Specialized software development for the next generation of intelligence. We engineer AI solutions tailored for your specific industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col gap-6 sm:gap-8"
            >
              <div className="size-12 sm:size-16 rounded-2xl bg-slate-50 flex items-center justify-center text-navy group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                <span className="material-symbols-outlined text-3xl sm:text-4xl">{service.icon}</span>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-navy">{service.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
              <ul className="mt-auto space-y-3 text-sm text-slate-500 font-semibold">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-primary"></span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
