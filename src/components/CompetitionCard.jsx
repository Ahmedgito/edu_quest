"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CompetitionCard = ({
  icon,
  heading,
  description,
  grades,
  participants,
  duration,
  subjects,
  nextCompetition,
  link = "#",
  status = "Open",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // triggers once when 20% is visible
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 w-full max-w-md 
                 transition-all duration-300 hover:shadow-xl hover:border-blue-200"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center text-white text-2xl shadow-md">
            {icon}
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{heading}</h2>
        </div>
        <span
          className={`px-3 py-1 text-sm font-medium rounded-lg ${
            status === "Open"
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Stats */}
      <div className="grid grid-cols-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-3 text-center text-sm font-medium text-gray-700 mb-4">
        <div>
          <span className="block text-lg">🏆</span>
          {grades}
        </div>
        <div>
          <span className="block text-lg">👥</span>
          {participants}
        </div>
        <div>
          <span className="block text-lg">⏱</span>
          {duration}
        </div>
      </div>

      {/* Subjects */}
      <div className="mb-4">
        <h3 className="font-medium text-left mt-2 text-gray-800 mb-2">
          Subjects:
        </h3>
        <div className="flex flex-wrap gap-2">
          {subjects.map((subject, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-blue-100 transition"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>

      {/* Next Competition */}
      <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-3 text-sm mb-4 shadow-sm">
        <span className="font-medium text-gray-800">Next Competition: </span>
        {nextCompetition}
      </div>

      {/* Button */}
      {status === "Open" ? (
        <Link
          href={link}
          className="block w-full text-center py-2 rounded-lg font-semibold text-white 
                     bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 
                     shadow-md hover:shadow-lg transition"
        >
          Register Now
        </Link>
      ) : (
        <button
          disabled
          className="block w-full text-center py-2 rounded-lg font-semibold text-gray-500 
                     bg-gray-100 cursor-not-allowed"
        >
          Registration Closed
        </button>
      )}
    </motion.div>
  );
};

export default CompetitionCard;
