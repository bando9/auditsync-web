"use client"

import { CheckCircle2, EyeOff, MapPin } from "lucide-react"
import HeaderMobileInputForm from "./components/header-mobile-input-form"

function MobileInputForm() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50 font-sans text-foreground antialiased">
      {/* <!-- TOP MOBILE HEADER --> */}
      <HeaderMobileInputForm />

      {/* <!-- MAIN SCROLLABLE BODY --> */}
      <main className="mx-full flex w-full max-w-md flex-1 flex-col overflow-y-auto p-4">
        {/* <!-- CARD DETAIL BARANG --> */}
        <div className="shrink-0 space-y-4 rounded-xl border border-border bg-white p-5 shadow-sm">
          {/* <!-- Header Card: Job No & Lokasi --> */}
          <div className="flex items-start justify-between">
            <span className="rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 font-mono text-xs font-bold text-blue-700">
              JOB: A240010
            </span>
            <span className="flex items-center rounded-md bg-gray-100 px-2 py-1 text-[10px] font-semibold text-muted-foreground">
              <MapPin className="mr-1 h-3 w-3" /> Gudang Perakitan
            </span>
          </div>

          {/* <!-- Identitas Utama Barang --> */}
          <div>
            <h1 className="text-xl leading-tight font-black text-gray-900">
              BRAKE LEVER ASSY
            </h1>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="font-medium text-gray-600">FG Name:</span>{" "}
              E-SCOOTER PRO MAX
            </p>
          </div>
        </div>

        {/* <!-- FORM INPUT RAKSASA (BLIND COUNT) --> */}
        <div className="mt-8 flex flex-1 flex-col">
          <label className="mb-3 text-center text-sm font-bold text-gray-800">
            Masukkan Jumlah Aktual di Lapangan
          </label>

          {/* <!-- Wrapper Input Relatif --> */}
          <div className="group relative flex w-full items-center justify-center">
            {/* <!-- 
                  Atribut Penting:
                  - type="number": Membatasi hanya angka.
                  - inputmode="numeric": Memaksa HP memunculkan Numpad besar (bukan keyboard qwerty biasa).
                  - pattern="[0-9]*": Ekstra validasi untuk iOS.
                --> */}
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="0"
              className="h-40 w-full rounded-2xl border-2 border-border bg-white text-center text-7xl font-black text-gray-900 shadow-inner transition-all outline-none placeholder:text-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20"
              autoFocus
            />

            {/* <!-- UOM (Unit of Measure) ditempel di dalam kotak input --> */}
            <span className="pointer-events-none absolute right-6 bottom-6 rounded-lg border border-border bg-gray-50 px-3 py-1 text-xl font-bold text-muted-foreground select-none">
              set
            </span>
          </div>

          {/* <!-- Pesan Peringatan Mode Blind Count --> */}
          <div className="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50/70 p-4 shadow-sm">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100">
              <EyeOff className="h-4 w-4 text-amber-700" />
            </div>
            <div className="text-xs leading-relaxed text-amber-900">
              <span className="mb-0.5 block text-sm font-bold">
                Blind Count Aktif
              </span>
              Target SAP disembunyikan. Masukkan angka sesuai perhitungan fisik
              aktual yang Anda temukan di lokasi ini saja.
            </div>
          </div>
        </div>
      </main>
      <div className="shrink-0 border-t border-border bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        {/* <!-- Tombol "Submit" Selebar Layar --> */}
        <button className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary text-base font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none active:scale-[0.98]">
          <CheckCircle2 className="h-5 w-5" />
          Submit Hitungan Fisik
        </button>
      </div>
    </div>
  )
}

export default MobileInputForm
