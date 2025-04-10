'use client';

const serviceDetails = [
  {
    title: 'Mobile Application Development & Design',
    description: 'Transform your ideas into powerful mobile applications that users love.',
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions with React Native',
      'UI/UX design for mobile apps',
      'App store optimization',
      'Performance optimization',
      'Regular updates and maintenance'
    ],
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'AR/VR Solutions',
    description: 'Create immersive experiences that engage and captivate your audience.',
    features: [
      'Virtual reality applications',
      'Augmented reality experiences',
      '3D modeling and animation',
      'Interactive training solutions',
      'Product visualization',
      'Location-based AR experiences'
    ],
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Bespoke Web Apps',
    description: 'Custom web applications tailored to your specific business needs.',
    features: [
      'Custom web development',
      'E-commerce solutions',
      'Content management systems',
      'API development',
      'Cloud integration',
      'Security implementation'
    ],
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'UX/UI Design',
    description: 'Create beautiful, intuitive interfaces that enhance user experience.',
    features: [
      'User interface design',
      'User experience design',
      'Wireframing and prototyping',
      'Design systems',
      'Brand identity integration',
      'Usability testing'
    ],
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'IoT/Connected Devices',
    description: 'Develop software solutions for the connected world of tomorrow.',
    features: [
      'Smart device integration',
      'Sensor networks',
      'Real-time monitoring',
      'Data analytics',
      'Remote control systems',
      'Security protocols'
    ],
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Social Media Marketing',
    description: 'Boost your online presence with strategic social media management.',
    features: [
      'Content strategy',
      'Social media management',
      'Community engagement',
      'Analytics and reporting',
      'Paid social campaigns',
      'Brand monitoring'
    ],
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    title: 'Chatbots Development',
    description: 'Implement intelligent chatbots to enhance customer service and engagement.',
    features: [
      'AI-powered chatbots',
      'Natural language processing',
      'Multi-platform integration',
      'Custom training',
      'Analytics dashboard',
      '24/7 availability'
    ],
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'Support & Aftercare',
    description: 'Comprehensive support and maintenance services to ensure your success.',
    features: [
      '24/7 technical support',
      'Regular maintenance',
      'Performance monitoring',
      'Security updates',
      'Backup solutions',
      'Training and documentation'
    ],
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const ServiceDetails = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {serviceDetails.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-indigo-600">
                      {service.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="mt-1 text-gray-500">{service.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-900">Key Features:</h4>
                  <ul className="mt-4 space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-sm text-gray-500">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails; 