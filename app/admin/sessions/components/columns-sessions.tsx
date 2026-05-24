"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowRight, CheckCheck, Download, Eye } from "lucide-react"
import Link from "next/link"
import dayjs from "dayjs"
import "dayjs/locale/id"
import { Session } from "@/app/types"

export const columns: ColumnDef<Session>[] = [
  {
    accessorKey: "name",
    header: "Nama Sesi Audit",
    cell: ({ row }) => {
      const isProgress = row.getValue("status") == "in-progress"

      return (
        <div>
          {isProgress ? (
            <div className="align-middle font-semibold text-primary">
              {row.original.name}
            </div>
          ) : (
            <div className="align-middle font-medium text-foreground">
              {row.original.name}
            </div>
          )}
        </div>
      )
    },
  },
  {
    accessorKey: "createdAt",
    header: "Tanggal Dibuat",
    cell: ({ row }) => {
      dayjs.locale("id")
      const formatedDate = dayjs(row.original.createdAt).format("DD MMM YYYY")
      return (
        <div className="align-middle text-muted-foreground">{formatedDate}</div>
      )
    },
  },
  {
    accessorKey: "totalTarget",
    header: "Jumlah Target",
    cell: ({ row }) => {
      const isClosed = row.getValue("status") == "closed"
      const totalTarget = row.original.totalTarget

      return (
        <>
          {isClosed ? (
            <div className="align-middle text-muted-foreground">
              {totalTarget} barang
            </div>
          ) : (
            <div className="align-middle">{totalTarget} barang</div>
          )}
        </>
      )
    },
  },
  {
    accessorKey: "approvalStatus",
    header: "PIC Persetujuan",
    cell: ({ row }) => {
      const approvalStatus = row.getValue("approvalStatus")

      switch (approvalStatus) {
        case "waiting":
          return (
            <div className="align-middle text-xs text-muted-foreground italic">
              Menunggu TTD...
            </div>
          )
        case "partial":
          return (
            <div className="align-middle">
              <div className="flex -space-x-2">
                {row.original.approvers.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-[10px] font-bold"
                      title="Kepala Auditor"
                    >
                      {item.initials}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        case "approved":
          return (
            <div className="align-middle">
              <div className="flex items-center gap-1 text-xs font-medium text-green-600">
                <CheckCheck className="h-4 w-4" /> Disetujui
              </div>
            </div>
          )
      }
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status")

      switch (status) {
        case "closed":
          return (
            <div className="text-center align-middle">
              <span className="inline-flex items-center rounded-full border border-transparent bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600">
                Closed
              </span>
            </div>
          )
        case "in-review":
          return (
            <div className="text-center align-middle">
              <span className="inline-flex items-center rounded-full border border-transparent bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
                In Review
              </span>
            </div>
          )
        case "in-progress":
          return (
            <div className="text-center align-middle">
              <span className="inline-flex items-center rounded-full border border-transparent bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                In Progress
              </span>
            </div>
          )
      }
    },
  },
  {
    header: "Aksi",
    cell: ({ row }) => {
      const status = row.getValue("status") as string

      const slugName = row.original.slug

      switch (status) {
        case "in-progress":
          return (
            <div className="text-right align-middle">
              <Link
                href={`/admin/sessions/${slugName}`}
                className="inline-flex h-8 cursor-pointer items-center justify-center rounded-md px-3 text-sm font-medium text-blue-600 transition-colors hover:bg-muted"
              >
                Buka Workspace <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          )
        case "in-review":
          return (
            <div className="text-right align-middle">
              <Link
                href={`/admin/sessions/${slugName}`}
                className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
              >
                <Eye className="h-4 w-4" />
              </Link>
            </div>
          )
        case "closed":
          return (
            <div className="text-right align-middle text-muted-foreground">
              <button
                className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted"
                title="Unduh Hasil"
              >
                <Download className="h-4 w-4" />
              </button>
              <Link
                href={`/admin/sessions/${slugName}`}
                className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted"
                title="Lihat Data"
              >
                <Eye className="h-4 w-4" />
              </Link>
            </div>
          )
      }
    },
  },
]
