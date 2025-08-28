import type React from "react"
export default function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-3xl font-bold mb-6 text-center">{children}</h1>
}
