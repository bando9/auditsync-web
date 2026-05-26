import { getDataAuditTarget, getDataSession } from "@/app/data/dummy-data"
import MobileInputFormInteractive from "./components/mobile-input-form-interactive"

async function MobileInputForm({
  params,
}: {
  params: Promise<{ slug: string; itemId: string }>
}) {
  const dataSession = await getDataSession()
  const dataAuditTarget = await getDataAuditTarget()
  const { slug, itemId } = await params

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50 font-sans text-foreground antialiased">
      <MobileInputFormInteractive
        dataSession={dataSession}
        dataAuditTarget={dataAuditTarget}
        sessionSlug={slug}
        itemId={itemId}
      />
    </div>
  )
}

export default MobileInputForm
