import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-pink-400" />
            <span className="text-2xl font-bold text-white">Abdur GRE</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-pink-400 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-pink-400 transition-colors">How It Works</a>
            <a href="#about" className="text-gray-300 hover:text-pink-400 transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-pink-400 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-pink-400 transition-colors">How It Works</a>
              <a href="#about" className="text-gray-300 hover:text-pink-400 transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;