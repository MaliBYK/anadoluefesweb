import { Calendar, Ticket, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BackgroundPattern } from "./BackgroundPattern"

export default function Events() {
  const events = [
    {
      name: "Yaz Caz Gecesi",
      date: "2023-07-15",
      time: "20:00",
      location: "Efes Arena",
      type: "Konser",
      image: "/party.jpeg?height=300&width=600",
    },
    {
      name: "Komedi Kulübü Özel",
      date: "2023-07-22",
      time: "21:00",
      location: "Efes Tiyatrosu",
      type: "Tiyatro",
      image: "/comedy.jpeg?height=300&width=600",
    },
  ]

  return (
    <div className="relative min-h-screen">
      <BackgroundPattern />
      <div className="relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1B3F8B]">Efes +1 Etkinlikler</h1>
          <p className="mt-4 text-gray-600">Özel etkinlikleri keşfedin ve QR kodunuzla %10 indirim kazanın</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative h-64">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{event.type}</p>
                  <h3 className="text-2xl font-bold">{event.name}</h3>
                </div>
              </div>
              <CardContent className="space-y-4 p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-[#00A3E0]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-[#00A3E0]" />
                    <span>{event.time}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#00A3E0]" />
                  <span>{event.location}</span>
                </div>
                <Button className="w-full bg-[#00A3E0] hover:bg-[#1B3F8B] text-white">
                  <Ticket className="mr-2" /> %10 İndirim Al
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}