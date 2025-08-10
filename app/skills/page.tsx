"use client"

import { motion } from "framer-motion"
import PageWrapper from "@/components/PageWrapper"
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaVuejs,
  FaGitAlt,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJava,
  FaPython,
} from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { SiCodeigniter, SiMysql } from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
import { CSharpIcon } from "@/components/icons/CSharpIcon"

export default function SkillsPage() {
  const skills = [
    // Programming Languages
    {
      name: "Python",
      icon: <FaPython className="w-12 h-12 text-[#3776AB] dark:text-[#4B8BBE]" />,
      level: "Advanced",
      category: "Languages",
      isComponent: true,
    },
    {
      name: "Java",
      icon: <FaJava className="w-12 h-12 text-[#007396] dark:text-[#5382A1]" />,
      level: "Intermediate",
      category: "Languages",
      isComponent: true,
    },
    {
      name: "C#",
      icon: <CSharpIcon className="w-12 h-12" />,
      level: "Intermediate",
      category: "Languages",
      isComponent: true,
    },
    {
      name: "PHP",
      icon: <FaPhp className="w-12 h-12 text-[#777BB4] dark:text-[#8892BF]" />,
      level: "Advanced",
      category: "Languages",
      isComponent: true,
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="w-12 h-12 text-[#E34F26] dark:text-[#F06529]" />,
      level: "Advanced",
      category: "Languages",
      isComponent: true,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="w-12 h-12 text-[#1572B6] dark:text-[#2965F1]" />,
      level: "Advanced",
      category: "Languages",
      isComponent: true,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="w-12 h-12 text-[#F7DF1E] dark:text-[#F0DB4F]" />,
      level: "Advanced",
      category: "Languages",
      isComponent: true,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="w-12 h-12 text-[#4479A1] dark:text-[#00758F]" />,
      level: "Intermediate",
      category: "Languages",
      isComponent: true,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="w-12 h-12 text-[#F05032] dark:text-[#F1502F]" />,
      level: "Intermediate",
      category: "Tools",
      isComponent: true,
    },

    // Frameworks
    {
      name: "Laravel",
      icon: <FaLaravel className="w-12 h-12 text-[#FF2D20] dark:text-[#FF2D20]" />,
      level: "Advanced",
      category: "Frameworks",
      isComponent: true,
    },
    {
      name: "CodeIgniter",
      icon: <SiCodeigniter className="w-12 h-12 text-[#EF4223] dark:text-[#FF4444]" />,
      level: "Advanced",
      category: "Frameworks",
      isComponent: true,
    },
    {
      name: "React.js",
      icon: <FaReact className="w-12 h-12 text-[#61DAFB] dark:text-[#61DAFB] animate-spin-slow" />,
      level: "Intermediate",
      category: "Frameworks",
      isComponent: true,
    },
    {
      name: "Next.js",
      icon: <RiNextjsFill className="w-12 h-12 dark:text-white text-black" />,
      level: "Intermediate",
      category: "Frameworks",
      isComponent: true,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="w-12 h-12 text-[#339933] dark:text-[#3C873A]" />,
      level: "Intermediate",
      category: "Frameworks",
      isComponent: true,
    },
    {
      name: "Vue.js",
      icon: <FaVuejs className="w-12 h-12 text-[#4FC08D] dark:text-[#42B883]" />,
      level: "Intermediate",
      category: "Frameworks",
      isComponent: true,
    },
    {
      name: "Inertia.js",
      icon: <TbBrandReactNative className="w-12 h-12 text-[#9553E9] dark:text-[#A779E9]" />,
      level: "Intermediate",
      category: "Frameworks",
      isComponent: true,
    },
  ]

  // Group skills by category
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>,
  )

  return (
    <PageWrapper>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-gradient">My Skills</span>
            </h2>

            {/* Categories */}
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-6">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-lg shadow-lg text-center border border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-center items-center mb-4">
                        {skill.isComponent ? skill.icon : <span className="text-5xl">{skill.icon}</span>}
                      </div>
                      <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">{skill.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}

