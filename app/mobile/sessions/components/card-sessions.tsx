import { Activity, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import type { Session } from "@/app/admin/sessions/components/columns-sessions"
import dayjs from "dayjs"
import "dayjs/locale/id"

function CardSessions({ session }: { session: Session }) {
  dayjs.locale("id")
  const formatedDate = dayjs(session.createdAt).format("DD MMM YYYY")

  function renderStatusBadge(status: string) {
    switch (status) {
      case "in-progress":
        return (
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[11px] font-medium text-blue-700">
            In Progress
          </span>
        )
      case "in-review":
        return (
          <span className="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-50 px-2.5 py-0.5 text-[11px] font-semibold text-yellow-800">
            In Review
          </span>
        )
      case "closed":
        return (
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
            Closed
          </span>
        )
    }
  }

  return (
    <Link
      href={`/mobile/sessions/${session.slug}`}
      className="group relative block overflow-hidden rounded-xl border border-border bg-white p-4 shadow-sm transition-all hover:border-primary active:scale-[0.99]"
    >
      {session.status === "in-progress" ? (
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-blue-500"></div>
      ) : (
        ""
      )}

      <div className="flex items-start justify-between">
        <div className="w-50">
          <h2 className="text-base font-bold text-gray-900 transition-colors group-hover:text-blue-600">
            {session.name}
          </h2>
          <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" /> Dibuat: {formatedDate}
          </p>
        </div>

        {renderStatusBadge(session.status)}
      </div>

      {/* <!-- Detail Tambahan Status Progress --> */}
      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border/60 pt-3 text-xs">
        <div>
          <span className="block text-muted-foreground">Total Target SAP</span>
          <span className="mt-0.5 block font-semibold text-gray-900">
            {session.totalTarget} Items
          </span>
        </div>
        <div>
          <span className="block text-muted-foreground">Progress Hitung</span>
          <span className="mt-0.5 flex items-center gap-1 font-semibold text-blue-600">
            <Activity className="h-3.5 w-3.5" />
            50.2% Selesai
          </span>
        </div>
      </div>

      {/* <!-- Prompt Navigasi --> */}
      <div className="mt-3 flex items-center justify-end gap-1 pt-1 text-xs font-medium text-blue-600">
        Mulai Hitung Barang{" "}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  )
}

export default CardSessions
