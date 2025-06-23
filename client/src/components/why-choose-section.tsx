import { motion } from "framer-motion";
import { Zap, Lock, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Rapid project turnaround with agile methodologies and efficient workflows to meet your deadlines."
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime guarantee for mission-critical applications."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Worldwide service delivery with 24/7 support and local expertise in multiple markets."
  }
];

export default function WhyChooseSection() {
  return (
    <section className="section-spacing bg-gradient-to-br from-[var(--zorayn-dark)] to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Why Choose Zorayn Technologies?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference that sets us apart in the technology landscape
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-[var(--zorayn-gold)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
