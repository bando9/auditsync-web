import { getDataAuditTarget, getDataSession } from "@/app/data/dummy-data"
import MobileSessionDetailInteractive from "./components/session-detail-interactive"

async function MobileSessionDetail() {
  const dataSession = await getDataSession()
  const dataAuditTarget = await getDataAuditTarget()

  return (
    <div>
      <MobileSessionDetailInteractive
        dataSession={dataSession}
        dataAuditTarget={dataAuditTarget}
      />
    </div>
  )
}

export default MobileSessionDetail
