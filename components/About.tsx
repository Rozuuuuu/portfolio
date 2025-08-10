"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-blue-400 text-center">About Me</h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative w-64 h-64 overflow-hidden rounded-lg border-4 border-blue-500">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/474490427_1269050527696790_6084800684089764772_n.jpg-EbroIlhA1Wfka1JXA8XzeMR8GONCkR.jpeg"
                  alt="Lloyd Rosales at MET Gala"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 256px"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a passionate Computer Science student at the University of Southern Philippines Foundation, expected
                to graduate in 2026. My journey in the world of programming began with a curiosity about how software
                shapes our digital experiences.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Throughout my academic career, I've developed a strong foundation in various programming languages and
                concepts. I'm particularly interested in web development and software engineering, always eager to learn
                new technologies and best practices.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My goal is to become a skilled developer who can contribute to innovative projects that make a positive
                impact. I'm excited about the possibilities that lie ahead in my career and look forward to taking on
                new challenges in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

