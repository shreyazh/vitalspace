import Layout from "../../components/Layout"
import PageTitle from "../../components/PageTitle"
import Card from "../../components/Card"

export default function MoodTracker() {
  return (
    <Layout>
      <PageTitle>Mood Tracker</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Daily Mood Log">
          <p>Record and track your daily mood fluctuations.</p>
        </Card>
        <Card title="Mood Analytics">
          <p>View insights and patterns from your mood data over time.</p>
        </Card>
        <Card title="Mood Influencers">
          <p>Identify factors that impact your mood positively or negatively.</p>
        </Card>
        <Card title="Mood-Boosting Activities">
          <p>Get personalized suggestions for activities to improve your mood.</p>
        </Card>
      </div>
    </Layout>
  )
}
