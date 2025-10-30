export default function ProgressIndicator({ steps }) {
  return (
    <div className="space-y-4">
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-center gap-4 group">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base transition-all duration-300 shadow-md ${
              step.status === "success"
                ? "bg-success text-success-foreground ring-4 ring-success/20 shadow-success/20"
                : step.status === "error"
                  ? "bg-destructive text-destructive-foreground ring-4 ring-destructive/20 shadow-destructive/20"
                  : step.status === "testing"
                    ? "bg-primary text-primary-foreground animate-pulse ring-4 ring-primary/30 shadow-primary/30 scale-110"
                    : "bg-muted text-muted-foreground"
            }`}
          >
            {step.status === "success" ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : step.status === "error" ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              idx + 1
            )}
          </div>
          <div className="flex-1 min-w-0">
            <span
              className={`text-base font-semibold transition-colors duration-300 ${
                step.status === "success"
                  ? "text-success"
                  : step.status === "error"
                    ? "text-destructive"
                    : step.status === "testing"
                      ? "text-primary"
                      : "text-muted-foreground"
              }`}
            >
              {step.label}
            </span>
          </div>
          {step.status === "testing" && (
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}