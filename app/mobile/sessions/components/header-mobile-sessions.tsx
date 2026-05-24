function HeaderMobileSessions() {
  return (
    <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center justify-between border-b border-border bg-white px-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-base font-bold tracking-tight">Sesi Audit</span>
      </div>

      <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700">
        🕵️‍♂️ Auditor
      </span>
    </header>
  )
}

export default HeaderMobileSessions
