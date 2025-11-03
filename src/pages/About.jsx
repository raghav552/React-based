import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: TrendingUp,
      title: 'Growth-Focused',
      description: 'Every strategy is designed to drive measurable growth and ROI for your business.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    {
      icon: Target,
      title: 'Data-Driven',
      description: 'We make decisions based on analytics and performance metrics, not guesswork.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We work as an extension of your team.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    {
      icon: Award,
      title: 'Results-Proven',
      description: 'Track record of delivering exceptional results across multiple industries.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    }
  ];

  return (
    <main className="pt-32 pb-20 bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-8 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">WebGrowthSolution</span>
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are a passionate team of digital marketers, developers, and strategists 
          dedicated to helping businesses thrive in the digital landscape.
        </motion.p>
      </section>

      {/* Mission Section with Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive 
                sustainable growth, enhance online presence, and maximize ROI through 
                data-driven strategies and innovative technology.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Our Team at Work"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
              Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img 
                  src={value.image}
                  alt={value.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;