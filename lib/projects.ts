export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  image?: string      // path relative to /public, e.g. "/images/workly.png"
  date: string
  features: string[]
  technologies: string[]
}

export const projects: Project[] = [
  {
    id: "workly",
    title: "Workly",
    description:
      "Comprehensive data management app for businesses to manage clients, suppliers, employees, and transactions.",
    longDescription:
      "Workly is a full-featured data management application designed to help businesses efficiently manage their operations. It provides a centralised platform for tracking clients, suppliers, employees, and transactions — streamlining business processes and improving operational efficiency with a clean, user-friendly interface.",
    tags: ["TypeScript", "React", "Node.js"],
    githubUrl: "https://github.com/GigaTasoulis/workly",
    date: "2024",
    features: [
      "Client and supplier management",
      "Employee records and performance tracking",
      "Transaction and financial data management",
      "Reporting and analytics dashboard",
      "User role management and permissions",
    ],
    technologies: [
      "TypeScript for type-safe code",
      "React for the frontend UI",
      "Node.js & Express for the backend",
      "RESTful API architecture",
      "Authentication and authorisation",
    ],
  },
  {
    id: "el-professor",
    title: "El Professor",
    description:
      "Web app for tutoring schools to manage professors, students, payments, calendars, and class scheduling.",
    longDescription:
      "El Professor is a comprehensive platform built for tutoring schools to manage their day-to-day operations. Administrators can manage professors, students, payments, and class schedules — while professors log in to view their timetable, manage classes, and track student progress. Includes a calendar system and financial tracking.",
    tags: ["JavaScript", "React", "Node.js"],
    githubUrl: "https://github.com/GigaTasoulis/el-professor",
    date: "2023",
    features: [
      "Professor and student management",
      "Class scheduling and calendar system",
      "Payment tracking and financial management",
      "Professor login portal",
      "Administrative dashboard",
    ],
    technologies: [
      "JavaScript for frontend and backend logic",
      "React for the user interface",
      "Node.js for server-side operations",
      "JWT authentication",
      "Calendar integration for scheduling",
    ],
  },
  {
    id: "studbot",
    title: "StudBot",
    description:
      "Intelligent university chatbot (Master's thesis) that helps students find information easily.",
    longDescription:
      "StudBot is an intelligent chatbot developed as my Master's degree Diploma Thesis and integrated into my university's website. It uses natural language processing to understand student queries and provide relevant information about courses, professors, schedules, campus facilities, and administrative procedures.",
    tags: ["JavaScript", "AI", "Chatbot"],
    githubUrl: "https://github.com/GigaTasoulis/StudBot",
    date: "2024",
    features: [
      "Natural language understanding for student queries",
      "Integration with university website",
      "Context-aware follow-up responses",
      "Administrative monitoring dashboard",
      "Feedback system for continuous improvement",
    ],
    technologies: [
      "JavaScript for frontend and backend",
      "Natural Language Processing (NLP)",
      "Machine Learning for query understanding",
      "University database integration",
      "Responsive chat interface",
    ],
  },
]
