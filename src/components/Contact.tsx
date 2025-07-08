import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <p className="text-gray-400 text-lg mb-12">
            Have questions? Need support? We're here to help.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Mail, title: "Email Support", desc: "Get direct support from our team", link: "mailto:support@abdurgre.com", linkText: "support@abdurgre.com" },
              { icon: MessageCircle, title: "Community", desc: "Join our Discord community", link: "#", linkText: "Join Discord" },
              { icon: FileText, title: "Documentation", desc: "Comprehensive guides and tutorials", link: "#", linkText: "View Docs" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-900 rounded-lg p-6 border border-gray-600"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-pink-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.desc}</p>
                <a href={item.link} className="text-pink-400 hover:text-pink-300 transition-colors">
                  {item.linkText}
                </a>
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
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 mb-6">
              Join hundreds of cybersecurity professionals who trust Abdur GRE for their forensic investigations.
            </p>
            <motion.button 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Purchase Now - $9.99
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;