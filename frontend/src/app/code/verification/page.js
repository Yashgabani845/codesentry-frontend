"use client"

import { useState } from "react"
import { CheckCircle2, AlertCircle, Shield } from "lucide-react";
import CameraTest from "../../../../Components/Coding/Rules/camara-test"
import InternetTest from "../../../../Components/Coding/Rules/internal-test"

import FaceDetectionTest from "../../../../Components/Coding/Rules/face-detection"

import ProgressIndicator from "../../../../Components/Coding/Rules/process-indicator"
import RulesSection from "../../../../Components/Coding/Rules/rules-section"


export default function AssessmentVerification() {
  const [cameraStatus, setCameraStatus] = useState("pending")
  const [internetStatus, setInternetStatus] = useState("pending")
  const [faceStatus, setFaceStatus] = useState("pending")
  const [rulesAccepted, setRulesAccepted] = useState(false)
  const [videoRef, setVideoRef] = useState(null)
  const [error, setError] = useState(null)

  const allTestsComplete =
    cameraStatus === "success" &&
    internetStatus === "success" &&
    faceStatus === "success"

  const isReadyToProceed = allTestsComplete && rulesAccepted

  const handleProceed = () => {
    if (isReadyToProceed) {
      alert("Verification complete! Proceeding to assessment...")
    }
  }

  const progressSteps = [
    { label: "Camera Access", status: cameraStatus },
    { label: "Internet Connection", status: internetStatus },
    { label: "Face Detection", status: faceStatus },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full mb-4">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Secure Verification</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Assessment Verification
          </h1>
          <p className="text-muted-foreground">
            Complete all verification steps to begin your test
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Tests */}
            <div className="lg:col-span-2 space-y-6">
              <CameraTest
                onStatusChange={setCameraStatus}
                onVideoRef={setVideoRef}
              />

              <InternetTest
                onStatusChange={setInternetStatus}
                onSpeedDetected={() => {}}
              />

              <FaceDetectionTest
                videoRef={videoRef}
                onStatusChange={setFaceStatus}
                canStart={cameraStatus === "success"}
              />
            </div>

            {/* Right: Progress & Rules */}
            <div className="space-y-8">
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-4">Progress</h3>
                <ProgressIndicator steps={progressSteps} />
              </div>

              <RulesSection onAccept={setRulesAccepted} />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-6 flex items-start gap-3 p-4 bg-destructive/10 rounded-lg border border-destructive animate-fade-in">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          {/* Action Button */}
          <div className="mt-8">
            <button
              onClick={handleProceed}
              disabled={!isReadyToProceed}
              className={`w-full px-6 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 ${
                isReadyToProceed
                  ? "bg-success text-success-foreground hover:opacity-90 shadow-lg"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              <CheckCircle2 className="w-6 h-6" />
              {isReadyToProceed
                ? "Proceed to Test"
                : "Complete All Steps to Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}