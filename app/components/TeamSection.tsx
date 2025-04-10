'use client';

const team = [
  {
    name: 'John Smith',
    role: 'Founder & CEO',
    bio: 'With over 15 years of experience in digital solutions, John leads our team with vision and expertise. He has successfully delivered projects for Fortune 500 companies and innovative startups alike.',
    image: (
      <svg className="h-32 w-32 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    expertise: ['Digital Strategy', 'Project Management', 'Client Relations'],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'Technical Director',
    bio: 'Sarah brings technical excellence and innovation to every project. Her expertise in cutting-edge technologies helps us deliver robust and scalable solutions.',
    image: (
      <svg className="h-32 w-32 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    expertise: ['System Architecture', 'Cloud Solutions', 'Security'],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    bio: 'Michael specializes in creating robust and scalable solutions that drive business growth. His expertise spans across multiple programming languages and frameworks.',
    image: (
      <svg className="h-32 w-32 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    expertise: ['Full Stack Development', 'API Design', 'Performance Optimization'],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Emma Wilson',
    role: 'Design Director',
    bio: 'Emma leads our design team in creating beautiful, user-friendly interfaces that engage and delight. Her focus on user experience ensures our solutions are both functional and aesthetically pleasing.',
    image: (
      <svg className="h-32 w-32 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    expertise: ['UI/UX Design', 'Brand Identity', 'Design Systems'],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      dribbble: 'https://dribbble.com'
    }
  },
  {
    name: 'David Brown',
    role: 'Project Manager',
    bio: 'David ensures our projects are delivered on time and within budget. His strong communication skills and attention to detail keep our team focused and clients satisfied.',
    image: (
      <svg className="h-32 w-32 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    expertise: ['Agile Methodologies', 'Risk Management', 'Team Leadership'],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Lisa Patel',
    role: 'Marketing Director',
    bio: 'Lisa drives our marketing strategy and helps clients achieve their digital marketing goals. Her data-driven approach ensures measurable results for our clients.',
    image: (
      <svg className="h-32 w-32 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    expertise: ['Digital Marketing', 'SEO', 'Content Strategy'],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  }
];

const TeamSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet the People Behind Fieldhouse Studio
          </p>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Our diverse team brings together expertise from various fields to deliver exceptional results. Each member contributes unique skills and perspectives to create innovative solutions.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex justify-center">
                    <div className="rounded-full bg-gray-100 p-2">
                      {member.image}
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-indigo-600 font-medium">{member.role}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-500 text-sm">{member.bio}</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900">Expertise</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-500 transition-colors duration-200"
                      >
                        <span className="sr-only">{platform}</span>
                        {platform === 'linkedin' && (
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.827-.018-1.89-1.152-1.89-1.152 0-1.327.9-1.327 1.83v5.664h-3v-11h3v1.792c.521-.8 1.433-1.3 2.45-1.3 1.8 0 3.15 1.174 3.15 3.696v6.812z"/>
                          </svg>
                        )}
                        {platform === 'twitter' && (
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        )}
                        {platform === 'github' && (
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        )}
                        {platform === 'dribbble' && (
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.138-.632-.207-1.21-.207-1.787 0-2.273.407-4.441 1.22-6.49 5.589 2.767 9.8 6.285 9.8 10.202 0 2.071-.532 4.005-1.71 5.713 1.26-1.577 1.925-3.627 1.925-5.852 0-1.284-.188-2.52-.525-3.703zM12 21.662c-1.98 0-3.68-.576-5.27-1.65.879-2.576 2.45-4.63 4.521-5.851 1.354-1.084 2.923-1.97 4.521-2.602-1.98-7.086-17.8-7.086-19.78 0-1.598.632-3.166 1.518-4.52 2.602 2.071 1.22 3.642 3.275 4.521 5.851-1.589 1.074-3.29 1.65-5.27 1.65-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10c0 2.572-.986 4.922-2.598 6.686-.026.023-.056.043-.082.065v-.002z"/>
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection; 