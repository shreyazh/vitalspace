"use client"
import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"
import Card from "../components/Card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useAppContext } from "../contexts/AppContext"

export default function Dashboard() {
  const { stressLevel } = useAppContext()
  const [dailyGoal, setDailyGoal] = useState("")
  const [recentActivities, setRecentActivities] = useState<string[]>([])
  const [isCompleted, setIsCompleted] = useState(false) // State for button

  // Calculate wellness score based on stress level
  const wellnessScore = Math.max(0, Math.min(100, 100 - stressLevel * 10))

  useEffect(() => {
    // Simulating API calls for other data
    setDailyGoal("Practice mindfulness for 15 minutes")
    setRecentActivities([
      "Completed a 20-minute yoga session",
      "Logged mood: Happy",
      "Attended a virtual support group",
      "Completed daily self-care checklist",
    ])
  }, [])

  return (
    <Layout>
      <PageTitle>Dashboard</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Your Wellness Score">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{wellnessScore}</div>
            <Progress value={wellnessScore} className="w-full" />
          </div>
        </Card>
        <Card title="Today's Goal">
          <p className="mb-4">{dailyGoal}</p>
          <Button
            onClick={() => setIsCompleted(true)}
            disabled={isCompleted}
            style={{ backgroundColor: isCompleted ? "grey" : "black" }}
          >
            {isCompleted ? "Completed" : "Mark as Completed"}
          </Button>
        </Card>
        <Card title="Recent Activities">
          <ul className="list-disc list-inside">
            {recentActivities.map((activity, index) => (
              <li key={index} className="mb-2">
                {activity}
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Upcoming Events">
          <ul className="space-y-2">
            <li>Group Meditation - Tomorrow, 10 AM</li>
            <li>Stress Management Webinar - Friday, 2 PM</li>
            <li>Weekend Wellness Challenge - Starts Saturday</li>
          </ul>
        </Card>
      </div>
    </Layout>
  )
}
