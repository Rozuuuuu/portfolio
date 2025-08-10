"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import { useTheme } from "next-themes"

export default function Home() {
  const controls = useAnimation()
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const [shootingStarPosition, setShootingStarPosition] = useState({ x: 0, y: 0 })

  // Get the current theme
  const currentTheme = useMemo(() => {
    return mounted ? (theme === "system" ? systemTheme : theme) : undefined
  }, [mounted, theme, systemTheme])

  // Generate static particles for better performance
  const particles = useMemo(() => {
    if (typeof window === "undefined") return []
    return Array.from({ length: 8 }, () => ({
      x: Math.random() * window.innerWidth * 0.8,
      y: Math.random() * window.innerHeight * 0.8,
      size: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 2 + 3,
    }))
  }, [])

  // Generate shooting star positions
  const shootingStarPositions = useMemo(() => {
    return Array.from({ length: 3 }, () => ({
      startX: Math.random() * 30 - 40,
      startY: Math.random() * 30 - 40,
      endX: Math.random() * 30 + 100,
      endY: Math.random() * 30 + 100,
      delay: Math.random() * 5,
      duration: Math.random() * 1 + 1,
    }))
  }, [])

  // Update scroll handler to trigger on scroll down instead of up
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (e.deltaY > 0) {
        document.body.classList.add("scrolling-down")
        setTimeout(() => {
          router.push("/about")
        }, 300)
      }
    },
    [router],
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      })

      window.addEventListener("wheel", handleWheel)
      return () => window.removeEventListener("wheel", handleWheel)
    }
  }, [controls, mounted, handleWheel])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShootingStarPosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
      })
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  if (!mounted) return null

  return (
    <main
      className={`relative ${
        theme === "dark" ? "bg-[#0a0a0a]" : "bg-[#87CEEB]" // Clean sky blue color
      } text-gray-900 dark:text-white min-h-screen flex flex-col overflow-hidden`}
    >
      <Navbar />

      {/* Enhanced background gradient for night sky */}
      <div
        className={`absolute inset-0 ${
          currentTheme === "dark"
            ? "bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]"
            : "bg-gradient-to-b from-[#87CEEB] to-[#ADD8E6]/50" // Subtle gradient
        } z-0 transition-colors duration-700`}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          {currentTheme === "dark" ? (
            <>
              {/* Optimized stars with hardware acceleration */}
              <div className="absolute inset-0" style={{ perspective: "1000px", transform: "translateZ(0)" }}>
                {particles.map((particle, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white will-change-transform"
                    style={{
                      x: particle.x,
                      y: particle.y,
                      width: particle.size,
                      height: particle.size,
                      opacity: 0.1,
                    }}
                    animate={{
                      opacity: [0.1, 0.8, 0.1],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: particle.duration,
                      delay: particle.delay,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Shooting stars */}
              {[...Array(3)].map((_, index) => (
                <AnimatePresence key={`star-container-${index}`}>
                  <motion.div
                    key={`shooting-star-${shootingStarPosition.x}-${shootingStarPosition.y}-${index}`}
                    className="absolute bg-gradient-to-r from-transparent via-white to-transparent"
                    initial={{
                      x: -100,
                      y: -100,
                      opacity: 0,
                      top: `${Math.random() * 80}%`,
                      left: `${Math.random() * 80}%`,
                    }}
                    animate={{
                      x: 300,
                      y: 300,
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      ease: "linear",
                      delay: index * 1,
                    }}
                    style={{
                      width: "150px",
                      height: "2px",
                      rotate: "45deg",
                      filter: "blur(0.5px)",
                    }}
                  />
                </AnimatePresence>
              ))}

              {/* Subtle nebula effect with reduced opacity */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/[0.03] via-transparent to-blue-900/[0.03] animate-pulse" />
              </div>
            </>
          ) : (
            <>
              {particles.slice(0, 8).map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute will-change-transform"
                  style={{
                    x: particle.x,
                    y: particle.y,
                    transform: "translateZ(0)",
                  }}
                >
                  <motion.div
                    className="rounded-full"
                    style={{
                      width: particle.size * 40,
                      height: particle.size * 40,
                      background: "linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0.5))",
                      filter: "blur(8px)",
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: particle.duration * 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTheme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi! I&apos;m <span className="text-gradient">Lloyd</span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Computer Science Student & Aspiring Developer
              <br />
              Based in Cebu, Philippines
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/projects" className="btn-gradient">
                View My Work
              </Link>
              <Link
                href="/about"
                className="bg-white dark:bg-transparent text-blue-600 dark:text-white hover:bg-blue-50 dark:hover:bg-white/10 border border-blue-500 transition-colors duration-300 font-semibold py-2 px-6 rounded-full hover:shadow-lg"
              >
                About Me
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-gray-800 dark:border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-800 dark:bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </main>
  )
}

