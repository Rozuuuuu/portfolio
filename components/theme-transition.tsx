"use client"

import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeTransition() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [transitionTheme, setTransitionTheme] = useState<string | undefined>(undefined)
  const prevThemeRef = useRef<string | undefined>(undefined)

  // Listen for theme changes
  useEffect(() => {
    setMounted(true)

    if (!mounted) return

    // Only trigger animation if theme has changed
    if (resolvedTheme && prevThemeRef.current !== resolvedTheme) {
      // Get the position of the theme toggle button
      const themeToggle = document.getElementById("theme-toggle")
      if (themeToggle) {
        const rect = themeToggle.getBoundingClientRect()
        setPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        })
      } else {
        // Fallback to center of screen
        setPosition({
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        })
      }

      // Set the theme that's transitioning in
      setTransitionTheme(resolvedTheme)
      setIsTransitioning(true)

      // Update the previous theme ref
      prevThemeRef.current = resolvedTheme
    }
  }, [resolvedTheme, mounted])

  // Reset transition state after animation completes
  const onAnimationComplete = () => {
    setTimeout(() => {
      setIsTransitioning(false)
    }, 50)
  }

  if (!mounted) return null

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <motion.div
          key={transitionTheme}
          initial={{
            clipPath: `circle(0px at ${position.x}px ${position.y}px)`,
          }}
          animate={{
            clipPath: `circle(2000px at ${position.x}px ${position.y}px)`,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={onAnimationComplete}
          className={`fixed inset-0 z-[9999] pointer-events-none ${
            transitionTheme === "dark" ? "bg-gray-900" : "bg-gray-50"
          }`}
        />
      )}
    </AnimatePresence>
  )
}

