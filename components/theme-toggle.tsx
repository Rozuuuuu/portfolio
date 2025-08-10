"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  if (!mounted) {
    return (
      <button
        id="theme-toggle"
        className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center"
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <motion.button
      id="theme-toggle"
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      onClick={toggleTheme}
      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {resolvedTheme === "light" ? (
          <motion.div
            key="sun"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-8 h-8"
          >
            {/* Sun Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main Sun Body */}
              <motion.div
                className="absolute w-6 h-6"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                {/* Petal-like Rays */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={`petal-${i}`}
                    className="absolute w-2 h-4 left-1/2 -ml-1 origin-bottom"
                    style={{
                      transform: `rotate(${i * 30}deg)`,
                      transformOrigin: "50% 100%",
                    }}
                  >
                    <motion.div
                      className="w-full h-full bg-yellow-300 rounded-full"
                      animate={{
                        scaleY: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.15,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Sun Face */}
              <motion.div
                className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 shadow-lg z-10"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                {/* Eyes Container - Moved up slightly */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ top: "35%" }}>
                  {/* Left Eye */}
                  <motion.div
                    className="absolute w-1.5 h-1.5 -translate-y-1"
                    style={{ left: "25%" }}
                    animate={{
                      scaleY: [1, 0.3, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    {/* Curved Eye Shape */}
                    <div className="w-full h-[2px] bg-amber-900 rounded-full" style={{ transform: "rotate(-10deg)" }} />
                  </motion.div>

                  {/* Right Eye */}
                  <motion.div
                    className="absolute w-1.5 h-1.5 -translate-y-1"
                    style={{ right: "25%" }}
                    animate={{
                      scaleY: [1, 0.3, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    {/* Curved Eye Shape */}
                    <div className="w-full h-[2px] bg-amber-900 rounded-full" style={{ transform: "rotate(10deg)" }} />
                  </motion.div>
                </div>

                {/* Smile - Adjusted position and shape */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[30%]">
                  <motion.div
                    className="relative w-3 h-2"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    {/* Main Smile Line */}
                    <div
                      className="absolute w-full h-[2px] bg-amber-900 rounded-full"
                      style={{ transform: "translateY(-50%) rotate(-5deg)" }}
                    />

                    {/* Smile Curve Overlay */}
                    <div className="absolute w-2 h-1 bg-yellow-400 rounded-full left-1/2 -translate-x-1/2 -top-[2px]" />
                  </motion.div>
                </div>

                {/* Blush Marks - Adjusted position */}
                <div
                  className="absolute left-[20%] bottom-[35%] w-1.5 h-1 bg-red-300/40 rounded-full"
                  style={{ transform: "rotate(-10deg)" }}
                />
                <div
                  className="absolute right-[20%] bottom-[35%] w-1.5 h-1 bg-red-300/40 rounded-full"
                  style={{ transform: "rotate(10deg)" }}
                />
              </motion.div>

              {/* Sparkles */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute w-1 h-1"
                  style={{
                    transform: `rotate(${60 * i}deg) translate(12px, 0)`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <div className="w-full h-full bg-yellow-200 rounded-full" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-8 h-8 flex items-center justify-center"
          >
            {/* Moon Body */}
            <motion.div
              className="relative w-6 h-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              {/* Crescent Shadow */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div
                  className="absolute w-4 h-4 bg-gradient-to-br from-gray-800 to-blue-900 rounded-full"
                  style={{ top: "-10%", right: "-10%" }}
                />
              </div>

              {/* Face */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Sleeping Eyes */}
                <motion.div
                  className="absolute w-4 h-2 top-[40%]"
                  animate={{
                    scaleY: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  {/* Left Eye */}
                  <div
                    className="absolute left-0 w-1.5 h-[2px] bg-blue-900 rounded-full"
                    style={{ transform: "rotate(-10deg)" }}
                  />
                  {/* Right Eye */}
                  <div
                    className="absolute right-0 w-1.5 h-[2px] bg-blue-900 rounded-full"
                    style={{ transform: "rotate(10deg)" }}
                  />
                </motion.div>

                {/* Peaceful Smile */}
                <div className="absolute w-2 h-2 rounded-full top-[55%]">
                  <motion.div
                    className="w-2 h-[2px] bg-blue-900 rounded-full"
                    animate={{
                      scaleX: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                </div>

                {/* Rosy Cheeks */}
                <div className="absolute left-[25%] top-[52%] w-1 h-[2px] bg-pink-300/40 rounded-full" />
                <div className="absolute right-[25%] top-[52%] w-1 h-[2px] bg-pink-300/40 rounded-full" />
              </div>
            </motion.div>

            {/* Stars */}
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute w-1 h-1 bg-blue-100 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}

            {/* Subtle Glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-200/20 blur-md"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-200/30 to-amber-200/30 dark:from-blue-400/20 dark:to-blue-300/20 blur-md"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </motion.button>
  )
}

