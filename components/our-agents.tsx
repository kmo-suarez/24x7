"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { MoveRight, PhoneCall } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const agents = [
  {
    name: "Gonza",
    role: "Internal Audit Manager",
    description: "Expert in internal auditing processes and risk management.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-kordanalev-274126666-13758270.jpg-cuf6FCRNUCKSKD1tx368b4LcYsEpDA.jpeg",
  },
  {
    name: "Isabella",
    role: "AI Sales Development Representative",
    description: "Specialized in lead generation and sales pipeline management.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-sound-on-3755924.jpg-6K7o8jAabQL9lSvDByXKvD1xEP2WRV.jpeg",
  },
  {
    name: "David",
    role: "AI Customer Service Representative",
    description: "Provides exceptional customer support and problem resolution.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-newman-photographs-234743505-30419799.jpg-cb1M7IM5aWTYeVGSQkuOVSHwdmLtfe.jpeg",
  },
  {
    name: "Hope",
    role: "Accountant and Tax Preparer",
    description: "Expert in financial accounting and tax preparation services.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-photo-of-a-confident-and-approachable-_o7c3Kkg9R0ycvzHm_Uq48Q_gzbAa3mzTVWfd08Zm3QmQw-cG0j9MKLDJfGeTt3MQAWe8dGAQn4nJ.jpeg",
  },
  {
    name: "Sandy",
    role: "Project Manager",
    description: "Oversees project planning, execution, and delivery to ensure successful outcomes.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-ian-panelo-4999739.jpg-vIXnNyKd8rAaoz92AjrR5ZueC8wKOp.jpeg",
  },
  {
    name: "Nany",
    role: "Bidding Specialist",
    description: "Expert in bidding processes, from proposal preparation to contract negotiation.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a7f1ac4af5f5a703ec5ae1f1db141ff4.jpg-N8MrwtYmi30qg3OwfXdqy33s1vXTpi.jpeg",
  },
  {
    name: "Steve",
    role: "Social Media Manager",
    description:
      "Creates engaging content and manages social media presence across all platforms with creative flair and strategic insight.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-hamann-la-338986-1192609.jpg-W9ldUQw7XrKYZcCFMhz4Uvl1JwYr6q.jpeg",
  },
]

const faqs = [
  {
    question: "How do AI agents compare to human employees?",
    answer:
      "AI agents offer unique advantages such as 24/7 availability, consistent performance, and scalability. They excel at repetitive tasks, data analysis, and can handle multiple interactions simultaneously. However, they complement rather than replace humans, as human employees bring creativity, emotional intelligence, and complex problem-solving skills that AI currently can't match. The ideal workforce combines the strengths of both AI and human employees.",
  },
  {
    question: "Can AI agents learn and improve over time?",
    answer:
      "Absolutely. AI agents utilize machine learning algorithms that allow them to improve their performance through experience. They can analyze patterns in data, learn from interactions, and refine their responses over time. This continuous learning process enables AI agents to become more efficient, accurate, and personalized in their interactions, leading to better outcomes and user experiences.",
  },
  {
    question: "How do you ensure the security and privacy of data when using AI agents?",
    answer:
      "We take data security and privacy very seriously. Our AI agents are designed with privacy-by-design principles, incorporating encryption, access controls, and data minimization practices. We comply with relevant data protection regulations like GDPR and CCPA. All data processing is done on secure, isolated environments, and we regularly conduct security audits and updates. Additionally, we provide transparency about data usage and give users control over their information.",
  },
  {
    question: "What industries can benefit most from AI agents?",
    answer:
      "AI agents can benefit a wide range of industries, but some that stand to gain significantly include: 1) Customer Service, where AI can handle routine inquiries 24/7, 2) Healthcare, for patient triage and administrative tasks, 3) Finance, for fraud detection and personalized financial advice, 4) E-commerce, for personalized shopping experiences and inventory management, 5) Education, for personalized learning and administrative support. However, the potential applications are vast and growing as AI technology continues to advance.",
  },
  {
    question: "How do you measure the performance and ROI of AI agents?",
    answer:
      "We use a combination of quantitative and qualitative metrics to measure AI agent performance and ROI. Quantitative metrics include response time, resolution rate, customer satisfaction scores, and operational cost savings. Qualitative measures involve analyzing the quality of interactions, the complexity of resolved issues, and the ability to handle nuanced situations. We also track long-term indicators like customer retention rates and employee satisfaction. ROI is calculated by comparing these benefits against the total cost of implementing and maintaining the AI system.",
  },
]

function HireAIAgents() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ["efficient", "cost-effective", "scalable", "24/7 available", "multilingual"], [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <section className="w-full bg-gray-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Revolutionize your business with 13-x <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h2 className="text-4xl md:text-6xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-blue-600">Hire 13-x AI agents that are</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h2>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-600 max-w-2xl text-center">
              Transform your business with 13-x's AI agents. Boost productivity, reduce costs, and provide
              round-the-clock service with our cutting-edge virtual workforce.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Schedule a demo <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Hire AI agents now <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function OurAgents() {
  return (
    <section className="bg-white">
      <HireAIAgents />
      <div className="container mx-auto px-4">
        <div className="pt-24 pb-16">
          <h1 className="text-4xl font-bold text-center mb-12">Our AI Agents</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {agents.map((agent) => (
              <Card key={agent.name} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative w-full h-64">
                    <Image
                      src={agent.image || "/placeholder.svg"}
                      alt={agent.name}
                      layout="fill"
                      objectFit="cover"
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                      loading="lazy"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl mb-2">{agent.name}</CardTitle>
                  <Badge className="mb-4">{agent.role}</Badge>
                  <p className="text-gray-600">{agent.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

