'use client';

const technologies = [
  {
    name: 'Flutter',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.333l7.5 3.75v7.834l-7.5 3.75-7.5-3.75V8.433l7.5-3.75z" />
      </svg>
    )
  },
  {
    name: 'Swift',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.333l7.5 3.75v7.834l-7.5 3.75-7.5-3.75V8.433l7.5-3.75z" />
      </svg>
    )
  },
  {
    name: 'Hadoop',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.333l7.5 3.75v7.834l-7.5 3.75-7.5-3.75V8.433l7.5-3.75z" />
      </svg>
    )
  },
  {
    name: 'PHP',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.333l7.5 3.75v7.834l-7.5 3.75-7.5-3.75V8.433l7.5-3.75z" />
      </svg>
    )
  },
  {
    name: 'TensorFlow',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.333l7.5 3.75v7.834l-7.5 3.75-7.5-3.75V8.433l7.5-3.75z" />
      </svg>
    )
  },
  {
    name: 'PyTorch',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.333l7.5 3.75v7.834l-7.5 3.75-7.5-3.75V8.433l7.5-3.75z" />
      </svg>
    )
  },
  {
    name: 'React',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        <path d="M12 22.5c-1.5 0-3-.5-4.5-1.5-1.5-1-2.5-2.5-3-4.5-.5-2-.5-4 0-6 .5-2 1.5-3.5 3-4.5 1.5-1 3-1.5 4.5-1.5s3 .5 4.5 1.5c1.5 1 2.5 2.5 3 4.5.5 2 .5 4 0 6-.5 2-1.5 3.5-3 4.5-1.5 1-3 1.5-4.5 1.5zm0-2c1 0 2-.3 3-1 1-.7 1.7-1.7 2-3 .3-1.3.3-2.7 0-4-.3-1.3-1-2.3-2-3-1-.7-2-1-3-1s-2 .3-3 1c-1 .7-1.7 1.7-2 3-.3 1.3-.3 2.7 0 4 .3 1.3 1 2.3 2 3 1 .7 2 1 3 1z" />
      </svg>
    )
  },
  {
    name: 'Next.js',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.333l7.5 3.75v7.834l-7.5 3.75-7.5-3.75V8.433l7.5-3.75z" />
      </svg>
    )
  },
  {
    name: 'TypeScript',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 00.872.5 4.76 4.76 0 001.08.4c.42.08.85.12 1.29.12.38 0 .74-.03 1.08-.1.34-.07.65-.18.94-.33.28-.15.52-.35.71-.6.2-.25.3-.54.3-.88 0-.4-.1-.73-.29-.98-.2-.26-.48-.5-.85-.72-.37-.23-.8-.47-1.3-.71-.49-.24-.95-.5-1.37-.77-.42-.28-.77-.59-1.05-.94-.28-.35-.5-.75-.65-1.21-.15-.47-.23-.99-.23-1.57 0-.62.12-1.16.35-1.62.24-.47.57-.85.99-1.15.42-.3.91-.52 1.47-.65.56-.14 1.16-.2 1.81-.2zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    )
  },
  {
    name: 'Node.js',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    )
  },
  {
    name: 'MongoDB',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    )
  },
  {
    name: 'AWS',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.333l7.5 3.75v7.834l-7.5 3.75-7.5-3.75V8.433l7.5-3.75z" />
      </svg>
    )
  },
  {
    name: 'Docker',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.333l7.5 3.75v7.834l-7.5 3.75-7.5-3.75V8.433l7.5-3.75z" />
      </svg>
    )
  },
  {
    name: 'GraphQL',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.333l7.5 3.75v7.834l-7.5 3.75-7.5-3.75V8.433l7.5-3.75z" />
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.333l7.5 3.75v7.834l-7.5 3.75-7.5-3.75V8.433l7.5-3.75z" />
      </svg>
    )
  },
  {
    name: 'React Native',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.333l7.5 3.75v7.834l-7.5 3.75-7.5-3.75V8.433l7.5-3.75z" />
      </svg>
    )
  },
  {
    name: 'Firebase',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.333l7.5 3.75v7.834l-7.5 3.75-7.5-3.75V8.433l7.5-3.75z" />
      </svg>
    )
  },
  {
    name: 'Python',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.333l7.5 3.75v7.834l-7.5 3.75-7.5-3.75V8.433l7.5-3.75z" />
      </svg>
    )
  }
];

const TechnologiesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technologies We Use
          </h2>
          <p className="text-xl text-gray-600">
            Modern tools for modern solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-indigo-600 mb-4">
                {tech.icon}
              </div>
              <div className="text-gray-900 font-medium">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection; 