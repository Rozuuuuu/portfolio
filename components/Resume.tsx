"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin } from "lucide-react"
import DownloadButton from "./DownloadButton"

export default function Resume() {
  const skills = [
    { category: "Programming Languages", items: ["Python", "Java", "C#", "PHP"] },
    { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
    { category: "Database Management", items: ["MySQL", "PostgreSQL"] },
    { category: "Cloud Technologies", items: ["AWS (Basic)", "Docker (Basic)"] },
    { category: "Concepts", items: ["Algorithms", "Data Structures", "Software Development Methodologies"] },
    { category: "Soft Skills", items: ["Problem-solving", "Analytical Abilities", "Communication", "Teamwork"] },
  ]

  const projects = [
    {
      title: "Smart Personality Assistant",
      description:
        "Developed a web-based personality assistant application using TypeScript and modern frontend technologies. Created an interactive interface that helps users understand their personality traits through engaging questionnaires and provides personalized insights based on their responses. Integrated with external APIs via RapidAPI to enhance functionality and data processing capabilities.",
      technologies: ["TypeScript", "React", "Next.js", "CSS", "UI/UX Design", "RapidAPI"],
    },
    {
      title: "E-Commerce Pet Adoption Platform",
      description:
        "Developed an e-commerce platform for pet adoption, offering a variety of pets and pet-related products. Implemented features such as user authentication, product listings, shopping cart functionality, and payment processing.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    },
    {
      title: "Spell Checker Application",
      description:
        "Created a spell checker application using the Levenshtein distance algorithm to suggest correct words for misspelled inputs. Designed a user-friendly interface for inputting words and displaying suggested corrections.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Point of Sales (POS) System",
      description:
        "Developed a point of sales system resembling a retail counter for processing transactions. Implemented features such as product inventory management, sales tracking, and reporting functionalities.",
      technologies: ["C#", ".NET Framework", "MySQL"],
    },
  ]

  const courses = [
    "Introduction to Computer Science",
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Web Development",
    "Software Engineering",
  ]

  const achievements = [
    "2nd Place in Hackathon Competition in CCS Days at USPF",
    "Best in Logo in Hackathon Competition",
    "Most Promising in Hackathon Competition",
    "Dean's List 2022-2023",
    "Dean's List 2023-2024",
    "NCII Passer",
  ]

  const improvements = [
    {
      title: "Real-World Experience",
      description:
        "Through internships, part-time work, or volunteer work in related industries, I hope to supplement my academic background and side projects with additional practical experience.",
    },
    {
      title: "Enhance Advanced Skills",
      description:
        "By studying new tools and technologies that are in demand in the field, such as mobile app development, cloud computing, and machine learning, I hope to expand my skill set.",
    },
    {
      title: "Build Networking",
      description:
        "My goal is to expand my professional network by participation in industry events, participation in pertinent online communities, and networking with other professionals on sites like LinkedIn, Jobstreet and etc.",
    },
    {
      title: "Obtain Certifications",
      description:
        "In order to certify my abilities and enhance my CV, I plan to get certifications in fields like web development, database administration, and programming.",
    },
  ]

  const certifications = [
    {
      title: "NCII in Computer Systems Servicing",
      description: "Certified by TESDA, validating skills in hardware and software troubleshooting and maintenance.",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header - Updated with full name */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-8 mb-8 shadow-lg border border-blue-200 dark:border-blue-800">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-300 mb-2">
                  Lloyd Cubar Rosales
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg">Computer Science Student</p>
              </div>
              <DownloadButton />
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span>Sitio Rio 2, Nivel Hills, Lahug, Cebu City, PH 6000</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span>09219978995</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span>code.with.lloyd@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 mb-8 shadow-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Objectives</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Seeking an entry-level position in Computer Science where I can apply my academic knowledge, gain
              practical experience, and contribute positively to the team. Eager to learn the ins and outs of the job
              while providing valuable support to the organization.
            </p>
          </Card>

          {/* Education */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 mb-8 shadow-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Education</h2>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                University of Southern Philippines Foundation, Lahug, Cebu City, 6000
              </p>
              <p className="text-gray-600 dark:text-gray-400">Expected Graduation: 2026</p>
            </div>
          </Card>

          {/* Skills */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 mb-8 shadow-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Skills</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <Badge
                        key={i}
                        className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Projects */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 mb-8 shadow-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 my-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {index < projects.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </div>
          </Card>

          {/* Relevant Courses */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 mb-8 shadow-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Relevant Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 p-2 rounded-md"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  {course}
                </div>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 mb-8 shadow-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Achievements</h2>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-gray-700 dark:text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="min-w-[8px] h-2 bg-blue-500 rounded-full mt-2.5 mr-2"></div>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </Card>

          {/* Areas for Improvement */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 mb-8 shadow-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Areas for Improvement</h2>
            <div className="space-y-4">
              {improvements.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 shadow-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{cert.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{cert.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

