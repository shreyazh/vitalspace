"use client"

import { useState } from "react"
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"
import Card from "../components/Card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Community() {
  const [posts, setPosts] = useState([
    { id: 1, title: "How do you deal with work stress?", author: "StressLess123", replies: 15 },
    { id: 2, title: "Share your favorite mindfulness technique", author: "MindfulMoment", replies: 8 },
    { id: 3, title: "Weekly Gratitude Thread", author: "GratefulHeart", replies: 22 },
  ])

  return (
    <Layout>
      <PageTitle>Community</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Recent Discussions">
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.id} className="border-b pb-2">
                <h3 className="font-medium">{post.title}</h3>
                <p className="text-sm text-gray-600">
                  By {post.author} | {post.replies} replies
                </p>
              </li>
            ))}
          </ul>
          <Button className="mt-4">View All Discussions</Button>
        </Card>
        <Card title="Community Resources">
          <ul className="space-y-2">
            <li>
              <Link href="/community/peer-challenges" className="text-blue-600 hover:underline">
                Peer-Led Challenges
              </Link>
            </li>
            <li>
              <Link href="/community/discussion-forums" className="text-blue-600 hover:underline">
                Discussion Forums
              </Link>
            </li>
            <li>
              <Link href="/community/expert-qa" className="text-blue-600 hover:underline">
                Expert Q&A Sessions
              </Link>
            </li>
          </ul>
        </Card>
        <Card title="Upcoming Community Events">
          <ul className="space-y-2">
            <li>Group Meditation - Tomorrow, 7 PM</li>
            <li>Stress Management Workshop - Saturday, 2 PM</li>
            <li>Wellness Book Club Meeting - Next Tuesday, 8 PM</li>
          </ul>
          <Button className="mt-4">View All Events</Button>
        </Card>
        <Card title="Community Guidelines">
          <ul className="list-disc list-inside space-y-2">
            <li>Be respectful and supportive of others</li>
            <li>Maintain confidentiality and privacy</li>
            <li>Share experiences, not medical advice</li>
            <li>Report any concerning behavior to moderators</li>
          </ul>
        </Card>
      </div>
    </Layout>
  )
}
