import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, DollarSign, Clock, Brain, Zap, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

const agents = [
  {
    name: "Gonza",
    role: "Gerente de Auditoría Interna",
    description: "Experto en procesos de auditoría interna y gestión de riesgos.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-kordanalev-274126666-13758270.jpg-cuf6FCRNUCKSKD1tx368b4LcYsEpDA.jpeg",
  },
  {
    name: "Isabella",
    role: "Representante de Desarrollo de Ventas IA",
    description: "Especializada en generación de leads y gestión de pipeline de ventas.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-sound-on-3755924.jpg-6K7o8jAabQL9lSvDByXKvD1xEP2WRV.jpeg",
  },
  {
    name: "David",
    role: "Representante de Servicio al Cliente IA",
    description: "Proporciona un soporte al cliente excepcional y resolución de problemas.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-newman-photographs-234743505-30419799.jpg-cb1M7IM5aWTYeVGSQkuOVSHwdmLtfe.jpeg",
  },
  // ... (otros agentes)
]

const features = [
  {
    Icon: DollarSign,
    name: "Rentable",
    description:
      "Reduce los costos operativos mientras mantienes un servicio de alta calidad en todas las funciones del negocio.",
    href: "/es/precios",
    cta: "Ver precios",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-50" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Clock,
    name: "Disponible 24/7",
    description:
      "Nuestros agentes de IA trabajan sin descanso, asegurando un servicio continuo sin turnos ni horas extras.",
    href: "/es/caracteristicas",
    cta: "Saber más",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Brain,
    name: "Aprendizaje Continuo",
    description:
      "Agentes de IA que evolucionan y mejoran con cada interacción, volviéndose más eficientes con el tiempo.",
    href: "/es/tecnologia",
    cta: "Explorar tecnología",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-50" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: MessageCircle,
    name: "Soporte Multicanal",
    description: "Comunicación fluida a través de email, chat, voz y redes sociales.",
    href: "/es/canales",
    cta: "Ver canales",
    background: <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-pink-100 opacity-50" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: Zap,
    name: "Escalabilidad Instantánea",
    description:
      "Escala tus operaciones al instante según la demanda, sin las limitaciones tradicionales de contratación.",
    href: "/es/escalabilidad",
    cta: "Aprende sobre escalabilidad",
    background: <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-50" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Shield,
    name: "Seguridad Avanzada",
    description:
      "Protección de datos y cumplimiento normativo garantizado con los más altos estándares de seguridad del mercado.",
    href: "/es/seguridad",
    cta: "Ver medidas de seguridad",
    background: <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-50" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
  },
]

export function DigitalWorkers() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4">Nuestros Agentes de IA: Tu Nueva Fuerza Laboral</h2>
        <p className="text-gray-600 mb-6">
          Contrata a nuestros agentes de IA para transformar tu negocio. Trabajan 24/7, aprenden continuamente y
          proporcionan un servicio consistente y de alta calidad a una fracción del costo.
        </p>
        <Button variant="default" size="lg" asChild>
          <Link href="/contact">Empieza a contratar ahora</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        {agents.slice(0, 2).map((agent) => (
          <div key={agent.name} className="space-y-4">
            <Card className="relative aspect-[4/5] overflow-hidden bg-[#e5d5c5]">
              <Image
                src={agent.image || "/placeholder.svg"}
                alt={agent.name}
                width={600}
                height={800}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white bg-black/50 px-2 py-1 rounded-full">
                  Disponible para contratar
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
                Contratar a {agent.name}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8 text-center">¿Por qué contratar nuestros Agentes de IA?</h3>
        <BentoGrid className="lg:grid-rows-3 max-w-6xl mx-auto">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

