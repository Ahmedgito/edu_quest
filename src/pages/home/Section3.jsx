"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Globe, Users, Trophy, MapPin } from "lucide-react";
import Link from "next/link";
import Competitions from "@/components/Competitions";

const stats = [
  {
    icon: <Globe className="w-7 h-7 text-blue-500" />,
    number: 50,
    suffix: "+",
    label: "Countries Participating",
  },
  {
    icon: <Users className="w-7 h-7 text-green-500" />,
    number: 150,
    suffix: "K+",
    label: "Active Students",
  },
  {
    icon: <Trophy className="w-7 h-7 text-yellow-500" />,
    number: 25,
    suffix: "K+",
    label: "Awards Distributed",
  },
  {
    icon: <MapPin className="w-7 h-7 text-blue-400" />,
    number: 200,
    suffix: "+",
    label: "Partner Schools",
  },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-16 px-5 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-600">
          Global Community
        </span>
        <h2 className="text-4xl font-bold text-gray-800 mt-4">
          Connecting Minds <span className="text-blue-500">Worldwide</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Our competitions bring together the brightest students from every
          continent, fostering international collaboration and academic
          excellence.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-gray-100 overflow-hidden"
          >
            {/* Icon */}
            <div className="mb-3">{stat.icon}</div>

            {/* Number Counter */}
            <h3 className="text-3xl font-bold text-gray-800">
              {inView ? <CountUp end={stat.number} duration={3} /> : 0}
              {stat.suffix}
            </h3>

            {/* Label */}
            <p className="text-gray-600 text-sm mt-2">{stat.label}</p>

            {/* Decorative gradient dot */}
            <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-gradient-to-br from-green-200 to-blue-200 opacity-70 blur-sm" />
         
       
         
          </motion.div>
          
        ))}
       
      </div>
      <div className="justify-center flex mt-10  mx-auto ">
                    <Link
                        href="/competitions"
                        className="px-12 py-3 flex text-lg items-center justify-center rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-green-400 animate-pulse shadow-lg shadow-blue-500/50 hover:shadow-green-500/70 transition"
                    >
                        Register Now
                    </Link>

                </div>
    </section>
  );
};

export default StatsSection;
