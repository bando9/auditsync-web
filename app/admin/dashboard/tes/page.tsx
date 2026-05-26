import React from "react"

function page() {
  return (
    <div>
      <div className="min-h-screen bg-zinc-50 p-8 font-sans text-zinc-900">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
              Dashboard Utama
            </h1>
            <p className="mt-1 text-sm text-zinc-500">
              Ringkasan aktivitas operasional audit dan gudang saat ini.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm md:block">
              <span className="text-zinc-500">Periode:</span>
              <span className="font-semibold text-zinc-700">
                Q2 2026 (Aktif)
              </span>
            </div>
            <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700">
              + Sesi Audit Baru
            </button>
          </div>
        </header>

        <section className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-zinc-500">Sesi Berjalan</p>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </span>
            </div>
            <p className="mt-4 text-3xl font-bold">2</p>
            <p className="mt-1 text-xs text-zinc-500">
              Gudang Utama & Perakitan
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-zinc-500">
                Menunggu Review
              </p>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </span>
            </div>
            <p className="mt-4 text-3xl font-bold text-amber-600">1</p>
            <p className="mt-1 text-xs text-zinc-500">
              Siap untuk penutupan (Close)
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-zinc-500">
                Total Hitung (Bulan Ini)
              </p>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  ></path>
                </svg>
              </span>
            </div>
            <p className="mt-4 text-3xl font-bold">7,920</p>
            <p className="mt-1 text-xs text-zinc-500">
              <span className="font-medium text-emerald-500">+14%</span> dari
              bulan lalu
            </p>
          </div>

          <div className="rounded-xl border border-red-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-red-600">
                Investigasi Selisih
              </p>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  ></path>
                </svg>
              </span>
            </div>
            <p className="mt-4 text-3xl font-bold text-red-600">38</p>
            <p className="mt-1 text-xs font-medium text-red-500">
              Item tidak sesuai SAP
            </p>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          <section className="rounded-xl border border-zinc-200 bg-white shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4">
              <h2 className="text-base font-bold text-zinc-900">
                Sesi Audit Membutuhkan Perhatian
              </h2>
              <a
                href="/admin/sessions"
                className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
              >
                Lihat Semua
              </a>
            </div>

            <div className="overflow-x-auto p-0">
              <table className="w-full text-left text-sm text-zinc-600">
                <thead className="bg-zinc-50/50 text-xs text-zinc-500">
                  <tr>
                    <th className="px-6 py-3 font-medium">Nama Sesi</th>
                    <th className="px-6 py-3 font-medium">Progres</th>
                    <th className="px-6 py-3 font-medium">Selisih Ditemukan</th>
                    <th className="px-6 py-3 text-right font-medium">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr className="hover:bg-zinc-50">
                    <td className="px-6 py-4 font-medium text-zinc-900">
                      Stock Opname Q2 2026
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-24 overflow-hidden rounded-full bg-zinc-100">
                          <div className="h-full w-[50%] bg-blue-500"></div>
                        </div>
                        <span className="text-xs">50%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
                        13 Mismatch
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-xs font-medium text-blue-600 hover:text-blue-800">
                        Buka Workspace
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="px-6 py-4 font-medium text-zinc-900">
                      Audit Khusus: Perakitan
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-24 overflow-hidden rounded-full bg-zinc-100">
                          <div className="h-full w-full bg-emerald-500"></div>
                        </div>
                        <span className="text-xs font-medium text-emerald-600">
                          Selesai
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/10 ring-inset">
                        Aman (0)
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-xs font-medium text-amber-600 hover:text-amber-800">
                        Review TTD
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-base font-bold text-zinc-900">
              Aktivitas Lapangan Terbaru
            </h2>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="relative mt-1 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </div>
                <div>
                  <p className="text-sm text-zinc-600">
                    <span className="font-medium text-zinc-900">
                      Dimas Kusumo
                    </span>{" "}
                    baru saja menghitung{" "}
                    <span className="font-mono text-xs font-bold text-zinc-700">
                      SLA BATTERY 12V
                    </span>
                    .
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-400">
                    2 menit yang lalu
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="relative mt-1 flex h-2 w-2">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                </div>
                <div>
                  <p className="text-sm text-zinc-600">
                    <span className="font-medium text-zinc-900">
                      Siti Aminah
                    </span>{" "}
                    menandai selisih (Mismatch) pada{" "}
                    <span className="font-mono text-xs font-bold text-zinc-700">
                      TYRE 14 X 2.50
                    </span>
                    .
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-400">
                    15 menit yang lalu
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="relative mt-1 flex h-2 w-2">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-300"></span>
                </div>
                <div>
                  <p className="text-sm text-zinc-600">
                    <span className="font-medium text-zinc-900">
                      Budi Santoso
                    </span>{" "}
                    (Admin) membuat sesi baru{" "}
                    <span className="font-medium">Audit Khusus: Perakitan</span>
                    .
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-400">
                    3 hari yang lalu
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-6 w-full rounded-lg border border-zinc-200 py-2 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-50">
              Lihat Semua Log
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default page
