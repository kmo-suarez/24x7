import Image from "next/image"
import { Card } from "@/components/ui/card"

export function CEOMessage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="max-w-4xl mx-auto p-8 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 relative rounded-full overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1725893802808.jfif-IWw0vgLD9F1e577VkYmIs906KKhpwW.jpeg"
              alt="Kmo Suarez - CEO of 24x7"
              fill
              className="object-cover"
              sizes="(max-width: 128px) 100vw, 128px"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">A Message from Our CEO</h2>
            <blockquote className="text-gray-600 italic mb-4">
              "At 24x7, we're not just building AI agents – we're shaping the future of work. Our mission is to empower
              businesses with intelligent digital workers that deliver real value. We believe in creating AI solutions
              that are not only powerful but also accessible and ethical, ensuring that the benefits of AI reach
              businesses of all sizes."
            </blockquote>
            <p className="font-semibold">Kmo Suarez, CEO of 24x7</p>
          </div>
        </div>
      </Card>
    </section>
  )
}

