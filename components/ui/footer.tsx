import Link from "next/link"
import { Mountain, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Brand Section */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Mountain className="h-8 w-8" />
            <span className="text-2xl font-bold">24x7</span>
          </Link>
        </div>

        {/* Quicklinks Section */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Quicklinks</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/company" className="text-gray-600 hover:text-gray-900">
                Company
              </Link>
            </li>
            <li>
              <Link href="/agents" className="text-gray-600 hover:text-gray-900">
                Our Agents
              </Link>
            </li>
            <li>
              <Link href="/security" className="text-gray-600 hover:text-gray-900">
                Security
              </Link>
            </li>
          </ul>
        </div>

        {/* Workers Section */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Our AI Workers</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/agents/gonza" className="text-gray-600 hover:text-gray-900">
                Gonza
              </Link>
            </li>
            <li>
              <Link href="/agents/isabella" className="text-gray-600 hover:text-gray-900">
                Isabella
              </Link>
            </li>
            <li>
              <Link href="/agents/david" className="text-gray-600 hover:text-gray-900">
                David
              </Link>
            </li>
            <li>
              <Link href="/agents/hope" className="text-gray-600 hover:text-gray-900">
                Hope
              </Link>
            </li>
            <li>
              <Link href="/agents/sandy" className="text-gray-600 hover:text-gray-900">
                Sandy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Contact</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900">Bogotá</h4>
              <p className="text-gray-600">Avkr 19 No 97 31</p>
              <p className="text-gray-600">Tel: (+57) 300 760 2388</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
              Terms & Conditions
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" className="text-gray-600 hover:text-gray-900">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>

          <div className="text-sm text-gray-600">© All rights reserved 2024 24x7 AI Inc.</div>
        </div>
      </div>
    </footer>
  )
}

