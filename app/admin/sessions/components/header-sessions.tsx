import { PlusCircle } from "lucide-react"
import Link from "next/link"

function HeaderSessions() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-white px-6">
      <div>
        <h1 className="text-lg font-semibold">Manajemen Sesi Audit</h1>
        <p className="text-xs text-muted-foreground">
          Kelola jadwal dan riwayat Stock Opname
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="/admin/sessions/create"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          <PlusCircle className="mr-2 h-4 w-4" /> Buat Sesi Baru
        </Link>
      </div>
    </header>
  )
}

export default HeaderSessions
