import HeaderDashboard from "./components/header-dashboard"
import CardInfo from "./components/card-info"
import { getDataAuditTarget } from "./lib/data-audit-target"
import { DataTable } from "../components/data-table"
import { columns } from "./components/columns-audit-target"
import { Activity, AlertTriangle, Archive, CircleCheck } from "lucide-react"

async function AdminDashboard() {
  const data = await getDataAuditTarget()

  const totalTarget = data.length

  const stats = data.reduce(
    (acc, item) => {
      if (item.status === "matched") acc.match++
      if (item.status === "sap-discrepancy" || item.status === "blind-mismatch")
        acc.mismatch++
      if (item.status === "counting") acc.counting++
      return acc
    },
    { match: 0, mismatch: 0, counting: 0 }
  )

  const progressPercentage =
    totalTarget == 0
      ? 0
      : Number(((stats.counting / totalTarget) * 100).toFixed(1))

  const dataInfo = [
    {
      title: "Total Target",
      description: "Baris data Excel SAP",
      count: totalTarget.toLocaleString("id-ID"),
      icon: Archive,
      colorIcon: "text-muted-foreground",
      isProgress: false,
    },
    {
      title: "Selesai (Match)",
      description: "Sesuai dengan SAP",
      count: stats.match.toLocaleString("id-ID"),
      icon: CircleCheck,
      colorIcon: "text-muted-foreground",
      colorCard: "border-t-4 border-t-green-500",
      isProgress: false,
    },
    {
      title: "Selisih (Mismatch)",
      count: stats.mismatch.toLocaleString("id-ID"),
      description: "Butuh investigasi",
      icon: AlertTriangle,
      colorCard: "border-t-4 border-t-red-500",
      colorIcon: "text-red-600",
      colorText: "text-red-600",
      isProgress: false,
    },
    {
      title: "Progres Lapangan",
      count: `${progressPercentage}%`,
      description: "Sedang dihitung",
      icon: Activity,
      colorIcon: "text-blue-500",
      isProgress: true,
      progressCount: progressPercentage,
    },
  ]

  return (
    <main className="flex h-screen flex-1 flex-col overflow-hidden">
      <HeaderDashboard />
      <div className="flex-1 overflow-auto p-6">
        <div className="mb-6 grid gap-4 md:grid-cols-4">
          {dataInfo.map((info) => (
            <CardInfo key={info.title} {...info} />
          ))}
        </div>

        <DataTable
          columns={columns}
          data={data}
          placeholderInputSearch="Cari Bahan Baku, FG, atau Job No..."
          entityLabel="data"
        />
      </div>
    </main>
  )
}

export default AdminDashboard
