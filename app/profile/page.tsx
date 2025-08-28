"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"
import Card from "../components/Card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"

interface UserProfile {
  name: string
  email: string
  bio: string
}

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    email: "",
    bio: "",
  })

  const [goals, setGoals] = useState<string[]>([
    "Meditate for 10 minutes daily",
    "Exercise 3 times a week",
    "Practice gratitude journaling",
  ])

  const [newGoal, setNewGoal] = useState("")
  const [showHistory, setShowHistory] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  useEffect(() => {
    setProfile({
      name: "John Doe",
      email: "john.doe@example.com",
      bio: "I'm on a journey to improve my mental well-being.",
    })
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updated profile:", profile)
  }

  const handleGoalChange = (index: number, value: string) => {
    const updatedGoals = [...goals]
    updatedGoals[index] = value
    setGoals(updatedGoals)
  }

  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, newGoal])
      setNewGoal("")
    }
  }

  const removeGoal = (index: number) => {
    setGoals(goals.filter((_, i) => i !== index))
  }

  return (
    <Layout>
      <PageTitle>Your Profile</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <Card title="Personal Information">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input id="name" name="name" value={profile.name} onChange={handleInputChange} className="mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={profile.email}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <Textarea id="bio" name="bio" value={profile.bio} onChange={handleInputChange} className="mt-1" />
            </div>
            <Button type="submit">Update Profile</Button>
          </form>
        </Card>

        {/* Wellness Goals */}
        <Card title="Wellness Goals">
          <ul className="list-disc list-inside space-y-2 mb-4">
            {goals.map((goal, index) => (
              <li key={index} className="flex items-center gap-2">
                <Input value={goal} onChange={(e) => handleGoalChange(index, e.target.value)} className="w-full" />
                <Button size="sm" variant="destructive" onClick={() => removeGoal(index)}>
                  X
                </Button>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <Input value={newGoal} onChange={(e) => setNewGoal(e.target.value)} placeholder="Add new goal" />
            <Button onClick={addGoal}>Add</Button>
          </div>
        </Card>

        {/* Activity History */}
        <Card title="Activity History">
          <ul className="space-y-2 mb-4">
            <li>Completed CBT exercise - 2 days ago</li>
            <li>Attended virtual support group - 1 week ago</li>
            <li>Updated stress management plan - 2 weeks ago</li>
          </ul>
          <Button onClick={() => setShowHistory(true)}>View Full History</Button>
        </Card>

        {/* Preferences */}
        <Card title="Preferences">
          <p className="mb-4">Customize your experience and notification settings.</p>
          <Button onClick={() => setShowPreferences(true)}>Manage Preferences</Button>
        </Card>
      </div>

      {/* Full History Modal */}
      {showHistory && (
        <Dialog open={showHistory} onOpenChange={setShowHistory}>
          <DialogContent>
            <DialogTitle>Full Activity History</DialogTitle>
            <DialogDescription>
              <ul className="space-y-2">
                <li>Completed CBT exercise - 2 days ago</li>
                <li>Attended virtual support group - 1 week ago</li>
                <li>Updated stress management plan - 2 weeks ago</li>
                <li>Read mental wellness article - 3 weeks ago</li>
                <li>Completed mindfulness session - 1 month ago</li>
              </ul>
            </DialogDescription>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
          <DialogContent>
            <DialogTitle>Manage Preferences</DialogTitle>
            <DialogDescription>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Notification Settings</label>
                  <Input type="checkbox" id="notifications" className="mt-1" /> Receive email notifications
                </div>
                <div>
                  <label className="block text-sm font-medium">Newsletter</label>
                  <select className="w-full border rounded px-2 py-1">
                    <option>Subscribe</option>
                    <option>Prefer Not To</option>
                  </select>
                </div>
              </div>
            </DialogDescription>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </Layout>
  )
}
