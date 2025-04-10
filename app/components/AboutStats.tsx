'use client';

const stats = [
  {
    name: 'Years of Experience',
    value: '10+',
    description: 'Delivering excellence in digital solutions since 2014'
  },
  {
    name: 'Projects Completed',
    value: '200+',
    description: 'Successfully delivered projects across various industries'
  },
  {
    name: 'Client Satisfaction',
    value: '98%',
    description: 'Based on client feedback and project success rates'
  },
  {
    name: 'Team Members',
    value: '10+',
    description: 'Dedicated professionals working together'
  },
  {
    name: 'Countries Served',
    value: '8+',
    description: 'Global reach with international clients'
  },
  {
    name: 'Awards Won',
    value: '5+',
    description: 'Industry recognition for our work'
  }
];

const AboutStats = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Impact</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Numbers That Matter
          </p>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Our journey is marked by significant milestones and achievements that reflect our commitment to excellence and innovation.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.name} className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                  <div className="text-lg font-medium text-gray-900">{stat.name}</div>
                  <div className="mt-2 text-sm text-gray-500">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-indigo-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment to Excellence</h3>
                <p className="text-gray-600">
                  At Fieldhouse Studio, we believe in continuous improvement and innovation. Our team regularly participates in industry conferences, workshops, and training programs to stay at the forefront of technology and design trends.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Regular team training and development
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Investment in cutting-edge tools and technologies
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Quality assurance processes
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Global Presence</h3>
                <p className="text-gray-600">
                  With clients across multiple continents, we've built a reputation for delivering exceptional results worldwide. Our diverse team brings together perspectives from different cultures and backgrounds.
                </p>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Europe</span>
                    <span className="text-sm font-medium text-indigo-600">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <div className="flex items-center justify-between mt-4 mb-2">
                    <span className="text-sm font-medium text-gray-600">North America</span>
                    <span className="text-sm font-medium text-indigo-600">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <div className="flex items-center justify-between mt-4 mb-2">
                    <span className="text-sm font-medium text-gray-600">Asia Pacific</span>
                    <span className="text-sm font-medium text-indigo-600">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <div className="flex items-center justify-between mt-4 mb-2">
                    <span className="text-sm font-medium text-gray-600">Other Regions</span>
                    <span className="text-sm font-medium text-indigo-600">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStats; 