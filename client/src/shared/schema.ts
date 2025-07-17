export type TeamMember = {
  id: string;
  name: string;
  position: string;
  imageUrl?: string;
  // Remove 'type' if present
};

<img 
  src={member.imageUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"}
  alt={`${member.name} - ${member.position}`}
/>