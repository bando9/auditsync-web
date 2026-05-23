import AddMemberDialog from "./add-member-dialog"

function HeaderUsers() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-white px-6">
      <div>
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          Manajemen Tim Lapangan
        </h1>
        <p className="text-xs text-muted-foreground">
          Kelola akses, otorisasi, dan PIN staf untuk aplikasi *mobile*
        </p>
      </div>

      <div className="flex items-center gap-3">
        <AddMemberDialog />
      </div>
    </header>
  )
}

export default HeaderUsers
