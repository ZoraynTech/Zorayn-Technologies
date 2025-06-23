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
          <Button 
            size="lg"
            className="bg-white text-[var(--zorayn-gold)] hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Project
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-[var(--zorayn-gold)] font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300"
          >
            Schedule a Consultation
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
