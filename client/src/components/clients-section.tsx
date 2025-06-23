import { motion } from "framer-motion";

const clients = [
  "Ecobank",
  "Wirepick",
  "Bola Ray",
  "WeiWei Logistics",
  "SwiftSMSPro",
  "Frandy",
  "REL Foundation",
  "Criptoma"
];

export default function ClientsSection() {
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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Featured Clients</h2>
          <p className="text-xl text-gray-600">
            Trusted by leading organizations across various industries
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div 
              key={client}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
                <span className="font-bold text-gray-600">{client}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
