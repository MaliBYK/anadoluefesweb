import Link from "next/link"
import { Beer } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-[#1B3F8B] text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
          <Beer size={24} />
          <span className="text-xl font-bold">Efes Deneyimi</span>
        </Link>
        <nav>
          <ul className="flex flex-wrap justify-center md:space-x-4">
            <li className="m-2 md:m-0">
              <Link href="/pairing">Bira ve Meze Eşleştirme</Link>
            </li>
            <li className="m-2 md:m-0">
              <Link href="/roulette">Bira Çarkı</Link>
            </li>
            <li className="m-2 md:m-0">
              <Link href="/events">Etkinlikler ve İndirimler</Link>
            </li>
            <li className="m-2 md:m-0">
              <Link href="/games">Arkadaşlarla Eğlence</Link>
            </li>
            <li className="m-2 md:m-0">
              <Link href="/forum">Deneyim Paylaşımı</Link>
            </li>
            <li className="m-2 md:m-0">
              <Link href="/fundraisers">Destek Kampanyaları</Link>
            </li>
            <li className="m-2 md:m-0">
              <Link href="/anatolian-efesli">Anadolu Efes’le Potaya Doğru!</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
