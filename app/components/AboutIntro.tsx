'use client';

const AboutIntro = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About Fieldhouse Studio
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We are a new, innovative company based in Central London, that strives on producing top quality yet cost-effective solutions for our clients.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
                    <p className="text-gray-600 mb-4">
                      Founded in London, Fieldhouse Studio emerged from a vision to provide innovative digital solutions that make a real difference to businesses. We believe in the power of technology to transform and enhance the way businesses operate.
                    </p>
                    <p className="text-gray-600">
                      Our journey began with a simple mission: to help businesses thrive in the digital age by providing high-quality, cost-effective solutions that drive growth and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-16 aspect-h-9">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600 mb-4">
                      At Fieldhouse Studio, we aim to provide a service that is cost-effective to all our clients. Our mission is to help our clients achieve their goals through innovative digital solutions.
                    </p>
                    <p className="text-gray-600">
                      We believe in building long-term relationships with our clients, understanding their unique needs, and delivering solutions that exceed expectations.
                    </p>
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

export default AboutIntro; 