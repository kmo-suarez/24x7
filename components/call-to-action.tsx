"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MoveRight, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CallToAction() {
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

