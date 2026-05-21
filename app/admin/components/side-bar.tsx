"use client"

import { FolderClock, LayoutDashboard, ScanLine, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    Icon: LayoutDashboard,
  },
  {
    name: "Riwayat Sesi",
    href: "/sessions",
    Icon: FolderClock,
  },
  {
    name: "Tim Lapangan",
    href: "/users",
    Icon: Users,
  },
]

interface SideBarProps {
  user?: {
    name: string
    email: string
    initials: string
  }
}

function SideBar({ user }: SideBarProps) {
  const pathname = usePathname()

  const activeStyle = "text-foreground bg-muted"
  const nonActiveStyle =
    "text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"

  const currentUser = user || {
    name: "admin gudang",
    email: "admingudang@example.com",
    initials: "AD",
  }

  return (
    <aside className="hidden w-64 flex-col border-r border-border bg-white md:flex">
      <div className="flex h-16 items-center border-b border-border px-6">
        <ScanLine className="mr-2 h-6 w-6 text-primary" />
        <span className="text-lg font-bold tracking-tight">AuditSync</span>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {menu.map((menu) => {
          const isActive = pathname.startsWith(`/admin${menu.href}`)

          return (
            <Link
              key={menu.name}
              href={`/admin${menu.href}`}
              className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${isActive ? activeStyle : nonActiveStyle}`}
            >
              <menu.Icon className="mr-3 h-4 w-4" />
              {menu.name}
            </Link>
          )
        })}
      </nav>
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {currentUser.initials}
          </div>
          <div className="flex flex-col">
            <span className="text-sm leading-none font-medium">
              {currentUser.name}
            </span>
            <span className="mt-1 text-xs text-muted-foreground">
              {currentUser.email}
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideBar
