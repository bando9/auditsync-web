import React from "react"
import AdminMenu from "./components/aside"

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <AdminMenu />
      <main>{children}</main>
    </div>
  )
}

export default AdminLayout
