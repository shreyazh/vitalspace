import Layout from "../../components/Layout"
import PageTitle from "../../components/PageTitle"
import Card from "../../components/Card"
import Link from "next/link"

export default function SupportGroups() {
  return (
    <Layout>
      <PageTitle>Virtual Support Groups</PageTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="The Importance of Virtual Support Groups">
          <p>
            Virtual support groups provide a safe and accessible space for individuals to connect, share experiences,
            and receive emotional support from others facing similar challenges. These groups can be particularly
            beneficial for those dealing with stress, anxiety, or chronic illnesses, as they offer a sense of community
            and understanding.
          </p>
          <p>
            The convenience of online support groups allows people to participate from the comfort of their homes,
            making them an invaluable resource for those with mobility issues or tight schedules. Additionally, they
            provide anonymity, which can make it easier for individuals to open up and seek help without fear of
            judgment.
          </p>
        </Card>
        <Card title="Join a Virtual Support Group">
          <p>
            If you're looking for a supportive community, consider joining an online group where you can share your
            experiences and gain insights from others. Here are some reliable platforms:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <Link href="https://www.7cups.com/" className="text-blue-600 hover:underline" target="_blank">
                7 Cups - Free online emotional support and counseling
              </Link>
            </li>
            <li>
              <Link href="https://www.supportgroups.com/" className="text-blue-600 hover:underline" target="_blank">
                Support Groups - Various mental health and wellness communities
              </Link>
            </li>
            <li>
              <Link href="https://www.mentalhealthforum.net/" className="text-blue-600 hover:underline" target="_blank">
                Mental Health Forum - A space to discuss mental health concerns
              </Link>
            </li>
          </ul>
        </Card>
      </div>
    </Layout>
  )
}
