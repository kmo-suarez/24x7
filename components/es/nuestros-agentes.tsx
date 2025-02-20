"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { MoveRight, PhoneCall } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const agentes = [
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
  {
    name: "Hope",
    role: "Contadora y Preparadora de Impuestos",
    description: "Experta en contabilidad financiera y servicios de preparación de impuestos.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-photo-of-a-confident-and-approachable-_o7c3Kkg9R0ycvzHm_Uq48Q_gzbAa3mzTVWfd08Zm3QmQw-cG0j9MKLDJfGeTt3MQAWe8dGAQn4nJ.jpeg",
  },
  {
    name: "Sandy",
    role: "Gerente de Proyectos",
    description: "Supervisa la planificación, ejecución y entrega de proyectos para asegurar resultados exitosos.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-ian-panelo-4999739.jpg-vIXnNyKd8rAaoz92AjrR5ZueC8wKOp.jpeg",
  },
  {
    name: "Nany",
    role: "Especialista en Licitaciones",
    description:
      "Experta en procesos de licitación, desde la preparación de propuestas hasta la negociación de contratos.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a7f1ac4af5f5a703ec5ae1f1db141ff4.jpg-N8MrwtYmi30qg3OwfXdqy33s1vXTpi.jpeg",
  },
  {
    name: "Steve",
    role: "Gerente de Redes Sociales",
    description:
      "Crea contenido atractivo y gestiona la presencia en redes sociales en todas las plataformas con creatividad y visión estratégica.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-hamann-la-338986-1192609.jpg-W9ldUQw7XrKYZcCFMhz4Uvl1JwYr6q.jpeg",
  },
]

const preguntas = [
  {
    pregunta: "¿Cómo se comparan los agentes de IA con los empleados humanos?",
    respuesta:
      "Los agentes de IA ofrecen disponibilidad 24/7, rendimiento consistente y escalabilidad. Sobresalen en tareas repetitivas y análisis de datos. Sin embargo, complementan en lugar de reemplazar a los humanos, ya que los empleados humanos aportan creatividad y habilidades de resolución de problemas complejos.",
  },
  {
    pregunta: "¿Los agentes de IA son capaces de aprender y mejorar con el tiempo?",
    respuesta:
      "Sí, nuestros agentes de IA utilizan algoritmos de aprendizaje automático avanzados para mejorar continuamente su rendimiento. Analizan patrones en los datos, aprenden de las interacciones y refinan sus respuestas con el tiempo.",
  },
  {
    pregunta: "¿Cómo aseguran la seguridad y privacidad de los datos al usar agentes de IA?",
    respuesta:
      "Priorizamos la seguridad y privacidad de los datos. Nuestros agentes de IA operan con encriptación de última generación, controles de acceso y cumplen con regulaciones como GDPR y CCPA. Realizamos auditorías de seguridad y actualizaciones regularmente.",
  },
  {
    pregunta: "¿Pueden los agentes de IA manejar tareas complejas y específicas de la industria?",
    respuesta:
      "Absolutamente. Nuestros agentes de IA están entrenados con grandes cantidades de datos específicos de la industria y pueden personalizarse aún más según las necesidades únicas de tu negocio. Pueden manejar tareas complejas en campos como finanzas, salud y tecnología.",
  },
]

function ContratarAgentesIA() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ["eficientes", "rentables", "escalables", "disponibles 24/7", "multilingües"], [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <section className="w-full bg-gray-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Revoluciona tu negocio con 24x7 <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h2 className="text-4xl md:text-6xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-blue-600">Contrata agentes de IA de 24x7 que son</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h2>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-600 max-w-2xl text-center">
              Transforma tu negocio con los agentes de IA de 24x7. Aumenta la productividad, reduce costos y proporciona
              servicio las 24 horas con nuestra fuerza laboral virtual de vanguardia.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Programa una demo <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Contrata agentes de IA ahora <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function NuestrosAgentes() {
  return (
    <section className="bg-white">
      <ContratarAgentesIA />
      <div className="container mx-auto px-4">
        <div className="pt-24 pb-16">
          <h1 className="text-4xl font-bold text-center mb-12">Nuestros Agentes de IA</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {agentes.map((agente) => (
              <Card key={agente.name} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative w-full h-64">
                    <Image
                      src={agente.image || "/placeholder.svg"}
                      alt={agente.name}
                      layout="fill"
                      objectFit="cover"
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                      loading="lazy"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl mb-2">{agente.name}</CardTitle>
                  <Badge className="mb-4">{agente.role}</Badge>
                  <p className="text-gray-600">{agente.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {preguntas.map((pregunta, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{pregunta.pregunta}</AccordionTrigger>
                  <AccordionContent>{pregunta.respuesta}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

