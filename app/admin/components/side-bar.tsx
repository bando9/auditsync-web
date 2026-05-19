import { FolderClock, LayoutDashboard, ScanLine, Users } from "lucide-react"
import Link from "next/link"

function SideBar() {
  return (
    <aside className="hidden w-64 flex-col border-r border-border bg-white md:flex">
      <div className="flex h-16 items-center border-b border-border px-6">
        <ScanLine className="mr-2 h-6 w-6 text-primary" />
        <span className="text-lg font-bold tracking-tight">AuditSync</span>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        <Link
          href="/admin/dashboard"
          className="flex items-center rounded-md bg-muted px-3 py-2 text-sm font-medium text-foreground"
        >
          <LayoutDashboard className="mr-3 h-4 w-4" />
          Dashboard
        </Link>
        <Link
          href="/admin/sessions"
          className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <FolderClock className="mr-3 h-4 w-4" /> Riwayat Sesi
        </Link>
        <a
          href="#"
          className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Users className="mr-3 h-4 w-4" /> Tim Lapangan
        </a>
      </nav>
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            AD
          </div>
          <div className="flex flex-col">
            <span className="text-sm leading-none font-medium">
              Admin Gudang
            </span>
            <span className="mt-1 text-xs text-muted-foreground">
              admin@auditsync.com
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideBar
