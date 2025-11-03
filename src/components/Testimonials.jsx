import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CEO',
      company: 'EcoVibe',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      quote: 'NEXUS transformed our digital presence completely. Their attention to detail and creative vision helped us increase online sales by 240% in just six months. The team was professional, innovative, and delivered beyond our expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Product Director',
      company: 'NeuroTech',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote: 'Working with NEXUS was a game-changer for our AI platform. They delivered a complex solution that exceeded our expectations and was delivered ahead of schedule. Their technical expertise and creative approach are unmatched.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Founder',
      company: 'UrbanSpace',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: 'The team at NEXUS understood our vision perfectly. The mobile app they created has revolutionized how our members interact with our spaces. User engagement has skyrocketed, and the feedback has been overwhelmingly positive.',
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients 
            have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden shadow-2xl">
                      <img 
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Stars */}
                  <div className="flex justify-center lg:justify-start mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <div key={i} className="w-8 h-8 text-yellow-400 fill-current">
                        ★
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  {/* Author */}
                  <div>
                    <div className="font-bold text-gray-900 text-2xl">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600 text-xl">
                      {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center mt-12 space-x-6">
            <button
              onClick={prevTestimonial}
              className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-8 h-8 text-gray-600" />
            </button>
            
            {/* Indicators */}
            <div className="flex items-center space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-8 h-8 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;