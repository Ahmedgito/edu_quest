'use client';

import { motion } from 'framer-motion';
import React from 'react';

const trustBadges = [
  { title: 'SSL Secured', subtitle: '256-bit encryption', icon: '🛡️' },
  { title: 'GDPR Compliant', subtitle: 'Data protection', icon: '🔒' },
  { title: 'ISO 27001', subtitle: 'Security certified', icon: '📄' },
  { title: 'Verified Platform', subtitle: 'Trusted by schools', icon: '✅' },
  { title: 'Global Reach', subtitle: '50+ countries', icon: '🌐' },
  { title: '100K+ Students', subtitle: 'Active participants', icon: '👩‍🎓' },
  { title: 'Educational Excellence', subtitle: 'Accredited programs', icon: '📚' },
  { title: 'Award Winning', subtitle: 'Best education platform', icon: '🏆' },
];

const certifications = [
  { name: 'SSL Certificate', icon: '🔐' },
  { name: 'GDPR', icon: '🛡️' },
  { name: 'ISO 27001', icon: '📄' },
  { name: 'Privacy Shield', icon: '🔒' },
  { name: 'PCI DSS', icon: '💳' },
  { name: 'COPPA', icon: '👶' },
];

const features = [
  {
    icon: '🛡️',
    title: 'Bank-Level Security',
    description: 'Advanced encryption and security protocols protect all data transfers',
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'GDPR compliant with strict data protection and privacy controls',
  },
  {
    icon: '✅',
    title: 'Verified Platform',
    description: 'Trusted by thousands of schools and educational institutions globally',
  },
];

const TrustedSection = () => {
  return (
    <div className="bg-[#f9fafb] py-20 px-6 md:px-12 lg:px-20 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Trusted by Educators Worldwide
      </motion.h2>

      <motion.p
        className="text-gray-500 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Your security and privacy are our top priorities. We maintain the highest standards of data protection and platform security.
      </motion.p>

      {/* Top Trust Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-5xl mx-auto mb-16">
        {trustBadges.map((item, idx) => (
          <motion.div
            key={item.title}
            className="bg-white shadow-sm rounded-lg px-4 py-5 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
            <div className="text-xs text-gray-500">{item.subtitle}</div>
          </motion.div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="bg-white rounded-lg p-6 max-w-5xl mx-auto mb-16 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Security & Compliance Certifications</h3>
        <div className="flex flex-wrap justify-center gap-22">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              className="flex flex-col items-center text-sm text-gray-700"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx, duration: 0.4 }}
            >
              <div className="text-2xl mb-1">{cert.icon}</div>
              {cert.name}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Feature Cards */}
      {/* <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            className="bg-white rounded-lg p-6 text-left shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h4 className="text-md font-semibold text-gray-800 mb-1">{feature.title}</h4>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div> */}
    </div>
  );
};

export default TrustedSection;
