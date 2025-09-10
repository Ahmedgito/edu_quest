'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Mail from './Mail';

const SubscribeSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-400 py-20 px-6 text-white text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Stay Updated with EduQuest
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-white/90 text-base sm:text-lg mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get the latest competition updates, educational resources, and success stories delivered to your inbox.
      </motion.p>

      <motion.form
        className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="w-full sm:w-2/3 px-4 py-3 rounded-md border border-white/50 bg-white/10 backdrop-blur-md placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"
        />
        <div type="submit">
          <Mail />
        </div>
          
      </motion.form>
    </div>
  );
};

export default SubscribeSection;
