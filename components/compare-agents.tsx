import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const agentComparison = [
  {
    name: "Gonza",
    features: ["Internal Auditing", "Risk Management", "Compliance Expertise", "Financial Analysis"],
  },
  {
    name: "Isabella",
    features: ["Lead Generation", "Sales Pipeline Management", "Customer Relationship Management", "Market Analysis"],
  },
  {
    name: "David",
    features: ["24/7 Customer Support", "Multi-lingual Support", "Ticket Resolution", "Customer Satisfaction Tracking"],
  },
]

export function CompareAgents() {
  const [selectedAgents, setSelectedAgents] = useState<string[]>([])

  const toggleAgent = (agentName: string) => {
    setSelectedAgents((prev) =>
      prev.includes(agentName) ? prev.filter((name) => name !== agentName) : [...prev, agentName].slice(-2),
    )
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Compare AI Agents</h2>
        <div className="flex justify-center gap-4 mb-8">
          {agentComparison.map((agent) => (
            <Button
              key={agent.name}
              onClick={() => toggleAgent(agent.name)}
              variant={selectedAgents.includes(agent.name) ? "default" : "outline"}
            >
              {agent.name}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selectedAgents.map((agentName) => {
            const agent = agentComparison.find((a) => a.name === agentName)
            return (
              <Card key={agentName}>
                <CardHeader>
                  <CardTitle>{agentName}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {agent?.features.map((feature, index) => (
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

