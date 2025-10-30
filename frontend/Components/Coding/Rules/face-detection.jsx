import { useState } from "react"
import { Eye } from "lucide-react"
import  TestCard  from "./test-card"

export  default function FaceDetectionTest({ videoRef, onStatusChange, canStart }) {
  const [status, setStatus] = useState("pending")

  const detectFace = async () => {
    if (!canStart) return
    setStatus("testing")
    // Simulate face detection
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setStatus("success")
    onStatusChange("success")
  }

  return (
    <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <TestCard 
        icon={<Eye className="w-6 h-6" />} 
        label="Face Detection" 
        status={status} 
      />
      
      {status === "pending" && canStart && (
        <button
          onClick={detectFace}
          className="w-full px-6 py-3.5 bg-accent text-accent-foreground rounded-xl font-semibold text-base hover:bg-accent/90 active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Detect Face
        </button>
      )}

      {status === "pending" && !canStart && (
        <button
          disabled
          className="w-full px-6 py-3.5 bg-muted text-muted-foreground rounded-xl font-semibold text-base cursor-not-allowed opacity-60"
        >
          Enable Camera First
        </button>
      )}
      
      {status === "testing" && (
        <div className="flex items-center justify-center gap-3 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-800 shadow-sm">
          <div className="relative">
            <div className="w-5 h-5 border-3 border-accent/30 rounded-full absolute" />
            <div className="w-5 h-5 border-3 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
          <span className="text-sm font-semibold text-accent">
            Scanning face...
          </span>
        </div>
      )}
    </div>
  )
}