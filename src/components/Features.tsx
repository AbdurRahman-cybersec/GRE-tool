import React from 'react';
import { motion } from 'framer-motion';
import { Check, HardDrive, Clock, Shield, Zap, Database, Search } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <HardDrive className="h-6 w-6" />,
      title: "Comprehensive Artifact Collection",
      description: "Collects Prefetch, Amcache, browser histories, registry hives, and more critical Windows artifacts"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Optimized for speed - collect artifacts in minutes, not hours"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Forensically Sound",
      description: "Maintains integrity of evidence with proper hashing and documentation"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Live Boot Ready",
      description: "Works seamlessly from live Kali USB without installing on target system"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Structured Output",
      description: "Organized output with timestamps and metadata for easy analysis"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SOC Analyst Friendly",
      description: "Designed specifically for incident response and digital forensics workflows"
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Abdur GRE?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Built by forensics professionals, for forensics professionals. 
            Everything you need for efficient artifact collection.
          </p>
        </motion.div>
        
        {/* Second Spline Background */}
        <div className="relative mb-16">
          <div className="h-96 w-full rounded-lg overflow-hidden border border-gray-600">
            <spline-viewer 
              url="https://prod.spline.design/j8gnyJLUDwwgUJLB/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-900 rounded-lg p-6 border border-gray-600 hover:border-pink-400 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-pink-500 text-white p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-600 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-6">What You'll Collect</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                "Windows Prefetch Files",
                "Amcache Registry Hive",
                "Browser History (Chrome, Firefox, Edge)",
                "Windows Event Logs",
                "Registry SAM, SYSTEM, SOFTWARE",
                "Recent Documents & Jump Lists",
                "PowerShell History",
                "Windows Timeline Database"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;