import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do AI agents compare to human employees?",
    answer:
      "AI agents offer 24/7 availability, consistent performance, and scalability. They excel at repetitive tasks and data analysis. However, they complement rather than replace humans, as human employees bring creativity and complex problem-solving skills.",
  },
  {
    question: "Are AI agents capable of learning and improving over time?",
    answer:
      "Yes, our AI agents use advanced machine learning algorithms to continuously improve their performance. They analyze patterns in data, learn from interactions, and refine their responses over time.",
  },
  {
    question: "How do you ensure data security and privacy when using AI agents?",
    answer:
      "We prioritize data security and privacy. Our AI agents operate with state-of-the-art encryption, access controls, and comply with regulations like GDPR and CCPA. We regularly conduct security audits and updates.",
  },
  {
    question: "Can AI agents handle complex, industry-specific tasks?",
    answer:
      "Absolutely. Our AI agents are trained on vast amounts of industry-specific data and can be further customized to your unique business needs. They can handle complex tasks in fields like finance, healthcare, and technology.",
  },
]

export function FAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

