'use client';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'bolt',
      label: 'Performance',
      title: 'Cutting-Edge Latency'
    },
    {
      icon: 'hub',
      label: 'Integration',
      title: 'Seamless Ecosystems'
    },
    {
      icon: 'shield_lock',
      label: 'Security',
      title: 'Enterprise Hardened'
    }
  ];

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-2xl p-6 sm:p-8 border border-slate-100 bg-surface/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300"
            >
              <div className="size-10 sm:size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-xl sm:text-2xl">{feature.icon}</span>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{feature.label}</p>
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-navy">{feature.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
