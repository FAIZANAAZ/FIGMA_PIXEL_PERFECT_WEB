// Define Course Type
export interface Course {
    id: number; // Unique identifier for each course
    title: string; // Title of the course
    coursesAvailable: string; // Availability text
    image: string; // Path or URL of the image
  }
  
  // Course Data Array
  export const coursescategory: Course[] = [
    {
      id: 1,
      title: "Design & Development",
      coursesAvailable: "50+ Courses Available",
      image: "/images/design.png"
    },
    {
      id: 2,
      title: "Marketing",
      coursesAvailable: "50+ Courses Available",
      image: "/images/marketing.png",
    },
    {
      id: 3,
      title: "Development",
      coursesAvailable: "50+ Courses Available",
      image: "/images/development.png",
    },
    {
      id: 4,
      title: "Communication",
      coursesAvailable: "50+ Courses Available",
      image: "/images/communic.png",
    },
    {
      id: 5,
      title: "Digital Marketing",
      coursesAvailable: "50+ Courses Available",
      image: "/images/digital.png",
    },
    {
      id: 6,
      title: "Self Development",
      coursesAvailable: "50+ Courses Available",
      image: "/images/selfdev.png",
    },
    {
      id: 7,
      title: "Business",
      coursesAvailable: "50+ Courses Available",
      image: "/images/business.png",
    },
    {
      id: 8,
      title: "Finance",
      coursesAvailable: "50+ Courses Available",
      image: "/images/finance.png",
    },
    {
      id: 9,
      title: "Consulting",
      coursesAvailable: "50+ Courses Available",
      image: "/images/consulting.png",
    },
  ];
  