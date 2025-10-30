export default function TestCard({ icon, label, status, value, children }) {
    const statusStyles = {
      pending: "bg-muted border-border",
      testing: "bg-blue-50 border-primary animate-pulse-ring",
      success: "bg-green-50 border-success",
      error: "bg-red-50 border-destructive",
    }
  
    const iconStyles = {
      pending: "text-muted-foreground",
      testing: "text-primary animate-spin",
      success: "text-success",
      error: "text-destructive",
    }
  
    return (
      <div
        className={`p-4 rounded-lg border-2 transition-all duration-300 ${statusStyles[status]}`}
      >
        <div
          className={`w-6 h-6 mb-2 transition-colors ${iconStyles[status]}`}
        >
          {icon}
        </div>
        <div className="text-sm font-semibold text-foreground">{label}</div>
        {value && (
          <div className="text-xs text-success mt-1 font-medium">{value}</div>
        )}
        {children && <div className="mt-2">{children}</div>}
      </div>
    )
  }