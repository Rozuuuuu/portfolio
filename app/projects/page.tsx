"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import PageWrapper from "@/components/PageWrapper"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Buy@ndBuild",
      description:
        "Buy @nd Build Company is a versatile sales and service provider connecting buyers, sellers, agents, and referrers across various industries. We specialize in promoting and selling products and services through effective advertising and trusted partnership.",
      technologies: ["NextJs", "NodeJs", "Supabase", "n8n", "Vercel"],
      live: "https://buy-nd-build.vercel.app",
    },
    {
      title: "Gazbeat",
      description:
        "Product service provider where users can see the products list of LPG Products and Mini Products. It includes inventory management features.",
      technologies: ["React", "NodeJs", "Supabase", "GoDaddy"],
      live: "https://gazbeat.com",
    },
    {
      title: "Café AI",
      description:
        "AI-Enhanced 2D Game Interactive Learning Environment for Coffee Shop simulation.",
      technologies: ["NextJs", "Nodejs", "Supabase", "Python"],
      live: "https://v0-coffee-shop-game.vercel.app",
    },
    {
      title: "BistroEase POS",
      description:
        "A user-friendly POS System for small cafes & Bistros.",
      technologies: ["Android Studio", "XAML", "Java"],
      live: null,
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
                      <div className="mt-auto">
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-3 py-2 rounded-md transition-colors duration-300 w-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </motion.a>
                        )}
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

