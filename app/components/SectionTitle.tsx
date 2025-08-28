import type React from "react"
export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-semibold mb-4">{children}</h2>
}
