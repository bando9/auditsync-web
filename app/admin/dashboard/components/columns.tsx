"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export type AuditTarget = {
  id: string

  rawMaterialName: string
  jobNo: string
  fgName: string
  warehouse: string
  uom: string

  sapQty: number
  physicalQty: number
  discrepancy: number

  status:
    | "pending"
    | "counting"
    | "blind-mismatch"
    | "matched"
    | "sap-discrepancy"
  lastVerified: string
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
    accessorKey: "id",
    header: "Audit ID",
  },
  {
    accessorKey: "rawMaterialName",
    header: "Material Name",
  },
  {
    accessorKey: "jobNo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Job Number
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
          FG Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "warehouse",
    header: "Warehouse",
  },
  {
    accessorKey: "uom",
    header: "UOM",
  },
  {
    accessorKey: "sapQty",
    header: "SAP Quantity",
  },
  {
    accessorKey: "physicalQty",
    header: "Physical Quantity",
  },
  {
    accessorKey: "discrepancy",
    header: "Discrepancy",
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
  },
  {
    accessorKey: "lastVerified",
    header: "Last Verified",
  },
]
