import { Button } from "@/components/ui/button"
import { FileDown, FileUp } from "lucide-react"

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
        <Button
          className="inline-flex h-9 cursor-pointer items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          variant="ghost"
        >
          <FileDown className="mr-2 h-4 w-4" /> Export Hasil
        </Button>
        <Button className="inline-flex h-9 cursor-pointer items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
          <FileUp className="mr-2 h-4 w-4" /> Import SAP
        </Button>
      </div>
    </header>
  )
}

export default HeaderDashboard
