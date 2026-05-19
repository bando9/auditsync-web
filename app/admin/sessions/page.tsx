import {
  ArrowRight,
  CheckCheck,
  Download,
  Eye,
  PlusCircle,
  Search,
} from "lucide-react"
import Link from "next/link"

function SessionsPage() {
  return (
    <main className="flex h-screen flex-1 flex-col overflow-hidden">
      {/* <!-- TOP HEADER --> */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-white px-6">
        <div>
          <h1 className="text-lg font-semibold">Manajemen Sesi Audit</h1>
          <p className="text-xs text-muted-foreground">
            Kelola jadwal dan riwayat Stock Opname
          </p>
        </div>
        {/* <!-- Tombol "Buat Sesi Baru" --> */}
        <div className="flex items-center gap-3">
          <Link
            href="/admin/sessions/create"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Buat Sesi Baru
          </Link>
        </div>
      </header>
      {/* <!-- SCROLLABLE WORKSPACE --> */}
      <div className="flex-1 overflow-auto p-6">
        {/* <!-- TABLE SECTION --> */}
        <div className="flex flex-col rounded-xl border border-border bg-white shadow-sm">
          {/* <!-- Table Toolbar (Filters) --> */}
          <div className="flex items-center justify-between border-b border-border p-4">
            <div className="flex w-full max-w-xl items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Cari nama sesi (misal: Q2 2026)..."
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-9 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                />
              </div>
              {/* <!-- Filter Status --> */}
              <select className="flex h-9 w-40 items-center justify-between rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:ring-1 focus:ring-ring focus:outline-none">
                <option value="">Semua Status</option>
                <option value="in_progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-muted/50 text-muted-foreground [&_tr]:border-b">
                <tr>
                  <th className="h-10 px-4 align-middle font-medium">
                    Nama Sesi Audit
                  </th>
                  <th className="h-10 px-4 align-middle font-medium">
                    Tanggal Dibuat
                  </th>
                  <th className="h-10 px-4 align-middle font-medium">
                    Jumlah Target
                  </th>
                  <th className="h-10 px-4 align-middle font-medium">
                    PIC Persetujuan
                  </th>
                  <th className="h-10 px-4 text-center align-middle font-medium">
                    Status
                  </th>
                  <th className="h-10 px-4 text-right align-middle font-medium">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr]:border-b [&_tr:last-child]:border-0">
                {/* <!-- Row 1: IN PROGRESS (Sesi yang sedang berjalan saat ini) --> */}
                <tr className="bg-blue-50/20 transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle font-semibold text-primary">
                    Stock Opname Q2 2026
                  </td>
                  <td className="p-4 align-middle text-muted-foreground">
                    19 Mei 2026
                  </td>
                  <td className="p-4 align-middle">2,500 barang</td>
                  <td className="p-4 align-middle">
                    <div className="flex -space-x-2">
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-[10px] font-bold"
                        title="Kepala Auditor"
                      >
                        KA
                      </div>
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gray-300 text-[10px] font-bold"
                        title="Kepala Gudang"
                      >
                        KG
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center align-middle">
                    <span className="inline-flex items-center rounded-full border border-transparent bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                      In Progress
                    </span>
                  </td>
                  <td className="p-4 text-right align-middle">
                    <button className="inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium text-blue-600 transition-colors hover:bg-muted">
                      Buka Workspace <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </td>
                </tr>

                {/* <!-- Row 2: IN REVIEW (Menunggu TTD) --> */}
                <tr className="transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle font-medium">
                    Audit Khusus: Gudang Perakitan
                  </td>
                  <td className="p-4 align-middle text-muted-foreground">
                    15 Mei 2026
                  </td>
                  <td className="p-4 align-middle">320 barang</td>
                  <td className="p-4 align-middle text-xs text-muted-foreground italic">
                    Menunggu TTD...
                  </td>
                  <td className="p-4 text-center align-middle">
                    <span className="inline-flex items-center rounded-full border border-transparent bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
                      In Review
                    </span>
                  </td>
                  <td className="p-4 text-right align-middle">
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium text-muted-foreground transition-colors hover:bg-muted">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>

                {/* <!-- Row 3: CLOSED (Riwayat Bulan Lalu) --> */}
                <tr className="text-muted-foreground transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle font-medium text-foreground">
                    Stock Opname Q1 2026
                  </td>
                  <td className="p-4 align-middle">28 Feb 2026</td>
                  <td className="p-4 align-middle">2,410 barang</td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-1 text-xs font-medium text-green-600">
                      <CheckCheck className="h-4 w-4" /> Disetujui
                    </div>
                  </td>
                  <td className="p-4 text-center align-middle">
                    <span className="inline-flex items-center rounded-full border border-transparent bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600">
                      Closed
                    </span>
                  </td>
                  <td className="p-4 text-right align-middle">
                    <button
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted"
                      title="Unduh Hasil"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                    <button
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted"
                      title="Lihat Data"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>

                {/* <!-- Row 4: CLOSED (Riwayat Akhir Tahun) --> */}
                <tr className="text-muted-foreground transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle font-medium text-foreground">
                    Stock Opname Akhir Tahun 2025
                  </td>
                  <td className="p-4 align-middle">30 Des 2025</td>
                  <td className="p-4 align-middle">5,100 barang</td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-1 text-xs font-medium text-green-600">
                      <CheckCheck className="h-4 w-4" /> Disetujui
                    </div>
                  </td>
                  <td className="p-4 text-center align-middle">
                    <span className="inline-flex items-center rounded-full border border-transparent bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600">
                      Closed
                    </span>
                  </td>
                  <td className="p-4 text-right align-middle">
                    <button
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted"
                      title="Unduh Hasil"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                    <button
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted"
                      title="Lihat Data"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- Table Pagination --> */}
          <div className="flex items-center justify-between border-t border-border px-4 py-3">
            <div className="text-sm text-muted-foreground">
              Menampilkan 4 dari total 12 riwayat sesi
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

export default SessionsPage
