"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/LanguageContext"

const routes = {
  en: {
    "/": "/es",
    "/our-agents": "/es/nuestros-agentes",
  },
  es: {
    "/es": "/",
    "/es/nuestros-agentes": "/our-agents",
  },
}

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()

  const toggleDropdown = () => setIsOpen(!isOpen)

  const getTranslatedPath = (targetLang: "en" | "es") => {
    const routeMap = routes[targetLang]
    const currentPath = pathname || "/"
    return routeMap[currentPath as keyof typeof routeMap] || (targetLang === "es" ? "/es" : "/")
  }

  const selectLanguage = (selectedLang: "en" | "es") => {
    setIsOpen(false)
    setLanguage(selectedLang)
    const translatedPath = getTranslatedPath(selectedLang)
    router.push(translatedPath)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 bg-background/5 border border-border backdrop-blur-lg py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-semibold">{language.toUpperCase()}</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="language-menu">
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => selectLanguage("en")}
            >
              English
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => selectLanguage("es")}
            >
              Español
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}

