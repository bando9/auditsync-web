import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpDown,
  Check,
  CheckSquare,
  FileSpreadsheet,
  Hash,
  Lock,
  MoreVertical,
  RotateCcw,
  Search,
} from "lucide-react"

function SessionsDetail() {
  return (
    <main className="flex h-screen flex-1 flex-col overflow-hidden">
      {/* <!-- TOP HEADER --> */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-white px-6">
        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-white text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <h1 className="flex items-center gap-2 text-lg font-semibold">
              Sesi: Stock Opname Mei 2026
              <span className="inline-flex items-center rounded-full border border-transparent bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
                Aktif
              </span>
            </h1>
            <p className="text-xs text-muted-foreground">
              ID Sesi: 728ed52f-session &bull; Mengelola rekonsiliasi data riil
              lapangan vs SAP
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* <!-- Tombol Utama Sesi --> */}
          <button className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
            <FileSpreadsheet className="mr-2 h-4 w-4 text-green-600" /> Export
            ke Excel
          </button>
          <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
            <Lock className="mr-2 h-4 w-4" /> Kunci & Selesaikan Sesi
          </button>
        </div>
      </header>

      {/* <!-- FLOATING BULK ACTIONS BAR (Hanya muncul jika ada baris yang di-select) --> */}
      <div className="flex h-12 shrink-0 items-center justify-between bg-primary px-6 text-primary-foreground shadow-md transition-all">
        <div className="flex items-center gap-2 text-sm font-medium">
          <CheckSquare className="h-4 w-4" />
          <span>2 item terpilih untuk aksi massal</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex h-8 items-center justify-center rounded-md bg-green-600 px-3 text-xs font-semibold text-white transition-colors hover:bg-green-700">
            <Check className="mr-1.5 h-3.5 w-3.5" /> Approve Selected
          </button>
          <button className="inline-flex h-8 items-center justify-center rounded-md bg-amber-600 px-3 text-xs font-semibold text-white transition-colors hover:bg-amber-700">
            <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Force Reset Input
          </button>
          <button className="inline-flex h-8 items-center justify-center rounded-md bg-white/10 px-3 text-xs font-semibold text-white transition-colors hover:bg-white/20">
            Batalkan Pilihan
          </button>
        </div>
      </div>

      {/* <!-- SCROLLABLE WORKSPACE --> */}
      <div className="flex-1 overflow-auto p-6">
        {/* <!-- TABLE CONTAINER --> */}
        <div className="flex flex-col rounded-xl border border-border bg-white shadow-sm">
          {/* <!-- FILTER & TOOLBAR SECTION --> */}
          <div className="flex flex-col items-center justify-between gap-4 border-b border-border bg-muted/20 p-4 md:flex-row">
            {/* <!-- Dual Filter (Nama Barang & Job No) --> */}
            <div className="flex w-full max-w-2xl items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Filter nama bahan baku (Raw Material)..."
                  className="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 pl-9 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                />
              </div>
              <div className="relative w-48 shrink-0">
                <Hash className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Filter Job No..."
                  className="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 pl-9 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                />
              </div>
              {/* <!-- Quick Status Statistics/Legend --> */}
              <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>{" "}
                  Matched
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-orange-500"></span>{" "}
                  SAP Discrepancy
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>{" "}
                  Blind Mismatch
                </span>
              </div>
            </div>
          </div>
          {/* <!-- RECONCILIATION TABLE --> */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-muted/50 text-muted-foreground select-none [&_tr]:border-b">
                <tr>
                  <th className="h-10 w-10 px-4 align-middle font-medium">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </th>
                  {/* <!-- Kolom-kolom dengan tombol trigger Sorting --> */}
                  <th className="group h-10 cursor-pointer px-4 align-middle font-medium transition-colors hover:text-foreground">
                    <div className="flex items-center">
                      Bahan Baku / Finished Goods
                      <ArrowUpDown className="ml-1.5 h-3.5 w-3.5 opacity-50 group-hover:opacity-100" />
                    </div>
                  </th>
                  <th className="group h-10 cursor-pointer px-4 align-middle font-medium transition-colors hover:text-foreground">
                    <div className="flex items-center">
                      Job No
                      <ArrowUpDown className="ml-1.5 h-3.5 w-3.5 opacity-50 group-hover:opacity-100" />
                    </div>
                  </th>
                  <th className="h-10 px-4 align-middle font-medium">Gudang</th>
                  <th className="h-10 px-4 align-middle font-medium">UOM</th>
                  <th className="h-10 px-4 text-right align-middle font-medium">
                    SAP Qty
                  </th>
                  <th className="h-10 px-4 text-right align-middle font-medium">
                    Physical Qty
                  </th>
                  <th className="group h-10 cursor-pointer px-4 text-right align-middle font-medium transition-colors hover:text-foreground">
                    <div className="flex items-center justify-end">
                      Selisih
                      <ArrowUpDown className="ml-1.5 h-3.5 w-3.5 opacity-50 group-hover:opacity-100" />
                    </div>
                  </th>
                  <th className="h-10 px-4 text-center align-middle font-medium">
                    Status
                  </th>
                  <th className="h-10 px-4 text-center align-middle font-medium">
                    Verifikasi
                  </th>
                  <th className="h-10 w-10 px-4 align-middle font-medium"></th>
                </tr>
              </thead>
              <tbody className="[&_tr]:border-b [&_tr:last-child]:border-0">
                {/* <!-- DATA ITEM 1: MATCHED (Normal) --> */}
                <tr className="transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="p-4 align-middle">
                    <div className="font-medium text-gray-900">
                      SLA BATTERY 12V/12AH
                    </div>
                    <div className="text-xs text-muted-foreground">
                      E-BIKE 14 X 2.50 EXOTIC EV-922
                    </div>
                  </td>
                  <td className="p-4 align-middle font-mono text-xs">
                    A240008
                  </td>
                  <td className="p-4 align-middle text-muted-foreground">
                    Sortasi 4
                  </td>
                  <td className="p-4 align-middle">
                    <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-muted-foreground">
                      set
                    </span>
                  </td>
                  <td className="p-4 text-right align-middle text-muted-foreground">
                    23
                  </td>
                  <td className="p-4 text-right align-middle font-medium">
                    23
                  </td>
                  <td className="p-4 text-right align-middle font-medium text-gray-500">
                    0
                  </td>
                  <td className="p-4 text-center align-middle">
                    <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                      Matched
                    </span>
                  </td>
                  <td className="p-4 text-center align-middle text-xs text-muted-foreground">
                    23 Oct 2024
                  </td>
                  <td className="p-4 text-center align-middle">
                    <button className="text-muted-foreground hover:text-foreground">
                      <MoreVertical className="h-4 w-4"></MoreVertical>
                    </button>
                  </td>
                </tr>

                {/* <!-- DATA ITEM 2: SAP DISCREPANCY (SELECTED / CHECKED) --> */}
                <tr className="bg-muted/40 transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle">
                    <input
                      type="checkbox"
                      checked
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="p-4 align-middle">
                    <div className="font-medium text-gray-900">
                      TYRE 14 X 2.50
                    </div>
                    <div className="text-xs text-muted-foreground">
                      E-BIKE 14 X 2.50 EXOTIC EV-922
                    </div>
                  </td>
                  <td className="p-4 align-middle font-mono text-xs">
                    A240008
                  </td>
                  <td className="p-4 align-middle text-muted-foreground">
                    Gudang Bahan Baku 1
                  </td>
                  <td className="p-4 align-middle">
                    <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-muted-foreground">
                      pcs
                    </span>
                  </td>
                  <td className="p-4 text-right align-middle text-muted-foreground">
                    100
                  </td>
                  <td className="p-4 text-right align-middle font-medium">
                    95
                  </td>
                  <td className="p-4 text-right align-middle font-bold text-red-600">
                    -5
                  </td>
                  <td className="p-4 text-center align-middle">
                    <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-2.5 py-0.5 text-xs font-semibold text-orange-700">
                      SAP Discrepancy
                    </span>
                  </td>
                  <td className="p-4 text-center align-middle text-xs text-muted-foreground">
                    24 Oct 2024
                  </td>
                  <td className="p-4 text-center align-middle">
                    <button className="text-muted-foreground hover:text-foreground">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
                </tr>

                {/* <!-- DATA ITEM 3: BLIND MISMATCH (SELECTED / CHECKED) --> */}
                <tr className="border-l-2 border-l-red-500 bg-muted/40 transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle">
                    <input
                      type="checkbox"
                      checked
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="p-4 align-middle">
                    <div className="font-medium text-gray-900">
                      LED HEADLIGHT 12V
                    </div>
                    <div className="text-xs text-muted-foreground">
                      E-BIKE 14 X 2.50 PACIFIC SYNC
                    </div>
                  </td>
                  <td className="p-4 align-middle font-mono text-xs">
                    A240009
                  </td>
                  <td className="p-4 align-middle text-muted-foreground">
                    Sortasi 2
                  </td>
                  <td className="p-4 align-middle">
                    <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-muted-foreground">
                      pcs
                    </span>
                  </td>
                  <td className="p-4 text-right align-middle text-muted-foreground">
                    45
                  </td>
                  {/* <!-- Physical Qty disembunyikan karena tim lapangan belum sepakat --> */}
                  <td className="animate-pulse p-4 text-right align-middle font-bold text-red-500">
                    ?
                  </td>
                  <td className="p-4 text-right align-middle text-muted-foreground">
                    -
                  </td>
                  <td className="p-4 text-center align-middle">
                    <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-700">
                      Blind Mismatch
                    </span>
                  </td>
                  <td className="p-4 text-center align-middle text-xs text-muted-foreground">
                    26 Oct 2024
                  </td>
                  <td className="p-4 text-center align-middle">
                    <button className="text-muted-foreground hover:text-foreground">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
                </tr>

                {/* <!-- DATA ITEM 4: PENDING --> */}
                <tr className="transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="p-4 align-middle text-muted-foreground">
                    <div className="font-medium">BRAKE LEVER ASSY</div>
                    <div className="text-xs">E-SCOOTER PRO MAX</div>
                  </td>
                  <td className="p-4 align-middle font-mono text-xs text-muted-foreground">
                    A240010
                  </td>
                  <td className="p-4 align-middle text-muted-foreground">
                    Gudang Perakitan
                  </td>
                  <td className="p-4 align-middle">
                    <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-muted-foreground">
                      set
                    </span>
                  </td>
                  <td className="p-4 text-right align-middle text-muted-foreground">
                    120
                  </td>
                  <td className="p-4 text-right align-middle text-muted-foreground">
                    -
                  </td>
                  <td className="p-4 text-right align-middle text-muted-foreground">
                    -
                  </td>
                  <td className="p-4 text-center align-middle">
                    <span className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      Pending
                    </span>
                  </td>
                  <td className="p-4 text-center align-middle text-xs text-muted-foreground">
                    -
                  </td>
                  <td className="p-4 text-center align-middle">
                    <button className="text-muted-foreground hover:text-foreground">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <!-- TABLE PAGINATION FOOTER --> */}
          <div className="flex items-center justify-between border-t border-border px-4 py-3">
            <div className="text-sm text-muted-foreground">
              Menampilkan{" "}
              <span className="font-medium text-foreground">1-4</span> dari{" "}
              <span className="font-medium text-foreground">2,500</span> target
              audit
            </div>
            <div className="flex items-center gap-2">
              <button
                className="inline-flex h-8 items-center justify-center rounded-md border border-border bg-white px-3 text-sm font-medium transition-colors hover:bg-muted"
                disabled
              >
                Previous
              </button>
              <button className="inline-flex h-8 items-center justify-center rounded-md border border-border bg-white px-3 text-sm font-medium transition-colors hover:bg-muted">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SessionsDetail
