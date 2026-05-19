import { Input } from "@/components/ui/input"
import {
  Activity,
  AlertTriangle,
  Archive,
  CheckSquare,
  CircleCheck,
  MoreHorizontal,
  Search,
} from "lucide-react"
import HeaderDashboard from "./components/header-dashboard"
import CardInfo from "./components/card-info"

function AdminDashboard() {
  return (
    <main className="flex h-screen flex-1 flex-col overflow-hidden">
      <HeaderDashboard />
      <div className="flex-1 overflow-auto p-6">
        <div className="mb-6 grid gap-4 md:grid-cols-4">
          {/*  Card 1  */}
          <CardInfo
            title="Total Target"
            description="Baris data Excel SAP"
            count="2,500"
            icon={Archive}
            colorIcon="text-muted-foreground"
            isProgress={false}
          />
          {/* <!-- Card 2 --> */}
          <CardInfo
            title="Selesai (Match)"
            count="1,240"
            description="Sesuai dengan SAP"
            icon={CircleCheck}
            colorCard="border-t-4 border-t-green-500"
            colorIcon="text-green-500"
            isProgress={false}
          />
          {/* <!-- Card 3 --> */}
          <CardInfo
            title="Selisih (Mismatch)"
            count="15"
            description="Butuh investigasi"
            icon={AlertTriangle}
            colorCard="border-t-4 border-t-red-500"
            colorIcon="text-red-600"
            colorText="text-red-600"
            isProgress={false}
          />

          {/* <!-- Card 4 --> */}
          <CardInfo
            title="Progres Lapangan"
            count="50.2%"
            description="Butuh investigasi"
            icon={Activity}
            colorIcon="text-blue-500"
            isProgress={true}
            progressCount={50.2}
          />
        </div>

        <div className="flex flex-col rounded-xl border border-border bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-border bg-muted/30 p-4">
            <div className="flex w-full max-w-xl items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Filter nama bahan baku..."
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-9 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                />
              </div>
              <Input
                type="text"
                placeholder="Job No..."
                className="flex h-9 w-40 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              {/* <!-- Simulated Bulk Action Button --> */}
              <span className="mr-2 hidden text-sm text-muted-foreground lg:inline-block">
                2 baris terpilih
              </span>
              <button className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-white px-3 text-sm font-medium transition-colors hover:bg-muted">
                <CheckSquare className="mr-2 h-4 w-4 text-green-600" /> Approve
                Selected
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-muted/50 text-muted-foreground [&_tr]:border-b">
              <tr>
                <th className="h-10 w-10 px-4 align-middle font-medium">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="h-10 px-4 align-middle font-medium">
                  Bahan Baku / Material
                </th>
                <th className="h-10 px-4 align-middle font-medium">Job No</th>
                <th className="h-10 px-4 align-middle font-medium">
                  Area / Gudang
                </th>
                <th className="h-10 px-4 text-right align-middle font-medium">
                  SAP
                </th>
                <th className="h-10 px-4 text-right align-middle font-medium">
                  Fisik
                </th>
                <th className="h-10 px-4 text-right align-middle font-medium">
                  Selisih
                </th>
                <th className="h-10 px-4 text-center align-middle font-medium">
                  Status
                </th>
                <th className="h-10 w-12.5 px-4 align-middle font-medium"></th>
              </tr>
            </thead>
            <tbody className="[&_tr]:border-b [&_tr:last-child]:border-0">
              {/* <!-- Row 1: Matched --> */}
              <tr className="transition-colors hover:bg-muted/50">
                <td className="p-4 align-middle">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="p-4 align-middle font-medium">
                  SLA BATTERY 12V/12AH
                  <br />
                  <span className="text-xs font-normal text-muted-foreground">
                    E-BIKE 14 X 2.50 EXOTIC EV-922
                  </span>
                </td>
                <td className="p-4 align-middle">A240008</td>
                <td className="p-4 align-middle">Sortasi 4</td>
                <td className="p-4 text-right align-middle text-muted-foreground">
                  23 set
                </td>
                <td className="p-4 text-right align-middle font-medium">
                  23 set
                </td>
                <td className="p-4 text-right align-middle">0</td>
                <td className="p-4 text-center align-middle">
                  <span className="inline-flex items-center rounded-full border border-transparent bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                    Matched
                  </span>
                </td>
                <td className="p-4 text-center align-middle">
                  <button className="text-muted-foreground hover:text-foreground">
                    <i data-lucide="more-horizontal" className="h-4 w-4"></i>
                  </button>
                </td>
              </tr>

              {/* <!-- Row 2: SAP Discrepancy (Selected) --> */}
              <tr className="bg-muted/30 transition-colors hover:bg-muted/50">
                <td className="p-4 align-middle">
                  <input
                    type="checkbox"
                    checked
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="p-4 align-middle font-medium">
                  TYRE 14 X 2.50
                  <br />
                  <span className="text-xs font-normal text-muted-foreground">
                    E-BIKE 14 X 2.50 EXOTIC EV-922
                  </span>
                </td>
                <td className="p-4 align-middle">A240008</td>
                <td className="p-4 align-middle">Gudang Bahan Baku 1</td>
                <td className="p-4 text-right align-middle text-muted-foreground">
                  100 pcs
                </td>
                <td className="p-4 text-right align-middle font-medium">
                  95 pcs
                </td>
                <td className="p-4 text-right align-middle font-bold text-red-600">
                  -5
                </td>
                <td className="p-4 text-center align-middle">
                  <span className="inline-flex items-center rounded-full border border-transparent bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-700">
                    SAP Discrepancy
                  </span>
                </td>
                <td className="p-4 text-center align-middle">
                  <button className="text-muted-foreground hover:text-foreground">
                    <i data-lucide="more-horizontal" className="h-4 w-4"></i>
                  </button>
                </td>
              </tr>

              {/* <!-- Row 3: Blind Mismatch (Selected) --> */}
              <tr className="border-l-2 border-l-red-500 bg-muted/30 transition-colors hover:bg-muted/50">
                <td className="p-4 align-middle">
                  <input
                    type="checkbox"
                    checked
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="p-4 align-middle font-medium">
                  LED HEADLIGHT 12V
                  <br />
                  <span className="text-xs font-normal text-muted-foreground">
                    E-BIKE 14 X 2.50 PACIFIC SYNC
                  </span>
                </td>
                <td className="p-4 align-middle">A240009</td>
                <td className="p-4 align-middle">Sortasi 2</td>
                <td className="p-4 text-right align-middle text-muted-foreground">
                  45 pcs
                </td>
                <td className="animate-pulse p-4 text-right align-middle font-medium text-red-500">
                  ?
                </td>
                <td className="p-4 text-right align-middle">-</td>
                <td className="p-4 text-center align-middle">
                  <span className="inline-flex items-center rounded-full border border-transparent bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800">
                    Blind Mismatch
                  </span>
                </td>
                <td className="p-4 text-center align-middle">
                  <button className="text-muted-foreground hover:text-foreground">
                    <i data-lucide="more-horizontal" className="h-4 w-4"></i>
                  </button>
                </td>
              </tr>

              {/* <!-- Row 4: Pending --> */}
              <tr className="transition-colors hover:bg-muted/50">
                <td className="p-4 align-middle">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="p-4 align-middle font-medium text-muted-foreground">
                  BRAKE LEVER ASSY
                  <br />
                  <span className="text-xs font-normal">E-SCOOTER PRO MAX</span>
                </td>
                <td className="p-4 align-middle text-muted-foreground">
                  A240010
                </td>
                <td className="p-4 align-middle text-muted-foreground">
                  Gudang Perakitan
                </td>
                <td className="p-4 text-right align-middle text-muted-foreground">
                  120 set
                </td>
                <td className="p-4 text-right align-middle">-</td>
                <td className="p-4 text-right align-middle">-</td>
                <td className="p-4 text-center align-middle">
                  <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                    Pending
                  </span>
                </td>
                <td className="p-4 text-center align-middle">
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-border px-4 py-3">
          <div className="text-sm text-muted-foreground">
            Menampilkan 1-4 dari 2,500 data
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
    </main>
  )
}

export default AdminDashboard
