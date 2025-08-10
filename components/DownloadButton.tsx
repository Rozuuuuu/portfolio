"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

interface DownloadButtonProps {
  className?: string
}

export default function DownloadButton({ className }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const { toast } = useToast()

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // Attempt to fetch the PDF file
      const response = await fetch("/resume.pdf")

      if (!response.ok) {
        throw new Error("Resume file not found")
      }

      // Get the PDF file as a blob
      const blob = await response.blob()

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob)

      // Create a temporary link element
      const link = document.createElement("a")
      link.href = url
      link.download = "LLOYD-C-ROSALES-Resume.pdf" // Updated filename

      // Append to document, click, and cleanup
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      toast({
        title: "Success!",
        description: "Resume downloaded successfully.",
      })
    } catch (error) {
      console.error("Download error:", error)
      toast({
        variant: "destructive",
        title: "Download failed",
        description: "Please try again later or contact the administrator.",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button onClick={handleDownload} className={`btn-gradient ${className}`} disabled={isDownloading}>
      <Download className="w-4 h-4 mr-2" />
      {isDownloading ? "Downloading..." : "Download Resume"}
    </Button>
  )
}

