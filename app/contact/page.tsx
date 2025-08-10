"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import PageWrapper from "@/components/PageWrapper"

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-gradient">Contact Me</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-8 rounded-lg shadow-lg border border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-blue-700 dark:text-blue-300">Get in Touch</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      className="bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-white border-blue-200 dark:border-blue-800 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-white border-blue-200 dark:border-blue-800 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your Message"
                      className="bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-white border-blue-200 dark:border-blue-800 focus:border-blue-500"
                    />
                  </div>
                  <Button type="submit" className="w-full btn-gradient">
                    Send Message
                  </Button>
                </form>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-8 rounded-lg shadow-lg border border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-blue-700 dark:text-blue-300">Contact Information</h3>
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Mail className="text-blue-600 dark:text-blue-400 mr-4" size={24} />
                    <p className="text-gray-700 dark:text-gray-300">code.with.lloyd@gmail.com</p>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Phone className="text-blue-600 dark:text-blue-400 mr-4" size={24} />
                    <p className="text-gray-700 dark:text-gray-300">+63 921 997 8995</p>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <MapPin className="text-blue-600 dark:text-blue-400 mr-4" size={24} />
                    <p className="text-gray-700 dark:text-gray-300">Cebu City, Philippines</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}

