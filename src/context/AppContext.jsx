"use client"

/* 
  Application Context - manages global state across the entire SPA.
  Uses React Context API to share state like selected country/city and form submission status.
  Prevents prop drilling and provides clean state management for the whole application.
*/

import { createContext, useState, useContext } from "react"

// Create context for app-wide state
const AppContext = createContext()

// AppProvider component - wraps entire app to provide context to all children
export function AppProvider({ children }) {
  // State for Partner Directory filters
  const [selectedCountry, setSelectedCountry] = useState("Belarus")
  const [selectedCity, setSelectedCity] = useState("Mogilev")

  // State for Partner Form submission success message
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Package all state into context value object
  const value = {
    selectedCountry,
    setSelectedCountry,
    selectedCity,
    setSelectedCity,
    formSubmitted,
    setFormSubmitted,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// Custom hook to access AppContext - throws error if used outside AppProvider
export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider")
  }
  return context
}
