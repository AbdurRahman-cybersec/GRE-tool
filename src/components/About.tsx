import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Abdur GRE
            </h2>
            <p className="text-gray-400 text-lg">
              Built by digital forensics professionals for the cybersecurity community
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Target, title: "Purpose Built", desc: "Designed specifically for SOC analysts and incident responders" },
              { icon: Award, title: "Battle Tested", desc: "Used in real-world incident response scenarios" },
              { icon: Users, title: "Community Driven", desc: "Continuously improved based on user feedback" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-pink-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="bg-gray-900 rounded-lg p-8 border border-gray-600"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Why We Built This</h3>
            <p className="text-gray-400 mb-4">
              As digital forensics investigators, we found ourselves repeatedly using the same 
              manual processes to collect Windows artifacts during incident response. The existing 
              tools were either too complex, too expensive, or didn't fit our specific workflows.
            </p>
            <p className="text-gray-400 mb-4">
              Abdur GRE was born from the need for a lightweight, efficient, and affordable 
              solution that could be deployed quickly in any environment. It's designed to be 
              the go-to tool for first responders who need to collect critical artifacts 
              without the overhead of complex forensic suites.
            </p>
            <p className="text-gray-400">
              We're committed to keeping this tool simple, effective, and accessible to the 
              entire cybersecurity community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;