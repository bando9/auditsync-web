import { FileDown, FileUp } from "lucide-react"
import React from "react"

function HeaderDashboard() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-white px-6">
      <div>
        <h1 className="text-lg font-semibold">Stock Opname Q2 2026</h1>
        <p className="text-xs text-muted-foreground">
          Sesi Aktif &bull; Terakhir diperbarui 2 menit yang lalu
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
          <FileDown className="mr-2 h-4 w-4" /> Export Hasil
        </button>
        <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
          <FileUp className="mr-2 h-4 w-4" /> Import SAP
        </button>
      </div>
    </header>
  )
}

export default HeaderDashboard
