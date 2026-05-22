import HeaderDashboard from "./components/header-dashboard"
import CardInfo from "./components/card-info"
import { dataInfo } from "./lib/data-info"
import { getData } from "./lib/data-audit-target"
import { DataTable } from "./components/data-table"
import { columns } from "./components/columns"

async function AdminDashboard() {
  const data = await getData()
  return (
    <main className="flex h-screen flex-1 flex-col overflow-hidden">
      <HeaderDashboard />
      <div className="flex-1 overflow-auto p-6">
        <div className="mb-6 grid gap-4 md:grid-cols-4">
          {dataInfo.map((info) => {
            return <CardInfo key={info.title} {...info} />
          })}
        </div>

        <DataTable columns={columns} data={data} />
      </div>
    </main>
  )
}

export default AdminDashboard
