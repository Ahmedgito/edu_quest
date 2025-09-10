import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="hidden z-100  md:flex fixed right-0 md:top-3/4 top-1/4 transform -translate-y-1/2  flex-col space-y-4 bg-transparent backdrop-blur-sm p-5 rounded-l-2xl shadow-lg">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center md:w-10 md:h-10 w-8 h-8 bg-gradient-to-r from-blue-500 to-green-400 rounded-full shadow-md hover:bg-[#ff8892] transition-all"
      >
        <FaInstagram className="w-6 h-6 text-[#fff]" />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center md:w-10 md:h-10 w-8 h-8 bg-gradient-to-r from-blue-500 to-green-400 rounded-full shadow-md hover:bg-[#ff8892] transition-all"
      >
        <FaFacebookF className="w-6 h-6 text-[#fff]" />
      </a>
     
    </div>
  );
};

export default SocialSidebar;