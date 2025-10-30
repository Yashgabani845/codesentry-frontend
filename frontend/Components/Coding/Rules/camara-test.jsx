import { useEffect, useRef, useState } from "react"
import { Camera, AlertCircle } from "lucide-react"
import  TestCard  from "./test-card"

export  default function CameraTest({ onStatusChange, onVideoRef }) {
  const videoRef = useRef(null)
  const [status, setStatus] = useState("pending")
  const [error, setError] = useState(null)

  useEffect(() => {
    onVideoRef(videoRef.current)
  }, [onVideoRef])

  const requestCamera = async () => {
    setStatus("testing")
    setError(null)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: 1280, height: 720 },
        audio: false,
      })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setStatus("success")
        onStatusChange("success")
      }
    } catch (err) {
      setError("Camera access denied")
      setStatus("error")
      onStatusChange("error")
    }
  }

  return (
    <div className="space-y-5 animate-slide-up">
      <div className="relative bg-foreground rounded-2xl overflow-hidden aspect-video shadow-2xl ring-1 ring-black/5">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted 
          className="w-full h-full object-cover" 
        />
        
        {status === "pending" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/90 via-black/85 to-black/80 backdrop-blur-md">
            <div className="flex flex-col items-center max-w-sm px-6 text-center">
              <div className="p-5 bg-white/5 rounded-2xl mb-5 ring-1 ring-white/10">
                <Camera className="w-12 h-12 text-white/60" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Camera Not Enabled
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Click the button below to grant camera access
              </p>
            </div>
          </div>
        )}
        
        {status === "testing" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-primary/30 rounded-full absolute" />
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          </div>
        )}
        
        {status === "success" && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 border-[3px] border-success/60 rounded-3xl shadow-[0_0_30px_rgba(34,197,94,0.3)] animate-pulse-ring" />
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <TestCard 
          icon={<Camera className="w-6 h-6" />} 
          label="Camera" 
          status={status} 
        />
        
        {status === "pending" && (
          <button
            onClick={requestCamera}
            className="flex-1 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Enable Camera
          </button>
        )}
      </div>

      {error && (
        <div className="flex items-start gap-3 p-4 bg-destructive/10 border-2 border-destructive/20 rounded-xl animate-fade-in shadow-sm">
          <div className="p-1 bg-destructive/10 rounded-lg flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-destructive" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-destructive leading-relaxed">
              {error}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}