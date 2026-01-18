"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Projects() {
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
                    <div className="mt-auto">
                      {project.live && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="bg-gray-700 text-white hover:bg-blue-600 hover:text-white transition-colors duration-300 w-full"
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
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
  )
}

