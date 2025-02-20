"use client"

import type React from "react"
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext"
import { Layout } from "@/components/layout"
import { Footer } from "@/components/ui/footer"

export function LanguageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LanguageAwareLayout>{children}</LanguageAwareLayout>
    </LanguageProvider>
  )
}

function LanguageAwareLayout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()
  return (
    <>
      <Layout language={language}>{children}</Layout>
      <Footer />
    </>
  )
}

