"use client"

import { useState } from "react"
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"
import Card from "../components/Card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function HealthyLifestyle() {
  const [waterIntake, setWaterIntake] = useState(0)
  const [challengeCompleted, setChallengeCompleted] = useState(false)
  const dailyWaterGoal = 8 // 8 glasses per day

  const addWater = () => {
    setWaterIntake((prev) => Math.min(prev + 1, dailyWaterGoal))
  }

  const handleChallengeComplete = () => {
    setChallengeCompleted(true)
  }

  return (
    <Layout>
      <PageTitle>Healthy Lifestyle</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Daily Water Intake">
          <div className="text-center mb-4">
            <p className="text-2xl font-bold">
              {waterIntake}/{dailyWaterGoal} glasses
            </p>
          </div>
          <Progress value={(waterIntake / dailyWaterGoal) * 100} className="mb-4" />
          <Button onClick={addWater} disabled={waterIntake >= dailyWaterGoal}>
            Add a glass
          </Button>
        </Card>
        <Card title="Today's Wellness Challenge">
          <p className="mb-4">Take a 15-minute nature walk and practice mindfulness.</p>
          <Button onClick={handleChallengeComplete} disabled={challengeCompleted}>
            {challengeCompleted ? "Completed!" : "Mark as Complete"}
          </Button>
          {challengeCompleted && <p className="mt-2 text-green-600">Great job completing today's challenge!</p>}
        </Card>
        <Card title="Healthy Lifestyle Resources">
          <ul className="space-y-2">
            <li>
              <Link href="/healthy-lifestyle/self-care-tips" className="text-blue-600 hover:underline">
                Daily Self-Care Tips
              </Link>
            </li>
            <li>
              <Link href="/healthy-lifestyle/mind-body-exercises" className="text-blue-600 hover:underline">
                Mind-Body Exercises
              </Link>
            </li>
            <li>
              <Link href="/healthy-lifestyle/nutrition-guide" className="text-blue-600 hover:underline">
                Nutrition Guide
              </Link>
            </li>
          </ul>
        </Card>
        <Card title="Wellness Tips">
          <ul className="list-disc list-inside space-y-2">
            <li>Start your day with a healthy breakfast</li>
            <li>Take regular breaks during work</li>
            <li>Practice good posture</li>
            <li>Limit screen time before bed</li>
            <li>Stay socially connected</li>
          </ul>
        </Card>
      </div>
    </Layout>
  )
}
