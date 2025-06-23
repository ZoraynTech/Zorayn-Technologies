import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    category: "FINTECH",
    title: "Digital Banking Platform",
    description: "Built a comprehensive digital banking solution with real-time transactions, advanced security features, and intuitive user experience for over 100,000 users.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "Node.js", "AWS"],
    categoryColor: "bg-[var(--zorayn-gold)]/10 text-[var(--zorayn-gold)]",
    linkColor: "text-[var(--zorayn-gold)] hover:text-gray-900"
  },
  {
    id: 2,
    category: "E-COMMERCE",
    title: "AI-Powered Marketplace",
    description: "Developed an intelligent e-commerce platform with AI-driven recommendations, automated inventory management, and seamless payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Python", "TensorFlow", "Docker"],
    categoryColor: "bg-[var(--zorayn-blue)]/10 text-[var(--zorayn-blue)]",
    linkColor: "text-[var(--zorayn-blue)] hover:text-gray-900"
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real projects, real results - see how we've transformed businesses
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <img 
                  src={study.image}
                  alt={study.title}
                  className="rounded-2xl shadow-2xl hover-lift"
                />
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${study.categoryColor}`}>
                  {study.category}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {study.description}
                </p>
                <div className="flex space-x-4 text-sm text-gray-500 mb-6">
                  {study.technologies.map(tech => (
                    <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className={`${study.linkColor} font-semibold transition-colors duration-300 p-0`}
                >
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
