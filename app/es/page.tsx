import { Layout } from "@/components/layout"
import { Hero } from "@/components/es/hero"
import { PlatformShowcase } from "@/components/es/platform-showcase"
import { DigitalWorkers } from "@/components/es/digital-workers"
import { AudioShowcase } from "@/components/audio-showcase"
import { CallToAction } from "@/components/es/call-to-action"
import { Logos3 } from "@/components/blocks/logos3"

export default function Home() {
  return (
    <Layout language="es">
      <Hero />
      <DigitalWorkers />
      <PlatformShowcase />
      <AudioShowcase
        agentName="Isabella"
        description="Experimenta las sofisticadas habilidades de comunicación de Isabella. Habla con nuestra agente de IA y observa cómo puede entender y responder a tus consultas en tiempo real."
      />
      <Logos3 heading="Empresas que confían en nosotros" />
      <CallToAction />
    </Layout>
  )
}

