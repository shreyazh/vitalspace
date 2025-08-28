import type React from "react"
export default function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      {children}
    </div>
  )
}
