"use client"

import { useState, useEffect } from "react"
import Layout from "../../components/Layout"
import PageTitle from "../../components/PageTitle"
import Card from "../../components/Card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog"

interface Thread {
  id: number
  title: string
  author: string
  replies: number
  lastActivity: string
}

export default function DiscussionForums() {
  const [threads, setThreads] = useState<Thread[]>([])
  const [userThreads, setUserThreads] = useState<Thread[]>([])
  const [newThreadTitle, setNewThreadTitle] = useState("")
  const [isCreatingThread, setIsCreatingThread] = useState(false)
  const [isViewingThreads, setIsViewingThreads] = useState(false)

  useEffect(() => {
    // Simulating API call to fetch existing threads
    setThreads([
      {
        id: 1,
        title: "Coping with work-related stress",
        author: "StressLess123",
        replies: 15,
        lastActivity: "2 hours ago",
      },
      {
        id: 2,
        title: "Meditation techniques for beginners",
        author: "ZenMaster",
        replies: 8,
        lastActivity: "1 day ago",
      },
      {
        id: 3,
        title: "Dealing with anxiety during social events",
        author: "SocialButterfly",
        replies: 22,
        lastActivity: "3 hours ago",
      },
      {
        id: 4,
        title: "The benefits of journaling for mental health",
        author: "WriterAtHeart",
        replies: 12,
        lastActivity: "5 hours ago",
      },
    ])
  }, [])

  // Handle creating a new thread
  const handleCreateThread = () => {
    if (!newThreadTitle.trim()) return

    const newThread: Thread = {
      id: threads.length + 1,
      title: newThreadTitle,
      author: "You", // Simulating logged-in user
      replies: 0,
      lastActivity: "Just now",
    }

    setThreads([newThread, ...threads]) // Add to main forum
    setUserThreads([newThread, ...userThreads]) // Add to "Your Threads"
    setNewThreadTitle("")
    setIsCreatingThread(false) // Close modal
  }

  return (
    <Layout>
      <PageTitle>Discussion Forums</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Popular Topics */}
        <Card title="Popular Topics">
          <ul className="space-y-4">
            {threads.map((thread) => (
              <li key={thread.id} className="border-b pb-2">
                <h3 className="font-medium">{thread.title}</h3>
                <p className="text-sm text-gray-600">
                  By {thread.author} | {thread.replies} replies | Last activity: {thread.lastActivity}
                </p>
              </li>
            ))}
          </ul>
        </Card>

        {/* Start a Discussion */}
        <Card title="Start a Discussion">
          <p className="mb-4">Have a topic you'd like to discuss? Start a new thread here.</p>
          <Button onClick={() => setIsCreatingThread(true)}>Create New Thread</Button>
        </Card>

        {/* Your Threads */}
        <Card title="Your Threads">
          <p className="mb-4">View and manage discussions you've participated in.</p>
          <Button onClick={() => setIsViewingThreads(true)}>View Your Threads</Button>
        </Card>

        {/* Forum Categories */}
        <Card title="Forum Categories">
          <ul className="space-y-2">
            <li>Stress Management</li>
            <li>Anxiety Support</li>
            <li>Depression Help</li>
            <li>Mindfulness Practices</li>
            <li>Work-Life Balance</li>
          </ul>
        </Card>
      </div>

      {/* Create Thread Modal */}
      {isCreatingThread && (
        <Dialog open={isCreatingThread} onOpenChange={setIsCreatingThread}>
          <DialogContent>
            <DialogTitle>Create New Discussion</DialogTitle>
            <Input
              value={newThreadTitle}
              onChange={(e) => setNewThreadTitle(e.target.value)}
              placeholder="Enter discussion topic"
            />
            <Button onClick={handleCreateThread} className="mt-2">
              Post Thread
            </Button>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}

      {/* Your Threads Modal */}
      {isViewingThreads && (
        <Dialog open={isViewingThreads} onOpenChange={setIsViewingThreads}>
          <DialogContent>
            <DialogTitle>Your Threads</DialogTitle>
            {userThreads.length > 0 ? (
              <ul className="space-y-4">
                {userThreads.map((thread) => (
                  <li key={thread.id} className="border-b pb-2">
                    <h3 className="font-medium">{thread.title}</h3>
                    <p className="text-sm text-gray-600">
                      {thread.replies} replies | Last activity: {thread.lastActivity}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">You haven't started any discussions yet.</p>
            )}
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </Layout>
  )
}
