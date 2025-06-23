import { motion } from "framer-motion";
import { Rocket, Eye } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Zorayn Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vision-driven, global-focused technology partner committed to transforming businesses through innovative solutions.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
            alt="Modern office with technology" 
            className="rounded-2xl shadow-2xl hover-lift"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[var(--zorayn-gold)] rounded-lg flex items-center justify-center">
                  <Rocket className="text-white text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses worldwide with cutting-edge technology solutions that drive growth, 
                  efficiency, and digital transformation in an ever-evolving marketplace.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[var(--zorayn-blue)] rounded-lg flex items-center justify-center">
                  <Eye className="text-white text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in technology innovation, creating solutions that bridge the gap 
                  between complex technology and business success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
