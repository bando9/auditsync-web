import HeaderSessions from "./components/header-sessions"
import { columns } from "./components/columns-sessions"
import { DataTable } from "../components/data-table"
import { getDataSession } from "./lib/data-sessions"

async function SessionsPage() {
  const data = await getDataSession()

  return (
    <main className="flex h-screen flex-1 flex-col overflow-hidden">
      <HeaderSessions />

      <div className="flex-1 overflow-auto p-6">
        <DataTable
          columns={columns}
          data={data}
          placeholderInputSearch="Cari nama sesi (misal: Q2 2026)..."
          entityLabel="riwayat sesi"
        />
      </div>
    </main>
  )
}

export default SessionsPage
