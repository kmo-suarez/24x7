"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function SalesWorkflow() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="secondary" className="mb-4">
            11x Platform
          </Badge>
          <h2 className="text-4xl font-bold mb-4">From prospecting to closing: All-in-one</h2>
          <p className="text-gray-600 mb-6">Turn your prospects from MQLs to Closed Won.</p>
          <Button variant="default" size="lg" className="rounded-full">
            Get started
          </Button>
        </div>

        {/* Platform Features */}
        <Tabs
          defaultValue="identify"
          className="space-y-8"
          onValueChange={(value) => console.log("Tab changed:", value)}
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0">
            {["identify", "research", "personalize", "engage"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-3 px-4 capitalize text-gray-600 hover:text-gray-900"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="identify" className="mt-6">
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Identify</h3>
                  <p className="text-gray-600 mb-4">
                    Identify perfect-fit prospects at scale, filtering millions of signals to surface your ideal
                    opportunities across every channel.
                  </p>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2bltvpPitI9Be9T8AfX1KexwbDxrXu.png"
                    alt="Platform Interface - Identify"
                    width={800}
                    height={500}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="space-y-4">
                  <FeaturePoint
                    title="Smart Filtering"
                    description="Advanced algorithms to identify high-potential prospects"
                  />
                  <FeaturePoint
                    title="Multi-channel Tracking"
                    description="Monitor engagement across all communication channels"
                  />
                  <FeaturePoint
                    title="Automated Scoring"
                    description="AI-powered lead scoring based on multiple signals"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="research" className="mt-6">
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Research</h3>
                  <p className="text-gray-600 mb-4">
                    Research prospect signals across social, public, and engagement data to craft winning strategies.
                  </p>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9E4mJTvrI0QA3VPkwEvCN2bjJk6ANX.png"
                    alt="Platform Interface - Research"
                    width={800}
                    height={500}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="space-y-4">
                  <FeaturePoint
                    title="Comprehensive Prospect Profiles"
                    description="Access detailed information including company size, revenue, and growth metrics"
                  />
                  <FeaturePoint
                    title="Engagement Tracking"
                    description="Monitor website visits, content interactions, and communication history"
                  />
                  <FeaturePoint
                    title="Signal Analysis"
                    description="Identify buying intent through AI-powered signal analysis"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="personalize" className="mt-6">
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Personalize</h3>
                  <p className="text-gray-600 mb-4">
                    Calibrate conversations with precision, dynamically adapting tone and messaging to match each
                    prospect's unique style.
                  </p>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0EqETPvmLFn1Riv5ZYtf1Wh9dVT0ng.png"
                    alt="Platform Interface - Personalize"
                    width={800}
                    height={500}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="space-y-4">
                  <FeaturePoint
                    title="Smart Personalization"
                    description="AI-powered content customization based on prospect data and behavior"
                  />
                  <FeaturePoint
                    title="Case Study Sharing"
                    description="Seamlessly share relevant customer success stories and use cases"
                  />
                  <FeaturePoint
                    title="Voice Messaging"
                    description="Personalized audio messages with real-time transcription"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="engage" className="mt-6">
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Engage</h3>
                  <p className="text-gray-600 mb-4">
                    Convert opportunities through multi-channel engagement, executing follow-through from interaction to
                    outcomes.
                  </p>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QfjpxtUKyEMk5q3onxxuHqotWt9JAF.png"
                    alt="Platform Interface - Engage"
                    width={800}
                    height={500}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="space-y-4">
                  <FeaturePoint
                    title="Multi-channel Outreach"
                    description="Coordinated engagement across all channels"
                  />
                  <FeaturePoint title="Performance Analytics" description="Real-time engagement metrics and insights" />
                  <FeaturePoint title="Automated Follow-up" description="Smart scheduling of follow-up actions" />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function FeaturePoint({ title, description }: { title: string; description: string }) {
  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

