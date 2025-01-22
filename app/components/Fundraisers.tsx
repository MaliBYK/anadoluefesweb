import { TreeDeciduous, PawPrintIcon as Paw } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Fundraisers() {
  const causes = [
    { name: "Plant a Tree", icon: TreeDeciduous, description: "Help us plant trees and combat climate change" },
    { name: "Feed the Paws", icon: Paw, description: "Provide food for shelter animals" },
  ]

  return (
    <section id="fundraisers" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Support a Cause</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {causes.map((cause, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {<cause.icon className="mr-2" />} {cause.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{cause.description}</CardDescription>
              <Button className="bg-[#1B3F8B] hover:bg-[#00A3E0] text-white">Donate Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

