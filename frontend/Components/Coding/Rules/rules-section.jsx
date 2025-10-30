"use client"

import { useState } from "react"
import { Shield } from "lucide-react"

export  default function RulesSection({ onAccept }) {
  const [accepted, setAccepted] = useState(false)

  const rules = [
    "Ensure you are in a well-lit room",
    "Keep your face clearly visible to the camera",
    "Do not switch tabs or leave the assessment window",
    "Stable internet connection is required throughout",
  ]

  const handleChange = (checked) => {
    setAccepted(checked)
    onAccept(checked)
  }

  return (
    <div className="flex flex-col gap-6 rounded-lg border-2 border-border p-6 bg-card text-card-foreground">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-primary/10 p-3 text-primary">
          <Shield className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-semibold">Assessment Rules</h2>
      </div>

      <div className="space-y-3">
        {rules.map((rule, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {idx + 1}
            </div>
            <p className="text-muted-foreground">{rule}</p>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-3 pt-4">
        <input
          id="accept-rules"
          type="checkbox"
          checked={accepted}
          onChange={(e) => handleChange(e.target.checked)}
          className="w-5 h-5 rounded border-border text-primary mt-0.5 cursor-pointer"
        />
        <label
          htmlFor="accept-rules"
          className="text-sm font-medium leading-none text-muted-foreground cursor-pointer"
        >
          I confirm that I have read and agree to follow all the assessment rules
        </label>
      </div>
    </div>
  )
}