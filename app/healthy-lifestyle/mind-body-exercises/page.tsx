import Layout from "../../components/Layout"
import PageTitle from "../../components/PageTitle"
import Card from "../../components/Card"

export default function MindBodyExercises() {
  return (
    <Layout>
      <PageTitle>Mind-Body Exercises</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Yoga Sessions">
          <p>
            Engage in guided yoga sessions designed to improve flexibility, balance, and mental clarity. Regular
            practice helps reduce stress, enhance posture, and boost overall well-being.
          </p>
          <a
            href="https://youtube.com/playlist?list=PLui6Eyny-UzwxbWCWDbTzEwsZnnROBTIL&si=faetKfEwUZhCQ6s2"
            target="_blank"
            className="text-blue-500 underline"
            rel="noreferrer"
          >
            Watch Yoga Sessions
          </a>
        </Card>
        <Card title="Meditation Practices">
          <p>
            Discover a variety of meditation techniques to cultivate mindfulness, reduce anxiety, and improve focus.
            Whether you're a beginner or experienced, these practices help develop inner peace.
          </p>
          <a
            href="https://youtu.be/FjHGZj2IjBk?si=-83eP2CMZzyYbErg"
            target="_blank"
            className="text-blue-500 underline"
            rel="noreferrer"
          >
            Explore Meditation
          </a>
        </Card>
        <Card title="Breathing Exercises">
          <p>
            Learn controlled breathing techniques that help lower stress levels, enhance lung capacity, and regulate
            emotions. These exercises can be practiced anywhere for immediate relaxation.
          </p>
          <a
            href="https://youtu.be/0BNejY1e9ik?si=FslnDvWegyu29ydX"
            target="_blank"
            className="text-blue-500 underline"
            rel="noreferrer"
          >
            Practice Breathing Techniques
          </a>
        </Card>
        <Card title="Progressive Muscle Relaxation">
          <p>
            Follow guided PMR sessions to systematically relax different muscle groups. This technique is effective for
            reducing tension, promoting better sleep, and enhancing overall relaxation.
          </p>
          <a
            href="https://youtube.com/playlist?list=PLZoDGrriQgsLb5sfR2lldfGcKoQdU_t5S&si=-TbAG0ddWvlPE2_3"
            target="_blank"
            className="text-blue-500 underline"
            rel="noreferrer"
          >
            Try Progressive Muscle Relaxation
          </a>
        </Card>
      </div>
    </Layout>
  )
}
