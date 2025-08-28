import Layout from "./components/Layout"
import PageTitle from "./components/PageTitle"
import SectionTitle from "./components/SectionTitle"
import Card from "./components/Card"
import { Brain, Dumbbell, Lightbulb, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <PageTitle>Welcome to VitalSpace: For Health & Wellness</PageTitle>

      <section className="mb-12">
        <SectionTitle>
          <Brain className="inline-block mr-2" /> Stress and Anxiety Management
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Personalized Plans">
            <p>Tailored stress-reduction strategies based on your needs</p>
            <Link
              href="/stress-management/personalized-plans"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Learn more
            </Link>
          </Card>
          <Card title="CBT Tools">
            <p>Interactive exercises to reframe negative thoughts</p>
            <Link href="/stress-management/cbt-tools" className="text-blue-600 hover:underline mt-2 inline-block">
              Learn more
            </Link>
          </Card>
          <Card title="Support Groups">
            <p>Virtual communities for shared healing experiences</p>
            <Link href="/stress-management/support-groups" className="text-blue-600 hover:underline mt-2 inline-block">
              Learn more
            </Link>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>
          <Dumbbell className="inline-block mr-2" /> Promote a Healthier Lifestyle
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Self-Care Tips">
            <p>Daily advice and habit tracking for better well-being</p>
            <Link href="/healthy-lifestyle/self-care-tips" className="text-blue-600 hover:underline mt-2 inline-block">
              Learn more
            </Link>
          </Card>
          <Card title="Mind-Body Exercises">
            <p>Yoga and routines for mental clarity</p>
            <Link
              href="/healthy-lifestyle/mind-body-exercises"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Learn more
            </Link>
          </Card>
          <Card title="Nutrition Guide">
            <p>Dietary recommendations for improved mental health</p>
            <Link href="/healthy-lifestyle/nutrition-guide" className="text-blue-600 hover:underline mt-2 inline-block">
              Learn more
            </Link>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>
          <Lightbulb className="inline-block mr-2" /> Interactive Tools
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Mood Tracker">
            <p>Monitor your emotions with insightful analytics</p>
            <Link
              href="https://mood-tracker-vitalspace.vercel.app"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Learn more
            </Link>
          </Card>
          <Card title="Stress Map">
            <p>Visualize and understand your stress triggers</p>
            <Link href="/interactive-tools/stress-map" className="text-blue-600 hover:underline mt-2 inline-block">
              Learn more
            </Link>
          </Card>
        </div>
      </section>

      <section>
        <SectionTitle>
          <Users className="inline-block mr-2" /> Community Interaction
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Peer Challenges">
            <p>Join '30 Days of Gratitude' and other group activities</p>
            <Link href="/community/peer-challenges" className="text-blue-600 hover:underline mt-2 inline-block">
              Learn more
            </Link>
          </Card>
          <Card title="Discussion Forums">
            <p>Share experiences and insights with others</p>
            <Link href="/community/discussion-forums" className="text-blue-600 hover:underline mt-2 inline-block">
              Learn more
            </Link>
          </Card>
          <Card title="Expert Q&A">
            <p>Engage with psychologists and wellness gurus</p>
            <Link href="/community/expert-qa" className="text-blue-600 hover:underline mt-2 inline-block">
              Learn more
            </Link>
          </Card>
        </div>
      </section>
    </Layout>
  )
}
