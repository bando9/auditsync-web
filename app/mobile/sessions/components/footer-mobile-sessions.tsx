import { RefreshCw } from "lucide-react"

function FooterMobileSession() {
  return (
    <footer className="flex shrink-0 items-center justify-between border-t border-border bg-white px-4 py-3 text-[11px] text-muted-foreground">
      <div className="flex items-center gap-1">
        <RefreshCw className="animate-spin-slow h-3 w-3 text-green-500" />
        <span>Sinkronisasi otomatis aktif</span>
      </div>
      <span>User: Bando M.K.</span>
    </footer>
  )
}

export default FooterMobileSession
