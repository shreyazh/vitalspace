"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface AppContextType {
  stressLevel: number
  setStressLevel: (level: number) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [stressLevel, setStressLevel] = useState(5) // Default stress level

  return <AppContext.Provider value={{ stressLevel, setStressLevel }}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
