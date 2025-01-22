import { Gamepad2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Games() {
  const games = [
    { name: "Beer Taboo", description: "Guess the beer-related word without using certain terms" },
    {
      name: "Hoppy Word Chain",
      description: "Create a chain of words, each starting with the last letter of the previous word",
    },
  ]

  return (
    <section id="games" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Fun Games</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {games.map((game, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gamepad2 className="mr-2" /> {game.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{game.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

