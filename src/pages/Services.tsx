import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Salad, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Dumbbell className="w-12 h-12 text-purple-500" />,
      title: 'Personal Training',
      description: 'Customized workout plans tailored to your goals with one-on-one attention.',
      link: '/services/personal-training'
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: 'Group Training',
      description: 'High-energy group sessions that combine motivation and community.',
      link: '/services/group-training'
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
      title: 'Online Coaching',
      description: 'Expert guidance and personalized programs, accessible from anywhere.',
      link: '/services/online-coaching'
    },
    {
      icon: <Salad className="w-12 h-12 text-purple-500" />,
      title: 'Nutrition Coaching',
      description: 'Expert guidance on nutrition to complement your fitness journey.',
      link: '/services/nutrition'
    }
  ];

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400">Comprehensive fitness solutions for every goal</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-zinc-900 p-8 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <Link
                to={service.link}
                className="inline-block bg-[#3dd8e8] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#34c5d3] transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;