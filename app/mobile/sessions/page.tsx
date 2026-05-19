import {
  Activity,
  ArrowRight,
  Calendar,
  ChevronLeft,
  Clock,
  FolderX,
  RefreshCw,
} from "lucide-react"
import Link from "next/link"

function MobileSession() {
  const isAnySession = true
  return (
    <div className="flex min-h-screen flex-col justify-between bg-gray-50 font-sans text-foreground antialiased">
      {/* <!-- TOP MOBILE HEADER --> */}
      <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center justify-between border-b border-border bg-white px-4 shadow-sm">
        <div className="flex items-center gap-2">
          {/* <!-- Tombol Kembali ke Pemilihan Peran --> */}
          <Link
            href="#"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <span className="text-base font-bold tracking-tight">
            Sesi Audit Aktif
          </span>
        </div>
        {/* <!-- Badge Peran Aktif yang Diambil dari LocalStorage --> */}
        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700">
          🕵️‍♂️ Auditor
        </span>
      </header>

      {/* <!-- MAIN BODY --> */}
      <main className="mx-full w-full max-w-md flex-1 space-y-4 px-4 py-4">
        {/* <!-- INFORMASI SINGKAT --> */}
        <div className="px-1">
          <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
            Daftar Kerja Lapangan
          </p>
          <p className="mt-0.5 text-sm text-gray-600">
            Pilih sesi *stock opname* yang sedang berjalan hari ini untuk mulai
            menghitung fisik barang.
          </p>
        </div>

        {isAnySession ? (
          //  <!-- LIST SESI IN_PROGRESS -->
          <div className="space-y-3">
            {/* <!-- SESI 1: OPNAME UTAMA (IN PROGRESS) --> */}
            <Link
              href="#"
              className="group relative block overflow-hidden rounded-xl border border-border bg-white p-4 shadow-sm transition-all hover:border-primary active:scale-[0.99]"
            >
              {/* <!-- Status Bar Samping (Indikator Aktif) --> */}
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-blue-500"></div>

              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-base font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    Stock Opname Q2 2026
                  </h2>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> Dibuat: 19 Mei 2026
                  </p>
                </div>
                {/* <!-- Status Badge --> */}
                <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[11px] font-medium text-green-700">
                  In Progress
                </span>
              </div>

              {/* <!-- Detail Tambahan Status Progress --> */}
              <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border/60 pt-3 text-xs">
                <div>
                  <span className="block text-muted-foreground">
                    Total Target SAP
                  </span>
                  <span className="mt-0.5 block font-semibold text-gray-900">
                    2,500 Items
                  </span>
                </div>
                <div>
                  <span className="block text-muted-foreground">
                    Progress Hitung
                  </span>
                  <span className="mt-0.5 flex items-center gap-1 font-semibold text-blue-600">
                    <Activity className="h-3.5 w-3.5" />
                    50.2% Selesai
                  </span>
                </div>
              </div>

              {/* <!-- Prompt Navigasi --> */}
              <div className="mt-3 flex items-center justify-end gap-1 pt-1 text-xs font-medium text-blue-600">
                Mulai Hitung Barang{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>

            {/* <!-- SESI 2: AUDIT KHUSUS GUDANG PERAKITAN (IN PROGRESS) --> */}
            <Link
              href="#"
              className="group relative block overflow-hidden rounded-xl border border-border bg-white p-4 shadow-sm transition-all hover:border-primary active:scale-[0.99]"
            >
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-blue-500"></div>

              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-base font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    Audit Khusus: Gudang Perakitan
                  </h2>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> Dibuat: 15 Mei 2026
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[11px] font-medium text-green-700">
                  In Progress
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border/60 pt-3 text-xs">
                <div>
                  <span className="block text-muted-foreground">
                    Total Target SAP
                  </span>
                  <span className="mt-0.5 block font-semibold text-gray-900">
                    320 Items
                  </span>
                </div>
                <div>
                  <span className="block text-muted-foreground">
                    Progress Hitung
                  </span>
                  <span className="mt-0.5 flex items-center gap-1 font-semibold text-amber-600">
                    <Clock className="h-3.5 w-3.5" /> 12.4% Selesai
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-end gap-1 pt-1 text-xs font-medium text-blue-600">
                Mulai Hitung Barang{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          </div>
        ) : (
          //  <!-- STATE JIKA TIDAK ADA SESI AKTIF (MOCKUP TERSEMBUNYI) -->
          <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-white p-8 text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <FolderX className="h-6 w-6" />
            </div>
            <p className="text-sm font-semibold">Tidak Ada Sesi Aktif</p>
            <p className="mt-1 max-w-xs text-xs text-muted-foreground">
              Saat ini belum ada jadwal stock opname yang dirilis oleh admin
              pusat. Silakan hubungi kepala gudang.
            </p>
          </div>
        )}
      </main>
      <footer className="flex shrink-0 items-center justify-between border-t border-border bg-white px-4 py-3 text-[11px] text-muted-foreground">
        <div className="flex items-center gap-1">
          <RefreshCw className="animate-spin-slow h-3 w-3 text-green-500" />
          <span>Sinkronisasi otomatis aktif</span>
        </div>
        <span>User: Bando M.K.</span>
      </footer>
    </div>
  )
}

export default MobileSession
