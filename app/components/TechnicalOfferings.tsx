'use client';

const TechnicalOfferings = () => {
  const offerings = [
    {
      icon: 'lightbulb',
      title: 'AI Strategy Consulting',
      description: 'Roadmap development, ROI analysis, and feasibility studies to align artificial intelligence with your core business objectives.',
      features: ['Tech stack evaluation', 'Ethics & compliance audit', 'Implementation roadmapping']
    },
    {
      icon: 'psychology',
      title: 'Custom Model Development',
      description: 'LLM fine-tuning, computer vision systems, and predictive analytics built from the ground up for your specific proprietary use cases.',
      features: ['Fine-tuned Llama & GPT', 'Computer Vision (YOLO/R-CNN)', 'Custom RAG Pipelines']
    },
    {
      icon: 'database',
      title: 'Data Engineering',
      description: 'Robust pipeline construction, automated data cleaning, and scalable vector infrastructure to power your production AI models.',
      features: ['ETL/ELT Orchestration', 'Vector Database Setup', 'Real-time Streaming Data']
    },
    {
      icon: 'phone_android',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android, built with modern frameworks and best practices.',
      features: ['React Native & Flutter', 'Native iOS & Android', 'App Store Optimization']
    },
    {
      icon: 'language',
      title: 'Website Development',
      description: 'Custom web applications and responsive websites that deliver exceptional user experiences and drive business results.',
      features: ['Next.js & React', 'E-commerce Solutions', 'Performance Optimization']
    },
    {
      icon: 'business_center',
      title: 'Business Consultancy',
      description: 'Strategic guidance and expert advice to help your business leverage technology for growth and competitive advantage.',
      features: ['Digital Transformation', 'Technology Roadmaps', 'Process Optimization']
    }
  ];

  return (
    <section className="py-10">
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-slate-900 tracking-tight text-3xl md:text-4xl font-bold">Technical Offerings</h2>
        <p className="text-slate-500 text-lg max-w-2xl">
          Expert solutions tailored to your business needs, from strategic planning to enterprise-grade implementation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl flex flex-col gap-6 group border transition-all ${
              index === 1
                ? 'bg-white border-primary/20 shadow-sm'
                : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-primary/20 hover:shadow-lg'
            }`}
          >
            <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${
              index === 1 ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
            }`}>
              <span className="material-symbols-outlined text-4xl font-light">{offering.icon}</span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-slate-900 text-xl font-bold">{offering.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {offering.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                {offering.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xs">check_circle</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalOfferings;
