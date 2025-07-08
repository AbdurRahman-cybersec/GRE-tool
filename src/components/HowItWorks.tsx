import React from 'react';
import { motion } from 'framer-motion';
import { Download, Usb, Play, FolderOpen } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Download className="h-8 w-8" />,
      title: "Download Abdur GRE",
      description: "Get the tool and add it to your forensic toolkit"
    },
    {
      icon: <Usb className="h-8 w-8" />,
      title: "Boot from Live Kali USB",
      description: "Start your system from a live Kali Linux USB drive"
    },
    {
      icon: <Play className="h-8 w-8" />,
      title: "Run the Tool",
      description: "Execute Abdur GRE with simple commands"
    },
    {
      icon: <FolderOpen className="h-8 w-8" />,
      title: "Collect & Analyze",
      description: "Retrieve organized artifacts ready for investigation"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Simple 4-step process to collect critical Windows forensic artifacts
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.icon}
              </motion.div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-600">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today - $9.99
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;