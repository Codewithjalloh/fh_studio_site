'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with advanced features',
    image: '/images/projects/ecommerce.jpg',
    category: 'Web Development',
    link: '/projects/ecommerce'
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking experience',
    image: '/images/projects/banking.jpg',
    category: 'Mobile Development',
    link: '/projects/banking'
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'Real-time analytics with AI-powered insights',
    image: '/images/projects/analytics.jpg',
    category: 'Data Science',
    link: '/projects/analytics'
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">
            Discover our latest work and success stories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
                <div className="w-full h-full bg-gray-200 animate-pulse" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 