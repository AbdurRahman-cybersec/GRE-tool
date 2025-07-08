import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 w-full h-full">
        <spline-viewer 
          url="https://prod.spline.design/tKoQ9ZZShevsBHrE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div 
          className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Grab Critical Windows
            <span className="block text-pink-400">Forensic Artifacts</span>
            <span className="block text-2xl md:text-3xl font-normal text-gray-300 mt-2">
              Fast & Easy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
            Boot. Grab. Investigate.
          </p>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Lightweight forensic artifact collector for Windows. Boot from a live Kali USB 
            and collect Prefetch, Amcache, browser histories, and more critical artifacts 
            for digital forensics investigations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5" />
              <span>Buy Now - $9.99</span>
            </motion.button>
            
            <motion.button 
              className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-gray-900 font-semibold py-4 px-8 rounded-lg flex items-center space-x-2 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;