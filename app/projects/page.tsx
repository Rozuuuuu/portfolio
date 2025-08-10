"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import PageWrapper from "@/components/PageWrapper"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Smart Personality Assistant",
      description:
        "An AI-powered application that analyzes user inputs to determine personality traits and provide personalized recommendations based on psychological profiles.",
      technologies: ["TypeScript", "React", "Next.js", "CSS", "RapidAPI"],
      github: "https://github.com/Rozuuuuu/smart-personality-assistant",
      live: "https://smart-personality-assistant.vercel.app",
    },
    {
      title: "E-Commerce Pet Adoption Platform",
      description: "A web application for pet adoption with user authentication and payment integration.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/yourusername/pet-adoption",
      live: "https://pet-adoption-demo.com",
    },
    {
      title: "Spell Checker Application",
      description: "An application using the Levenshtein distance algorithm for spell checking and correction.",
      technologies: ["PHP", "JavaScript"],
      github: "https://github.com/yourusername/spell-checker",
      live: "https://spell-checker-demo.com",
    },
    {
      title: "Point of Sales (POS) System",
      description: "A retail POS system for processing transactions and managing inventory.",
      technologies: ["C#", ".NET Framework", "MySQL"],
      github: "https://github.com/yourusername/pos-system",
      live: "https://pos-system-demo.com",
    },
  ]

  return (
    <PageWrapper>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-gradient">My Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-gray-800 dark:text-white h-full flex flex-col border border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300 shadow-lg hover:shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-blue-100/50 to-indigo-100/50 dark:from-blue-800/20 dark:to-indigo-800/20 rounded-t-lg">
                      <CardTitle className="text-blue-700 dark:text-blue-300">{project.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between pt-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between mt-auto">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-3 py-2 rounded-md transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-3 py-2 rounded-md transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </motion.a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}

