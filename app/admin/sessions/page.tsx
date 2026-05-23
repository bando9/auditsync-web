import HeaderSessions from "./components/header-sessions"
import { columns } from "./components/columns-sessions"
import { DataTable } from "../dashboard/components/data-table"
import { getDataSession } from "./lib/data-sessions"

async function SessionsPage() {
  const data = await getDataSession()

  return (
    <main className="flex h-screen flex-1 flex-col overflow-hidden">
      <HeaderSessions />

      <div className="flex-1 overflow-auto p-6">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  )
}

export default SessionsPage
