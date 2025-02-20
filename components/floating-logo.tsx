"use client"

import { Mountain } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function FloatingLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-6 z-50"
    >
      <Link
        href="/"
        className="flex items-center gap-2 bg-background/5 border border-border backdrop-blur-lg py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <Mountain className="h-6 w-6" />
        <span className="text-2xl font-bold">24x7</span>
      </Link>
    </motion.div>
  )
}

