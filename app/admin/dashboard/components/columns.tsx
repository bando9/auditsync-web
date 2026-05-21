"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import {
  AlertTriangle,
  ArrowUpDown,
  CheckCircle2,
  Clock,
  EyeOff,
  Loader2,
} from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export type AuditTarget = {
  id: string

  rawMaterialName: string
  jobNo: string
  warehouse: string
  sapQty: number
  physicalQty: number
  discrepancy: number
  status:
    | "pending"
    | "counting"
    | "blind-mismatch"
    | "matched"
    | "sap-discrepancy"
}

export const columns: ColumnDef<AuditTarget>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "rawMaterialName",
    header: "Bahan Baku / Material",
  },
  {
    accessorKey: "jobNo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Job No
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "fgName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama Kendaraan Listrik
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "warehouse",
    header: "Area / Gudang",
  },

  {
    accessorKey: "sapQty",
    header: "SAP",
  },
  {
    accessorKey: "physicalQty",
    header: "Fisik",
  },

  {
    accessorKey: "discrepancy",
    header: "Selisih",
    cell: ({ row }) => {
      const discrepancy = row.getValue("discrepancy") as number

      if (discrepancy === null)
        return <div className="text-right text-gray-400">-</div>

      const isMismatch = discrepancy != 0

      return (
        <div
          className={`text-right ${isMismatch ? "font-bold text-red-600" : "font-medium text-gray-500"}`}
        >
          {/* Jika ingin menambahkan simbol plus untuk angka positif: */}
          {discrepancy > 0 ? `+${discrepancy}` : discrepancy}
        </div>
      )
    },
  },
  {
    accessorKey: "uom",
    header: "UOM",
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as string

      switch (status) {
        case "pending":
          return (
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600 shadow-sm">
                <Clock className="h-3 w-3" />
                Pending
              </span>
            </div>
          )

        case "counting":
          return (
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 shadow-sm">
                <Loader2 className="h-3 w-3 animate-spin" />
                Counting
              </span>
            </div>
          )

        case "matched":
          return (
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700 shadow-sm">
                <CheckCircle2 className="h-3 w-3" />
                Matched
              </span>
            </div>
          )

        case "sap-discrepancy":
          return (
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-2.5 py-0.5 text-xs font-semibold text-orange-700 shadow-sm">
                <AlertTriangle className="h-3 w-3" />
                SAP Discrepancy
              </span>
            </div>
          )

        case "blind-mismatch":
          return (
            <div className="flex justify-center">
              {/* Status darurat: Warna merah lebih tegas & Ikon yang mencolok */}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-100 px-2.5 py-0.5 text-xs font-bold text-red-800 shadow-sm ring-1 ring-red-600/20 ring-inset">
                <EyeOff className="h-3 w-3 text-red-600" />
                Blind Mismatch
              </span>
            </div>
          )

        default:
          return null // Fallback jika string tidak dikenali
      }
    },
  },
]
