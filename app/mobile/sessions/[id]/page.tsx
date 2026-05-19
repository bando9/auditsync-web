import React from "react"

function MobileSessionDetail() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50 font-sans text-foreground antialiased">
      {/* <!-- FIXED TOP SECTION (STICKY HEADERS + SEARCH) --> */}
      <div className="shrink-0 border-b border-border bg-white shadow-sm">
        {/* <!-- ROW 1: MINI NAVBAR --> */}
        <header className="flex h-12 items-center justify-between border-b border-border/60 px-3">
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
            >
              <i data-lucide="arrow-left" className="h-4 w-4"></i>
            </a>
            <div className="max-w-45 truncate">
              <span className="block truncate text-sm font-bold tracking-tight">
                Stock Opname Q2 2026
              </span>
            </div>
          </div>
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
            🕵️‍♂️ Auditor
          </span>
        </header>
        {/* <!-- ROW 2: SEARCH BAR (UKURAN PENUH & MUDAH DITEKAN) --> */}
        <div className="p-3">
          <div className="relative w-full">
            <i
              data-lucide="search"
              className="absolute top-3 left-3 h-4 w-4 text-muted-foreground"
            ></i>
            <input
              type="text"
              placeholder="Cari Nama Bahan Baku atau Job No..."
              className="flex h-10 w-full rounded-lg border border-input bg-gray-50 px-3 py-2 pl-10 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:bg-white focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>

        {/* <!-- ROW 3: QUICK FILTER CHIPS --> */}
        <div className="no-scrollbar flex shrink-0 gap-2 overflow-x-auto px-3 pb-3 select-none">
          <button className="shrink-0 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
            Semua (4)
          </button>
          <button className="flex shrink-0 items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted">
            ⚪ Belum (1)
          </button>
          <button className="flex shrink-0 items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted">
            🔴 Mismatch (1)
          </button>
          <button className="flex shrink-0 items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted">
            🟢 Match (2)
          </button>
        </div>
      </div>

      {/* <!-- SCROLLABLE LIST OF TARGETS --> */}
      <main className="flex-1 space-y-2 overflow-y-auto p-3">
        {/* <!-- ITEM 1: STATUS MATCH (🟢 Sudah Selesai) --> */}
        <a
          href="#"
          className="group relative block overflow-hidden rounded-xl border border-border bg-white p-3 shadow-sm transition-all active:scale-[0.99]"
        >
          <div className="flex items-start gap-3">
            {/* <!-- Indikator Warna Status Bulat Besar --> */}
            <span
              className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-green-500"
              title="Match"
            ></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-blue-600">
                  JOB: A240008
                </span>
                <span className="text-[10px] text-muted-foreground">
                  Sortasi 4
                </span>
              </div>
              <h2 className="mt-0.5 truncate text-sm font-bold text-gray-900 group-hover:text-primary">
                SLA BATTERY 12V/12AH
              </h2>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                FG: E-BIKE 14 X 2.50 EXOTIC EV-922
              </p>
            </div>
            <div className="shrink-0 self-center pl-2 text-right">
              <span className="rounded border border-green-100 bg-green-50 px-1.5 py-1 text-xs font-bold text-green-700">
                23 set
              </span>
            </div>
          </div>
        </a>

        {/* <!-- ITEM 2: STATUS MISMATCH (🔴 Selisih Hitungan) --> */}
        <a
          href="#"
          className="group relative block overflow-hidden rounded-xl border border-red-100 bg-white p-3 shadow-sm transition-all active:scale-[0.99]"
        >
          <div className="flex items-start gap-3">
            {/* <!-- Indikator Warna Status Bulat Besar --> */}
            <span
              className="mt-1.5 h-3 w-3 shrink-0 animate-pulse rounded-full bg-red-500"
              title="Mismatch"
            ></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-blue-600">
                  JOB: A240009
                </span>
                <span className="text-[10px] text-muted-foreground">
                  Sortasi 2
                </span>
              </div>
              <h2 className="mt-0.5 truncate text-sm font-bold text-gray-900 group-hover:text-primary">
                LED HEADLIGHT 12V
              </h2>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                FG: E-BIKE 14 X 2.50 PACIFIC SYNC
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-1 self-center pl-2 text-right">
              <span className="rounded bg-red-100 px-1.5 py-0.5 text-center text-[10px] font-bold text-red-700">
                Hitung Ulang
              </span>
            </div>
          </div>
        </a>

        {/* <!-- ITEM 3: STATUS MATCH (🟢 Sudah Selesai) --> */}
        <a
          href="#"
          className="group relative block overflow-hidden rounded-xl border border-border bg-white p-3 shadow-sm transition-all active:scale-[0.99]"
        >
          <div className="flex items-start gap-3">
            <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-green-500"></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-blue-600">
                  JOB: A240009
                </span>
                <span className="text-[10px] text-muted-foreground">
                  Sortasi 2
                </span>
              </div>
              <h2 className="mt-0.5 truncate text-sm font-bold text-gray-900 group-hover:text-primary">
                BLDC MOTOR 500W
              </h2>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                FG: E-BIKE 14 X 2.50 PACIFIC SYNC
              </p>
            </div>
            <div className="shrink-0 self-center pl-2 text-right">
              <span className="rounded border border-green-100 bg-green-50 px-1.5 py-1 text-xs font-bold text-green-700">
                50 pcs
              </span>
            </div>
          </div>
        </a>

        {/* <!-- ITEM 4: STATUS PENDING (⚪ Belum Dihitung) --> */}
        <a
          href="#"
          className="group relative block overflow-hidden rounded-xl border border-border bg-white p-3 shadow-sm transition-all active:scale-[0.99]"
        >
          <div className="flex items-start gap-3">
            {/* <!-- Indikator Warna Status Bulat Besar --> */}
            <span
              className="mt-1.5 h-3 w-3 shrink-0 rounded-full border border-gray-400 bg-gray-200"
              title="Belum Dihitung"
            ></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-blue-600">
                  JOB: A240010
                </span>
                <span className="text-[10px] text-muted-foreground">
                  Gudang Perakitan
                </span>
              </div>
              <h2 className="mt-0.5 truncate text-sm font-bold text-gray-900 group-hover:text-primary">
                BRAKE LEVER ASSY
              </h2>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                FG: E-SCOOTER PRO MAX
              </p>
            </div>
            <div className="shrink-0 self-center pl-2 text-right">
              <span className="rounded bg-gray-100 px-1.5 py-1 text-xs font-medium text-muted-foreground">
                Isi Qty
              </span>
            </div>
          </div>
        </a>
      </main>
      <footer className="z-10 flex h-10 shrink-0 items-center justify-between border-t border-border bg-white px-4 text-[11px] text-muted-foreground">
        <span>
          Sesi: <span className="font-semibold text-gray-700">Q2 2026</span>
        </span>
        <span>
          Selesai:{" "}
          <span className="font-semibold text-green-600">2 / 4 Item</span>
        </span>
      </footer>
    </div>
  )
}

export default MobileSessionDetail
