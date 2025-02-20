"use client"

import { Timeline } from "@/components/ui/timeline"
import Image from "next/image"

export function AIEvolution() {
  const timelineData = [
    {
      title: "1950s",
      content: (
        <div>
          <p className="text-gray-900 text-xs md:text-sm font-normal mb-8">
            The birth of AI as a field. The Turing Test was proposed, and the first AI programs were created, including
            logic theorist and general problem solver.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_3KoQ22n6444LQr0K.jpg-fhvpMOdyecJtWwGgzRhY0IwQeInQay.jpeg"
              alt="Alan Turing and his famous quote about machine thinking"
              width={600}
              height={400}
              className="rounded-lg object-cover h-auto w-full shadow-lg"
            />
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Key Developments</h4>
              <ul className="list-disc list-inside text-gray-600 text-xs md:text-sm">
                <li>Turing Test (1950)</li>
                <li>Logic Theorist (1956)</li>
                <li>General Problem Solver (1957)</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "1980s-90s",
      content: (
        <div>
          <p className="text-gray-900 text-xs md:text-sm font-normal mb-8">
            The rise of expert systems and neural networks. Machine learning began to show practical applications in
            various fields, with significant advances in computer chess and expert systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/professor.jpg-LZKHmdXFZQoXY9ikNcb0CNUfJ8fifp.jpeg"
              alt="Computer scientist working with IBM 7090 mainframe computer playing chess"
              width={600}
              height={400}
              className="rounded-lg object-cover h-auto w-full shadow-lg"
            />
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Breakthroughs</h4>
              <ul className="list-disc list-inside text-gray-600 text-xs md:text-sm">
                <li>Expert Systems</li>
                <li>Neural Networks Revival</li>
                <li>Machine Learning Applications</li>
                <li>Advanced Computer Chess Programs</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2010s",
      content: (
        <div>
          <p className="text-gray-900 text-xs md:text-sm font-normal mb-8">
            Deep learning revolution. AI achieved human-level performance in various tasks, with the historic victory of
            AlphaGo over world champion Lee Sedol marking a significant milestone in artificial intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_88738430_pic1go.jpg-s413S1TUwi0DeIm6akmhDCmMIYVd4g.jpeg"
              alt="AlphaGo vs Lee Sedol historic Go match"
              width={600}
              height={400}
              className="rounded-lg object-cover h-auto w-full shadow-lg"
            />
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Major Achievements</h4>
              <ul className="list-disc list-inside text-gray-600 text-xs md:text-sm">
                <li>AlphaGo Defeats World Champion (2016)</li>
                <li>GPT Language Models</li>
                <li>Deep Learning Breakthroughs</li>
                <li>Computer Vision Advances</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-gray-900 text-xs md:text-sm font-normal mb-8">
            GPT-3 is launched, marking a milestone in natural language generation. AI models begin to show surprising
            capabilities in understanding and generating text.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg-HwedJ20RaFXLvoyrhRi0Zg0UzD0B9Q.jpeg"
              alt="Artistic visualization of GPT-3's language processing capabilities"
              width={600}
              height={400}
              className="rounded-lg object-cover h-auto w-full shadow-lg"
            />
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Key Advances</h4>
              <ul className="list-disc list-inside text-gray-600 text-xs md:text-sm">
                <li>Launch of GPT-3</li>
                <li>Improvements in machine translation</li>
                <li>More advanced virtual assistants</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-gray-900 text-xs md:text-sm font-normal mb-8">
            La IA demuestra avances significativos en el campo médico y el diagnóstico por imagen, mientras que DALL-E y
            otros modelos de generación de imágenes revolucionan la creación artística con IA.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_422714256-RQhorF7ziCmgKoehrdFAZZJ56U8NlX.jpeg"
              alt="AI-powered medical imaging diagnostics"
              width={600}
              height={400}
              className="rounded-lg object-cover h-auto w-full shadow-lg"
            />
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Innovaciones</h4>
              <ul className="list-disc list-inside text-gray-600 text-xs md:text-sm">
                <li>IA avanzada en diagnóstico médico</li>
                <li>DALL-E: IA generativa para imágenes</li>
                <li>Avances en descubrimiento de fármacos</li>
                <li>Mejoras en análisis de imágenes médicas</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-gray-900 text-xs md:text-sm font-normal mb-8">
            Los agentes de IA emergen como una nueva frontera, integrándose en múltiples aspectos de la vida cotidiana y
            empresarial. Desde la automatización del comercio electrónico hasta la atención médica, los agentes de IA
            demuestran su versatilidad y capacidad para realizar tareas complejas de manera autónoma.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images.jfif-GNxcRJTPVSQslcy0Bd5M64iisMoSJt.jpeg"
              alt="Advanced AI agent representation showing the merger of human-like intelligence with technology"
              width={600}
              height={400}
              className="rounded-lg object-cover h-auto w-full shadow-lg"
            />
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Avances en Agentes de IA</h4>
              <ul className="list-disc list-inside text-gray-600 text-xs md:text-sm">
                <li>Automatización de procesos empresariales</li>
                <li>Integración en hogares inteligentes</li>
                <li>Soporte al cliente 24/7</li>
                <li>Gestión de cadena de suministro</li>
                <li>Marketing de contenido personalizado</li>
                <li>Asistencia en atención médica</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Future",
      content: (
        <div>
          <p className="text-gray-900 text-xs md:text-sm font-normal mb-8">
            El futuro de la IA se entrelaza con la computación cuántica, prometiendo avances revolucionarios en
            capacidad de procesamiento y resolución de problemas complejos. Los agentes de IA evolucionarán para
            convertirse en colaboradores integrales en diversos campos, desde la investigación científica hasta la
            gestión empresarial y la creatividad.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GettyImages-2156615862.jpg-KzUazrAZYys6lo2aKNXDPhxRADFO6A.jpeg"
              alt="Quantum processor representing the future of AI computing"
              width={600}
              height={400}
              className="rounded-lg object-cover h-auto w-full shadow-lg"
            />
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Desarrollos Potenciales</h4>
              <ul className="list-disc list-inside text-gray-600 text-xs md:text-sm">
                <li>Integración de IA con computación cuántica</li>
                <li>Agentes de IA con consciencia y ética</li>
                <li>Colaboración humano-IA sin precedentes</li>
                <li>Resolución de problemas complejos mediante IA cuántica</li>
                <li>Avances en medicina personalizada</li>
                <li>Innovación sostenible y cambio climático</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen w-full bg-white">
      <Timeline data={timelineData} />
    </div>
  )
}

