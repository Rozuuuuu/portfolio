import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#121212] text-gray-800 dark:text-white py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">Let's create something together</p>
            <a href="mailto:code.with.lloyd@gmail.com" className="text-blue-500 hover:text-blue-400 transition-colors">
              code.with.lloyd@gmail.com
            </a>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/Rozuuuuu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/lloyd-rosales-a72b9730b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/llydrls"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="transform scale-90">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Lloyd Rosales. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

