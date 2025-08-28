"use client"

import { useState } from "react"
import Layout from "../../components/Layout"
import PageTitle from "../../components/PageTitle"
import Card from "../../components/Card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function SelfCareTips() {
  const [dailyTasks, setDailyTasks] = useState([
    { id: 1, task: "Practice mindfulness for 10 minutes", completed: false },
    { id: 2, task: "Take a 15-minute walk", completed: false },
    { id: 3, task: "Write in a gratitude journal", completed: false },
    { id: 4, task: "Connect with a friend or family member", completed: false },
    { id: 5, task: "Read a chapter of a book", completed: false },
  ])

  const [currentMood, setCurrentMood] = useState<string | null>(null)

  const completedTasks = dailyTasks.filter((task) => task.completed).length
  const progress = (completedTasks / dailyTasks.length) * 100

  const toggleTask = (id: number) => {
    setDailyTasks(dailyTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const [currentTip, setCurrentTip] = useState("")
  const tips = [
    "Take deep breaths when feeling stressed.",
    "Stay hydrated throughout the day.",
    "Practice good sleep hygiene for better rest.",
    "Set boundaries to protect your mental space.",
    "Engage in a hobby you enjoy for at least 30 minutes.",
  ]

  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length)
    setCurrentTip(tips[randomIndex])
  }

  const handleMoodSelection = (mood: string) => {
    setCurrentMood(mood)
  }

  return (
    <Layout>
      <PageTitle>Self-Care Tips & Tracker</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Daily Self-Care Checklist">
          <div className="space-y-4">
            {dailyTasks.map((task) => (
              <div key={task.id} className="flex items-center space-x-2">
                <Checkbox id={`task-${task.id}`} checked={task.completed} onCheckedChange={() => toggleTask(task.id)} />
                <label
                  htmlFor={`task-${task.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {task.task}
                </label>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Daily Progress</p>
            <Progress value={progress} className="w-full" />
          </div>
        </Card>
        <Card title="Self-Care Tip of the Day">
          <p className="mb-4">{currentTip || "Click the button to get a self-care tip!"}</p>
          <Button onClick={getRandomTip}>Get New Tip</Button>
        </Card>
        <Card title="Mood Tracker">
          <p className="mb-4">How are you feeling today?</p>
          <div className="flex justify-between">
            {["😢", "😐", "😊", "😄"].map((emoji, index) => (
              <Button
                key={index}
                variant={currentMood === emoji ? "default" : "outline"}
                className="text-2xl"
                onClick={() => handleMoodSelection(emoji)}
              >
                {emoji}
              </Button>
            ))}
          </div>
          {currentMood && <p className="mt-4 text-center">You're feeling {currentMood} today.</p>}
        </Card>
        <Card title="Self-Care Resources">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <Link href="https://youtu.be/cyMxWXlX9sU" className="text-blue-600 hover:underline">
                Guided meditation audio
              </Link>
            </li>
            <li>
              <Link href="https://youtu.be/yqeirBfn2j4" className="text-blue-600 hover:underline">
                Stress-relief exercises
              </Link>
            </li>
            <li>
              <Link href="https://youtu.be/ERysyFbJH7w" className="text-blue-600 hover:underline">
                Healthy recipe ideas
              </Link>
            </li>
            <li>
              <Link href="https://youtu.be/lRp5AC9W_F8" className="text-blue-600 hover:underline">
                Sleep improvement tips
              </Link>
            </li>
          </ul>
        </Card>
      </div>
    </Layout>
  )
}
