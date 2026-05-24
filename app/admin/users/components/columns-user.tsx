"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowRight, CheckCheck, Download, Eye } from "lucide-react"
import Link from "next/link"
import "dayjs/locale/id"
import { User } from "@/app/types"

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Nama Anggota",
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
    accessorKey: "role",
    header: "Peran (Role)",
    cell: ({}) => {},
  },
]
