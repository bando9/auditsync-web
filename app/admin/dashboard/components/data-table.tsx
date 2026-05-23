"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckSquare, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [globalFilter, setGlobalFilter] = React.useState<any>([])

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      rowSelection,
      columnFilters,
      globalFilter,
    },
  })

  const selectedCount = table.getFilteredSelectedRowModel().rows.length
  const hasSelection = selectedCount > 0

  return (
    <div className="max-w-6xl">
      <div className="flex flex-col rounded-xl border border-border bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-border bg-muted/30 p-4">
          <div className="flex w-full max-w-xl items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari Bahan Baku, FG, atau Job No..."
                value={(table.getState().globalFilter as string) ?? ""}
                onChange={(event) =>
                  table.setGlobalFilter(String(event.target.value))
                }
                type="text"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-9 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
              />
              {globalFilter.length > 0 ? (
                <X
                  className="absolute top-2.5 right-2.5 h-4 w-4 cursor-pointer text-muted-foreground"
                  onClick={() => setGlobalFilter("")}
                />
              ) : (
                ""
              )}
            </div>
            {/* <Input
              placeholder="Cari Job No (misal: A240008)..."
              value={
                (table.getColumn("jobNo")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("jobNo")?.setFilterValue(event.target.value)
              }
              type="text"
              className="flex h-9 w-40 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
            /> */}
          </div>
          <div className="flex items-center gap-2">
            {hasSelection ? (
              <>
                <span className="mr-2 hidden text-sm text-muted-foreground lg:inline-block">
                  {selectedCount} baris terpilih
                </span>
                <button className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-white px-3 text-sm font-medium transition-colors hover:bg-muted">
                  <CheckSquare className="mr-2 h-4 w-4 text-green-600" />{" "}
                  Approve Selected
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto rounded-md border border-border bg-white shadow-sm">
        <Table>
          <TableHeader className="bg-muted/50 text-muted-foreground">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="[&_tr:last-child]:border-0">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const status = (row.original as any).status
                const isBlindMismatch = status === "blind-mismatch"

                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={cn(
                      "transition-colors hover:bg-muted/50",
                      isBlindMismatch &&
                        "border-l-2 border-l-red-500 bg-muted/10 hover:bg-muted/30",
                      row.getIsSelected() && "bg-muted/30"
                    )}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Tidak ada data.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredRowModel().rows.length} total baris
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="cursor-pointer"
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="cursor-pointer"
        >
          Next
        </Button>
      </div>
    </div>
  )
}
