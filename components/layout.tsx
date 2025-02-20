import { NavBar } from "@/components/ui/tubelight-navbar"
import { AuthNavbar } from "@/components/ui/auth-navbar"
import { FloatingLogo } from "@/components/floating-logo"
import type React from "react"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <FloatingLogo />
      <NavBar />
      <AuthNavbar />
      <main className="flex-grow">{children}</main>
    </div>
  )
}

