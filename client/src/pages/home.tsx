import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ClientsSection from "@/components/clients-section";
import WhyChooseSection from "@/components/why-choose-section";
import CaseStudiesSection from "@/components/case-studies-section";
import TeamSection from "@/components/team-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import CareersSection from "@/components/careers-section";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <WhyChooseSection />
      <CaseStudiesSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <CareersSection />
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
