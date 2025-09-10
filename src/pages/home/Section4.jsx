'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const countries = [
  { code: 'US', name: 'United States', students: 15240, rank: 1 },
  { code: 'GB', name: 'United Kingdom', students: 12180, rank: 2 },
  { code: 'CA', name: 'Canada', students: 8920, rank: 3 },
  { code: 'AU', name: 'Australia', students: 7560, rank: 4 },
  { code: 'DE', name: 'Germany', students: 9340, rank: 5 },
  { code: 'FR', name: 'France', students: 6780, rank: 6 },
  { code: 'JP', name: 'Japan', students: 11420, rank: 7 },
  { code: 'KR', name: 'South Korea', students: 8140, rank: 8 },
  { code: 'SG', name: 'Singapore', students: 4560, rank: 9 },
  { code: 'IN', name: 'India', students: 18900, rank: 10 },
  { code: 'CN', name: 'China', students: 22340, rank: 11 },
  { code: 'BR', name: 'Brazil', students: 6230, rank: 12 },
  { code: 'MX', name: 'Mexico', students: 4890, rank: 13 },
  { code: 'IT', name: 'Italy', students: 5670, rank: 14 },
  { code: 'ES', name: 'Spain', students: 4320, rank: 15 },
];

const TopCountries = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Top Participating Countries
        </motion.h2>

        <motion.p
          className="text-gray-500 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Join students from around the globe in our academic competitions
        </motion.p>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, idx) => (
            <motion.div
              key={country.code}
              className="bg-gray-50 rounded-lg shadow-sm p-5 flex justify-between items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div>
                <div className="text-sm font-bold text-gray-500">{country.code}</div>
                <div className="text-lg font-semibold text-gray-800">{country.name}</div>
                <div className="text-sm text-gray-600">
                  {country.students.toLocaleString()} students
                </div>
              </div>
              <div className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600 font-medium">
                #{country.rank}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View */}
        {isMobile && (
          <div className="lg:hidden mt-6">
            <button
              onClick={() => setShowModal(true)}
              className="px-12 mx-auto mt-10 py-3 flex text-lg items-center justify-center rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-green-400 animate-pulse shadow-lg shadow-blue-500/50 hover:shadow-green-500/70 transition"
            >
              View Countries
            </button>
          </div>
        )}
        
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 z-50 bg-transparent backdrop-blur-sm bg-opacity-50 flex justify-center items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            >
              <motion.div
                className="bg-white w-full max-h-[80vh] rounded-t-xl p-4 overflow-y-auto"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Top Countries</h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-red-500 text-2xl hover:text-gray-800"
                  >
                    &times;
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {countries.map((country, idx) => (
                    <motion.div
                      key={country.code}
                      className="bg-gray-50 rounded-lg shadow-sm p-4 flex justify-between items-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.02 }}
                    >
                      <div>
                        <div className="text-sm font-bold text-gray-500">{country.code}</div>
                        <div className="text-base font-semibold text-gray-800">{country.name}</div>
                        <div className="text-sm text-gray-600">
                          {country.students.toLocaleString()} students
                        </div>
                      </div>
                      <div className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600 font-medium">
                        #{country.rank}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TopCountries;
