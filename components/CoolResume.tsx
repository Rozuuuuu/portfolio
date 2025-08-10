"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function CoolResume() {
  const skills = [
    { name: "Python", image: "/placeholder.svg?height=24&width=24" },
    { name: "Java", image: "/placeholder.svg?height=24&width=24" },
    { name: "C#", image: "/placeholder.svg?height=24&width=24" },
    { name: "PHP", image: "/placeholder.svg?height=24&width=24" },
    { name: "HTML", image: "/placeholder.svg?height=24&width=24" },
    { name: "CSS", image: "/placeholder.svg?height=24&width=24" },
    { name: "JavaScript", image: "/placeholder.svg?height=24&width=24" },
    { name: "MySQL", image: "/placeholder.svg?height=24&width=24" },
  ]

  const projects = [
    {
      title: "E-Commerce Pet Adoption",
      description: "Platform for pet adoption with user auth and payments.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "Spell Checker",
      description: "App using Levenshtein distance for spell correction.",
      technologies: ["PHP", "JavaScript"],
    },
    {
      title: "POS System",
      description: "Retail POS with inventory and sales tracking.",
      technologies: ["C#", ".NET", "MySQL"],
    },
  ]

  const achievements = [
    "2nd Place Hackathon - CCS Days USPF",
    "Best Logo - Hackathon",
    "Most Promising - Hackathon",
    "Dean's List 2022-2024",
    "NCII Certified",
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="w-full max-w-4xl">
      <Card className="bg-white dark:bg-gray-800 shadow-lg backdrop-blur-md bg-opacity-80 dark:bg-opacity-80 overflow-hidden">
        <header className="bg-teal-600 dark:bg-teal-800 text-white p-8">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl font-bold mb-2">Lloyd Rosales</h1>
            <p className="text-xl mb-4">Computer Science Student & Aspiring Developer</p>
            <div className="flex space-x-4">
              <a href="mailto:code.with.lloyd@gmail.com" className="flex items-center hover:text-teal-200">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
              <a href="tel:09219978995" className="flex items-center hover:text-teal-200">
                <Phone className="w-4 h-4 mr-2" />
                Phone
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </header>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full justify-start bg-teal-100 dark:bg-teal-900">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="p-6">
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700 dark:text-teal-300">About Me</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Passionate CS student at USPF, set to graduate in 2026. Eager to apply academic knowledge in real-world
                projects and grow as a developer.
              </p>
            </motion.section>
          </TabsContent>

          <TabsContent value="skills" className="p-6">
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700 dark:text-teal-300">Skills</h2>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 bg-teal-50 dark:bg-teal-900 p-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image src={skill.image || "/placeholder.svg"} alt={skill.name} width={24} height={24} />
                    <span className="text-sm font-medium text-teal-800 dark:text-teal-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </TabsContent>

          <TabsContent value="projects" className="p-6">
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700 dark:text-teal-300">Projects</h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-400">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-teal-100 text-teal-800 dark:bg-teal-800 dark:text-teal-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {index < projects.length - 1 && <Separator className="my-4" />}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </TabsContent>

          <TabsContent value="education" className="p-6">
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700 dark:text-teal-300">Education</h2>
              <div>
                <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-400">BS in Computer Science</h3>
                <p className="text-gray-700 dark:text-gray-300">University of Southern Philippines Foundation</p>
                <p className="text-gray-600 dark:text-gray-400">Expected Graduation: 2026</p>
              </div>
            </motion.section>
          </TabsContent>

          <TabsContent value="achievements" className="p-6">
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700 dark:text-teal-300">Achievements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05, originX: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </TabsContent>
        </Tabs>
      </Card>
    </motion.div>
  )
}

