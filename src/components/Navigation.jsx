import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ];

  // WhatsApp integration
  const openWhatsApp = () => {
    const phoneNumber = "6265302564"; // Replace with your actual number
    const message = "Hello! I'm interested in your digital marketing services.";
    const url = `https://wa.me/${6265302564}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">WGS</span>
            </div>
            <span className="font-bold text-2xl text-gray-900">
              WebGrowthSolution
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-lg font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-green-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
            <motion.button
              onClick={openWhatsApp}
              className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition-colors cursor-pointer flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📱</span>
              <span>Connect on WhatsApp</span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 cursor-pointer">
            <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-900"></div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;