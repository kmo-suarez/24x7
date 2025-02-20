"use client"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import Image from "next/image"

export function PlatformShowcase() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Revoluciona tu flujo de trabajo con <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">Agentes de IA</span>
            </h1>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-8 p-4">
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-border/50 shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Boomi-AI-Agents-Expansion_Image-1-2048x1229.png-PGXcL72k2OCBp3PN5bigFr4SobSnQf.webp"
              alt="Interfaz de creación de datahub impulsada por IA que muestra el flujo de trabajo de integración del sistema"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </ContainerScroll>
    </div>
  )
}

