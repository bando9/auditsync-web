import {
  Archive,
  ClipboardPenLine,
  LayoutDashboard,
  Plus,
  Settings,
  TriangleAlert,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function AdminMenu() {
  const activeMenu = "bg-gray-700 border-l-4 border-green-400 text-green-300"

  return (
    <aside className="flex w-75 flex-col justify-between bg-gray-800 py-5 pr-2 pl-3">
      <div>
        <div>
          <h2 className="text-2xl font-bold text-gray-100">AuditSync</h2>
          <p className="text-gray-500">Industrial Control</p>
        </div>
        <div className="mt-5 flex flex-col space-y-2">
          <Link
            href="/admin/dashboard"
            className={`flex items-center space-x-2 p-1 ${activeMenu}`}
          >
            <LayoutDashboard />
            <h3 className="text-lg font-semibold">Dashboard</h3>
          </Link>
          <Link
            href="/admin/audits"
            className="flex items-center space-x-2 p-1 text-gray-500"
          >
            <ClipboardPenLine />
            <h3 className="text-lg font-semibold">Audits</h3>
          </Link>
          <Link
            href="/admin/inventory"
            className="flex items-center space-x-2 p-1 text-gray-500"
          >
            <Archive />
            <h3 className="text-lg font-semibold">Inventory</h3>
          </Link>
          <Link
            href="/admin/discrepancies"
            className="flex items-center space-x-2 p-1 text-gray-500"
          >
            <TriangleAlert />
            <h3 className="text-lg font-semibold">Discrepancies</h3>
          </Link>
          <Link
            href="/admin/setting"
            className="flex items-center space-x-2 p-1 text-gray-500"
          >
            <Settings />
            <h3 className="text-lg font-semibold">Setting</h3>
          </Link>
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
  )
}

export default AdminMenu
