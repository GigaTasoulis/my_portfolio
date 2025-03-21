"use client"

import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, ExternalLink, Github, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PageTransition from "@/components/page-transition"

// Replace the projects array with the actual projects with more details and GitHub links

const projects = [
  {
    id: "workly",
    title: "Workly",
    description:
      "A comprehensive data management app for businesses to manage clients, suppliers, employees, transactions, and more.",
    longDescription:
      "Workly is a full-featured data management application designed to help businesses efficiently manage their operations. The application provides a centralized platform for tracking clients, suppliers, employees, transactions, and other business-critical data. With a user-friendly interface and powerful features, Workly streamlines business processes and improves operational efficiency.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["TypeScript", "React", "Node.js", "Database", "Business Management"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/workly",
    date: "2024",
    features: [
      "Client and supplier management",
      "Employee records and performance tracking",
      "Transaction and financial data management",
      "Reporting and analytics dashboard",
      "User role management and permissions",
      "Data export and import capabilities",
    ],
    technologies: [
      "TypeScript for type-safe code",
      "React for the frontend UI",
      "Node.js for the backend",
      "RESTful API architecture",
      "Database management system",
      "Authentication and authorization",
      "Responsive design for all devices",
    ],
  },
  {
    id: "el-professor",
    title: "El Professor",
    description:
      "Web application for tutoring schools to manage professors, students, payments, calendars, and class scheduling with professor login functionality.",
    longDescription:
      "El Professor is a comprehensive web application designed specifically for tutoring schools to manage their operations efficiently. The platform allows administrators to manage professors, students, payments, and class schedules. Professors can log in to view their teaching schedule, manage their classes, and track student progress. The application includes a calendar system for scheduling and a payment tracking system for financial management.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["JavaScript", "React", "Node.js", "Authentication", "Education"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/el-professor",
    date: "2023",
    features: [
      "Professor and student management",
      "Class scheduling and calendar system",
      "Payment tracking and financial management",
      "Professor login portal",
      "Student progress tracking",
      "Automated notifications for classes and payments",
      "Administrative dashboard for school management",
    ],
    technologies: [
      "JavaScript for frontend and backend logic",
      "React for the user interface",
      "Node.js for server-side operations",
      "Authentication system for secure access",
      "Calendar integration for scheduling",
      "Database for data storage",
      "Responsive design for mobile and desktop access",
    ],
  },
  {
    id: "taxi-e",
    title: "Taxi-E",
    description:
      "A web application for taxi owners to connect with hotels and customers, manage bookings, and streamline their business operations.",
    longDescription:
      "Taxi-E is a specialized web application designed to help taxi owners efficiently manage their business by connecting them directly with hotels and other customers. The platform streamlines the booking process, allowing hotels to make taxi reservations for their guests and customers to book taxis directly. Taxi owners can manage their fleet, track bookings, and optimize their operations through the application's intuitive interface.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["TypeScript", "React", "API Integration", "Booking System"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/taxi-e",
    date: "2023",
    features: [
      "Hotel-to-taxi booking system",
      "Customer direct booking portal",
      "Taxi fleet management",
      "Real-time booking notifications",
      "Booking history and analytics",
      "Customer and hotel management",
      "Mobile-responsive design for on-the-go access",
    ],
    technologies: [
      "TypeScript for robust code",
      "React for the frontend interface",
      "API integration for third-party services",
      "Real-time notification system",
      "Geolocation services",
      "Database for booking and customer data",
      "Responsive design for all devices",
    ],
  },
  {
    id: "densky",
    title: "Densky",
    description:
      "Web application for showcasing catamarans and ships of a business, with booking functionality and business information.",
    longDescription:
      "Densky is a web application developed for a maritime business to showcase their fleet of catamarans and ships. The platform features detailed information about each vessel, including specifications, images, and availability. Customers can browse the fleet, check availability, and make bookings directly through the application. The business information section provides details about the company, services offered, and contact information.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["JavaScript", "React", "Booking System", "Maritime"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/densky",
    date: "2023",
    features: [
      "Catamaran and ship showcase with detailed information",
      "Online booking system with availability calendar",
      "Image gallery for each vessel",
      "Business information and services section",
      "Contact form for inquiries",
      "Booking management for administrators",
      "Mobile-responsive design for on-the-go access",
    ],
    technologies: [
      "JavaScript for frontend functionality",
      "React for the user interface",
      "Booking system integration",
      "Image optimization for gallery",
      "Form handling for bookings and inquiries",
      "Database for vessel and booking data",
      "Responsive design for all devices",
    ],
  },
  {
    id: "tradebot",
    title: "TradeBot",
    description:
      "A terminal application that allows users to buy and sell cryptocurrency coins with automated trading capabilities.",
    longDescription:
      "TradeBot is a sophisticated terminal application designed for cryptocurrency trading. The application allows users to buy and sell cryptocurrency coins through an intuitive terminal interface. With automated trading capabilities, TradeBot can execute trades based on predefined strategies and market conditions, helping users maximize their trading potential without constant monitoring.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "Cryptocurrency", "Trading", "Automation"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/TradeBot",
    date: "2024",
    features: [
      "Cryptocurrency buying and selling through terminal",
      "Automated trading based on strategies",
      "Real-time market data integration",
      "Trading history and performance analytics",
      "Strategy customization and testing",
      "Security features for safe trading",
      "Notification system for trade execution",
    ],
    technologies: [
      "Python for application logic",
      "Cryptocurrency exchange APIs",
      "Terminal interface design",
      "Algorithmic trading strategies",
      "Data analysis for market trends",
      "Secure authentication for exchange access",
      "Logging system for trade tracking",
    ],
  },
  {
    id: "studbot",
    title: "StudBot",
    description:
      "An intelligent chatbot integrated into a university website to help students find information more easily. Developed as a Diploma Thesis for my Master's degree.",
    longDescription:
      "StudBot is an intelligent chatbot developed as my Master's degree Diploma Thesis. The chatbot is integrated into my university's website and designed to help students find information quickly and easily. Using natural language processing and machine learning, StudBot can understand student queries and provide relevant information about courses, professors, schedules, campus facilities, and administrative procedures. The project demonstrates the application of AI in improving student support services.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["JavaScript", "AI", "Chatbot", "University", "NLP"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/StudBot",
    date: "2024",
    features: [
      "Natural language understanding for student queries",
      "Information retrieval from university database",
      "Context-aware responses for follow-up questions",
      "Integration with university website",
      "Administrative dashboard for monitoring and improvement",
      "Feedback system for continuous learning",
      "Multi-language support for international students",
    ],
    technologies: [
      "JavaScript for frontend and backend",
      "Natural Language Processing (NLP)",
      "Machine Learning for query understanding",
      "University database integration",
      "Web integration techniques",
      "User feedback analysis",
      "Responsive chat interface",
    ],
  },
  {
    id: "sudoku-linear-optimization",
    title: "Sudoku with Linear Optimization",
    description:
      "Algorithms that solve several types of Sudoku puzzles very efficiently using linear optimization techniques.",
    longDescription:
      "This project implements advanced algorithms to solve various types of Sudoku puzzles using linear optimization techniques. The approach transforms Sudoku puzzles into linear programming problems, allowing for extremely fast and efficient solutions. The project demonstrates the application of mathematical optimization to puzzle solving and includes implementations for standard Sudoku as well as variants like Killer Sudoku, Diagonal Sudoku, and more.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "Linear Optimization", "Algorithms", "Mathematics"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/Sudoku_with_Linear_Optimization",
    date: "2023",
    features: [
      "Fast solving of standard 9x9 Sudoku puzzles",
      "Support for Sudoku variants (Killer, Diagonal, etc.)",
      "Performance benchmarking against traditional methods",
      "Visualization of the solving process",
      "Puzzle difficulty assessment",
      "Puzzle generation capabilities",
      "Command-line interface for easy use",
    ],
    technologies: [
      "Python for implementation",
      "Linear programming libraries",
      "Mathematical modeling of constraints",
      "Algorithm optimization techniques",
      "Visualization tools for results",
      "Performance testing framework",
      "Command-line interface design",
    ],
  },
  {
    id: "linear-combinatorial-optimization",
    title: "Linear and Combinatorial Optimization",
    description:
      "A collection of exercises and scripts that solve various linear and combinatorial optimization problems.",
    longDescription:
      "This project is a comprehensive collection of exercises and scripts focused on solving linear and combinatorial optimization problems. The repository includes implementations of various optimization algorithms and their application to real-world problems. From transportation and assignment problems to network flow and integer programming, the project demonstrates the power of optimization techniques in solving complex problems efficiently.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "Optimization", "Algorithms", "Mathematics"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/Linear-and-Combinatorial-Optimization",
    date: "2023",
    features: [
      "Implementation of linear programming algorithms",
      "Combinatorial optimization problem solvers",
      "Transportation and assignment problem solutions",
      "Network flow optimization",
      "Integer programming implementations",
      "Real-world problem applications",
      "Performance analysis of different approaches",
    ],
    technologies: [
      "Python for algorithm implementation",
      "Optimization libraries and frameworks",
      "Mathematical modeling techniques",
      "Algorithm analysis and comparison",
      "Visualization of optimization results",
      "Documentation of mathematical concepts",
      "Test cases for validation",
    ],
  },
  {
    id: "web-programming",
    title: "Web Programming - Restaurant App",
    description:
      "A web application developed to support a live restaurant, showcase the menu, enable table booking, handle payments, and more.",
    longDescription:
      "This web application was developed to support the operations of a real restaurant. The platform showcases the restaurant's menu, ambiance, and services while providing functionality for customers to book tables, place orders, and make payments. For the restaurant management, the application includes features for menu management, reservation tracking, and order processing, creating a comprehensive solution for both customer-facing and operational needs.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["JavaScript", "Web Development", "E-commerce", "Restaurant"],
    demoUrl: "#",
    githubUrl: "https://github.com/GigaTasoulis/Web_Progamming",
    date: "2023",
    features: [
      "Digital menu with categories and item details",
      "Table reservation system with time slots",
      "Online ordering for takeaway or delivery",
      "Payment processing integration",
      "Restaurant information and gallery",
      "Admin panel for menu and reservation management",
      "Customer account management",
    ],
    technologies: [
      "JavaScript for frontend and backend",
      "Web development frameworks",
      "Database for menu and reservation data",
      "Payment gateway integration",
      "Responsive design for mobile ordering",
      "Authentication for admin access",
      "Order tracking system",
    ],
  },
]

export default function ProjectDetailPage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full flex items-center">
                  <Tag className="mr-1 h-3 w-3" /> {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center text-muted-foreground mb-6">
              <Calendar className="mr-2 h-4 w-4" /> {project.date}
            </div>
          </div>

          <div className="h-64 md:h-80 bg-muted rounded-lg mb-8 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-muted-foreground">Project Image</span>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <h2>Project Overview</h2>
            <p>{project.longDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                <ul className="space-y-2">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

