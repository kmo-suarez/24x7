"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "./button"
import { LanguageSelector } from "./language-selector"

export function AuthNavbar({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 right-6 z-50 flex items-center gap-4"
    >
      <LanguageSelector />
      <div className="flex items-center gap-2 bg-background/5 border border-border backdrop-blur-lg py-2 px-4 rounded-full shadow-lg">
        <Link href="/login">
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary/90">
            Sign In
          </Button>
        </Link>
        <Link href="/waitlist">
          <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Sign Up
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

