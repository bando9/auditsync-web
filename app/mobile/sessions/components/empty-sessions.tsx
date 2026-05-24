import { FolderX } from "lucide-react"

function EmptySessions() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-white p-8 text-center">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <FolderX className="h-6 w-6" />
      </div>
      <p className="text-sm font-semibold">Tidak Ada Sesi Aktif</p>
      <p className="mt-1 max-w-xs text-xs text-muted-foreground">
        Saat ini belum ada jadwal stock opname yang dirilis oleh admin pusat.
        Silakan hubungi kepala gudang.
      </p>
    </div>
  )
}

export default EmptySessions
