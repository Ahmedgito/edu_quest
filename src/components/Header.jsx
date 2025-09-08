"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, BookOpen, Info, Phone } from "lucide-react";
import Login from "./Login";

import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/", icon: <Home size={18} /> },
        { name: "Competitions", href: "/competitions", icon: <BookOpen size={18} /> },
        { name: "About", href: "/about", icon: <Info size={18} /> },
        { name: "Contact", href: "/contact", icon: <Phone size={18} /> },
    ];

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white shadow-md sticky top-0 w-full z-50"
        >
            <div className="container mx-auto flex items-center justify-between py-4 px-10 relative">
                {/* Logo */}
                <Link href="/" className="flex items-center z-10">
                    <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
                </Link>

                {/* Centered Desktop Nav */}
                <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-gray-700 font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex items-center space-x-1 hover:text-blue-600 transition"
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </nav>

                {/* Buttons */}
                <div className="hidden md:flex space-x-4 items-center z-10">
                    <Link
                        href="/login"
                        className=""
                    >
                        <Login/>
                    </Link>
                    <Link
                        href="/register"
                        className="px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse shadow-lg shadow-pink-500/50 hover:shadow-purple-500/70 transition"
                    >
                        Register Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 z-10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>


            {/* Mobile Nav Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="md:hidden bg-white shadow-md overflow-hidden"
                    >
                        <nav className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center space-x-2 hover:text-blue-600 transition"
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </Link>
                            ))}
                            <div className="flex space-x-4 pt-2">
                                <Link
                                    href="/login"
                                    onClick={() => setIsOpen(false)}
                                    className=""
                                >
                                    <Login/>
                                </Link>
                                <Link
                                    href="/register"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse shadow-lg shadow-pink-500/50 hover:shadow-purple-500/70 transition"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
