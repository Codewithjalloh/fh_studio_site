'use client';

import { useState } from 'react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO, TechCorp',
    image: '/images/testimonials/1.jpg',
    content: 'Fieldhouse Studio transformed our digital presence completely. Their expertise and dedication to quality are unmatched.'
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO, InnovateCo',
    image: '/images/testimonials/2.jpg',
    content: 'Working with Fieldhouse Studio was a game-changer for our business. They delivered beyond our expectations.'
  },
  {
    name: 'Michael Brown',
    role: 'Founder, StartupX',
    image: '/images/testimonials/3.jpg',
    content: 'The team at Fieldhouse Studio is incredibly professional and talented. They helped us build a scalable solution.'
  }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Success stories from our satisfied clients
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gray-200 mb-6 overflow-hidden">
                <div className="w-full h-full bg-indigo-100 animate-pulse" />
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 text-center">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="text-center">
                <div className="font-bold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 