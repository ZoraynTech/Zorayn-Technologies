import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const benefits = [
  "Competitive salaries and comprehensive benefits",
  "Flexible remote work opportunities", 
  "Professional development and learning budget",
  "Cutting-edge technology and tools",
  "Collaborative and inclusive work environment"
];

const openPositions = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    description: "Join our development team to build cutting-edge web applications using React, Node.js, and cloud technologies.",
    type: "Full-time",
    location: "Remote",
    level: "Senior Level",
    tags: {
      type: "bg-[var(--zorayn-gold)]/10 text-[var(--zorayn-gold)]",
      location: "bg-[var(--zorayn-blue)]/10 text-[var(--zorayn-blue)]",
      level: "bg-green-100 text-green-600"
    }
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    description: "Lead AI initiatives and develop machine learning solutions for our clients' most challenging problems.",
    type: "Full-time",
    location: "Hybrid",
    level: "Senior Level",
    tags: {
      type: "bg-[var(--zorayn-gold)]/10 text-[var(--zorayn-gold)]",
      location: "bg-[var(--zorayn-blue)]/10 text-[var(--zorayn-blue)]",
      level: "bg-green-100 text-green-600"
    }
  },
  {
    id: 3,
    title: "UX/UI Designer",
    description: "Create beautiful and intuitive user experiences for web and mobile applications across various industries.",
    type: "Full-time",
    location: "Remote",
    level: "Mid Level",
    tags: {
      type: "bg-[var(--zorayn-gold)]/10 text-[var(--zorayn-gold)]",
      location: "bg-[var(--zorayn-blue)]/10 text-[var(--zorayn-blue)]",
      level: "bg-blue-100 text-blue-600"
    }
  }
];

export default function CareersSection() {
  return (
    <section id="careers" className="section-spacing bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your career with innovative projects and a team that values growth, creativity, and excellence
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
            alt="Modern office workspace"
            className="rounded-2xl shadow-2xl hover-lift"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900">Why Work at Zorayn?</h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Check className="text-[var(--zorayn-gold)] text-xl flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Open Positions */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h3>
          
          {openPositions.map((position, index) => (
            <motion.div 
              key={position.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h4>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${position.tags.type}`}>
                      {position.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${position.tags.location}`}>
                      {position.location}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${position.tags.level}`}>
                      {position.level}
                    </span>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <Button className="bg-[var(--zorayn-gold)] hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
                    Apply Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
