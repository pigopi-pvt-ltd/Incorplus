import { useEffect, useState } from "react"

export default function DarkModeToggle() {
  // Initialize state based on localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      )
    }
    return false
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (isDark) {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-zinc-800 text-gray-800 cursor-pointer dark:text-zinc-200 transition-all shadow-md"
    >
      {isDark ? "🌙 Night" : "☀️ Day"}
    </button>
  )
}
