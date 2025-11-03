import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Work = () => {
  const allProjects = [
    {
      id: 1,
      title: 'EcoVibe Sustainable Fashion',
      category: 'E-commerce & Branding',
      description: 'Complete digital transformation for sustainable fashion brand',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      tags: ['Web Design', 'E-commerce', 'Brand Identity'],
      link: '/work/ecovibe',
      featured: true
    },
    {
      id: 2,
      title: 'NeuroTech AI Platform',
      category: 'Web Application',
      description: 'AI-powered analytics platform with real-time data visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['React', 'AI/ML', 'Data Visualization'],
      link: '/work/neurotech',
      featured: true
    },
    {
      id: 3,
      title: 'UrbanSpace Co-working',
      category: 'Mobile App',
      description: 'Mobile experience for booking co-working spaces',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop',
      tags: ['React Native', 'UX Design', 'Booking System'],
      link: '/work/urbanspace',
      featured: false
    },
    {
      id: 4,
      title: 'FinTech Dashboard',
      category: 'Web Application',
      description: 'Real-time financial analytics and reporting dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Dashboard', 'Data Visualization', 'FinTech'],
      link: '/work/fintech',
      featured: false
    },
    {
      id: 5,
      title: 'Health & Wellness App',
      category: 'Mobile App',
      description: 'Personalized health tracking and wellness platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Mobile', 'Health Tech', 'UX/UI'],
      link: '/work/health-app',
      featured: false
    },
    {
      id: 6,
      title: 'Luxury Real Estate',
      category: 'Branding & Web',
      description: 'Premium real estate brand identity and website',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      tags: ['Branding', 'Luxury', 'Real Estate'],
      link: '/work/real-estate',
      featured: false
    }
  ];

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="gradient-text">Work</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our portfolio of innovative digital solutions that have helped 
            businesses transform their digital presence and achieve remarkable results.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={project.link}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-sm font-medium text-blue-600 mb-2 block">
                      {project.category}
                    </span>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Work;