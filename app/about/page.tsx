"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import PageWrapper from "@/components/PageWrapper"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import DownloadButton from "@/components/DownloadButton"

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Left Column - Image and Quick Info */}
              <motion.div
                className="md:col-span-4 space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-blue-500/50 dark:border-blue-500/20">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/474490427_1269050527696790_6084800684089764772_n.jpg-EbroIlhA1Wfka1JXA8XzeMR8GONCkR.jpeg"
                    alt="Lloyd Rosales"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 backdrop-blur-sm rounded-2xl p-6 space-y-4 border border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300 shadow-lg">
                  <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300">Quick Connect</h2>
                  <div className="flex gap-3">
                    <Button
                      size="icon"
                      variant="outline"
                      asChild
                      className="rounded-full bg-white/50 dark:bg-gray-800/50 border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500"
                    >
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 text-blue-700 dark:text-blue-300" />
                      </a>
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      asChild
                      className="rounded-full bg-white/50 dark:bg-gray-800/50 border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500"
                    >
                      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 text-blue-700 dark:text-blue-300" />
                      </a>
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      asChild
                      className="rounded-full bg-white/50 dark:bg-gray-800/50 border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500"
                    >
                      <a href="mailto:code.with.lloyd@gmail.com">
                        <Mail className="w-4 h-4 text-blue-700 dark:text-blue-300" />
                      </a>
                    </Button>
                  </div>
                  <DownloadButton className="w-full" />
                </div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                className="md:col-span-8 space-y-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div>
                  <h1 className="text-4xl font-bold mb-4">
                    <span className="text-gradient">About Me</span>
                  </h1>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    Hello! I'm Lloyd, a passionate Computer Science student at the University of Southern Philippines
                    Foundation. My journey in tech began with a curiosity about how software shapes our digital world,
                    and it has evolved into a deep commitment to creating meaningful solutions through code.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300 shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Education</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400">
                        Bachelor of Science in Computer Science
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">University of Southern Philippines Foundation</p>
                      <p className="text-gray-600 dark:text-gray-400">Expected Graduation: 2026</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300 shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">What I Do</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">Web Development</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Building responsive and user-friendly web applications using modern technologies and best
                        practices.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                        Software Engineering
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Developing efficient and scalable solutions to complex problems through clean and maintainable
                        code.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300 shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Current Focus</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm currently focused on expanding my knowledge in full-stack development, with a particular
                    interest in React, Next.js, and cloud technologies. I'm also actively seeking opportunities to
                    collaborate on innovative projects and contribute to the tech community.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}

