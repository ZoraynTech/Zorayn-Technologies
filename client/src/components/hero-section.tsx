import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Transform Your Business with
            <span className="gradient-text block mt-2">Next-Generation Technology</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Zorayn Technologies delivers comprehensive IT solutions including software development, managed services, 
            cloud solutions, AI compute, cybersecurity, and branding to help businesses excel in the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-[var(--zorayn-gold)] hover:bg-yellow-500 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-[var(--zorayn-gold)] text-[var(--zorayn-gold)] hover:bg-[var(--zorayn-gold)] hover:text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>
        </motion.div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--zorayn-gold)]/10 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-[var(--zorayn-blue)]/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}
