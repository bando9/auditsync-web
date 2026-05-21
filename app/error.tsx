"use client"

import { RefreshCw, ScanLine, ShieldCheck, WifiOff, Wrench } from "lucide-react"
import { useEffect } from "react"

function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service (opsional)
    console.error("AuditSync Captured Error:", error)
  }, [error])
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-foreground antialiased">
      {/* <!-- HEADER SEDERHANA --> */}
      <header className="absolute top-0 flex h-14 w-full shrink-0 items-center border-b border-border bg-white px-6 shadow-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <ScanLine className="h-5 w-5" />
          <span className="text-base font-bold tracking-tight">AuditSync</span>
        </div>
      </header>

      {/* <!-- MAIN CONTENT (Tengah Layar) --> */}
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
          {/* <!-- Aksen Garis Merah di Atas Card --> */}
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-red-500"></div>

          {/* <!-- Ikon Error / Koneksi Terputus --> */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-red-100 bg-red-50 text-red-500">
            <WifiOff className="h-10 w-10" />
          </div>

          {/* <!-- Pesan Error --> */}
          <h1 className="mb-3 text-xl font-extrabold tracking-tight text-gray-900">
            Gangguan Sistem / Jaringan
          </h1>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            Sistem gagal mengirim atau memuat data. Hal ini biasanya terjadi
            akibat hilangnya sinyal di area gudang atau gangguan sementara pada
            server.
          </p>

          {/* <!-- Box Notifikasi Penenang (Penting untuk psikologi user lapangan) --> */}
          <div className="mb-8 flex gap-3 rounded-lg border border-blue-100 bg-blue-50 p-3 text-left">
            <ShieldCheck className="h-5 w-5 shrink-0 text-blue-600" />
            <p className="text-xs leading-relaxed text-blue-800">
              <strong>Jangan khawatir!</strong> Data hitungan fisik yang sudah
              tersimpan di perangkat Anda aman. Silakan cari area dengan sinyal
              yang lebih baik lalu coba lagi.
            </p>
          </div>

          {/* <!-- Tombol Aksi --> */}
          <div className="space-y-3">
            {/* <!-- Tombol Utama (Coba Lagi / Reset) --> */}
            {/* <!-- Di Next.js, ini akan memicu fungsi reset() bawaan error boundary --> */}
            <button
              // onClick={reset()}
              className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-[0.98]"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Coba Lagi
            </button>

            {/* <!-- Tombol Sekunder --> */}
            <button
              //   onclick="window.location.href='/'"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-border bg-white text-sm font-medium text-gray-700 transition-all hover:bg-muted active:scale-[0.98]"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>

        {/* <!-- Detail Error (Hanya terlihat jika dibutuhkan untuk tech support) --> */}
        <div className="mt-8 max-w-sm text-center">
          <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Wrench className="h-3.5 w-3.5" /> Hubungi Kepala Gudang jika
            masalah berlanjut.
          </p>
        </div>
      </main>
    </div>
  )
}

export default ErrorPage
