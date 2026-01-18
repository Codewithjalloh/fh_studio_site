'use client';

import { useState } from 'react';
import PortfolioHero from '../components/PortfolioHero';
import PortfolioFilters from '../components/PortfolioFilters';
import CaseStudyCard from '../components/CaseStudyCard';
import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    title: 'Predictive Analytics for Global SaaS',
    description: 'Implementing real-time churn prediction models using deep learning to identify at-risk customers with precision.',
    category: 'SaaS',
    status: '92% Accuracy achieved',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['PyTorch', 'LLMs'],
    link: '/projects/saas-analytics'
  },
  {
    id: 2,
    title: 'AI-Driven Health Diagnostics',
    description: 'Computer vision system for early disease detection using private cloud infrastructure to ensure 100% patient data security.',
    category: 'Healthcare',
    status: 'HIPAA Compliant',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    tags: ['OpenCV', 'Python'],
    link: '/projects/health-diagnostics'
  },
  {
    id: 3,
    title: 'Fintech Risk Assessment',
    description: 'ML-based fraud detection engine processing millions of transactions per second to prevent identity theft and fraudulent transfers.',
    category: 'Finance',
    status: '40% Loss reduction',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop',
    tags: ['AWS', 'Scikit-learn'],
    link: '/projects/fintech-risk'
  },
  {
    id: 4,
    title: 'Enterprise Content Supply Chain',
    description: 'Large Language Model implementation for global marketing departments, automating content localization while maintaining brand voice.',
    category: 'Generative AI',
    status: 'Enterprise Scale',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['LangChain', 'OpenAI'],
    link: '/projects/content-supply'
  },
  {
    id: 5,
    title: 'Smart Hospital Management System',
    description: 'AI-powered patient flow optimization and resource allocation system reducing wait times by 35% and improving patient satisfaction scores.',
    category: 'Healthcare',
    status: '35% Efficiency gain',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
    tags: ['TensorFlow', 'React'],
    link: '/projects/hospital-management'
  },
  {
    id: 6,
    title: 'Algorithmic Trading Platform',
    description: 'High-frequency trading system with real-time market analysis and automated decision-making, processing 10M+ data points per second.',
    category: 'Finance',
    status: '15% ROI increase',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    tags: ['Python', 'Kubernetes'],
    link: '/projects/trading-platform'
  },
  {
    id: 7,
    title: 'Cloud-Native SaaS Analytics',
    description: 'Multi-tenant analytics platform with real-time dashboards and predictive insights, serving 500+ enterprise customers globally.',
    category: 'SaaS',
    status: '500+ Customers',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['AWS', 'PostgreSQL'],
    link: '/projects/cloud-analytics'
  },
  {
    id: 8,
    title: 'Supply Chain Optimization AI',
    description: 'Intelligent logistics platform optimizing routes, inventory, and delivery schedules, reducing operational costs by 28% across 50+ warehouses.',
    category: 'Logistics',
    status: '28% Cost reduction',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    tags: ['Python', 'Docker'],
    link: '/projects/supply-chain'
  },
  {
    id: 9,
    title: 'AI Image Generation Platform',
    description: 'Enterprise-grade text-to-image generation system with custom model fine-tuning, serving creative teams and marketing departments.',
    category: 'Generative AI',
    status: '1M+ Images generated',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
    tags: ['Stable Diffusion', 'PyTorch'],
    link: '/projects/image-generation'
  },
  {
    id: 10,
    title: 'Automated Medical Imaging Analysis',
    description: 'Deep learning system for radiology image analysis, detecting anomalies with 98% accuracy and reducing diagnosis time by 60%.',
    category: 'Healthcare',
    status: '98% Accuracy',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop',
    tags: ['CNN', 'Medical AI'],
    link: '/projects/medical-imaging'
  },
  {
    id: 11,
    title: 'Credit Scoring AI System',
    description: 'Advanced ML models for credit risk assessment, improving approval rates while reducing default risk by 25% for financial institutions.',
    category: 'Finance',
    status: '25% Risk reduction',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    tags: ['XGBoost', 'MLOps'],
    link: '/projects/credit-scoring'
  },
  {
    id: 12,
    title: 'Warehouse Automation System',
    description: 'AI-driven warehouse management with robotic integration, optimizing picking routes and inventory placement for maximum efficiency.',
    category: 'Logistics',
    status: '45% Faster fulfillment',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop',
    tags: ['ROS', 'Computer Vision'],
    link: '/projects/warehouse-automation'
  }
];

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All Industries');

  const filteredStudies = selectedFilter === 'All Industries' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedFilter);

  return (
    <div className="min-h-screen bg-background-light text-slate-900">
      <PortfolioHero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <PortfolioFilters selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Featured Case Studies</h2>
              <span className="text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                {filteredStudies.length} Case Studies
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredStudies.map((study) => (
                <CaseStudyCard
                  key={study.id}
                  title={study.title}
                  description={study.description}
                  category={study.category}
                  status={study.status}
                  image={study.image}
                  tags={study.tags}
                  link={study.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 -z-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8 px-4">Ready to build the future?</h2>
          <p className="text-slate-400 mb-8 sm:mb-10 max-w-xl mx-auto text-base sm:text-lg px-4">
            Our team of specialized AI engineers is ready to help you scale your complex software needs with precision and reliability.
          </p>
          <Link
            href="/work-with-us"
            className="bg-primary hover:bg-blue-700 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-2xl shadow-primary/40 transition-all transform hover:-translate-y-1 inline-block"
          >
            Start Your Project
          </Link>
          <p className="mt-12 text-slate-500 text-sm font-medium">© 2024 Fieldhouse Studio. All rights reserved.</p>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] -z-1 rounded-full"></div>
      </section>
    </div>
  );
};

export default ProjectsPage;
