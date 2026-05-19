import { Boxes, ClipboardCheck, ShieldAlert } from "lucide-react"

function MobilePage() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-gray-50 font-sans text-foreground antialiased">
      {/* <!-- TOP MOBILE HEADER --> */}
      <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center justify-between border-b border-border bg-white px-4 shadow-sm">
        <div className="flex items-center gap-2">
          <i data-lucide="scan-line" className="h-5 w-5 text-primary"></i>
          <span className="text-base font-bold tracking-tight">
            AuditSync{" "}
            <span className="text-xs font-normal text-muted-foreground">
              Mobile
            </span>
          </span>
        </div>
        {/* <!-- Status Akun Singkat --> */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-green-500"></span> Online
        </div>
      </header>
      {/* <!-- INTERACTIVE MAIN BODY --> */}
      <main className="mx-full flex w-full max-w-md flex-1 flex-col justify-center px-5 py-6">
        {/* <!-- PENGANTAR --> */}
        <div className="mb-8 text-center">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Selamat Datang di Lapangan
          </h1>
          <p className="mt-2 px-2 text-sm text-muted-foreground">
            Sistem mendeteksi akun Anda memiliki otoritas ganda. Pilih peran
            Anda untuk memulai proses perhitungan{" "}
            <span className="font-semibold text-gray-800">Blind Count</span>{" "}
            saat ini.
          </p>
        </div>

        {/* <!-- CONTAINER TOMBOL RAKSASA --> */}
        <div className="space-y-4">
          {/* <!-- TOMBOL RAKSASA 1: AUDITOR --> */}
          <button
            // onClick="saveRole('AUDITOR')"
            className="group relative flex w-full items-center overflow-hidden rounded-xl border border-border bg-white p-5 text-left shadow-sm transition-all hover:border-primary focus:ring-2 focus:ring-primary focus:outline-none active:scale-[0.98] active:bg-gray-50"
          >
            {/* <!-- Aksen Hiasan Samping --> */}
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-blue-600"></div>

            <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
              <ClipboardCheck className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-gray-900">
                  Masuk sebagai Auditor
                </span>
                <i
                  data-lucide="chevron-right"
                  className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1"
                ></i>
              </div>
              <p className="mt-1 pr-4 text-xs leading-relaxed text-muted-foreground">
                Bertugas melakukan opname independen mewakili tim
                pemeriksa/eksternal.
              </p>
            </div>
          </button>
          {/* <!-- TOMBOL RAKSASA 2: TIM GUDANG --> */}
          <button
            // onclick="saveRole('WAREHOUSE_STAFF')"
            className="group relative flex w-full items-center overflow-hidden rounded-xl border border-border bg-white p-5 text-left shadow-sm transition-all hover:border-primary focus:ring-2 focus:ring-primary focus:outline-none active:scale-[0.98] active:bg-gray-50"
          >
            {/* <!-- Aksen Hiasan Samping --> */}
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-orange-500"></div>

            <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-100">
              <Boxes className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-gray-900">
                  Masuk sebagai Tim Gudang
                </span>
                <i
                  data-lucide="chevron-right"
                  className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1"
                ></i>
              </div>
              <p className="mt-1 pr-4 text-xs leading-relaxed text-muted-foreground">
                Bertugas melakukan perhitungan fisik internal mewakili
                penjaga/pemilik area gudang.
              </p>
            </div>
          </button>
        </div>

        {/* <!-- NOTIFIKASI / WARNING KEAMANAN BLIND COUNT --> */}
        <div className="mt-8 flex gap-3 rounded-lg border border-amber-200 bg-amber-50/50 p-4">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <div className="text-xs leading-relaxed text-amber-900">
            <span className="font-bold">SOP Keamanan Data:</span> Pilihan peran
            Anda mengunci otorisasi penulisan buku riwayat fisik. Anda tidak
            akan dapat melihat angka input dari peran lawan sampai verifikasi
            selesai di-approve oleh admin pusat.
          </div>
        </div>
      </main>
      {/* <!-- FOOTER INFORMASI VERSI --> */}
      <footer className="shrink-0 border-t border-border bg-white py-4 text-center text-[11px] text-muted-foreground">
        Logged in as{" "}
        <span className="font-medium text-gray-700">Bando Mega Kusuma</span>{" "}
        &bull; v1.0.0-beta
      </footer>
    </div>
  )
}

export default MobilePage
