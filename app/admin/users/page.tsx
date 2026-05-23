import {
  Boxes,
  ClipboardCheck,
  KeyRound,
  Pencil,
  Search,
  Shield,
  UserCheck,
} from "lucide-react"
import HeaderUsers from "./components/header-users"

function AdminUsersPage() {
  return (
    <main className="flex h-screen flex-1 flex-col overflow-hidden">
      <HeaderUsers />

      {/* <!-- SCROLLABLE WORKSPACE --> */}
      <div className="flex-1 overflow-auto p-6">
        {/* <!-- TABLE CONTAINER --> */}
        <div className="mx-auto flex max-w-6xl flex-col rounded-xl border border-border bg-white shadow-sm">
          {/* <!-- FILTER & TOOLBAR SECTION --> */}
          <div className="flex flex-col items-center justify-between gap-4 border-b border-border bg-muted/10 p-4 md:flex-row">
            <div className="flex w-full max-w-md items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Cari nama atau username/ID..."
                  className="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 pl-9 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* <!-- Filter Role --> */}
              <select className="flex h-9 cursor-pointer items-center justify-between rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm focus:ring-1 focus:ring-ring focus:outline-none">
                <option value="">Semua Peran</option>
                <option value="auditor">Auditor</option>
                <option value="warehouse">Tim Gudang</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          {/* <!-- USERS TABLE --> */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-muted/30 text-muted-foreground select-none [&_tr]:border-b">
                <tr>
                  <th className="h-10 w-62.5 px-4 align-middle font-medium">
                    Nama Anggota
                  </th>
                  <th className="h-10 px-4 align-middle font-medium">
                    Username / ID PIN
                  </th>
                  <th className="h-10 px-4 align-middle font-medium">
                    Peran (Role)
                  </th>
                  <th className="h-10 px-4 text-center align-middle font-medium">
                    Status
                  </th>
                  <th className="h-10 px-4 align-middle font-medium">
                    Terakhir Login
                  </th>
                  <th className="h-10 px-4 text-right align-middle font-medium">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr]:border-b [&_tr:last-child]:border-0">
                {/* <!-- DATA ITEM 1: ADMIN --> */}
                <tr className="transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                        BM
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          Bando Mega Kusuma
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Pusat / Head Office
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle font-mono text-xs text-muted-foreground">
                    admin_bando
                  </td>
                  <td className="p-4 align-middle">
                    <span className="inline-flex items-center gap-1.5 rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                      <Shield className="h-3.5 w-3.5" /> Administrator
                    </span>
                  </td>
                  <td className="p-4 text-center align-middle">
                    <span
                      className="inline-flex h-2 w-2 items-center rounded-full bg-green-500"
                      title="Aktif"
                    ></span>
                  </td>
                  <td className="p-4 align-middle text-xs text-muted-foreground">
                    Hari ini, 08:12
                  </td>
                  <td className="space-x-1 p-4 text-right align-middle">
                    <button
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      title="Edit Profil"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                  </td>
                </tr>

                {/* <!-- DATA ITEM 2: AUDITOR --> */}
                <tr className="transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                        DK
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          Dimas Kusumo
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Tim Audit Internal
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle font-mono text-xs text-muted-foreground">
                    501299
                  </td>
                  <td className="p-4 align-middle">
                    <span className="inline-flex items-center gap-1.5 rounded border border-blue-100 bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                      <ClipboardCheck className="h-3.5 w-3.5" />
                      Auditor
                    </span>
                  </td>
                  <td className="p-4 text-center align-middle">
                    <span
                      className="inline-flex h-2 w-2 items-center rounded-full bg-green-500"
                      title="Aktif"
                    ></span>
                  </td>
                  <td className="p-4 align-middle text-xs text-muted-foreground">
                    20 Mei 2026, 14:30
                  </td>
                  <td className="space-x-1 p-4 text-right align-middle">
                    {/* <!-- Tombol Reset PIN (Highlight utama fitur) --> */}
                    <button
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-amber-600 transition-colors hover:bg-amber-50 hover:text-amber-700"
                      title="Reset PIN / Password"
                    >
                      <KeyRound className="h-4 w-4" />
                    </button>
                    <button
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      title="Edit Profil"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                  </td>
                </tr>

                {/* <!-- DATA ITEM 3: TIM GUDANG --> */}
                <tr className="transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-xs font-bold text-orange-600">
                        AS
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          Agus Setiawan
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Gudang Bahan Baku Utama
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle font-mono text-xs text-muted-foreground">
                    882104
                  </td>
                  <td className="p-4 align-middle">
                    <span className="inline-flex items-center gap-1.5 rounded border border-orange-100 bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-700">
                      <Boxes className="h-3.5 w-3.5" /> Tim Gudang
                    </span>
                  </td>
                  <td className="p-4 text-center align-middle">
                    <span
                      className="inline-flex h-2 w-2 items-center rounded-full bg-green-500"
                      title="Aktif"
                    ></span>
                  </td>
                  <td className="p-4 align-middle text-xs text-muted-foreground">
                    Kemarin, 09:15
                  </td>
                  <td className="space-x-1 p-4 text-right align-middle">
                    <button
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-amber-600 transition-colors hover:bg-amber-50 hover:text-amber-700"
                      title="Reset PIN / Password"
                    >
                      <KeyRound className="h-4 w-4" />
                    </button>
                    <button
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      title="Edit Profil"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                  </td>
                </tr>

                {/* <!-- DATA ITEM 4: INACTIVE/SUSPENDED --> */}
                <tr className="bg-gray-50/50 transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-3 opacity-60">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-500">
                        BW
                      </div>
                      <div>
                        <div className="font-medium text-gray-500 line-through decoration-gray-300">
                          Budi Waseso
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Resigned
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle font-mono text-xs text-muted-foreground opacity-60">
                    882001
                  </td>
                  <td className="p-4 align-middle opacity-60">
                    <span className="inline-flex items-center gap-1.5 rounded border border-orange-100 bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-700">
                      <Boxes className="h-3.5 w-3.5" /> Tim Gudang
                    </span>
                  </td>
                  <td className="p-4 text-center align-middle">
                    <span
                      className="inline-flex h-2 w-2 items-center rounded-full bg-red-500"
                      title="Nonaktif"
                    ></span>
                  </td>
                  <td className="p-4 align-middle text-xs text-muted-foreground">
                    -
                  </td>
                  <td className="space-x-1 p-4 text-right align-middle">
                    <button
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      title="Pulihkan Akun"
                    >
                      <UserCheck className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <!-- TABLE PAGINATION FOOTER --> */}
          <div className="flex items-center justify-between border-t border-border px-4 py-3">
            <div className="text-sm text-muted-foreground">
              Menampilkan <span className="font-medium text-foreground">4</span>{" "}
              anggota tim
            </div>
            <div className="flex items-center gap-2">
              <button
                className="inline-flex h-8 items-center justify-center rounded-md border border-border bg-white px-3 text-sm font-medium transition-colors hover:bg-muted"
                disabled
              >
                Previous
              </button>
              <button
                className="inline-flex h-8 items-center justify-center rounded-md border border-border bg-white px-3 text-sm font-medium transition-colors hover:bg-muted"
                disabled
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AdminUsersPage
