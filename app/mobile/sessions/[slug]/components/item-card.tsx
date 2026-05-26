"use client"

import { AuditTarget } from "@/app/types"
import Link from "next/link"

function ItemCard({
  dataAuditTarget,
  slugSession,
}: {
  dataAuditTarget: AuditTarget
  slugSession?: string
}) {
  const isCounted = dataAuditTarget.physicalQty !== null

  return (
    <Link
      href={`/mobile/sessions/${slugSession}/${dataAuditTarget.id}`}
      className="group relative block overflow-hidden rounded-xl border border-border bg-white p-3 shadow-sm transition-all active:scale-[0.99]"
    >
      <div className="flex items-start gap-3">
        {/* <!-- Indicator Status Color --> */}
        <span
          title="Match"
          className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-green-500"
        ></span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold text-blue-600">
              {dataAuditTarget.jobNo}
            </span>
            <span className="text-[10px] text-muted-foreground">
              {dataAuditTarget.warehouse}
            </span>
          </div>
          <h2 className="mt-0.5 truncate text-sm font-bold text-gray-900 group-hover:text-primary">
            {dataAuditTarget.rawMaterialName}
          </h2>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            FG: {dataAuditTarget.fgName}
          </p>
        </div>
        <div className="shrink-0 self-center pl-2 text-right">
          {isCounted ? (
            <span className="rounded border border-green-100 bg-green-50 px-1.5 py-1 text-xs font-bold text-green-700">
              {dataAuditTarget.physicalQty} {dataAuditTarget.uom}
            </span>
          ) : (
            <span className="rounded border border-gray-100 bg-gray-50 px-1.5 py-1 text-xs font-bold text-gray-500">
              Pending
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ItemCard
