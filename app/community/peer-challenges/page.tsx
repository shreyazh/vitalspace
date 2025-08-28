"use client"

import { useState } from "react"
import Layout from "../../components/Layout"
import PageTitle from "../../components/PageTitle"
import Card from "../../components/Card"
import { Button } from "@/components/ui/button"

export default function PeerChallenges() {
  const [challenges, setChallenges] = useState([
    { id: 1, title: "Active Challenges", description: "View and join ongoing community challenges." },
    { id: 2, title: "Create a Challenge", description: "Start your own challenge and invite others to participate." },
    { id: 3, title: "Challenge History", description: "Review your past challenge participation and achievements." },
    { id: 4, title: "Leaderboards", description: "See how you rank in various community challenges." },
  ])

  const handleAction = (title) => {
    alert(`Feature for '${title}' coming soon!`)
  }

  return (
    <Layout>
      <PageTitle>Peer-Led Challenges</PageTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
        {challenges.map((challenge) => (
          <Card key={challenge.id} title={challenge.title}>
            <p>{challenge.description}</p>
            <Button className="mt-4 w-full" onClick={() => handleAction(challenge.title)}>
              Explore
            </Button>
          </Card>
        ))}
      </div>
    </Layout>
  )
}
