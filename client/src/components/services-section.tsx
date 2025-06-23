import { motion } from "framer-motion";
import { Code, Server, Cloud, Shield, Bot, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom applications that solve real business problems with elegant, scalable solutions.",
    features: ["Web Applications", "Mobile Apps", "Enterprise Systems"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Server,
    title: "Managed IT Services",
    description: "Complete IT infrastructure management with proactive monitoring and support.",
    features: ["24/7 Support", "Infrastructure Management", "Performance Optimization"],
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless cloud migration and optimization for enhanced scalability and performance.",
    features: ["Cloud Migration", "DevOps", "Infrastructure as Code"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced security frameworks to protect your digital assets and ensure compliance.",
    features: ["Security Audits", "Compliance", "Threat Detection"],
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Intelligent automation solutions that transform workflows and boost productivity.",
    features: ["Process Automation", "AI Integration", "Chatbots & Agents"],
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    icon: Palette,
    title: "Digital Branding",
    description: "Strategic brand development and digital presence that resonates with your audience.",
    features: ["Brand Strategy", "Digital Marketing", "Content Creation"],
    gradient: "from-pink-500 to-rose-500"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-spacing bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What We Do Best
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Comprehensive</span>
            <br />
            <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end technology solutions 
            that drive growth and innovation for businesses worldwide.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white text-2xl" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="group/btn flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-300">
                Learn More 
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h3>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
