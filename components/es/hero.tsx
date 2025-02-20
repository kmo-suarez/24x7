"use client"

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <div className="w-full min-h-[600px] bg-white relative overflow-hidden py-12">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row h-full items-center">
          <div className="w-full md:w-1/2 p-4 md:p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Trabajadores digitales, Resultados humanos 24x7.
            </h1>
            <p className="mt-4 text-gray-600 max-w-lg text-sm md:text-base">
              Descubre cómo los agentes de IA de 24xseven están transformando las empresas y redefiniendo la productividad
              con nuestra fuerza laboral virtual de vanguardia.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                Empezar <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                Saber más
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative mt-8 md:mt-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full absolute inset-0 scale-110 md:scale-125 lg:scale-150 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
    </div>
  )
}

