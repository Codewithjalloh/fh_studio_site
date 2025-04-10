'use client';

const technologies = [
  {
    category: 'Frontend Development',
    tools: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Vue.js', icon: '🟢' },
      { name: 'Angular', icon: '🟥' }
    ]
  },
  {
    category: 'Backend Development',
    tools: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'Go', icon: '🔵' },
      { name: 'Ruby on Rails', icon: '💎' },
      { name: 'PHP', icon: '🐘' }
    ]
  },
  {
    category: 'Mobile Development',
    tools: [
      { name: 'React Native', icon: '📱' },
      { name: 'Flutter', icon: '🦋' },
      { name: 'iOS (Swift)', icon: '🍎' },
      { name: 'Android (Kotlin)', icon: '🤖' },
      { name: 'Xamarin', icon: '📱' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    tools: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Azure', icon: '🌤️' },
      { name: 'Google Cloud', icon: '🌤️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '⚙️' },
      { name: 'CI/CD', icon: '🔄' }
    ]
  },
  {
    category: 'Database & Storage',
    tools: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🔴' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Elasticsearch', icon: '🔍' }
    ]
  },
  {
    category: 'AI & Machine Learning',
    tools: [
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'PyTorch', icon: '🔥' },
      { name: 'Scikit-learn', icon: '📊' },
      { name: 'OpenAI', icon: '🤖' },
      { name: 'Computer Vision', icon: '👁️' }
    ]
  }
];

const TechnologyStack = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Technology Stack
          </p>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and tools to deliver innovative solutions that drive business growth.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((category) => (
              <div key={category.category} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-medium text-gray-900 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool.name}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      <span className="mr-2">{tool.icon}</span>
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-indigo-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Our Tech Stack?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Latest industry standards and best practices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Scalable and maintainable solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Strong community support and documentation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Technology selection based on project needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Regular updates and security patches</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Performance optimization and monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack; 