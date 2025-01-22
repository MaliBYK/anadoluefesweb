// Beer Roulette Component

"use client"

import { useState, useRef, useEffect } from "react"
import { Beer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const BEERS = [
  { name: "Efes IPA", color: "#FFA500" },
  { name: "Efes Stout", color: "#8B4513" },
  { name: "Efes Lager", color: "#FFD700" },
  { name: "Efes Buğday", color: "#F0E68C" },
  { name: "Efes Pilsner", color: "#FAFAD2" },
  { name: "Efes Ale", color: "#CD853F" },
]

export default function BeerRoulette() {
  const [selectedBeer, setSelectedBeer] = useState("")
  const [isSpinning, setIsSpinning] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const wheelRef = useRef<HTMLDivElement>(null)

  const segmentAngle = 360 / BEERS.length // Her bir segment 60 derece

  const spinWheel = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setShowResult(false)

    const spinDegrees = Math.floor(Math.random() * 360) + 720
    if (wheelRef.current) {
      wheelRef.current.style.transform = `rotate(${spinDegrees}deg)`
    }

    setTimeout(() => {
      const selectedIndex = Math.floor((spinDegrees % 360) / segmentAngle)
      setSelectedBeer(BEERS[selectedIndex].name)
      setIsSpinning(false)
      setShowResult(true)
    }, 5000)
  }

  useEffect(() => {
    if (wheelRef.current) {
      wheelRef.current.style.transition = "transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)"
    }
  }, [])

  return (
    <section className="relative mb-8 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#1B3F8B]">Bira Ruleti</h2>
      <div className="flex flex-col items-center">
        <div className="relative w-64 h-64 mb-8">
          <div
            ref={wheelRef}
            className="w-full h-full rounded-full border-4 border-[#1B3F8B] overflow-hidden relative"
            style={{ transform: "rotate(0deg)" }}
          >
            {BEERS.map((beer, index) => (
              <div
                key={beer.name}
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  transform: `rotate(${index * segmentAngle}deg)`,
                  transformOrigin: "50% 50%",
                }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundColor: beer.color,
                    clipPath: `polygon(50% 50%, 100% 0, 100% 100%, 50% 50%)`,
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-1/2 w-0 h-0 -mt-2 -ml-2 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#1B3F8B]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xl font-bold text-[#1B3F8B]">Şanslı Biran</p>
          </div>
        </div>
        <Button
          onClick={spinWheel}
          disabled={isSpinning}
          className="bg-[#00A3E0] hover:bg-[#1B3F8B] text-white font-bold py-2 px-4 rounded"
        >
          <Beer className="mr-2" />
          {isSpinning ? "Dönüyor..." : "Çarkı Çevir"}
        </Button>
      </div>

      <Dialog open={showResult} onOpenChange={setShowResult}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Seçilen Biranız</DialogTitle>
          </DialogHeader>
          <div className="text-center">
            <Beer size={64} className="mx-auto text-[#00A3E0]" />
            <p className="text-2xl font-bold mt-4">{selectedBeer}</p>
            <p className="mt-2">Mükemmel bir Efes birası seçtiniz, tadını çıkarın!</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
