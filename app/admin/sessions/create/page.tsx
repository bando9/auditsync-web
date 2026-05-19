import React from "react"
import Link from "next/link"
import { ArrowLeft, Database, Info, Sheet, Trash2 } from "lucide-react"

function CreateSessionsPage() {
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
            <h1 className="text-lg font-semibold">Buat Sesi Audit Baru</h1>
            <p className="text-xs text-muted-foreground">
              Inisialisasi target stock opname dengan data SAP
            </p>
          </div>
        </div>
        {/* <!-- Tombol Aksi Form --> */}
        <div className="flex items-center gap-3">
          <button className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
            Batalkan
          </button>
          <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
            <Database className="mr-2 h-4 w-4" /> Simpan Sesi & Rilis ke
            Lapangan
          </button>
        </div>
      </header>

      <div className="flex-1 space-y-6 overflow-auto p-6">
        {/* <!-- SECTION 1: FORM INFO & FILE UPLOAD --> */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* <!-- Kiri: Informasi Sesi --> */}
          <div className="space-y-4 rounded-xl border border-border bg-white p-6 shadow-sm md:col-span-1">
            <h2 className="text-sm font-semibold tracking-tight">
              Detail Sesi
            </h2>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">
                Nama Sesi Audit
              </label>
              <input
                type="text"
                value="Stock Opname Mei 2026"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm font-medium shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
              />
              <p className="text-[10px] text-muted-foreground">
                Gunakan nama yang spesifik, misal berdasarkan bulan atau
                kuartal.
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <label className="text-xs font-medium text-muted-foreground">
                Catatan Tambahan (Opsional)
              </label>
              <textarea
                placeholder="Contoh: Audit mencakup seluruh area Sortasi dan Gudang Bahan Baku Utama..."
                className="flex min-h-20 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
              ></textarea>
            </div>
          </div>
          {/* <!-- Kanan: Dropzone Upload Excel --> */}
          <div className="flex flex-col justify-between rounded-xl border border-border bg-white p-6 shadow-sm md:col-span-2">
            <h2 className="mb-4 text-sm font-semibold tracking-tight">
              Upload File Excel SAP
            </h2>

            {/* <!-- Kondisi 1: Drag & Drop Area (Jika belum pilih file) --> */}
            {/* <div className="group flex flex-1 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border p-8 transition-colors hover:border-primary/50">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-transform group-hover:scale-110">
                  <FileSpreadsheet className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium">
                  Seret file Excel (.xlsx) ke sini, atau{" "}
                  <span className="text-blue-600 underline">pilih file</span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Pastikan file memiliki kolom: Material Name, Job No, FG Name,
                  Warehouse, UOM, dan SAP Qty.
                </p>
              </div> */}

            {/* <!-- Kondisi 2: File Berhasil Dipilih (MOCK STATE AKTIF) --> */}
            <div className="flex items-center justify-between rounded-lg border border-green-200 bg-green-50/20 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700">
                  <Sheet className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    SAP_EXPORT_FINAL_MAY2026.xlsx
                  </p>
                  <p className="text-xs text-muted-foreground">
                    2.4 MB &bull; Berhasil di-parse (32 baris terdeteksi)
                  </p>
                </div>
              </div>
              <button className="inline-flex h-8 items-center justify-center rounded-md border border-red-200 bg-white px-3 text-xs font-medium text-red-600 transition-colors hover:bg-red-50">
                <Trash2 className="mr-1.5 h-3.5 w-3.5" /> Ganti File
              </button>
            </div>
            <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-2 text-xs text-muted-foreground">
              <Info className="h-3.5 w-3.5 text-blue-500" />
              <span>
                Sistem otomatis mengonversi data biner menjadi format JSON untuk
                proses sinkronisasi lapangan.
              </span>
            </div>
          </div>
        </div>

        {/* <!-- SECTION 2: PREVIEW DATA EXCEL --> */}
        <div className="flex flex-col rounded-xl border border-border bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-border bg-muted/20 p-4">
            <div>
              <h2 className="text-sm font-semibold tracking-tight">
                Preview Data Excel
              </h2>
              <p className="text-xs text-muted-foreground">
                Menampilkan 4 baris pertama sebagai sampel hasil pembacaan
                browser (*client-side parsing*)
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-transparent bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
              Status Terbaca: OK ✓
            </span>
          </div>
          {/* <!-- Preview Table --> */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-muted/30 text-muted-foreground [&_tr]:border-b">
                <tr>
                  <th className="h-9 px-4 align-middle text-xs font-medium">
                    No
                  </th>
                  <th className="h-9 px-4 align-middle text-xs font-medium">
                    Nama Bahan Baku (Raw Material)
                  </th>
                  <th className="h-9 px-4 align-middle text-xs font-medium">
                    Job No
                  </th>
                  <th className="h-9 px-4 align-middle text-xs font-medium">
                    FG Name
                  </th>
                  <th className="h-9 px-4 align-middle text-xs font-medium">
                    Area / Warehouse
                  </th>
                  <th className="h-9 px-4 align-middle text-xs font-medium">
                    UOM
                  </th>
                  <th className="h-9 px-4 text-right align-middle text-xs font-medium">
                    Kuantitas SAP
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr]:border-b [&_tr:last-child]:border-0">
                {/* <!-- Sampel Baris 1 --> */}
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="p-4 align-middle text-muted-foreground">1</td>
                  <td className="p-4 align-middle font-medium">
                    SLA BATTERY 12V/12AH
                  </td>
                  <td className="p-4 align-middle">A240008</td>
                  <td className="p-4 align-middle text-muted-foreground">
                    E-BIKE 14 X 2.50 EXOTIC EV-922
                  </td>
                  <td className="p-4 align-middle">Sortasi 4</td>
                  <td className="p-4 align-middle">set</td>
                  <td className="p-4 text-right align-middle font-semibold">
                    23
                  </td>
                </tr>
                {/* <!-- Sampel Baris 2 --> */}
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="p-4 align-middle text-muted-foreground">2</td>
                  <td className="p-4 align-middle font-medium">
                    TYRE 14 X 2.50
                  </td>
                  <td className="p-4 align-middle">A240008</td>
                  <td className="p-4 align-middle text-muted-foreground">
                    E-BIKE 14 X 2.50 EXOTIC EV-922
                  </td>
                  <td className="p-4 align-middle">Gudang Bahan Baku 1</td>
                  <td className="p-4 align-middle">pcs</td>
                  <td className="p-4 text-right align-middle font-semibold">
                    100
                  </td>
                </tr>
                {/* <!-- Sampel Baris 3 --> */}
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="p-4 align-middle text-muted-foreground">3</td>
                  <td className="p-4 align-middle font-medium">
                    BLDC MOTOR 500W
                  </td>
                  <td className="p-4 align-middle">A240009</td>
                  <td className="p-4 align-middle text-muted-foreground">
                    E-BIKE 14 X 2.50 PACIFIC SYNC
                  </td>
                  <td className="p-4 align-middle">Sortasi 2</td>
                  <td className="p-4 align-middle">pcs</td>
                  <td className="p-4 text-right align-middle font-semibold">
                    50
                  </td>
                </tr>
                {/* <!-- Sampel Baris 4 --> */}
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="p-4 align-middle text-muted-foreground">4</td>
                  <td className="p-4 align-middle font-medium">
                    BRAKE LEVER ASSY
                  </td>
                  <td className="p-4 align-middle">A240010</td>
                  <td className="p-4 align-middle text-muted-foreground">
                    E-SCOOTER PRO MAX
                  </td>
                  <td className="p-4 align-middle">Gudang Perakitan</td>
                  <td className="p-4 align-middle">set</td>
                  <td className="p-4 text-right align-middle font-semibold">
                    120
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-t border-border bg-muted/10 px-4 py-3 text-center text-xs text-muted-foreground">
            ... Dan 28 baris data lainnya disembunyikan dari preview.
          </div>
        </div>
      </div>
    </main>
  )
}

export default CreateSessionsPage
