"use client";

import { motion } from "framer-motion";
import StatCard from "@/components/Statcard";
import { Users, Globe, TrophyIcon, Book } from "lucide-react";
import Link from "next/link";
import Competitions from "@/components/Competitions";

const Section1 = () => {
    return (
        <section
            className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center"
            style={{ backgroundImage: "url('/banner.jpeg')" }} // replace with your image
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px]"></div> {/* Overlay for contrast */}

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-white px-4"
            >
                <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold mb-4">
                    EduQuest® Global
                </h1>
                <h2 className="text-2xl sm:text-2xl md:text-3xl font-medium mb-4">
                    Academic Competitions
                </h2>
                <h3 className="text-md sm:text-lg md:text-2xl max-w-md sm:max-w-3xl font-light mb-8 mx-auto">
                    Empowering students worldwide through innovative educational competitions. Join thousands of bright minds from Grade 1-10 in our global academic challenges.
                </h3>

                {/* Glassmorphism Stats Grid */}
                <div className="grid grid-cols-2  md:grid-cols-4 gap-4 justify-items-center">
                    <StatCard icon={<Globe />} number="50+" title="Countries" />
                    <StatCard icon={<Users />} number="10k+" title="Students" />
                    <StatCard icon={<TrophyIcon />} number="15+" title="Competitions" />
                    <StatCard icon={<Book />} number="10" title="Grade Levels" />
                </div>

                <div className="flex md:mt-10 mt-5 justify-center space-x-4">
                    <Link
                        href="/competitions"
                        className=" px-10 md:px-12 py-2 text-lg flex items-center justify-center rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-green-400 animate-pulse shadow-lg shadow-blue-500/50 hover:shadow-green-500/70 transition"
                    >
                        Register Now
                    </Link>

                    <Link href="/login">
                        <Competitions />
                    </Link>
                </div>

            </motion.div>
        </section>
    );
};

export default Section1;
