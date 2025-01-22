import { Utensils, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AIFoodPairing() {
  const pairings = [
    {
      beer: "Ephesus IPA",
      appetizer: "Spicy Chicken Wings",
      kcal: 450,
      allergens: ["Gluten", "Soy"],
    },
    {
      beer: "Ephesus Stout",
      appetizer: "Chocolate Truffles",
      kcal: 300,
      allergens: ["Dairy", "Soy"],
    },
  ]

  return (
    <section id="pairing" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">AI-Recommended Food Pairings</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {pairings.map((pairing, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{pairing.beer}</CardTitle>
              <CardDescription>Paired with {pairing.appetizer}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="flex items-center">
                <Utensils className="mr-2" /> {pairing.kcal} kcal
              </p>
              <p className="flex items-center mt-2">
                <AlertTriangle className="mr-2" />
                Allergens: {pairing.allergens.join(", ")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

