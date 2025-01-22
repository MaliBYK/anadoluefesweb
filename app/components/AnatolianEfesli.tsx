"use client"

import { useState } from "react"
import { ShoppingBasketIcon as Basketball, Trophy, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BackgroundPattern } from "./BackgroundPattern"

const players = [
  {
    name: "Shane Larkin",
    image: "/placeholder.svg?height=200&width=200",
    stats: { ppg: "15.5", apg: "4.5", spg: "1.8" },
  },
  {
    name: "Vasilije Micic",
    image: "/placeholder.svg?height=200&width=200",
    stats: { ppg: "16.3", apg: "5.2", spg: "1.5" },
  },
  {
    name: "Bryant Dunston",
    image: "/placeholder.svg?height=200&width=200",
    stats: { ppg: "8.7", apg: "1.2", spg: "0.8" },
  },
]

export default function AnatolianEfesli() {
  const [score, setScore] = useState(0)
  const [selectedPlayer, setSelectedPlayer] = useState(players[0])
  const [isAnimating, setIsAnimating] = useState(false)

  const shootBasket = () => {
    setIsAnimating(true)
    const success = Math.random() > 0.5
    setTimeout(() => {
      if (success) {
        setScore(score + 2)
      }
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <div className="relative min-h-screen">
      <BackgroundPattern />
      <div className="relative space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#1B3F8B]">ANATOLIAN EFESLI LET'S TRAIN</h1>
          <p className="text-xl italic text-gray-600">"Train like a champion, play like an Efesli!"</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {players.map((player) => (
            <Card
              key={player.name}
              className={`cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                selectedPlayer.name === player.name ? "ring-2 ring-[#00A3E0] shadow-lg" : ""
              }`}
              onClick={() => setSelectedPlayer(player)}
            >
              <CardHeader>
                <CardTitle className="text-center">{player.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                  <img
                    src={player.image || "/placeholder.svg"}
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div className="space-y-1">
                    <p className="text-gray-500">PPG</p>
                    <p className="font-bold">{player.stats.ppg}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-500">APG</p>
                    <p className="font-bold">{player.stats.apg}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-500">SPG</p>
                    <p className="font-bold">{player.stats.spg}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6 mt-8">
          <div className="inline-flex items-center space-x-2 text-2xl font-bold">
            <Trophy className="w-8 h-8 text-[#00A3E0]" />
            <span>Score: {score}</span>
          </div>
          <div className="space-y-4">
            <p className="text-xl">Playing as: {selectedPlayer.name}</p>
            <Button
              onClick={shootBasket}
              disabled={isAnimating}
              size="lg"
              className={`bg-[#00A3E0] hover:bg-[#1B3F8B] text-white transform transition-all duration-300 ${
                isAnimating ? "animate-bounce" : ""
              }`}
            >
              <Basketball className={`mr-2 ${isAnimating ? "animate-spin" : ""}`} />
              Shoot Basket
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2">
            <Star className="w-6 h-6 text-yellow-500" />
            <p className="text-gray-600">Unlock achievements by scoring more points!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

