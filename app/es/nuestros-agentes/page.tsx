import { Layout } from "@/components/layout"
import { NuestrosAgentes } from "@/components/es/nuestros-agentes"

export default function NuestrosAgentesPage() {
  return (
    <Layout language="es">
      <main className="min-h-screen bg-white">
        <NuestrosAgentes />
      </main>
    </Layout>
  )
}

