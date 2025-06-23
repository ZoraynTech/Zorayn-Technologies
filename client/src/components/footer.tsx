import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Instagram, Facebook } from "lucide-react";
import logoImage from "@assets/logo_transparent_1750680692652.png";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/zorayntechnologies", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/zorayntechnologies", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/zorayntechnologies", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/zorayntechnologies", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/zorayntechnologies", label: "Facebook" }
];

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" }
];

const serviceLinks = [
  { name: "Software Development", href: "#services" },
  { name: "Cloud Solutions", href: "#services" },
  { name: "Cybersecurity", href: "#services" },
  { name: "AI & Automation", href: "#services" },
  { name: "Branding", href: "#services" }
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--zorayn-dark)] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <img src={logoImage} alt="Zorayn Technologies Logo" className="h-8 w-auto mr-3" />
              <span className="text-2xl font-bold">Zorayn Technologies</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transforming businesses through innovative technology solutions. 
              Your trusted partner for digital transformation and growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[var(--zorayn-gold)] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-[var(--zorayn-gold)] transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-[var(--zorayn-gold)] transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4 md:mb-0">© 2025 Zorayn Technologies. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[var(--zorayn-gold)] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--zorayn-gold)] transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
