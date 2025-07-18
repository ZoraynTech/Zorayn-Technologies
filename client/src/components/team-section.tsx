import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import type { TeamMember } from "@shared/schema";
import { useEffect, useState } from "react";
import { fetchTeamMembers } from "../lib/utils"; // Adjust path if needed

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers().then((data) => {
      console.log("Fetched team members:", data); // Add this line
      setTeamMembers(data ?? []);
      setIsLoading(false);
      console.log("Team", teamMembers)
    });
  }, []);

  if (isLoading) {
    return (
      <section id="team" className="section-spacing bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds driving innovation at Zorayn Technologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="team" className="section-spacing bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The brilliant minds driving innovation at Zorayn Technologies
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers && teamMembers.length > 0 ? (
            teamMembers
              .filter(Boolean) // Remove null/undefined
              .map((member, index) =>
                member && member.name && member.position ? (
                  <motion.div 
                    key={member.id}
                    className="text-center group hover-lift"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <img 
                      src={member.photo_url?.trim() ? member.photo_url : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"}
                      alt={`${member.name} - ${member.position}`}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[var(--zorayn-gold)] font-medium mb-2">{member.position}</p>
                  </motion.div>
                ) : null
              )
          ) : (
            <div className="text-gray-400 text-center w-full">No team members found.</div>
          )}
        </div>
      </div>
    </section>
  );
}