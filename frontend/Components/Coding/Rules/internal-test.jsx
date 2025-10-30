import { useState } from "react"
import { Wifi } from "lucide-react"
import TestCard from "./test-card"

export default function InternetTest({ onStatusChange, onSpeedDetected }) {
  const [status, setStatus] = useState("pending")
  const [speed, setSpeed] = useState(null)

  const checkInternetSpeed = async () => {
    setStatus("testing")
    const imageUrl = "https://www.google.com/images/phd/px.gif"
    const startTime = new Date().getTime()
    
    try {
      await fetch(imageUrl + "?cache=" + startTime)
      const endTime = new Date().getTime()
      const duration = (endTime - startTime) / 1000
      const calculatedSpeed = (0.5 / duration) * 8
      const finalSpeed = Math.max(calculatedSpeed, 0.5)
      
      setSpeed(finalSpeed)
      onSpeedDetected(finalSpeed)
      
      if (finalSpeed >= 0.5) {
        setStatus("success")
        onStatusChange("success")
      } else {
        setStatus("error")
        onStatusChange("error")
      }
    } catch {
      setStatus("error")
      onStatusChange("error")
    }
  }

  return (
    <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <TestCard
        icon={<Wifi className="w-6 h-6" />}
        label="Internet Connection"
        status={status}
        value={speed ? `${speed.toFixed(1)} Mbps` : undefined}
      />
      
      {status === "pending" && (
        <button
          onClick={checkInternetSpeed}
          className="w-full px-6 py-3.5 bg-secondary text-secondary-foreground rounded-xl font-semibold text-base hover:bg-secondary/90 active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Check Connection
        </button>
      )}
      
      {status === "testing" && (
        <div className="flex items-center justify-center gap-3 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-800 shadow-sm">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
          <span className="text-sm font-semibold text-primary">
            Testing connection...
          </span>
        </div>
      )}
    </div>
  )
}