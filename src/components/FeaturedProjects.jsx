import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'EcoVibe Sustainable Fashion',
      category: 'E-commerce & Branding',
      description: 'A complete digital transformation for a sustainable fashion brand focusing on eco-friendly shopping experience.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      tags: ['Web Design', 'E-commerce', 'Brand Identity'],
      link: '/work/ecovibe'
    },
    {
      id: 2,
      title: 'NeuroTech AI Platform',
      category: 'Web Application',
      description: 'AI-powered analytics platform with real-time data visualization and machine learning capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['React', 'AI/ML', 'Data Visualization'],
      link: '/work/neurotech'
    },
    {
      id: 3,
      title: 'UrbanSpace Co-working',
      category: 'Mobile App',
      description: 'Mobile experience for booking and managing co-working spaces with real-time availability.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
      tags: ['React Native', 'UX Design', 'Booking System'],
      link: '/work/urbanspace'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex justify-between items-end mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-2xl leading-relaxed">
              Explore our latest projects where creativity meets technology 
              to deliver exceptional digital experiences.
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block"
          >
            <Link
              to="/work"
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors cursor-pointer text-lg font-medium"
            >
              View All Work
              <ArrowUpRight className="ml-3 w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <Link to={project.link}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <motion.div
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 aspect-video shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-2xl">
                        <ExternalLink className="w-8 h-8 text-gray-900" />
                      </div>
                    </div>

                    {/* Project Image */}
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="lg:pl-8">
                    <span className="text-lg font-medium text-blue-600 mb-4 block">
                      {project.category}
                    </span>
                    
                    <h3 className="text-4xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-white border border-gray-200 rounded-full text-base text-gray-600 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                      className="flex items-center text-gray-700 group-hover:text-blue-600 transition-colors duration-300 text-lg font-medium"
                      whileHover={{ x: 10 }}
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="ml-3 w-6 h-6" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          className="text-center mt-16 lg:hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/work"
            className="inline-flex items-center bg-gray-900 text-white px-12 py-5 rounded-full text-xl font-medium hover:bg-gray-800 transition-colors cursor-pointer shadow-lg"
          >
            View All Work
            <ArrowUpRight className="ml-3 w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;