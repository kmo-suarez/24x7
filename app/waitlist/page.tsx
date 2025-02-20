import { BackgroundBeams } from "@/components/ui/background-beams"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function WaitlistPage() {
  return (
    <div className="h-screen w-full bg-white relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl text-gray-900 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Be the first to experience our revolutionary AI agents platform. Sign up now for early access and exclusive
          updates.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-4 relative z-10">
          <Input type="email" placeholder="Enter your email" className="w-full md:w-auto flex-grow" />
          <Button>Join Waitlist</Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

