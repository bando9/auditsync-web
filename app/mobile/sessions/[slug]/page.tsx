import { getDataAuditTarget, getDataSession } from "@/app/data/dummy-data"
import MobileSessionDetailInteractive from "./components/session-detail-interactive"

async function MobileSessionDetail() {
  const dataSession = await getDataSession()
  const dataAuditTarget = await getDataAuditTarget()

  const currentSessionId = "sess-001"
  const currentSession = dataSession.find(
    (session) => session.id === currentSessionId
  )
  const slugSession = currentSession?.slug

  const currentAuditTarget = dataAuditTarget.filter((data) => {
    const sessionId = data.sessionId

    if (sessionId == currentSessionId) {
      return data
    }
  })

  if (!slugSession) return "nothing"
  if (!currentAuditTarget) return "nothing"

  return (
    <MobileSessionDetailInteractive
      dataSession={dataSession}
      currentAuditTarget={currentAuditTarget}
    />
  )
}

export default MobileSessionDetail
