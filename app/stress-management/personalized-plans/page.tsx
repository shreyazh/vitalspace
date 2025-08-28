"use client"

const handleClick = (url: string) => {
  window.location.href = url // Navigates to the selected link
}

import { useState, useEffect } from "react"
import Layout from "../../components/Layout"
import PageTitle from "../../components/PageTitle"
import Card from "../../components/Card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function PersonalizedPlans() {
  const [currentPlan, setCurrentPlan] = useState<string[]>([])
  const [planProgress, setPlanProgress] = useState(0)
  const [planHistory, setPlanHistory] = useState<{ month: string; completion: number }[]>([])

  useEffect(() => {
    fetchCurrentPlan()
    fetchPlanHistory()
  }, [])

  const fetchCurrentPlan = () => {
    setTimeout(() => {
      setCurrentPlan([
        "Practice deep breathing for 5 minutes, twice daily",
        "Take a 15-minute walk during lunch break",
        "Write down 3 things you're grateful for before bed",
        "Limit social media use to 30 minutes per day",
        "Try a new relaxation technique each week",
      ])
    }, 500)
  }

  const fetchPlanHistory = () => {
    setTimeout(() => {
      setPlanHistory([
        { month: "May 2023", completion: 85 },
        { month: "April 2023", completion: 92 },
        { month: "March 2023", completion: 78 },
      ])
    }, 500)
  }

  const updatePlanProgress = () => {
    setPlanProgress((prev) => Math.min(prev + 20, 100))
  }

  return (
    <Layout>
      <PageTitle>Personalized Stress-Reduction Plans</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Your Current Plan">
          <ul className="list-disc list-inside space-y-2 mb-4">
            {currentPlan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Plan Progress</p>
            <Progress value={planProgress} className="w-full" />
            <Button className="mt-2" onClick={updatePlanProgress}>
              Update Progress
            </Button>
          </div>
        </Card>
        <Card title="Indian Lifestyle Planner">
          <p className="mb-4">The Healthy Solution for every Indian.</p>
          <Button onClick={() => handleClick("https://kzmq2pw5ub47ozg0qclk.lite.vusercontent.net/")}>Let's Go</Button>
        </Card>
        <Card title="Stress Assessment">
          <p className="mb-4">Take a new assessment to get a personalized plan.</p>
          <Button onClick={() => handleClick("https://vitalspace.netlify.app/")}>Start Assessment</Button>
        </Card>
        <Card title="Plan History">
          <ul className="space-y-2">
            {planHistory.map((entry, index) => (
              <li key={index}>
                {entry.month} Plan - {entry.completion}% completed
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Layout>
  )
}
