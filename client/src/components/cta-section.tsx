import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="section-spacing bg-gradient-to-r from-[var(--zorayn-gold)] to-yellow-500">
      <motion.div 
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Build the Future with Zorayn
        </h2>
        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          Ready to transform your business? Let's create something extraordinary together. 
          Join the companies already revolutionizing their industries with our technology solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg"
              className="w-full bg-white text-[var(--zorayn-gold)] hover:bg-gray-50 font-semibold py-6 px-8 rounded-xl text-lg shadow-lg transition-all duration-300"
            >
              <span className="block px-4">
                Start Your Project
                <span className="block text-sm font-normal mt-1">Get a free quote today</span>
              </span>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Button 
              variant="outline"
              size="lg"
              className="w-full border-2 border-white text-white hover:bg-white/10 font-semibold py-6 px-8 rounded-xl text-lg transition-all duration-300"
            >
              <span className="block px-4">
                Schedule a Consultation
                <span className="block text-sm font-normal mt-1">Talk to our experts</span>
              </span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}