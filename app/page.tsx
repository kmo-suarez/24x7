import { Layout } from "@/components/layout"
import { Hero } from "@/components/hero"
import { PlatformShowcase } from "@/components/platform-showcase"
import { DigitalWorkers } from "@/components/digital-workers"
import { AudioShowcase } from "@/components/audio-showcase"
import { CallToAction } from "@/components/call-to-action"
import { Logos3 } from "@/components/blocks/logos3"

export default function Home() {
  return (
    <Layout language="en">
      <Hero />
      <DigitalWorkers />
      <PlatformShowcase />
      <AudioShowcase
        agentName="Isabella"
        description="Experience Isabella's sophisticated communication skills. Speak with our AI agent and see how she can understand and respond to your queries in real-time."
      />
      <Logos3 />
      <CallToAction />
    </Layout>
  )
}

