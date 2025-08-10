"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    { name: "Python", icon: "🐍", level: "Advanced" },
    { name: "Java", icon: "☕", level: "Intermediate" },
    { name: "C#", icon: "🔷", level: "Intermediate" },
    { name: "PHP", icon: "🐘", level: "Advanced" },
    { name: "HTML/CSS", icon: "🌐", level: "Advanced" },
    { name: "JavaScript", icon: "🟨", level: "Advanced" },
    { name: "MySQL", icon: "🗄️", level: "Intermediate" },
    { name: "Git", icon: "🔀", level: "Intermediate" },
    { name: "React", icon: "⚛️", level: "Beginner" },
    { name: "Node.js", icon: "🟩", level: "Beginner" },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl font-bold mb-12 text-blue-400 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-gray-700 hover:border-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-5xl mb-4 block">{skill.icon}</span>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

