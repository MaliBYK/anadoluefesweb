import { TreeDeciduous, PawPrintIcon as Paw } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Fundraisers() {
  const causes = [
    { name: "Ağaç Dikin", icon: TreeDeciduous, description: "Ağaç dikmemize ve iklim değişikliğiyle mücadele etmemize yardımcı olun" },
    { name: "Patileri Besleyin", icon: Paw, description: "Barınak hayvanlarına yiyecek sağlayın" },
  ]

  return (
    <section id="fundraisers" className="mb-8 relative">
      <div className="absolute inset-0 bg-gray-100 opacity-50 z-0" />
      <h2 className="text-2xl font-bold mb-4 relative z-10">Bir Amacı Destekleyin</h2>
      <div className="grid md:grid-cols-2 gap-4 relative z-10">
        {causes.map((cause, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {<cause.icon className="mr-2" />} {cause.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{cause.description}</CardDescription>
              <Button className="bg-[#1B3F8B] hover:bg-[#00A3E0] text-white">Şimdi Bağış Yap</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}