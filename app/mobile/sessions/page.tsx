import HeaderMobileSessions from "./components/header-mobile-sessions"
import CardSessions from "./components/card-sessions"
import { getDataSession } from "@/app/admin/sessions/lib/data-sessions"
import FooterMobileSession from "./components/footer-mobile-sessions"
import EmptySessions from "./components/empty-sessions"

async function MobileSession() {
  const data = await getDataSession()

  const isAnySession = data.length > 0

  return (
    <div className="flex min-h-screen flex-col justify-between bg-gray-50 font-sans text-foreground antialiased">
      <HeaderMobileSessions />

      <main className="mx-full w-full max-w-md flex-1 space-y-4 px-4 py-4">
        <div className="px-1">
          <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
            Daftar Kerja Lapangan
          </p>
          <p className="mt-0.5 text-sm text-gray-600">
            Pilih sesi *stock opname* yang sedang berjalan hari ini untuk mulai
            menghitung fisik barang.
          </p>
        </div>

        {isAnySession ? (
          <div className="space-y-3">
            {data.map((session) => {
              return <CardSessions key={session.id} session={session} />
            })}
          </div>
        ) : (
          <EmptySessions />
        )}
      </main>
      <FooterMobileSession />
    </div>
  )
}

export default MobileSession
