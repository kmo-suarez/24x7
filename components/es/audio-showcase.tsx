"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Pause } from "lucide-react"

interface AudioPlayerProps {
  agentName: string
  description: string
  audioSrc: string
  waveformColor?: string
}

function AudioPlayer({ agentName, description, audioSrc, waveformColor = "#B8977E" }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <Card className="p-8 bg-white/80 backdrop-blur-md shadow-lg border-0">
      <h2 className="text-3xl font-bold mb-4 text-black">Escucha a {agentName}</h2>
      <p className="text-gray-700 mb-6">{description}</p>

      <div className="relative bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
        <div className="flex items-center justify-center">
          <Button
            onClick={togglePlay}
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full bg-black/10 hover:bg-black/20 text-black"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
          </Button>
        </div>

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='waveform' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 10 L20 10 M10 0 L10 20' stroke='${encodeURIComponent(waveformColor)}' stroke-width='2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23waveform)'/%3E%3C/svg%3E")`,
          }}
        />

        <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} className="hidden" />
      </div>

      <Button variant="default" className="w-full bg-black hover:bg-black/90 text-white">
        Empezar
      </Button>
    </Card>
  )
}

export function AudioShowcase() {
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
          <AudioPlayer
            agentName="Isabella"
            description="Isabella participa en conversaciones naturales y profesionales centradas en comprender las necesidades del cliente y generar resultados comerciales. Experimenta sus sofisticadas habilidades de comunicación."
            audioSrc="/isabella-demo-es.mp3"
            waveformColor="#000000"
          />
        </div>
      </div>
    </section>
  )
}

