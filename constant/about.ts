

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "James Nduku",
      role: "Marketing Coordinator",
      image: "/images/team1.png", 
    },
    {
      id: 2,
      name: "Joseph Munyambu",
      role: "Nursing Assistant",
      image: "/images/team2.png", 
    },
    {
      id: 3,
      name: "Joseph Ngumba",
      role: "Medical Assistant",
      image: "/images/team3.png", 
    },
    {
      id: 4,
      name: "Erick Kipkemboi",
      role: "Web Designer",
      image: "/images/team4.png", 
    },
    {
      id: 5,
      name: "Stephen Kerubo",
      role: "President of Sales",
      image: "/images/team5.png", 
    },
    {
      id: 6,
      name: "John Leboo",
      role: "Dog Trainer",
      image: "/images/team6.png", 
    },
  ];
  