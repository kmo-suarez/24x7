import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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

export function PreguntasFrecuentes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {preguntas.map((pregunta, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{pregunta.pregunta}</AccordionTrigger>
              <AccordionContent>{pregunta.respuesta}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

