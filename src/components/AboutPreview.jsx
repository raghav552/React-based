import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';

const AboutPreview = () => {
  const stats = [
    { icon: Users, value: '50+', label: 'Team Members' },
    { icon: Target, value: '200+', label: 'Projects Delivered' },
    { icon: Award, value: '15+', label: 'Industry Awards' },
  ];

  return (
    <section id="about-preview" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
              We're Not Just Another
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                Creative Agency
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At NEXUS, we believe in the power of collaboration and innovation. 
              Our multidisciplinary team of designers, developers, and strategists 
              work together to create digital experiences that not only look beautiful 
              but drive real business results.
            </p>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              With over a decade of experience, we've mastered the art of blending 
              creative vision with technical excellence to deliver solutions that 
              stand the test of time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Creative Team</h3>
                  <p className="text-gray-600 text-lg">Dedicated professionals crafting exceptional digital experiences</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-60 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-100 rounded-full blur-2xl opacity-60 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;