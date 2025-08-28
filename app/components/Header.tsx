import type React from "react"
import Link from "next/link"
import { BarChart, MessageCircle, User, Brain, Dumbbell, Lightbulb, Users } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-beige text-black p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">
          VitalSpace
        </Link>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-4">
            <NavItem href="https://share.chatling.ai/s/iYsWUdl86GPwJbF" icon={MessageCircle} text="MedAi" />
            <NavItem href="/dashboard" icon={BarChart} text="Dashboard" />
            <NavItem href="/stress-management" icon={Brain} text="Stress Management" />
            <NavItem href="/healthy-lifestyle" icon={Dumbbell} text="Healthy Lifestyle" />
            <NavItem href="/interactive-tools" icon={Lightbulb} text="Interactive Tools" />
            <NavItem href="/community" icon={Users} text="Community" />
            <NavItem href="/profile" icon={User} text="Profile" />
          </ul>
        </nav>
      </div>
    </header>
  )
}

function NavItem({ href, icon: Icon, text }: { href: string; icon: React.ElementType; text: string }) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center hover:underline p-2 rounded-md hover:bg-cream transition-colors duration-200"
      >
        <Icon className="mr-1" size={18} />
        <span>{text}</span>
      </Link>
    </li>
  )
}
