"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

type Mensaje = {
  contenido: string
  remitente: "usuario" | "ia"
}

export function ChatbotDemostracion() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    { contenido: "¡Hola! Soy un agente de IA de demostración. ¿Cómo puedo ayudarte hoy?", remitente: "ia" },
  ])
  const [input, setInput] = useState("")

  const handleEnviar = () => {
    if (input.trim()) {
      setMensajes((prev) => [...prev, { contenido: input, remitente: "usuario" }])
      // Simular respuesta de IA
      setTimeout(() => {
        setMensajes((prev) => [
          ...prev,
          {
            contenido: "Gracias por tu mensaje. Esta es una respuesta de demostración del agente de IA.",
            remitente: "ia",
          },
        ])
      }, 1000)
      setInput("")
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Chatea con nuestro Agente de IA de Demostración</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full pr-4">
          {mensajes.map((mensaje, index) => (
            <div key={index} className={`mb-4 ${mensaje.remitente === "usuario" ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block p-2 rounded-lg ${
                  mensaje.remitente === "usuario" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                {mensaje.contenido}
              </span>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Escribe tu mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleEnviar()}
          />
          <Button onClick={handleEnviar}>Enviar</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

