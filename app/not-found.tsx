import { ArrowLeft, FileQuestion, Home, ScanLine } from "lucide-react"

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-foreground antialiased">
      {/* <!-- HEADER SEDERHANA --> */}
      <header className="absolute top-0 flex h-14 w-full shrink-0 items-center border-b border-border bg-white px-6 shadow-sm">
        <div className="flex items-center gap-2">
          <ScanLine className="h-5 w-5 text-primary" />
          <span className="text-base font-bold tracking-tight">AuditSync</span>
        </div>
      </header>
      {/* <!-- MAIN CONTENT (Tengah Layar) --> */}
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
          {/* <!-- Ikon 404 / Pencarian Gagal --> */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-slate-100">
            <FileQuestion className="h-10 w-10 text-slate-500" />
          </div>

          {/* <!-- Pesan Error --> */}
          <h1 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-900">
            404 - Tidak Ditemukan
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
            Maaf, halaman atau sesi Stock Opname yang Anda cari tidak ada. Hal
            ini bisa terjadi jika tautan/QR salah, atau sesi tersebut telah{" "}
            <strong>ditutup/dihapus</strong> oleh Admin Pusat.
          </p>

          {/* <!-- Tombol Navigasi Penyelamat --> */}
          <div className="space-y-3">
            {/* <!-- Tombol Utama (Kembali ke Beranda) --> */}
            <button
              //   onClick="window.location.href='/'"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-[0.98]"
            >
              <Home className="mr-2 h-4 w-4" /> Kembali ke Beranda
            </button>

            {/* <!-- Tombol Sekunder (Kembali ke halaman sebelumnya) --> */}
            <button
              //   onClick="window.history.back()"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-border bg-white text-sm font-medium text-gray-700 transition-all hover:bg-muted active:scale-[0.98]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Sebelumnya
            </button>
          </div>
        </div>

        {/* <!-- Bantuan Ekstra (Support) --> */}
        <div className="mt-8 text-center">
          <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <i data-lucide="life-buoy" className="h-3.5 w-3.5"></i> Butuh
            bantuan? Hubungi Kepala Gudang Anda.
          </p>
        </div>
      </main>
    </div>
  )
}

export default NotFound
