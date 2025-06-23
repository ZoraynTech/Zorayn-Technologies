import { motion } from "framer-motion";

const clients = [
  "Ecobank",
  "Wirepick", 
  "Bola Ray",
  "WeiWei Logistics",
  "SwiftSMSPro",
  "Frandy",
  "REL Foundation",
  "Criptoma",
  "TechCorp",
  "DataFlow",
  "CloudSync",
  "InnovateLab"
];

export default function ClientsSection() {
  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
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
            Trusted Partners
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Featured</span>
            <br />
            <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders and innovative companies worldwide to deliver 
            exceptional technology solutions and drive digital transformation.
          </p>
        </motion.div>
        
        {/* Scrolling clients container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex space-x-8"
              animate={{ 
                x: [0, -100 * clients.length] 
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{ width: `${200 * clients.length}%` }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div 
                  key={`${client}-${index}`}
                  className="flex-shrink-0 w-48 h-24 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                  whileHover={{ 
                    scale: 1.05,
                    y: -4
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mx-auto mb-2 group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="font-semibold text-gray-800 text-sm group-hover:text-purple-600 transition-colors duration-300">
                      {client}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats below clients */}
        <motion.div 
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '50+', label: 'Countries Served' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
