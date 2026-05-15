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

function AdminDashboard() {
  return (
    <div className="px-5 pt-5">
      <div className="header-admin mb-2 flex justify-between">
        <h3 className="font-bold uppercase">admin reconciliation</h3>
        <div className="flex items-center">
          <Field>
            <ButtonGroup>
              <Input id="input-button-group" placeholder="Type to search..." />
              <Button variant="outline">Search</Button>
            </ButtonGroup>
          </Field>
          <RefreshCcw className="w-5 hover:rotate-360 hover:transition-all hover:duration-1000" />
          <Bell className="w-5" />
        </div>
      </div>

      <Separator />

      <div className="main mt-5 space-y-3 space-x-4 md:flex">
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
    </div>
  )
}

export default AdminDashboard
