import { 
  users, 
  contactSubmissions,
  teamMembers,
  jobApplications,
  type User, 
  type InsertUser,
  type ContactSubmission,
  type InsertContactSubmission,
  type TeamMember,
  type InsertTeamMember,
  type JobApplication,
  type InsertJobApplication
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  getTeamMembers(): Promise<TeamMember[]>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
  
  createJobApplication(application: InsertJobApplication): Promise<JobApplication>;
  getJobApplications(): Promise<JobApplication[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private teamMembers: Map<number, TeamMember>;
  private jobApplications: Map<number, JobApplication>;
  private currentUserId: number;
  private currentContactId: number;
  private currentTeamId: number;
  private currentJobId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.teamMembers = new Map();
    this.jobApplications = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentTeamId = 1;
    this.currentJobId = 1;
    
    // Initialize team members
    this.initializeTeamMembers();
  }

  private initializeTeamMembers() {
    const initialTeam: InsertTeamMember[] = [
      {
        name: "Nicholas Koranteng",
        position: "CEO",
        bio: "Visionary leader with over 15 years in technology and business strategy.",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        linkedinUrl: "#",
        twitterUrl: "#",
        order: 1
      },
      {
        name: "Loretta Abban",
        position: "Legal Head",
        bio: "Expert in technology law and compliance with international experience.",
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        linkedinUrl: "#",
        twitterUrl: "#",
        order: 2
      },
      {
        name: "Kweku Hanson",
        position: "IT Director",
        bio: "Technology architect specializing in cloud infrastructure and DevOps.",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        linkedinUrl: "#",
        githubUrl: "#",
        order: 3
      },
      {
        name: "Hassa Moavia",
        position: "Deputy IT Director",
        bio: "Full-stack developer and systems integration specialist.",
        imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        linkedinUrl: "#",
        githubUrl: "#",
        order: 4
      },
      {
        name: "George Attipoe",
        position: "Director Branding",
        bio: "Creative director with expertise in brand strategy and digital marketing.",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        linkedinUrl: "#",
        twitterUrl: "#",
        order: 5
      }
    ];

    initialTeam.forEach(member => {
      this.createTeamMember(member);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const contactSubmission: ContactSubmission = {
      id,
      firstName: submission.firstName,
      lastName: submission.lastName,
      email: submission.email,
      phone: submission.phone || null,
      service: submission.service || null,
      message: submission.message,
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values()).sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  async createTeamMember(member: InsertTeamMember): Promise<TeamMember> {
    const id = this.currentTeamId++;
    const teamMember: TeamMember = {
      id,
      name: member.name,
      position: member.position,
      bio: member.bio || null,
      imageUrl: member.imageUrl || null,
      linkedinUrl: member.linkedinUrl || null,
      twitterUrl: member.twitterUrl || null,
      githubUrl: member.githubUrl || null,
      order: member.order || null
    };
    this.teamMembers.set(id, teamMember);
    return teamMember;
  }

  async createJobApplication(application: InsertJobApplication): Promise<JobApplication> {
    const id = this.currentJobId++;
    const jobApplication: JobApplication = {
      id,
      position: application.position,
      fullName: application.fullName,
      email: application.email,
      phone: application.phone || null,
      resumeUrl: application.resumeUrl || null,
      coverLetter: application.coverLetter || null,
      createdAt: new Date()
    };
    this.jobApplications.set(id, jobApplication);
    return jobApplication;
  }

  async getJobApplications(): Promise<JobApplication[]> {
    return Array.from(this.jobApplications.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
