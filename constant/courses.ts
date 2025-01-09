// Define Course Type
export interface Course {
    id: number; // Unique identifier
    title: string; // Course title
    category: string; // Course category (e.g., Design, Programming)
    description: string; // Short course description
    price: string; // Course price
    image: string; // Image URL for the course
  }
  
  // Course Data Array
  export const courses: Course[] = [
    {
      id: 1,
      title: "UX/UI Design 201",
      category: "Design",
      description: "Learn the principles of UI/UX design with practical examples.",
      price: "$300",
      image: "/images/UIUX.png", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Introduction to Python",
      category: "Programming",
      description: "A beginner's guide to Python programming.",
      price: "$400",
      
      image: "/images/python.png", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Data Analysis for Beginners",
      category: "Business",
      description: "Master the basics of data analysis for business success.",
      price: "$700",
      
      image: "/images/data-analys.png", // Replace with actual image URL
    },
    {
      id: 4,
      title: "Art Specialization",
      category: "Art",
      description: "Develop your artistic skills and explore your creativity.",
      price: "$400",
      
      image: "/images/art.png", // Replace with actual image URL
    },
    {
      id: 5,
      title: "Rule of Law",
      category: "Law",
      description: "Understand the fundamentals of the legal system.",
      price: "$500",
      
      image: "/images/law.png", // Replace with actual image URL
    },
    {
      id: 6,
      title: "Introduction to Webflow",
      category: "Tech",
      description: "Learn how to build responsive websites using Webflow.",
      price: "$800",
      
      image: "/images/webflow.png", // Replace with actual image URL
    },
  ];
  