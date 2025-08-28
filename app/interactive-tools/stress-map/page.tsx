"use client"

import { useState } from "react"
import Layout from "../../components/Layout"
import PageTitle from "../../components/PageTitle"
import Card from "../../components/Card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const stressQuestions = [
  { id: 1, question: "How often do you feel overwhelmed by your responsibilities?" },
  {
    id: 2,
    question: "How frequently do you experience physical symptoms of stress (e.g., headaches, muscle tension)?",
  },
  { id: 3, question: "How often do you have trouble sleeping due to stress or worry?" },
  { id: 4, question: "How often do you feel irritable or short-tempered?" },
  { id: 5, question: "How frequently do you find it difficult to concentrate?" },
]

const stressAreas = ["Work", "Relationships", "Finance", "Health", "Future"]

export default function StressMap() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: number }>({})
  const [selectedValue, setSelectedValue] = useState<number | null>(null)
  const [stressScore, setStressScore] = useState<number | null>(null)
  const [stressAreaScores, setStressAreaScores] = useState<{ [key: string]: number }>({})

  const handleAnswer = () => {
    if (selectedValue === null) return // Prevent proceeding without selecting an option
    setAnswers((prev) => ({ ...prev, [currentQuestion]: selectedValue }))
    setSelectedValue(null)

    if (currentQuestion < stressQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateStressScore()
    }
  }

  const calculateStressScore = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0)
    const score = (totalScore / (stressQuestions.length * 4)) * 100
    setStressScore(score)

    const areaScores = stressAreas.reduce(
      (acc, area) => {
        acc[area] = Math.round(Math.random() * 100)
        return acc
      },
      {} as { [key: string]: number },
    )
    setStressAreaScores(areaScores)
  }

  const getStressInsights = () => {
    if (stressScore === null) return null
    if (stressScore < 30) {
      return "Your stress levels appear to be low. Keep up your good stress management practices!"
    } else if (stressScore < 60) {
      return "You are experiencing moderate levels of stress. Consider incorporating more stress-reduction techniques into your daily routine."
    } else {
      return "Your stress levels are high. It's important to take immediate steps to manage your stress and consider seeking professional help."
    }
  }

  const getCopingStrategies = () => {
    if (stressScore === null) return null
    const strategies = [
      "Practice deep breathing exercises for 5 minutes each day",
      "Engage in regular physical exercise, aiming for at least 30 minutes a day",
      "Maintain a consistent sleep schedule",
      "Practice mindfulness or meditation",
      "Reach out to friends or family for support",
      "Consider talking to a mental health professional",
    ]
    return strategies.slice(0, Math.ceil(stressScore / 20))
  }

  return (
    <Layout>
      <PageTitle>Stress Map Visualization</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Stress Finder Test">
          {stressScore === null ? (
            <>
              <p className="mb-4">
                Question {currentQuestion + 1} of {stressQuestions.length}
              </p>
              <p className="mb-4">{stressQuestions[currentQuestion].question}</p>
              <RadioGroup onValueChange={(value) => setSelectedValue(Number(value))}>
                {[0, 1, 2, 3, 4].map((value) => (
                  <div key={value} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={value.toString()}
                      id={`q${currentQuestion}-${value}`}
                      checked={selectedValue === value}
                    />
                    <Label htmlFor={`q${currentQuestion}-${value}`}>
                      {value === 0
                        ? "Never"
                        : value === 1
                          ? "Rarely"
                          : value === 2
                            ? "Sometimes"
                            : value === 3
                              ? "Often"
                              : "Always"}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              <Button onClick={handleAnswer} className="mt-4" disabled={selectedValue === null}>
                Next
              </Button>
            </>
          ) : (
            <>
              <p className="mb-4">Your Stress Score:</p>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold">{stressScore.toFixed(1)}%</span>
              </div>
              <Progress value={stressScore} className="mb-4" />
              <Button
                onClick={() => {
                  setCurrentQuestion(0)
                  setAnswers({})
                  setStressScore(null)
                  setSelectedValue(null)
                }}
              >
                Retake Test
              </Button>
            </>
          )}
        </Card>
        <Card title="Your Stress Map">
          {stressScore !== null && (
            <div className="space-y-4">
              {stressAreas.map((area) => (
                <div key={area} className="flex items-center space-x-2">
                  <span className="w-24">{area}</span>
                  <Progress value={stressAreaScores[area]} className="flex-grow" />
                  <span className="w-12 text-right">{stressAreaScores[area]}%</span>
                </div>
              ))}
            </div>
          )}
        </Card>
        <Card title="Stress Insights">
          <p>{getStressInsights()}</p>
        </Card>
        <Card title="Coping Strategies">
          {getCopingStrategies() && (
            <ul className="list-disc list-inside space-y-2">
              {getCopingStrategies()?.map((strategy, index) => (
                <li key={index}>{strategy}</li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </Layout>
  )
}
