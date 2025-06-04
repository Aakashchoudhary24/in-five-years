"use client"

import Link from "next/link"
import Navbar from "@/components/ui/navbar"

const hobbies = [
  { name: "Coding", href: "/hobbies/coding", emoji: "💻" },
  { name: "Singing", href: "/hobbies/singing", emoji: "🎤" },
  { name: "Movies / Cinema", href: "/cinema", emoji: "🎬" },
  { name: "Running", href: "/hobbies/running", emoji: "🏃" },
]

export default function HobbiesPage() {
  return (
    <div>
        <Navbar />
        <h1 className="text-3xl font-bold mb-6">🌟 My Hobbies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        {hobbies.map((hobby) => (
          <Link
            key={hobby.name}
            href={hobby.href}
            className="border border-muted rounded-xl p-6 flex items-center gap-4 shadow-sm hover:bg-muted/50 transition"
          >
            <span className="text-2xl">{hobby.emoji}</span>
            <span className="text-lg font-medium">{hobby.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}