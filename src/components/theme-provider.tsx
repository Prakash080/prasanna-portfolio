"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
})

interface ThemeProviderProps {
  attribute: string
  defaultTheme: Theme
  enableSystem: boolean
  disableTransitionOnChange: boolean
  children: ReactNode
}

export function ThemeProvider({
  attribute,
  defaultTheme,
  enableSystem,
  disableTransitionOnChange,
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as Theme | null
      if (storedTheme) {
        return storedTheme
      } else if (enableSystem) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      }
    }
    return defaultTheme
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme)
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}

