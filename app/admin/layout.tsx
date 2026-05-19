import React from "react"
import SideBar from "./components/side-bar"

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50/50 font-sans text-foreground">
      <SideBar />
      {children}
    </div>
  )
}

export default AdminLayout
