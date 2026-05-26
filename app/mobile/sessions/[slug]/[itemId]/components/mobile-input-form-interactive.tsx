"use client"

import { AuditTarget, Session } from "@/app/types"
import HeaderMobileInputForm from "./header-mobile-input-form"
import { CheckCircle2, EyeOff, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

function MobileInputFormInteractive({
  dataSession,
  dataAuditTarget,
  sessionSlug,
  itemId,
}: {
  dataSession: Session[]
  dataAuditTarget: AuditTarget[]
  sessionSlug: string
  itemId: string
}) {
  const currentSession = dataSession.find(
    (session) => session.slug === sessionSlug
  )

  const auditTarget = dataAuditTarget.find((item) => item.id === itemId)

  if (!currentSession) return <>wrong session</>

  return (
    <div>
      <HeaderMobileInputForm session={currentSession} />

      <main className="mx-full flex w-full max-w-md flex-1 flex-col overflow-y-auto p-4">
        {/* <!-- CARD DETAIL BARANG --> */}
        <div className="shrink-0 space-y-4 rounded-xl border border-border bg-white p-5 shadow-sm">
          {/* <!-- Header Card: Job No & Lokasi --> */}
          <div className="flex items-start justify-between">
            <span className="rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 font-mono text-xs font-bold text-blue-700">
              JOB: {auditTarget?.jobNo}
            </span>
            <span className="flex items-center rounded-md bg-gray-100 px-2 py-1 text-[10px] font-semibold text-muted-foreground">
              <MapPin className="mr-1 h-3 w-3" /> {auditTarget?.warehouse}
            </span>
          </div>

          {/* <!-- Identitas Utama Barang --> */}
          <div>
            <h1 className="text-xl leading-tight font-black text-gray-900">
              {auditTarget?.rawMaterialName}
            </h1>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="font-medium text-gray-600">FG Name:</span>{" "}
              {auditTarget?.fgName}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-1 flex-col">
          <label className="mb-3 text-center text-sm font-bold text-gray-800">
            Masukkan Jumlah Aktual di Lapangan
          </label>

          <div className="group relative flex w-full items-center justify-center">
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="0"
              className="h-40 w-full rounded-2xl border-2 border-border bg-white text-center text-7xl font-black text-gray-900 shadow-inner transition-all outline-none placeholder:text-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20"
              autoFocus
            />

            <span className="pointer-events-none absolute right-6 bottom-6 rounded-lg border border-border bg-gray-50 px-3 py-1 text-xl font-bold text-muted-foreground select-none">
              set
            </span>
          </div>

          <div className="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50/70 p-4 shadow-sm">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100">
              <EyeOff className="h-4 w-4 text-amber-700" />
            </div>
            <div className="text-xs leading-relaxed text-amber-900">
              <span className="mb-0.5 block text-sm font-bold">
                Blind Count Aktif
              </span>
              Target SAP disembunyikan. Masukkan angka sesuai perhitungan fisik
              aktual yang Anda temukan di lokasi ini saja.
            </div>
          </div>
        </div>
      </main>
      <div className="shrink-0 border-t border-border bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <Button className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary text-base font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none active:scale-[0.98]">
          <CheckCircle2 className="h-5 w-5" />
          Submit Hitungan Fisik
        </Button>
      </div>
    </div>
  )
}

export default MobileInputFormInteractive
