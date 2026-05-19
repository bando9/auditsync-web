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
  RefreshCcw,
} from "lucide-react"

import CardInfo from "./components/card-info"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { getData } from "./lib/data"

async function AdminDashboard() {
  const data = await getData()

  return (
    <div className="px-5 pt-5">
      <div className="mb-2 flex justify-between">
        <h3 className="font-bold uppercase">admin reconciliation</h3>
        <div className="flex items-center space-x-2">
          <Field>
            <ButtonGroup>
              <Input id="input-button-group" placeholder="Type to search..." />
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
  )
}

export default AdminDashboard
