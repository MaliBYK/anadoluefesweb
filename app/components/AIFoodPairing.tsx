import { Utensils, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AIFoodPairing() {
  const pairings = [
    {
      beer: "Ephesus IPA",
      appetizer: "Baharatlı Tavuk Kanatları",
      kcal: 450,
      allergens: ["Gluten", "Soya"],
    },
    {
      beer: "Ephesus Stout",
      appetizer: "Çikolata Trüfleri",
      kcal: 300,
      allergens: ["Süt", "Soya"],
    },
  ]

  return (
    <section id="pairing" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Yapay Zeka Önerili Yemek Eşleşmeleri</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {pairings.map((pairing, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{pairing.beer}</CardTitle>
              <CardDescription>{pairing.appetizer} ile eşleştirildi</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="flex items-center">
                <Utensils className="mr-2" /> {pairing.kcal} kcal
              </p>
              <p className="flex items-center mt-2">
                <AlertTriangle className="mr-2" />
                Alerjenler: {pairing.allergens.join(", ")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}