'use client';

import Link from 'next/link';

interface PortfolioFiltersProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const PortfolioFilters = ({ selectedFilter, onFilterChange }: PortfolioFiltersProps) => {
  const filters = [
    { name: 'All Industries', icon: 'check' },
    { name: 'Healthcare', icon: 'medical_services' },
    { name: 'Finance', icon: 'payments' },
    { name: 'SaaS', icon: 'cloud' },
    { name: 'Logistics', icon: 'local_shipping' },
    { name: 'Generative AI', icon: 'psychology' }
  ];

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 mb-8 lg:mb-0">
      <div className="lg:sticky lg:top-32 space-y-8">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            Industry Filters
          </h3>
          <div className="space-y-1.5">
            {filters.map((filter) => (
              <button
                key={filter.name}
                onClick={() => onFilterChange(filter.name)}
                className={`w-full flex items-center ${
                  filter.name === 'All Industries' ? 'justify-between' : 'gap-3'
                } px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  selectedFilter === filter.name
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900 group'
                }`}
              >
                {filter.name !== 'All Industries' && (
                  <span className={`material-symbols-outlined text-xl transition-colors ${
                    selectedFilter === filter.name ? 'text-white' : 'text-slate-400 group-hover:text-primary'
                  }`}>
                    {filter.icon}
                  </span>
                )}
                <span className={filter.name === 'All Industries' ? '' : 'flex-1'}>{filter.name}</span>
                {filter.name === 'All Industries' && selectedFilter === filter.name && (
                  <span className="material-symbols-outlined text-sm">check</span>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <h4 className="font-bold text-slate-900 mb-2">Custom AI Solutions</h4>
          <p className="text-sm text-slate-500 mb-4 leading-relaxed">Ready to transform your business with custom AI development?</p>
          <Link
            href="/work-with-us"
            className="w-full py-2.5 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all block text-center"
          >
            Start Project
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default PortfolioFilters;
