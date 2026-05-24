import { Session } from "@/app/types"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

function HeaderMobileSessionsDetails({ sessions }: { sessions: Session[] }) {
  const currentSession = sessions.find(
    (session) => session.slug === "stock-opname-q2-2026"
  )

  return (
    <header className="flex h-12 items-center justify-between border-b border-border/60 px-3">
      <div className="flex items-center gap-2">
        <Link
          href="/mobile/sessions"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="max-w-45 truncate">
          <span className="block truncate text-sm font-bold tracking-tight">
            {currentSession?.name}
          </span>
        </div>
      </div>
      <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
        🕵️‍♂️ Auditor
      </span>
    </header>
  )
}

export default HeaderMobileSessionsDetails
