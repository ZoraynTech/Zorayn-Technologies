import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    category: "FINTECH",
    title: "Next-Gen Banking Platform",
    description: "Revolutionized digital banking with an intuitive platform serving 250,000+ users, featuring real-time transactions, advanced security protocols, and AI-powered financial insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
    metrics: ["250K+ Users", "99.9% Uptime", "40% Faster Transactions"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    category: "E-COMMERCE",
    title: "AI-Powered Marketplace",
    description: "Built an intelligent e-commerce ecosystem with machine learning recommendations, automated inventory management, and seamless multi-vendor integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Python", "TensorFlow", "React", "Docker"],
    metrics: ["300% Sales Growth", "85% User Retention", "50% Cost Reduction"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    category: "HEALTHCARE",
    title: "Telemedicine Revolution",
    description: "Developed a comprehensive telemedicine platform connecting patients with healthcare providers, featuring secure video consultations and integrated health records.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Vue.js", "Node.js", "WebRTC", "MongoDB"],
    metrics: ["100K+ Consultations", "95% Patient Satisfaction", "60% Cost Savings"],
    gradient: "from-green-500 to-emerald-500"
  }
];

export default function CaseStudiesSection() {
  return (
    <section id="cases" className="section-spacing bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100 to-transparent rounded-full blur-3xl"></div>
      
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
            Success Stories
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Transformative</span>
            <br />
            <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped industry leaders achieve remarkable results 
            through innovative technology solutions and strategic partnerships.
          </p>
        </motion.div>
        
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-3xl">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-6 left-6 px-4 py-2 bg-gradient-to-r ${study.gradient} text-white rounded-full text-sm font-medium`}>
                    {study.category}
                  </div>
                </div>
              </div>
              
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {study.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100">
                      <div className="text-sm text-gray-500 mb-1">Result</div>
                      <div className="font-bold text-purple-600">{metric}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {study.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  View Full Case Study
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-24 p-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h3>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
