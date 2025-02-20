import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, DollarSign, Clock, Brain, Zap, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
// import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"

const agents = [
  {
    name: "Gonza",
    role: "Internal Audit Manager",
    description:
      "Expert in internal auditing processes and risk management, ensuring compliance and operational excellence.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-kordanalev-274126666-13758270.jpg-cuf6FCRNUCKSKD1tx368b4LcYsEpDA.jpeg",
  },
  {
    name: "Isabella",
    role: "AI Sales Development Representative",
    description:
      "Specialized in lead generation and sales pipeline management, driving revenue growth through intelligent prospecting.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-sound-on-3755924.jpg-6K7o8jAabQL9lSvDByXKvD1xEP2WRV.jpeg",
  },
  {
    name: "David",
    role: "AI Customer Service Representative",
    description: "Delivers exceptional customer support and problem resolution, ensuring high satisfaction rates 24/7.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-newman-photographs-234743505-30419799.jpg-cb1M7IM5aWTYeVGSQkuOVSHwdmLtfe.jpeg",
  },
]

const features = [
  {
    Icon: DollarSign,
    name: "Cost-Effective",
    description:
      "Significantly reduce operational costs while maintaining premium service quality across all business functions. Our AI agents deliver enterprise-grade performance at a fraction of traditional costs.",
    href: "/pricing",
    cta: "View pricing",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-50" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Clock,
    name: "24/7 Availability",
    description:
      "Our AI agents work around the clock, ensuring continuous service delivery without shifts or overtime. Experience uninterrupted operations and global coverage.",
    href: "/features",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Brain,
    name: "Continuous Learning",
    description:
      "AI agents that evolve and improve through each interaction, leveraging advanced machine learning to become more efficient and effective over time.",
    href: "/technology",
    cta: "Explore technology",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-50" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: MessageCircle,
    name: "Multi-Channel Support",
    description:
      "Seamless communication across email, chat, voice, and social media platforms. Provide consistent, high-quality engagement on every channel your customers prefer.",
    href: "/channels",
    cta: "View channels",
    background: <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-pink-100 opacity-50" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: Zap,
    name: "Instant Scaling",
    description:
      "Scale your operations up or down instantly based on demand, without traditional hiring constraints. Adapt to market changes with unprecedented agility.",
    href: "/scaling",
    cta: "Learn about scaling",
    background: <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-50" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Shield,
    name: "Advanced Security",
    description:
      "Enterprise-grade security and compliance guaranteed. Our AI agents operate with state-of-the-art data protection and adhere to global regulatory standards.",
    href: "/security",
    cta: "View security measures",
    background: <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-50" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
  },
]

export function DigitalWorkers() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4">Our AI Agents: Your New Workforce</h2>
        <p className="text-gray-600 mb-6">
          Transform your business with our AI agents. They work 24/7, learn continuously, and deliver consistent,
          high-quality service at a fraction of traditional costs. Experience the future of work today.
        </p>
        <Button variant="default" size="lg" asChild>
          <Link href="/contact">Start hiring now</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        {agents.slice(0, 2).map((agent) => (
          <div key={agent.name} className="space-y-4">
            <Card className="relative aspect-[4/5] overflow-hidden bg-[#e5d5c5]">
              <Image
                src={agent.image || "/placeholder.svg"}
                alt={
                  agent.name === "Gonza"
                    ? "Gonza, Internal Audit Manager, a professional-looking man in a suit"
                    : agent.name === "Isabella"
                      ? "Isabella, AI Sales Development Representative, a confident woman in business attire"
                      : "David, AI Customer Service Representative, a friendly-looking man with a headset"
                }
                width={600}
                height={800}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white bg-black/50 px-2 py-1 rounded-full">
                  Available for hire
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <MessageCircle className="text-blue-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">{agent.name}</p>
                    <p className="text-white/80 text-sm">{agent.role}</p>
                  </div>
                </div>
              </div>
            </Card>
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                {agent.name} <span className="text-gray-600 font-normal">– {agent.role}</span>
              </h3>
              <p className="text-gray-600 mt-2 mb-4">{agent.description}</p>
              <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
                Hire {agent.name}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Why Hire Our AI Agents?</h3>
        <BentoGrid className="lg:grid-rows-3 max-w-6xl mx-auto">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>

      {/* <Testimonials /> */}
      <FAQ />
    </section>
  )
}

