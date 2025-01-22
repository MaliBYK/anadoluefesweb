import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BackgroundPattern } from "./components/BackgroundPattern"
import {
  Beer,
  ShoppingBasketIcon as Basketball,
  Gamepad2,
  Calendar,
  MessageSquare,
  Heart,
  Utensils,
} from "lucide-react"

export default function Home() {
  const sections = [
    {
      title: "AI Food Pairing",
      description: "Discover perfect beer and food combinations",
      href: "/pairing",
      icon: Utensils,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Beer Roulette",
      description: "Spin the wheel for a random beer selection",
      href: "/roulette",
      icon: Beer,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Events",
      description: "Check out Ephesus-sponsored events",
      href: "/events",
      icon: Calendar,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Games",
      description: "Play fun beer-themed games with friends",
      href: "/games",
      icon: Gamepad2,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Forum",
      description: "Share your experiences anonymously",
      href: "/forum",
      icon: MessageSquare,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Fundraisers",
      description: "Support charitable causes",
      href: "/fundraisers",
      icon: Heart,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Anatolian Efesli",
      description: "Train like a champion basketball player",
      href: "/anatolian-efesli",
      icon: Basketball,
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="relative min-h-screen">
      <BackgroundPattern />
      <div className="relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-[#1B3F8B] sm:text-6xl">
            Welcome to Ephesus Experience
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover the perfect blend of basketball, beer, and entertainment
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {sections.map((section) => (
            <Card key={section.title} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="relative h-48 -mt-6 -mx-6 mb-4 overflow-hidden rounded-t-xl">
                  <img
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <section.icon className="absolute bottom-4 right-4 w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-[#1B3F8B]">{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={section.href}
                  className="inline-flex items-center text-[#00A3E0] hover:text-[#1B3F8B] hover:underline"
                >
                  <span>Explore {section.title}</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

