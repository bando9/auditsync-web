import { Session } from "@/app/types"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

function HeaderMobileInputForm({ session }: { session: Session }) {
  return (
    <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center border-b border-border bg-white px-4 shadow-sm">
      <Link
        href="/mobile/sessions"
        className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted"
      >
        <ArrowLeft className="h-5 w-5" />
      </Link>
      <div className="flex flex-col">
        <span className="text-base leading-tight font-bold tracking-tight">
          Input Fisik Barang
        </span>
        <span className="text-[10px] font-medium text-muted-foreground">
          Sesi: {session.name}
        </span>
      </div>
    </header>
  )
}

export default HeaderMobileInputForm
