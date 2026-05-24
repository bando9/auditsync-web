import {
  Activity,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Eye,
} from "lucide-react"
import Link from "next/link"
import dayjs from "dayjs"
import "dayjs/locale/id"
import { Session } from "@/app/types"

function CardSessions({ session }: { session: Session }) {
  dayjs.locale("id")
  const formatedDate = dayjs(session.createdAt).format("DD MMM YYYY")

  function getApprovalText(status: string) {
    switch (status) {
      case "waiting":
        return "Menunggu TTD"
      case "partial":
        return "TTD partial"
      case "approved":
        return "Disetujui"
      default:
        return "Status unknown"
    }
  }

  const statusConfig = {
    "in-progress": {
      cardClass: "bg-white hover:border-blue-500 opacity-100",
      sidebarClass: "bg-blue-500",
      titleHover: "group-hover:text-blue-600",
      badge: {
        text: "In Progress",
        class: "border-blue-200 bg-blue-50 text-blue-700",
      },
      stat: {
        label: "Progress Hitung",
        value: `${session.progress || 0}% Selesai`,
        icon: Activity,
        color: "text-blue-600",
      },
      cta: {
        text: "Mulai Hitung Barang",
        icon: ArrowRight,
        color: "text-blue-600 group-hover:translate-x-0.5",
      },
    },
    "in-review": {
      cardClass: "bg-white hover:border-amber-400 opacity-100",
      sidebarClass: "bg-amber-500",
      titleHover: "group-hover:text-amber-600",
      badge: {
        text: "In Review",
        class: "border-amber-200 bg-amber-50 text-amber-700",
      },
      stat: {
        label: "Tahap Saat Ini",
        value: getApprovalText(session.approvalStatus),
        icon: Clock,
        color: "text-amber-600",
      },
      cta: {
        text: "Lihat Detail",
        icon: ArrowRight,
        color: "text-amber-600 group-hover:translate-x-0.5",
      },
    },
    closed: {
      cardClass: "bg-gray-50/50 hover:border-gray-300 opacity-80",
      sidebarClass: "bg-gray-400",
      titleHover: "group-hover:text-gray-900",
      badge: {
        text: "Closed",
        class: "border-gray-200 bg-gray-100 text-gray-600",
      },
      stat: {
        label: "Hasil Akhir",
        value: getApprovalText(session.approvalStatus),
        icon: CheckCircle2,
        color: "text-green-600",
      },
      cta: {
        text: "Lihat Riwayat",
        icon: Eye,
        color: "text-gray-500 group-hover:scale-110",
      },
    },
  }

  const config = statusConfig[session.status]

  const StatIcon = config.stat.icon
  const CtaIcon = config.cta.icon
  const targetUrl = `/mobile/sessions/${session.slug || session.id}`

  return (
    <Link
      href={targetUrl}
      className={`group relative block overflow-hidden rounded-xl border border-border bg-white p-4 shadow-sm transition-all hover:border-primary active:scale-[0.99] ${config.cardClass}`}
    >
      <div
        className={`absolute top-0 bottom-0 left-0 w-1 ${config.sidebarClass}`}
      ></div>

      <div className="flex items-start justify-between">
        <div className="w-50">
          <h2
            className={`text-base font-bold text-gray-900 transition-colors ${config.titleHover}`}
          >
            {session.name}
          </h2>
          <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" /> Dibuat: {formatedDate}
          </p>
        </div>

        <span
          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium whitespace-nowrap ${config.badge.class}`}
        >
          {config.badge.text}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border/60 pt-3 text-xs">
        <div>
          <span className="block text-muted-foreground">Total Target SAP</span>
          <span className="mt-0.5 block font-semibold text-gray-900">
            {session.totalTarget.toLocaleString("id-ID")} barang
          </span>
        </div>
        <div>
          <span className="block text-muted-foreground">
            {config.stat.label}
          </span>
          <span
            className={`mt-0.5 flex items-center gap-1 font-semibold ${config.stat.color} `}
          >
            <StatIcon className="h-3.5 w-3.5" />
            {config.stat.value}
          </span>
        </div>
      </div>

      <div
        className={`mt-3 flex items-center justify-end gap-1 pt-1 text-xs font-medium transition-transform ${config.cta.color}`}
      >
        {config.cta.text}
        <CtaIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  )
}

export default CardSessions
