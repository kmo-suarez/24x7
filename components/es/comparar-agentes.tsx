import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const comparacionAgentes = [
  {
    name: "Gonza",
    features: ["Auditoría Interna", "Gestión de Riesgos", "Experiencia en Cumplimiento", "Análisis Financiero"],
  },
  {
    name: "Isabella",
    features: [
      "Generación de Leads",
      "Gestión de Pipeline de Ventas",
      "Gestión de Relaciones con Clientes",
      "Análisis de Mercado",
    ],
  },
  {
    name: "David",
    features: [
      "Soporte al Cliente 24/7",
      "Soporte Multilingüe",
      "Resolución de Tickets",
      "Seguimiento de Satisfacción del Cliente",
    ],
  },
]

export function CompararAgentes() {
  const [agentesSeleccionados, setAgentesSeleccionados] = useState<string[]>([])

  const toggleAgente = (nombreAgente: string) => {
    setAgentesSeleccionados((prev) =>
      prev.includes(nombreAgente) ? prev.filter((name) => name !== nombreAgente) : [...prev, nombreAgente].slice(-2),
    )
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Comparar Agentes de IA</h2>
        <div className="flex justify-center gap-4 mb-8">
          {comparacionAgentes.map((agente) => (
            <Button
              key={agente.name}
              onClick={() => toggleAgente(agente.name)}
              variant={agentesSeleccionados.includes(agente.name) ? "default" : "outline"}
            >
              {agente.name}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agentesSeleccionados.map((nombreAgente) => {
            const agente = comparacionAgentes.find((a) => a.name === nombreAgente)
            return (
              <Card key={nombreAgente}>
                <CardHeader>
                  <CardTitle>{nombreAgente}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {agente?.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

