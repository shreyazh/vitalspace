import Layout from "../../components/Layout"
import PageTitle from "../../components/PageTitle"
import Card from "../../components/Card"

const faqs = [
  {
    question: "How can I manage stress effectively?",
    answer: "Practice mindfulness, exercise regularly, and maintain a balanced diet to help manage stress.",
  },
  {
    question: "What are the early signs of depression?",
    answer:
      "Persistent sadness, loss of interest, changes in appetite, sleep disturbances, and difficulty concentrating.",
  },
  {
    question: "How much exercise do I need daily?",
    answer: "Aim for at least 30 minutes of moderate exercise most days of the week.",
  },
  {
    question: "What are simple ways to improve sleep quality?",
    answer: "Maintain a consistent sleep schedule, avoid screens before bed, and create a relaxing bedtime routine.",
  },
  {
    question: "How can I boost my immune system?",
    answer: "Eat a nutrient-rich diet, stay hydrated, exercise, and get enough sleep.",
  },
  {
    question: "How do I recognize anxiety symptoms?",
    answer: "Symptoms include excessive worry, restlessness, rapid heartbeat, and difficulty sleeping.",
  },
  {
    question: "What are effective relaxation techniques?",
    answer: "Deep breathing, progressive muscle relaxation, yoga, and guided meditation.",
  },
  {
    question: "How does physical health affect mental health?",
    answer: "Regular exercise and proper nutrition can reduce stress, anxiety, and depression.",
  },
  {
    question: "What foods are good for brain health?",
    answer: "Leafy greens, nuts, fish rich in omega-3s, and berries support brain function.",
  },
  {
    question: "How can I improve my focus and concentration?",
    answer: "Practice mindfulness, reduce distractions, take breaks, and get enough sleep.",
  },
  {
    question: "What are signs of burnout?",
    answer: "Chronic fatigue, irritability, loss of motivation, and trouble concentrating.",
  },
  {
    question: "How do I develop a healthy morning routine?",
    answer: "Wake up at the same time, hydrate, stretch, eat a healthy breakfast, and set daily goals.",
  },
  {
    question: "What is the link between gut health and mental health?",
    answer: "A balanced gut microbiome can improve mood and reduce anxiety.",
  },
  {
    question: "How can I manage social anxiety?",
    answer: "Gradual exposure to social situations, deep breathing, and cognitive behavioral therapy can help.",
  },
  {
    question: "Why is hydration important for mental health?",
    answer: "Dehydration can cause fatigue, mood swings, and trouble concentrating.",
  },
  {
    question: "How can I break negative thought patterns?",
    answer: "Challenge negative thoughts, practice self-compassion, and reframe situations positively.",
  },
  {
    question: "What are the benefits of journaling for mental health?",
    answer: "Journaling helps process emotions, reduce stress, and clarify thoughts.",
  },
  {
    question: "How does meditation impact mental health?",
    answer: "Regular meditation reduces stress, improves focus, and enhances emotional regulation.",
  },
  {
    question: "What are good habits for a strong immune system?",
    answer: "Exercise, a balanced diet, quality sleep, and stress management.",
  },
  {
    question: "How do I deal with intrusive thoughts?",
    answer: "Recognize them as thoughts, don’t engage, and practice mindfulness techniques.",
  },
  {
    question: "What are some natural ways to improve mood?",
    answer: "Sunlight exposure, exercise, socializing, and engaging in enjoyable activities.",
  },
  {
    question: "How do I build mental resilience?",
    answer: "Practice gratitude, develop coping skills, and maintain strong social connections.",
  },
  {
    question: "Why is deep breathing effective for stress relief?",
    answer: "Deep breathing activates the parasympathetic nervous system, promoting relaxation.",
  },
  {
    question: "What are common myths about mental health?",
    answer: "Mental illness is not a sign of weakness, and seeking help is a sign of strength.",
  },
  {
    question: "How can I support a loved one with anxiety or depression?",
    answer: "Listen without judgment, encourage professional help, and offer emotional support.",
  },
]

export default function ExpertQA() {
  return (
    <Layout>
      <PageTitle>Frequently Asked Questions (FAQ)</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <Card key={index} title={faq.question}>
            <p>{faq.answer}</p>
          </Card>
        ))}
      </div>
    </Layout>
  )
}
