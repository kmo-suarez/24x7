"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  content: string
  sender: "user" | "ai"
}

export function DemoChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hello! I'm a demo AI agent. How can I assist you today?", sender: "ai" },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { content: input, sender: "user" }])
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { content: "Thank you for your message. This is a demo response from the AI agent.", sender: "ai" },
        ])
      }, 1000)
      setInput("")
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Chat with our Demo AI Agent</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full pr-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block p-2 rounded-lg ${
                  message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                {message.content}
              </span>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

