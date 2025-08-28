"use client"

import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"
import Card from "../components/Card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { useAppContext } from "../contexts/AppContext"

export default function StressManagement() {
  const { stressLevel, setStressLevel } = useAppContext()
  const [timerActive, setTimerActive] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60) // 60 seconds for the exercise

  const handleStressLevelChange = (change: number) => {
    setStressLevel(Math.max(0, Math.min(10, stressLevel + change)))
  }

  const startTimer = () => {
    setTimerActive(true)
    setTimeLeft(60)
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (timerActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    } else if (timeLeft === 0) {
      setTimerActive(false)
    }
    return () => clearTimeout(timer)
  }, [timerActive, timeLeft])

  const getBreathingPhase = () => {
    const phase = Math.floor((60 - timeLeft) / 4) % 3
    return phase === 0 ? "Breathe in" : phase === 1 ? "Hold" : "Breathe out"
  }

  return (
    <Layout>
      <PageTitle>Stress Management</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Current Stress Level">
          <div className="text-center mb-4">
            <p className="text-2xl font-bold">{stressLevel}/10</p>
          </div>
          <Progress value={(stressLevel / 10) * 100} className="mb-4" />
          <div className="flex justify-between">
            <Button onClick={() => handleStressLevelChange(-1)}>-</Button>
            <Button onClick={() => handleStressLevelChange(1)}>+</Button>
          </div>
        </Card>
        <Card title="Quick Relaxation">
          <p className="mb-4">Try this 1-minute breathing exercise:</p>
          <ol className="list-decimal list-inside mb-4">
            <li>Breathe in for 4 seconds</li>
            <li>Hold for 4 seconds</li>
            <li>Breathe out for 4 seconds</li>
            <li>Repeat 3-5 times</li>
          </ol>
          {timerActive ? (
            <div className="text-center">
              <p className="text-2xl font-bold mb-2">{timeLeft} seconds</p>
              <p>{getBreathingPhase()}</p>
            </div>
          ) : (
            <Button onClick={startTimer}>Start Timer</Button>
          )}
        </Card>
        <Card title="Stress Management Tools">
          <ul className="space-y-2">
            <li>
              <Link href="/stress-management/personalized-plans" className="text-blue-600 hover:underline">
                Personalized Stress-Reduction Plans
              </Link>
            </li>
            <li>
              <Link href="/stress-management/cbt-tools" className="text-blue-600 hover:underline">
                CBT-Inspired Tools
              </Link>
            </li>
            <li>
              <Link href="/stress-management/support-groups" className="text-blue-600 hover:underline">
                Virtual Support Groups
              </Link>
            </li>
          </ul>
        </Card>
        <Card title="Stress Management Tips">
          <ul className="list-disc list-inside space-y-2">
            <li>Practice mindfulness regularly</li>
            <li>Exercise for at least 30 minutes daily</li>
            <li>Maintain a consistent sleep schedule</li>
            <li>Limit caffeine and alcohol intake</li>
            <li>Connect with friends and family</li>
          </ul>
        </Card>
      </div>
    </Layout>
  )
}
