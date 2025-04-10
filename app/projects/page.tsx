'use client';

import { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with advanced features and seamless user experience.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '/projects/ecommerce'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking experience with real-time transactions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80',
    category: 'Mobile Development',
    tags: ['React Native', 'Firebase', 'Stripe'],
    link: '/projects/banking'
  },
  {
    id: 3,
    title: 'AI Analytics Dashboard',
    description: 'Real-time analytics with AI-powered insights and predictive modeling.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Data Science',
    tags: ['Python', 'TensorFlow', 'AWS'],
    link: '/projects/analytics'
  },
  {
    id: 4,
    title: 'Social Media Platform',
    description: 'Engaging social platform with real-time messaging and content sharing.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Web Development',
    tags: ['Next.js', 'GraphQL', 'Redis'],
    link: '/projects/social'
  },
  {
    id: 5,
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare solution for patient management and care coordination.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Enterprise',
    tags: ['Angular', 'Java', 'PostgreSQL'],
    link: '/projects/healthcare'
  },
  {
    id: 6,
    title: 'IoT Smart Home Hub',
    description: 'Centralized control system for smart home devices and automation.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'IoT',
    tags: ['Python', 'MQTT', 'Raspberry Pi'],
    link: '/projects/iot'
  },
  {
    id: 7,
    title: 'E-Learning Platform',
    description: 'Interactive learning platform with personalized content delivery.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    category: 'Web Development',
    tags: ['Vue.js', 'Laravel', 'MySQL'],
    link: '/projects/education'
  },
  {
    id: 8,
    title: 'Cloud Gaming Platform',
    description: 'High-performance cloud gaming service with low latency streaming.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Gaming',
    tags: ['Unity', 'WebRTC', 'AWS'],
    link: '/projects/gaming'
  },
  {
    id: 9,
    title: 'Enterprise CRM System',
    description: 'Comprehensive customer relationship management system for large enterprises.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Enterprise',
    tags: ['Salesforce', 'React', 'Node.js'],
    link: '/projects/crm'
  },
  {
    id: 10,
    title: 'Food Delivery App',
    description: 'Modern food delivery platform with real-time tracking and payment integration.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Mobile Development',
    tags: ['React Native', 'Firebase', 'Stripe'],
    link: '/projects/food-delivery'
  },
  {
    id: 11,
    title: 'Data Warehouse Solution',
    description: 'Enterprise data warehouse with ETL pipelines and advanced analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Data Science',
    tags: ['Python', 'Snowflake', 'dbt'],
    link: '/projects/data-warehouse'
  },
  {
    id: 12,
    title: 'Portfolio Management Platform',
    description: 'Web-based portfolio management system for investment professionals.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Web Development',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    link: '/projects/portfolio'
  },
  {
    id: 13,
    title: 'HR Management System',
    description: 'Comprehensive human resources management system for enterprises.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Enterprise',
    tags: ['Angular', 'Java', 'PostgreSQL'],
    link: '/projects/hrms'
  },
  {
    id: 14,
    title: 'Machine Learning Platform',
    description: 'End-to-end machine learning platform for data scientists and developers.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Data Science',
    tags: ['Python', 'TensorFlow', 'Kubernetes'],
    link: '/projects/ml-platform'
  },
  {
    id: 15,
    title: 'Fitness Tracking App',
    description: 'Comprehensive fitness and wellness tracking application with personalized workouts.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Mobile Development',
    tags: ['React Native', 'Firebase', 'HealthKit'],
    link: '/projects/fitness-app'
  },
  {
    id: 16,
    title: 'Ride-Sharing App',
    description: 'Modern ride-sharing platform with real-time tracking and payment processing.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Mobile Development',
    tags: ['Flutter', 'Firebase', 'Stripe'],
    link: '/projects/ride-sharing'
  },
  {
    id: 17,
    title: 'Task Management Platform',
    description: 'Collaborative task management system for teams and organizations.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '/projects/task-management'
  },
  {
    id: 18,
    title: 'Real Estate Platform',
    description: 'Comprehensive real estate listing and property management system.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80',
    category: 'Web Development',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
    link: '/projects/real-estate'
  },
  {
    id: 19,
    title: 'Predictive Analytics Platform',
    description: 'Advanced predictive analytics system for business forecasting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Data Science',
    tags: ['Python', 'TensorFlow', 'AWS'],
    link: '/projects/predictive-analytics'
  },
  {
    id: 20,
    title: 'Supply Chain Analytics',
    description: 'End-to-end supply chain optimization and analytics platform.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Data Science',
    tags: ['Python', 'R', 'Azure'],
    link: '/projects/supply-chain'
  },
  {
    id: 21,
    title: 'Enterprise Resource Planning',
    description: 'Comprehensive ERP system for large organizations.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Enterprise',
    tags: ['Java', 'Oracle', 'React'],
    link: '/projects/erp-system'
  },
  {
    id: 22,
    title: 'Document Management System',
    description: 'Enterprise-grade document management and workflow automation.',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Enterprise',
    tags: ['Angular', 'Java', 'PostgreSQL'],
    link: '/projects/document-management'
  }
];

const categories = ['All', 'Web Development', 'Mobile Development', 'Data Science', 'Enterprise', 'IoT', 'Gaming'];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and innovative solutions
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-96">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
                <div className="w-full h-full bg-gray-200 animate-pulse" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage; 