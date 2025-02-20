import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              24x7
            </Link>
          </div>
          <div className="w-full md:w-auto">
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} 24x7. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

