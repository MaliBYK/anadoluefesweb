import { Gamepad2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Games() {
  const games = [
    { name: "Bira Tabusu", description: "Belirli terimleri kullanmadan bira ile ilgili kelimeyi tahmin et" },
    {
      name: "Hoppy Kelime Zinciri",
      description: "Her biri bir önceki kelimenin son harfiyle başlayan kelimelerden oluşan bir zincir oluşturun",
    },
  ]

  return (
    <section id="games" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Eğlenceli Oyunlar</h2>
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