"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className="fixed top-3 right-4 z-50">
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="p-2 rounded-full"
      >
        {theme === "dark" ? (
          <div className=" transition-all duration-700">
             ion see nun
          </div>
        ) : (
          <div className=" transition-all duration-700">
             ts too bright
          </div>
        )}
      </button>
    </div>
  )
}
