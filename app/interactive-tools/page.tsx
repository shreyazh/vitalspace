"use client"

import { useState } from "react"
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"
import Card from "../components/Card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const affirmations = [
  "I am capable of handling whatever comes my way today.",
  "I believe in myself and my abilities.",
  "Every challenge is an opportunity to grow.",
  "I am strong, resilient, and confident.",
  "I attract positivity and success.",
  "I choose to focus on what I can control.",
  "I am worthy of happiness and love.",
  "Today is a new beginning full of possibilities.",
  "I trust the process and embrace the journey.",
  "I am at peace with my past and excited for my future.",
]

export default function InteractiveTools() {
  const [moodRating, setMoodRating] = useState<number | null>(null)
  const [affirmationIndex, setAffirmationIndex] = useState(0)

  const handleMoodRating = (rating: number) => {
    setMoodRating(rating)
  }

  const getNewAffirmation = () => {
    setAffirmationIndex((prevIndex) => (prevIndex + 1) % affirmations.length)
  }

  return (
    <Layout>
      <PageTitle>Interactive Tools</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Quick Mood Check">
          <p className="mb-4">How are you feeling right now?</p>
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4, 5].map((rating) => (
              <Button
                key={rating}
                onClick={() => handleMoodRating(rating)}
                variant={moodRating === rating ? "default" : "outline"}
              >
                {rating}
              </Button>
            ))}
          </div>
          {moodRating && <p>You rated your mood as {moodRating}/5</p>}
        </Card>
        <Card title="Breathing Exercise">
          <p className="mb-4">Follow the circle to practice deep breathing.</p>
          <div className="w-32 h-32 rounded-full border-4 border-blue-500 mx-auto animate-pulse"></div>
          <p className="text-center mt-4">Breathe in as the circle expands, out as it contracts</p>
        </Card>
        <Card title="Interactive Tool Links">
          <ul className="space-y-2">
            <li>
              <Link href="/interactive-tools/mood-tracker" className="text-blue-600 hover:underline">
                Detailed Mood Tracker
              </Link>
            </li>
            <li>
              <Link href="/interactive-tools/stress-map" className="text-blue-600 hover:underline">
                Stress Map Visualization
              </Link>
            </li>
          </ul>
        </Card>
        <Card title="Daily Affirmation">
          <p className="text-center text-xl font-semibold mb-4">{affirmations[affirmationIndex]}</p>
          <Button className="w-full" onClick={getNewAffirmation}>
            Get New Affirmation
          </Button>
        </Card>
      </div>
    </Layout>
  )
}
