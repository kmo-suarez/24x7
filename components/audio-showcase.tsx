"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AIVoiceInput } from "@/components/ui/ai-voice-input"

interface AudioShowcaseProps {
  agentName: string
  description: string
  waveformColor?: string
}

export function AudioShowcase({ agentName, description, waveformColor = "#000000" }: AudioShowcaseProps) {
  const [recordings, setRecordings] = useState<{ duration: number; timestamp: Date }[]>([])

  const handleStop = useCallback((duration: number) => {
    setRecordings((prev) => [...prev.slice(-4), { duration, timestamp: new Date() }])
  }, [])

  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center py-16"
      style={{
        backgroundImage:
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-juanpphotoandvideo-1242348.jpg-KgBQLqaMKjxVSgAkldAGl9tVfDxPZC.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-white/80 backdrop-blur-md shadow-lg border-0">
            <h2 className="text-3xl font-bold mb-4 text-black">Interact with {agentName}</h2>
            <p className="text-gray-700 mb-6">{description}</p>

            <AIVoiceInput
              onStart={() => console.log("Recording started")}
              onStop={handleStop}
              visualizerBars={48}
              className="mb-6"
            />

            <Button variant="default" className="w-full bg-black hover:bg-black/90 text-white">
              Get started
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}

