import { motion } from "framer-motion";
import { Code, Server, Cloud, Shield, Bot, Palette } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs, from web applications to mobile apps and enterprise systems.",
    color: "bg-[var(--zorayn-gold)]/10 group-hover:bg-[var(--zorayn-gold)] text-[var(--zorayn-gold)] group-hover:text-white"
  },
  {
    icon: Server,
    title: "Managed IT Services",
    description: "Comprehensive IT management and support services to keep your systems running smoothly 24/7.",
    color: "bg-[var(--zorayn-blue)]/10 group-hover:bg-[var(--zorayn-blue)] text-[var(--zorayn-blue)] group-hover:text-white"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to enhance your business agility and reduce costs.",
    color: "bg-purple-500/10 group-hover:bg-purple-500 text-purple-500 group-hover:text-white"
  },
  {
    icon: Shield,
    title: "Cybersecurity & Data Sovereignty",
    description: "Advanced security solutions to protect your digital assets and ensure compliance with data regulations.",
    color: "bg-red-500/10 group-hover:bg-red-500 text-red-500 group-hover:text-white"
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description: "Intelligent automation solutions and AI-powered tools to streamline operations and boost productivity.",
    color: "bg-green-500/10 group-hover:bg-green-500 text-green-500 group-hover:text-white"
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Strategic brand development and digital marketing solutions to establish your unique market presence.",
    color: "bg-pink-500/10 group-hover:bg-pink-500 text-pink-500 group-hover:text-white"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-spacing bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover-lift group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${service.color}`}>
                <service.icon className="text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
