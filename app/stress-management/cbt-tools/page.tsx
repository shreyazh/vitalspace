"use client"

import type React from "react"

import { useState } from "react"
import Layout from "../../components/Layout"
import PageTitle from "../../components/PageTitle"
import Card from "../../components/Card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export default function CBTTools() {
  const [thought, setThought] = useState("")
  const [emotion, setEmotion] = useState("")
  const [intensity, setIntensity] = useState("")
  const [alternativeThought, setAlternativeThought] = useState("")

  const handleClick = (url: string) => {
    window.open(url, "_blank") // Opens in a new tab
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ thought, emotion, intensity, alternativeThought })
    // Reset form
    setThought("")
    setEmotion("")
    setIntensity("")
    setAlternativeThought("")
  }

  return (
    <Layout>
      <PageTitle>CBT-Inspired Interactive Tools</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Thought Record">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="thought" className="block text-sm font-medium text-gray-700">
                Negative Thought
              </label>
              <Textarea
                id="thought"
                value={thought}
                onChange={(e) => setThought(e.target.value)}
                placeholder="Describe your negative thought..."
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="emotion" className="block text-sm font-medium text-gray-700">
                Emotion
              </label>
              <Input
                id="emotion"
                value={emotion}
                onChange={(e) => setEmotion(e.target.value)}
                placeholder="What emotion does this thought evoke?"
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="intensity" className="block text-sm font-medium text-gray-700">
                Intensity (1-10)
              </label>
              <Input
                id="intensity"
                type="number"
                min="1"
                max="10"
                value={intensity}
                onChange={(e) => setIntensity(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="alternative" className="block text-sm font-medium text-gray-700">
                Alternative Thought
              </label>
              <Textarea
                id="alternative"
                value={alternativeThought}
                onChange={(e) => setAlternativeThought(e.target.value)}
                placeholder="Try to reframe your negative thought..."
                className="mt-1"
              />
            </div>
            <Button type="submit">Save Thought Record</Button>
          </form>
        </Card>
        <Card title="Cognitive Reframing">
          <p className="mb-4">Challenge and reframe negative thoughts with our interactive tool.</p>
          <Button onClick={() => handleClick("https://www.youtube.com/watch?v=qPnPhegi980")}>Dive in</Button>
        </Card>
        <Card title="Behavioral Experiments">
          <p className="mb-4">Design and track experiments to test the validity of your beliefs.</p>
          <Button onClick={() => handleClick("#")}>Create Experiment</Button>
        </Card>
        <Card title="Relaxation Techniques">
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Progressive Muscle Relaxation</li>
            <li>Guided Imagery</li>
            <li>Deep Breathing Exercises</li>
            <li>Mindfulness Meditation</li>
          </ul>
          <Button
            onClick={() =>
              handleClick(
                "https://www.youtube.com/playlist?list=PLsBkCd3sfc6hJP4OQS4pFkaliFXpakOum&jct=08y7EqQGe8q1XboBNUF5EA",
              )
            }
          >
            Let&apos;s Start
          </Button>
        </Card>
      </div>
    </Layout>
  )
}
