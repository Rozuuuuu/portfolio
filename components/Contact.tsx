"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl font-bold mb-12 text-blue-400 text-center">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="bg-gray-700 text-white border-gray-600 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-700 text-white border-gray-600 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    className="bg-gray-700 text-white border-gray-600 focus:border-blue-500"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-blue-500 mr-4" size={24} />
                  <p className="text-gray-300">code.with.lloyd@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-500 mr-4" size={24} />
                  <p className="text-gray-300">+63 921 997 8995</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-500 mr-4" size={24} />
                  <p className="text-gray-300">Cebu City, Philippines</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

