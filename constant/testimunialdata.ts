export interface Testimonialtype {
    id: number;
    name: string;
    role: string;
    image: string;
    review: string;
  }
  
  export const testimonials: Testimonialtype[] = [
    {
      id: 1,
      name: "Ayesha Khan",
      role: "Web Development Student",
      image: "/images/team3.png",
      review:
        "The courses are well-structured, and the instructors are incredibly helpful. I feel more confident in my skills now!",
    },
    {
      id: 2,
      name: "Ali Raza",
      role: "Graphic Design Student",
      image: "/images/team1.png",
      review:
        "I love how practical the lessons are. The hands-on projects make learning fun and effective.",
    },
    {
      id: 3,
      name: "Zainab Ahmed",
      role: "Data Science Enthusiast",
      image: "/images/team6.png",
      review:
        "The instructors are industry experts, and their teaching style is easy to follow. Highly recommended!",
    },
    {
      id: 4,
      name: "Erick Kipkemboi",
      role: "Web Designer",
      image: "/images/team4.png",
      review:
        "Learning web design here has been a transformative experience. The resources and projects are very practical.",
    },
    {
      id: 5,
      name: "Stephen Kerubo",
      role: "President of Sales",
      image: "/images/team5.png",
      review:
        "The platform provides excellent insights into sales strategies. I’ve applied the lessons directly to my work.",
    },
    {
      id: 6,
      name: "John Leboo",
      role: "Dog Trainer",
      image: "/images/team2.png",
      review:
        "The training resources for animal behavior are top-notch. I’ve gained so much valuable knowledge.",
    },
  ];
  