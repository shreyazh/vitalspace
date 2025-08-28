"use client"
const handleClick = () => {
  window.location.href = "https://kzmqe90amshd6bijne5x.lite.vusercontent.net/" // Navigates to the link
}
import { useState } from "react"
import Layout from "../../components/Layout"
import PageTitle from "../../components/PageTitle"
import Card from "../../components/Card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NutritionGuide() {
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [weight, setWeight] = useState("")
  const [nutritionPlan, setNutritionPlan] = useState<string | null>(null)

  const generateNutritionPlan = () => {
    // This is a very basic example. In a real application, you'd want to use more sophisticated calculations and consult with nutrition experts.
    const ageNum = Number.parseInt(age)
    const weightNum = Number.parseInt(weight)

    if (gender && ageNum && weightNum) {
      const baseCaloricNeeds =
        gender === "male"
          ? 10 * weightNum + 6.25 * 170 - 5 * ageNum + 5
          : 10 * weightNum + 6.25 * 170 - 5 * ageNum - 161

      const activityFactor = 1.2 // Sedentary
      const dailyCalories = Math.round(baseCaloricNeeds * activityFactor)

      const protein = Math.round(weightNum * 0.8) // 0.8g per kg of body weight
      const fat = Math.round((dailyCalories * 0.3) / 9) // 30% of calories from fat
      const carbs = Math.round((dailyCalories - (protein * 4 + fat * 9)) / 4)

      setNutritionPlan(`
Based on your information:
  - Daily Caloric Needs: ${dailyCalories} calories
  - Protein: ${protein}g
  - Fat: ${fat}g
  - Carbohydrates: ${carbs}g

Remember to include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats in your diet.

This is a basic guideline. Please consult with a registered dietitian for a personalized nutrition plan.
      `)
    } else {
      setNutritionPlan("Please fill in all fields to generate a nutrition plan.")
    }
  }

  return (
    <Layout>
      <PageTitle>Nutrition Guide</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Basic Nutrition Plan">
          <div className="space-y-4 mb-4">
            <Select onValueChange={setGender}>
              <SelectTrigger>
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
            <Input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <Input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
            <Button onClick={generateNutritionPlan}>Generate Nutrition Plan</Button>
          </div>
          {nutritionPlan && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <pre className="whitespace-pre-wrap">{nutritionPlan}</pre>
            </div>
          )}
        </Card>
        <Card title="Mood-Boosting Foods">
          <p>Discover foods that can positively impact your mental health.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Fatty fish (rich in omega-3s)</li>
            <li>Dark chocolate (contains mood-boosting compounds)</li>
            <li>Berries (high in antioxidants)</li>
            <li>Nuts and seeds (good source of selenium and zinc)</li>
            <li>Leafy greens (rich in folate)</li>
          </ul>
        </Card>
        <Card title="Nutritional Tips">
          <p>Learn about the connection between nutrition and mental health.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Stay hydrated</li>
            <li>Eat regular meals</li>
            <li>Include protein with each meal</li>
            <li>Limit processed foods and added sugars</li>
            <li>Consider probiotic-rich foods for gut health</li>
          </ul>
        </Card>
        <Card title="Calorie Tracker">
          <p>Measure calories burned for various different activities.</p>
          <Button onClick={handleClick}>Let's Track</Button>
        </Card>
      </div>
    </Layout>
  )
}
