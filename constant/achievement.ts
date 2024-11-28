// Define Metric Type
export interface Metric {
    id: number; // Unique identifier for each metric
    value: string; // Value of the metric (e.g., "+200", "50K")
    label: string; // Label for the metric (e.g., "Courses", "Mentors")
  }
  
  // Metric Data Array
  export const metrics: Metric[] = [
    {
      id: 1,
      value: "+200",
      label: "Courses",
    },
    {
      id: 2,
      value: "50K",
      label: "Mentors",
    },
    {
      id: 3,
      value: "370K",
      label: "Students",
    },
    {
      id: 4,
      value: "100+",
      label: "Recognition",
    },
  ];
  