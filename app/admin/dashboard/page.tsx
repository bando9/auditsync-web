import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import {
  Archive,
  Bell,
  CircleAlert,
  CircleCheck,
  CircleEllipsis,
  ClipboardPenLine,
  LayoutDashboard,
  Plus,
  RefreshCcw,
  Settings,
  TriangleAlert,
} from "lucide-react"

import CardInfo from "./components/card-info"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { getData } from "./lib/data"
import Image from "next/image"

async function AdminDashboard() {
  const data = await getData()

  const activeMenu = "bg-gray-700 border-l-4 border-green-400 text-green-300"

  return (
    <div className="flex">
      <aside className="flex w-75 flex-col justify-between bg-gray-800 py-5 pr-2 pl-3">
        <div>
          <div>
            <h2 className="text-2xl font-bold text-gray-100">AuditSync</h2>
            <p className="text-gray-500">Industrial Control</p>
          </div>
          <div className="mt-5 flex flex-col space-y-2">
            <div className={`flex items-center space-x-2 p-1 ${activeMenu}`}>
              <LayoutDashboard />
              <h3 className="text-lg font-semibold">Dashboard</h3>
            </div>
            <div className="flex items-center space-x-2 p-1 text-gray-500">
              <ClipboardPenLine />
              <h3 className="text-lg font-semibold">Audits</h3>
            </div>
            <div className="flex items-center space-x-2 p-1 text-gray-500">
              <Archive />
              <h3 className="text-lg font-semibold">Inventory</h3>
            </div>
            <div className="flex items-center space-x-2 p-1 text-gray-500">
              <TriangleAlert />
              <h3 className="text-lg font-semibold">Discrepancies</h3>
            </div>
            <div className="flex items-center space-x-2 p-1 text-gray-500">
              <Settings />
              <h3 className="text-lg font-semibold">Setting</h3>
            </div>
          </div>
        </div>
        <div className="space-y-3 text-gray-100">
          <div className="flex space-x-1 bg-green-700 p-3">
            <Plus />
            <p>Start New Session</p>
          </div>

          <div className="flex items-center space-x-1 border-2 border-gray-400 p-1">
            <Image
              src="https://github.com/bando9.png"
              width={60}
              height={60}
              alt="profile"
              className="rounded-full"
            />
            <div>
              <p className="text-base font-bold">Admin User</p>
              <p className="text-xs font-semibold">Lead Inspector</p>
            </div>
          </div>
        </div>
      </aside>
      <div className="px-5 pt-5">
        <div className="mb-2 flex justify-between">
          <h3 className="font-bold uppercase">admin reconciliation</h3>
          <div className="flex items-center space-x-2">
            <Field>
              <ButtonGroup>
                <Input
                  id="input-button-group"
                  placeholder="Type to search..."
                />
                <Button variant="outline">Search</Button>
              </ButtonGroup>
            </Field>
            <RefreshCcw className="w-7 cursor-pointer hover:rotate-360 hover:transition-all hover:duration-1000" />
            <Bell className="w-7 cursor-pointer" />
          </div>
        </div>

        <Separator />

        <div className="mt-5 justify-evenly space-y-3 space-x-4 md:flex md:space-y-0">
          <CardInfo
            title="Total Target"
            count="12,840"
            description="Units scanned across 14 zones"
            colorCard="border-amber-600"
            icon={Archive}
          />

          <CardInfo
            title="Confirmed Match"
            count="11,204"
            description="87,3% percision rating"
            colorCard="border-green-600"
            colorText="text-green-700"
            colorIcon="text-green-600"
            icon={CircleCheck}
          />

          <CardInfo
            title="Discrepancy"
            count="942"
            description="Requires immediate re-audit"
            colorCard="border-red-600"
            colorText="text-red-700"
            colorIcon="text-red-600"
            icon={CircleAlert}
          />

          <CardInfo
            title="Pending Audit"
            count="694"
            description="In-progress on floor"
            colorCard="border-gray-600"
            icon={CircleEllipsis}
          />
        </div>

        <div className="mt-5 space-y-3">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold">Reconciliation Ledger</h2>
            <div className="flex space-x-2">
              <div className="bg-green-300 p-1 font-semibold text-green-800">
                <h3>SYNCED</h3>
              </div>
              <div className="bg-red-300 p-1 font-semibold text-red-700">
                <h3>ACTION REQUIRED</h3>
              </div>
            </div>
          </div>

          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
