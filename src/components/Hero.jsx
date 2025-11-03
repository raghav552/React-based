import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('about-preview')?.scrollIntoView({ behavior: 'smooth' });
  };

  // WhatsApp integration
  const openWhatsApp = () => {
    const phoneNumber = "1234567890"; // Replace with your actual number
    const message = "Hello WebGrowthSolution! I'm interested in your digital marketing services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
            <span className="text-base font-medium text-gray-700">
              🚀 Driving Digital Growth Since 2020
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block">Grow Your</span>
            <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Full-service digital marketing agency specializing in SEO, social media, 
            and web development to skyrocket your online growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.button
              onClick={openWhatsApp}
              className="bg-green-600 text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-green-700 transition-colors cursor-pointer shadow-lg flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-6 h-6" />
              <span>Connect on WhatsApp</span>
            </motion.button>
            
            <motion.button
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors cursor-pointer border-2 border-gray-300 px-8 py-5 rounded-full text-xl font-medium"
              whileHover={{ scale: 1.05 }}
            >
              View Our Services
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToContent}
            className="flex flex-col items-center text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ y: 5 }}
          >
            <span className="text-lg mb-3 font-medium">Explore More</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;