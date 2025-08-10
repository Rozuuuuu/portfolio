"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl font-bold mb-12 text-blue-400 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800 text-white h-full flex flex-col border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-blue-400">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-blue-600 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="bg-gray-700 text-white hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="bg-gray-700 text-white hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

