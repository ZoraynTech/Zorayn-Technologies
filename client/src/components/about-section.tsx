import { motion } from "framer-motion";
import { Target, Users, Globe, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100 to-transparent rounded-full blur-3xl"></div>
      
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
            About Our Journey
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Crafting Digital</span>
            <br />
            <span className="gradient-text">Excellence Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another tech company. We're your strategic partner in navigating 
            the digital landscape, creating meaningful connections between technology and human needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                <Award className="text-white text-3xl" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Building the Future, One Solution at a Time
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Since our founding, we've been dedicated to pushing the boundaries of what's possible 
                in technology. Our team of visionaries, strategists, and innovators work tirelessly 
                to deliver solutions that don't just meet expectations—they exceed them.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">150+</div>
                <div className="text-gray-600 text-sm">Expert Team Members</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: Target,
              title: "Mission-Driven",
              description: "Every project we undertake is guided by a clear mission to create meaningful impact through technology innovation."
            },
            {
              icon: Users,
              title: "Human-Centered",
              description: "We believe technology should serve people, not the other way around. Every solution is designed with the end user in mind."
            },
            {
              icon: Globe,
              title: "Global Impact",
              description: "From local startups to international enterprises, we're committed to making a positive impact across communities worldwide."
            }
          ].map((value, index) => (
            <motion.div 
              key={value.title}
              className="group bg-gradient-to-br from-white to-purple-50 p-8 rounded-3xl border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
