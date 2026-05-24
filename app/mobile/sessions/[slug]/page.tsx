import { getDataAuditTarget, getDataSession } from "@/app/data/dummy-data"
import HeaderMobileSessionsDetails from "./components/header-mobile-sessions-detail"
import { Search } from "lucide-react"
import ItemCardList from "./components/item-card-list"
import FooterMobileSessionsDetail from "./components/footer-mobile-sessions-detail"

async function MobileSessionDetail({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string }
}) {
  const dataSession = await getDataSession()
  const dataAuditTarget = await getDataAuditTarget()

  const resolvedParams = await params

  const currentSession = dataSession.find(
    (session) =>
      session.slug == resolvedParams.slug || session.id == resolvedParams.slug
  )

  if (!currentSession) {
    return (
      <div className="min-h-screen bg-red-50 p-6 text-red-900">
        <h1 className="mb-4 text-xl font-bold">
          🚨 Sesi Tidak Ditemukan (Mode Debug)
        </h1>
        <div className="space-y-2 rounded border border-red-200 bg-white p-4 font-mono text-sm">
          <p>
            <strong>Yang dicari (slug dari URL):</strong> <br />
            {resolvedParams.slug}
          </p>
          <hr className="my-2" />
          <p>
            <strong>Yang tersedia di Dummy Data:</strong>
          </p>
          <ul className="list-disc pl-5">
            {dataSession.map((s) => (
              <li key={s.id}>
                ID: {s.id} | Slug: {s.slug || "Tidak ada slug"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  const currentAuditTargets = dataAuditTarget.filter(
    (item) => item.sessionId === currentSession.id
  )
  console.log(currentAuditTargets)

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50 font-sans text-foreground antialiased">
      <div className="shrink-0 border-b border-border bg-white shadow-sm">
        <HeaderMobileSessionsDetails sessions={dataSession} />

        <div className="p-3">
          <div className="relative w-full">
            <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari Nama Bahan Baku atau Job No..."
              className="flex h-10 w-full rounded-lg border border-input bg-gray-50 px-3 py-2 pl-10 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:bg-white focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>

        {/* <!-- ROW 3: QUICK FILTER CHIPS --> */}
        <div className="no-scrollbar flex shrink-0 gap-2 overflow-x-auto px-3 pb-3 select-none">
          <button className="shrink-0 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
            Semua (4)
          </button>
          <button className="flex shrink-0 items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted">
            ⚪ Belum (1)
          </button>
          <button className="flex shrink-0 items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted">
            🔴 Mismatch (1)
          </button>
          <button className="flex shrink-0 items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted">
            🟢 Match (2)
          </button>
        </div>
      </div>

      <main className="flex-1 space-y-2 overflow-y-auto p-3">
        {/* <!-- ITEM 1: STATUS MATCH (🟢 Sudah Selesai) --> */}
        {/* <ItemCardList
          items={currentAuditTargets}
          slugSession={resolvedParams.slug}
        /> */}

        {/* <!-- ITEM 2: STATUS MISMATCH (🔴 Selisih Hitungan) --> */}
        <a
          href="#"
          className="group relative block overflow-hidden rounded-xl border border-red-100 bg-white p-3 shadow-sm transition-all active:scale-[0.99]"
        >
          <div className="flex items-start gap-3">
            {/* <!-- Indikator Warna Status Bulat Besar --> */}
            <span
              className="mt-1.5 h-3 w-3 shrink-0 animate-pulse rounded-full bg-red-500"
              title="Mismatch"
            ></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-blue-600">
                  JOB: A240009
                </span>
                <span className="text-[10px] text-muted-foreground">
                  Sortasi 2
                </span>
              </div>
              <h2 className="mt-0.5 truncate text-sm font-bold text-gray-900 group-hover:text-primary">
                LED HEADLIGHT 12V
              </h2>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                FG: E-BIKE 14 X 2.50 PACIFIC SYNC
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-1 self-center pl-2 text-right">
              <span className="rounded bg-red-100 px-1.5 py-0.5 text-center text-[10px] font-bold text-red-700">
                Hitung Ulang
              </span>
            </div>
          </div>
        </a>

        {/* <!-- ITEM 3: STATUS MATCH (🟢 Sudah Selesai) --> */}
        <a
          href="#"
          className="group relative block overflow-hidden rounded-xl border border-border bg-white p-3 shadow-sm transition-all active:scale-[0.99]"
        >
          <div className="flex items-start gap-3">
            <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-green-500"></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-blue-600">
                  JOB: A240009
                </span>
                <span className="text-[10px] text-muted-foreground">
                  Sortasi 2
                </span>
              </div>
              <h2 className="mt-0.5 truncate text-sm font-bold text-gray-900 group-hover:text-primary">
                BLDC MOTOR 500W
              </h2>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                FG: E-BIKE 14 X 2.50 PACIFIC SYNC
              </p>
            </div>
            <div className="shrink-0 self-center pl-2 text-right">
              <span className="rounded border border-green-100 bg-green-50 px-1.5 py-1 text-xs font-bold text-green-700">
                50 pcs
              </span>
            </div>
          </div>
        </a>

        {/* <!-- ITEM 4: STATUS PENDING (⚪ Belum Dihitung) --> */}
        <a
          href="#"
          className="group relative block overflow-hidden rounded-xl border border-border bg-white p-3 shadow-sm transition-all active:scale-[0.99]"
        >
          <div className="flex items-start gap-3">
            {/* <!-- Indikator Warna Status Bulat Besar --> */}
            <span
              className="mt-1.5 h-3 w-3 shrink-0 rounded-full border border-gray-400 bg-gray-200"
              title="Belum Dihitung"
            ></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-blue-600">
                  JOB: A240010
                </span>
                <span className="text-[10px] text-muted-foreground">
                  Gudang Perakitan
                </span>
              </div>
              <h2 className="mt-0.5 truncate text-sm font-bold text-gray-900 group-hover:text-primary">
                BRAKE LEVER ASSY
              </h2>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                FG: E-SCOOTER PRO MAX
              </p>
            </div>
            <div className="shrink-0 self-center pl-2 text-right">
              <span className="rounded bg-gray-100 px-1.5 py-1 text-xs font-medium text-muted-foreground">
                Isi Qty
              </span>
            </div>
          </div>
        </a>
      </main>

      {/* <FooterMobileSessionsDetail /> */}
    </div>
  )
}

export default MobileSessionDetail
