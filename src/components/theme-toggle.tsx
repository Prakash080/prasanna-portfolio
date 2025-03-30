"use client"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { MoonStar, SunMoon } from "lucide-react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full border-[#D2AC58]"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={theme === "dark" ? "dark" : "light"}
      >
        {theme === "dark" ? <SunMoon className="h-5 w-5 text-gold" /> : <MoonStar className="h-5 w-5 text-gold" />}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

