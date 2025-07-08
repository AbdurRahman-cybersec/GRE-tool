import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="bg-black border-t border-gray-700 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-pink-400" />
              <span className="text-2xl font-bold text-white">Abdur GRE</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional Windows forensic artifact collection tool designed for 
              SOC analysts, digital forensics investigators, and incident responders.
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Abdur GRE. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-pink-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-pink-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">System Requirements</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-gray-400 hover:text-pink-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Built with ❤️ for the cybersecurity community. 
            <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors ml-2">Privacy Policy</a> • 
            <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors ml-2">Terms</a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;