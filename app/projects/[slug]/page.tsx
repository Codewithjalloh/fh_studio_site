'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    slug: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with advanced features and seamless user experience.',
    longDescription: `Our e-commerce platform revolutionizes online shopping with its cutting-edge features and intuitive design. Built with modern technologies and best practices, it provides a seamless experience for both customers and merchants.

Key Features:
• Advanced product filtering and search
• Real-time inventory management
• Secure payment processing
• Mobile-responsive design
• Analytics dashboard
• Multi-vendor support`,
    image: '/images/projects/ecommerce.jpg',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'MongoDB'],
    technologies: [
      { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
      { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
      { name: 'Infrastructure', items: ['AWS', 'Docker', 'CI/CD'] }
    ],
    client: 'TechRetail Inc.',
    year: '2023',
    link: 'https://example.com/ecommerce'
  },
  {
    id: 2,
    slug: 'banking',
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking experience with real-time transactions.',
    longDescription: `Our mobile banking app sets new standards for digital banking with its focus on security, usability, and innovation. It provides a comprehensive suite of banking features while maintaining the highest security standards.

Key Features:
• Biometric authentication
• Real-time transaction monitoring
• Bill payments and transfers
• Investment portfolio tracking
• Budget management tools
• 24/7 customer support`,
    image: '/images/projects/banking.jpg',
    category: 'Mobile Development',
    tags: ['React Native', 'Firebase', 'Stripe'],
    technologies: [
      { name: 'Mobile', items: ['React Native', 'Redux', 'Native Base'] },
      { name: 'Backend', items: ['Node.js', 'Firebase', 'Stripe'] },
      { name: 'Security', items: ['Biometric Auth', 'Encryption', '2FA'] }
    ],
    client: 'FinTech Solutions',
    year: '2023',
    link: 'https://example.com/banking'
  },
  {
    id: 3,
    slug: 'analytics',
    title: 'AI Analytics Dashboard',
    description: 'Real-time analytics with AI-powered insights and predictive modeling.',
    longDescription: `Our AI-powered analytics dashboard transforms complex data into actionable insights. Using cutting-edge machine learning algorithms, it provides predictive analytics and real-time monitoring capabilities.

Key Features:
• Real-time data visualization
• Predictive analytics
• Custom report generation
• Automated insights
• Data export capabilities
• Interactive dashboards`,
    image: '/images/projects/analytics.jpg',
    category: 'Data Science',
    tags: ['Python', 'TensorFlow', 'AWS'],
    technologies: [
      { name: 'Frontend', items: ['React', 'D3.js', 'Chart.js'] },
      { name: 'Backend', items: ['Python', 'TensorFlow', 'FastAPI'] },
      { name: 'Infrastructure', items: ['AWS', 'Docker', 'Kubernetes'] }
    ],
    client: 'DataInsights Corp',
    year: '2023',
    link: 'https://example.com/analytics'
  },
  {
    id: 4,
    slug: 'social',
    title: 'Social Media Platform',
    description: 'Engaging social platform with real-time messaging and content sharing.',
    longDescription: `Our social media platform connects people through meaningful interactions and content sharing. Built with scalability in mind, it handles millions of users and real-time communications.

Key Features:
• Real-time messaging
• Content sharing
• User profiles
• News feed
• Group management
• Privacy controls`,
    image: '/images/projects/social.jpg',
    category: 'Web Development',
    tags: ['Next.js', 'GraphQL', 'Redis'],
    technologies: [
      { name: 'Frontend', items: ['Next.js', 'React', 'Tailwind CSS'] },
      { name: 'Backend', items: ['Node.js', 'GraphQL', 'Redis'] },
      { name: 'Real-time', items: ['Socket.io', 'WebRTC', 'Redis Pub/Sub'] }
    ],
    client: 'SocialConnect',
    year: '2023',
    link: 'https://example.com/social'
  },
  {
    id: 5,
    slug: 'healthcare',
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare solution for patient management and care coordination.',
    longDescription: `Our healthcare management system streamlines medical operations and improves patient care coordination. It integrates various healthcare workflows into a single, secure platform.

Key Features:
• Patient records management
• Appointment scheduling
• Billing and insurance
• Prescription management
• Care coordination
• HIPAA compliance`,
    image: '/images/projects/healthcare.jpg',
    category: 'Enterprise',
    tags: ['Angular', 'Java', 'PostgreSQL'],
    technologies: [
      { name: 'Frontend', items: ['Angular', 'Material UI', 'RxJS'] },
      { name: 'Backend', items: ['Java', 'Spring Boot', 'PostgreSQL'] },
      { name: 'Security', items: ['HIPAA', 'OAuth2', 'Encryption'] }
    ],
    client: 'HealthCare Plus',
    year: '2023',
    link: 'https://example.com/healthcare'
  },
  {
    id: 6,
    slug: 'iot',
    title: 'IoT Smart Home Hub',
    description: 'Centralized control system for smart home devices and automation.',
    longDescription: `Our IoT smart home hub provides seamless control and automation of home devices. It integrates various smart home protocols and provides a unified interface for home management.

Key Features:
• Device management
• Automation rules
• Energy monitoring
• Security integration
• Voice control
• Remote access`,
    image: '/images/projects/iot.jpg',
    category: 'IoT',
    tags: ['Python', 'MQTT', 'Raspberry Pi'],
    technologies: [
      { name: 'Hardware', items: ['Raspberry Pi', 'Arduino', 'Sensors'] },
      { name: 'Software', items: ['Python', 'MQTT', 'Node.js'] },
      { name: 'Protocols', items: ['Zigbee', 'Z-Wave', 'WiFi'] }
    ],
    client: 'SmartHome Tech',
    year: '2023',
    link: 'https://example.com/iot'
  },
  {
    id: 7,
    slug: 'education',
    title: 'E-Learning Platform',
    description: 'Interactive learning platform with personalized content delivery.',
    longDescription: `Our e-learning platform revolutionizes online education with personalized learning paths and interactive content. It provides a comprehensive solution for both educators and students.

Key Features:
• Course management
• Interactive quizzes
• Video lessons
• Progress tracking
• Discussion forums
• Mobile learning`,
    image: '/images/projects/education.jpg',
    category: 'Web Development',
    tags: ['Vue.js', 'Laravel', 'MySQL'],
    technologies: [
      { name: 'Frontend', items: ['Vue.js', 'Tailwind CSS', 'Video.js'] },
      { name: 'Backend', items: ['Laravel', 'PHP', 'MySQL'] },
      { name: 'Media', items: ['AWS S3', 'CloudFront', 'FFmpeg'] }
    ],
    client: 'EduTech Solutions',
    year: '2023',
    link: 'https://example.com/education'
  },
  {
    id: 8,
    slug: 'gaming',
    title: 'Cloud Gaming Platform',
    description: 'High-performance cloud gaming service with low latency streaming.',
    longDescription: `Our cloud gaming platform delivers console-quality gaming experiences through streaming technology. It provides instant access to a vast library of games without downloads.

Key Features:
• Low latency streaming
• Game library management
• Social features
• Cross-platform support
• Cloud saves
• Subscription model`,
    image: '/images/projects/gaming.jpg',
    category: 'Gaming',
    tags: ['Unity', 'WebRTC', 'AWS'],
    technologies: [
      { name: 'Gaming', items: ['Unity', 'Unreal Engine', 'WebGL'] },
      { name: 'Streaming', items: ['WebRTC', 'HLS', 'RTMP'] },
      { name: 'Infrastructure', items: ['AWS', 'GPU Instances', 'CDN'] }
    ],
    client: 'GameStream Pro',
    year: '2023',
    link: 'https://example.com/gaming'
  },
  {
    id: 9,
    slug: 'crm',
    title: 'Enterprise CRM System',
    description: 'Comprehensive customer relationship management system for large enterprises.',
    longDescription: `Our enterprise CRM system provides a complete solution for managing customer relationships, sales pipelines, and business operations. Built with scalability and security in mind, it helps organizations streamline their customer-facing processes.

Key Features:
• Customer profile management
• Sales pipeline tracking
• Lead scoring and qualification
• Automated workflows
• Analytics and reporting
• Integration capabilities`,
    image: '/images/projects/crm.jpg',
    category: 'Enterprise',
    tags: ['Salesforce', 'React', 'Node.js'],
    technologies: [
      { name: 'Frontend', items: ['React', 'Material UI', 'Redux'] },
      { name: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL'] },
      { name: 'Integration', items: ['Salesforce API', 'Zapier', 'Webhooks'] }
    ],
    client: 'Global Enterprises Inc.',
    year: '2023',
    link: 'https://example.com/crm'
  },
  {
    id: 10,
    slug: 'food-delivery',
    title: 'Food Delivery App',
    description: 'Modern food delivery platform with real-time tracking and payment integration.',
    longDescription: `Our food delivery app connects customers with local restaurants, providing a seamless ordering and delivery experience. The platform includes features for both customers and restaurant owners.

Key Features:
• Real-time order tracking
• Restaurant management dashboard
• Payment processing
• Driver assignment
• Rating system
• Push notifications`,
    image: '/images/projects/food-delivery.jpg',
    category: 'Mobile Development',
    tags: ['React Native', 'Firebase', 'Stripe'],
    technologies: [
      { name: 'Mobile', items: ['React Native', 'Redux', 'Native Base'] },
      { name: 'Backend', items: ['Firebase', 'Cloud Functions', 'Firestore'] },
      { name: 'Maps', items: ['Google Maps', 'Geolocation', 'Real-time Updates'] }
    ],
    client: 'FoodExpress',
    year: '2023',
    link: 'https://example.com/food-delivery'
  },
  {
    id: 11,
    slug: 'data-warehouse',
    title: 'Data Warehouse Solution',
    description: 'Enterprise data warehouse with ETL pipelines and advanced analytics.',
    longDescription: `Our data warehouse solution enables organizations to consolidate, transform, and analyze data from multiple sources. It provides powerful tools for data processing and business intelligence.

Key Features:
• ETL pipeline automation
• Data quality monitoring
• Advanced analytics
• Custom reporting
• Data visualization
• API integration`,
    image: '/images/projects/data-warehouse.jpg',
    category: 'Data Science',
    tags: ['Python', 'Snowflake', 'dbt'],
    technologies: [
      { name: 'Data Processing', items: ['Python', 'Apache Airflow', 'dbt'] },
      { name: 'Storage', items: ['Snowflake', 'S3', 'Redshift'] },
      { name: 'Analytics', items: ['Tableau', 'Power BI', 'Jupyter'] }
    ],
    client: 'DataFlow Systems',
    year: '2023',
    link: 'https://example.com/data-warehouse'
  },
  {
    id: 12,
    slug: 'portfolio',
    title: 'Portfolio Management Platform',
    description: 'Web-based portfolio management system for investment professionals.',
    longDescription: `Our portfolio management platform provides comprehensive tools for investment professionals to manage client portfolios, track performance, and generate reports.

Key Features:
• Portfolio tracking
• Performance analytics
• Risk assessment
• Client reporting
• Trade execution
• Market data integration`,
    image: '/images/projects/portfolio.jpg',
    category: 'Web Development',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    technologies: [
      { name: 'Frontend', items: ['Vue.js', 'Chart.js', 'Tailwind CSS'] },
      { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
      { name: 'Data', items: ['Financial APIs', 'Real-time Updates', 'WebSocket'] }
    ],
    client: 'InvestmentPro',
    year: '2023',
    link: 'https://example.com/portfolio'
  },
  {
    id: 13,
    slug: 'hrms',
    title: 'HR Management System',
    description: 'Comprehensive human resources management system for enterprises.',
    longDescription: `Our HR management system streamlines all HR processes, from recruitment to retirement. It provides tools for managing employees, payroll, benefits, and compliance.

Key Features:
• Employee management
• Payroll processing
• Benefits administration
• Performance tracking
• Recruitment tools
• Compliance management`,
    image: '/images/projects/hrms.jpg',
    category: 'Enterprise',
    tags: ['Angular', 'Java', 'PostgreSQL'],
    technologies: [
      { name: 'Frontend', items: ['Angular', 'Material UI', 'NgRx'] },
      { name: 'Backend', items: ['Java', 'Spring Boot', 'PostgreSQL'] },
      { name: 'Integration', items: ['Payroll APIs', 'HRIS', 'SSO'] }
    ],
    client: 'HR Solutions Inc.',
    year: '2023',
    link: 'https://example.com/hrms'
  },
  {
    id: 14,
    slug: 'ml-platform',
    title: 'Machine Learning Platform',
    description: 'End-to-end machine learning platform for data scientists and developers.',
    longDescription: `Our machine learning platform provides a complete environment for developing, training, and deploying ML models. It includes tools for data preparation, model training, and deployment.

Key Features:
• Model development
• Automated training
• Model deployment
• Performance monitoring
• A/B testing
• API endpoints`,
    image: '/images/projects/ml-platform.jpg',
    category: 'Data Science',
    tags: ['Python', 'TensorFlow', 'Kubernetes'],
    technologies: [
      { name: 'ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn'] },
      { name: 'Infrastructure', items: ['Kubernetes', 'Docker', 'AWS'] },
      { name: 'Development', items: ['Python', 'Jupyter', 'MLflow'] }
    ],
    client: 'ML Solutions',
    year: '2023',
    link: 'https://example.com/ml-platform'
  },
  {
    id: 15,
    slug: 'fitness-app',
    title: 'Fitness Tracking App',
    description: 'Comprehensive fitness and wellness tracking application with personalized workouts.',
    longDescription: `Our fitness tracking app helps users achieve their health goals with personalized workout plans, nutrition tracking, and progress monitoring. It includes social features and integration with fitness devices.

Key Features:
• Personalized workout plans
• Nutrition tracking
• Progress monitoring
• Social sharing
• Device integration
• Virtual coaching`,
    image: '/images/projects/fitness-app.jpg',
    category: 'Mobile Development',
    tags: ['React Native', 'Firebase', 'HealthKit'],
    technologies: [
      { name: 'Mobile', items: ['React Native', 'Redux', 'Native Base'] },
      { name: 'Backend', items: ['Firebase', 'Cloud Functions', 'Firestore'] },
      { name: 'Integration', items: ['HealthKit', 'Google Fit', 'Strava API'] }
    ],
    client: 'FitLife Pro',
    year: '2023',
    link: 'https://example.com/fitness-app'
  },
  {
    id: 16,
    slug: 'ride-sharing',
    title: 'Ride-Sharing App',
    description: 'Modern ride-sharing platform with real-time tracking and payment processing.',
    longDescription: `Our ride-sharing app connects passengers with drivers, providing a seamless transportation experience. It includes features for both riders and drivers with real-time tracking and payment processing.

Key Features:
• Real-time location tracking
• Driver-passenger matching
• Payment processing
• Rating system
• Driver earnings dashboard
• Safety features`,
    image: '/images/projects/ride-sharing.jpg',
    category: 'Mobile Development',
    tags: ['Flutter', 'Firebase', 'Stripe'],
    technologies: [
      { name: 'Mobile', items: ['Flutter', 'GetX', 'Google Maps'] },
      { name: 'Backend', items: ['Firebase', 'Cloud Functions', 'Firestore'] },
      { name: 'Maps', items: ['Google Maps', 'Geolocation', 'Real-time Updates'] }
    ],
    client: 'RideShare Plus',
    year: '2023',
    link: 'https://example.com/ride-sharing'
  },
  {
    id: 17,
    slug: 'task-management',
    title: 'Task Management Platform',
    description: 'Collaborative task management system for teams and organizations.',
    longDescription: `Our task management platform helps teams organize, track, and complete projects efficiently. It provides powerful collaboration tools and project management features.

Key Features:
• Project organization
• Task assignment
• Time tracking
• File sharing
• Team collaboration
• Progress reporting`,
    image: '/images/projects/task-management.jpg',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'MongoDB'],
    technologies: [
      { name: 'Frontend', items: ['React', 'Material UI', 'Redux'] },
      { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
      { name: 'Real-time', items: ['Socket.io', 'WebRTC', 'Redis'] }
    ],
    client: 'TaskFlow Systems',
    year: '2023',
    link: 'https://example.com/task-management'
  },
  {
    id: 18,
    slug: 'real-estate',
    title: 'Real Estate Platform',
    description: 'Comprehensive real estate listing and property management system.',
    longDescription: `Our real estate platform connects buyers, sellers, and agents in a seamless marketplace. It includes advanced search features and property management tools.

Key Features:
• Property listings
• Advanced search
• Virtual tours
• Agent profiles
• Document management
• Market analytics`,
    image: '/images/projects/real-estate.jpg',
    category: 'Web Development',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
    technologies: [
      { name: 'Frontend', items: ['Next.js', 'Tailwind CSS', 'React Query'] },
      { name: 'Backend', items: ['Node.js', 'GraphQL', 'PostgreSQL'] },
      { name: 'Media', items: ['AWS S3', 'CloudFront', 'Image Processing'] }
    ],
    client: 'RealEstate Pro',
    year: '2023',
    link: 'https://example.com/real-estate'
  },
  {
    id: 19,
    slug: 'predictive-analytics',
    title: 'Predictive Analytics Platform',
    description: 'Advanced predictive analytics system for business forecasting.',
    longDescription: `Our predictive analytics platform helps businesses make data-driven decisions with advanced forecasting models and machine learning algorithms.

Key Features:
• Sales forecasting
• Customer behavior analysis
• Market trend prediction
• Risk assessment
• Automated reporting
• Model deployment`,
    image: '/images/projects/predictive-analytics.jpg',
    category: 'Data Science',
    tags: ['Python', 'TensorFlow', 'AWS'],
    technologies: [
      { name: 'ML', items: ['TensorFlow', 'Scikit-learn', 'XGBoost'] },
      { name: 'Data Processing', items: ['Python', 'Pandas', 'NumPy'] },
      { name: 'Infrastructure', items: ['AWS', 'Docker', 'Kubernetes'] }
    ],
    client: 'Analytics Pro',
    year: '2023',
    link: 'https://example.com/predictive-analytics'
  },
  {
    id: 20,
    slug: 'supply-chain',
    title: 'Supply Chain Analytics',
    description: 'End-to-end supply chain optimization and analytics platform.',
    longDescription: `Our supply chain analytics platform helps businesses optimize their supply chain operations with real-time monitoring and predictive insights.

Key Features:
• Inventory optimization
• Demand forecasting
• Route optimization
• Supplier analytics
• Cost analysis
• Risk management`,
    image: '/images/projects/supply-chain.jpg',
    category: 'Data Science',
    tags: ['Python', 'R', 'Azure'],
    technologies: [
      { name: 'Analytics', items: ['Python', 'R', 'SAS'] },
      { name: 'Visualization', items: ['Tableau', 'Power BI', 'Plotly'] },
      { name: 'Infrastructure', items: ['Azure', 'Docker', 'Kubernetes'] }
    ],
    client: 'SupplyChain Analytics',
    year: '2023',
    link: 'https://example.com/supply-chain'
  },
  {
    id: 21,
    slug: 'erp-system',
    title: 'Enterprise Resource Planning',
    description: 'Comprehensive ERP system for large organizations.',
    longDescription: `Our ERP system integrates all core business processes into a single platform, providing real-time visibility and control over operations.

Key Features:
• Financial management
• Inventory control
• HR management
• Manufacturing
• Customer relationship
• Business intelligence`,
    image: '/images/projects/erp.jpg',
    category: 'Enterprise',
    tags: ['Java', 'Oracle', 'React'],
    technologies: [
      { name: 'Frontend', items: ['React', 'Material UI', 'Redux'] },
      { name: 'Backend', items: ['Java', 'Spring Boot', 'Oracle'] },
      { name: 'Integration', items: ['SAP', 'Salesforce', 'Payment Gateways'] }
    ],
    client: 'Enterprise Solutions Inc.',
    year: '2023',
    link: 'https://example.com/erp'
  },
  {
    id: 22,
    slug: 'document-management',
    title: 'Document Management System',
    description: 'Enterprise-grade document management and workflow automation.',
    longDescription: `Our document management system helps organizations handle documents efficiently with advanced workflow automation and compliance features.

Key Features:
• Document storage
• Version control
• Workflow automation
• Access control
• Audit trails
• Compliance management`,
    image: '/images/projects/document-management.jpg',
    category: 'Enterprise',
    tags: ['Angular', 'Java', 'PostgreSQL'],
    technologies: [
      { name: 'Frontend', items: ['Angular', 'Material UI', 'NgRx'] },
      { name: 'Backend', items: ['Java', 'Spring Boot', 'PostgreSQL'] },
      { name: 'Storage', items: ['AWS S3', 'Azure Blob', 'DocumentDB'] }
    ],
    client: 'DocFlow Systems',
    year: '2023',
    link: 'https://example.com/document-management'
  }
];

const ProjectPage = () => {
  const params = useParams();
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            href="/projects"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Project Image */}
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="absolute bottom-8 left-8 z-20">
                <span className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full text-sm mb-4">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full h-full bg-gray-200 animate-pulse" />
            </div>

            {/* Project Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2">
                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-8 whitespace-pre-line">
                      {project.longDescription}
                    </p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-gray-600">Client:</span>
                        <span className="ml-2 text-gray-900">{project.client}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Year:</span>
                        <span className="ml-2 text-gray-900">{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
                    <div className="space-y-4">
                      {project.technologies.map((tech, index) => (
                        <div key={index}>
                          <h4 className="text-sm font-medium text-gray-600 mb-2">{tech.name}</h4>
                          <div className="flex flex-wrap gap-2">
                            {tech.items.map((item, itemIndex) => (
                              <span
                                key={itemIndex}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-indigo-600 text-white px-6 py-3 rounded-md text-center hover:bg-indigo-700 transition-colors"
                    >
                      View Live Project
                    </a>
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

export default ProjectPage; 