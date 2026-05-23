"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ScanLine, AlertCircle, Delete, Loader2 } from "lucide-react"

export default function SetupPinPage() {
  const router = useRouter()

  // State Management
  const [step, setStep] = useState<1 | 2>(1)
  const [firstPin, setFirstPin] = useState("")
  const [confirmPin, setConfirmPin] = useState("")
  const [isError, setIsError] = useState(false)
  const [isShake, setIsShake] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Variabel dinamis berdasarkan langkah (Step)
  const currentPin = step === 1 ? firstPin : confirmPin
  const isComplete = currentPin.length === 6

  // Efek ketika PIN mencapai 6 digit
  useEffect(() => {
    if (currentPin.length === 6) {
      // Beri jeda 200ms agar user bisa melihat bulatan ke-6 terisi
      const timer = setTimeout(() => {
        // eslint-disable-next-line react-hooks/immutability
        handleCompletion()
      }, 200)
      return () => clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPin])

  // Logika ketika 6 digit tercapai
  const handleCompletion = async () => {
    if (step === 1) {
      setStep(2)
    } else {
      // Pengecekan Step 2: Apakah PIN sama?
      if (firstPin === confirmPin) {
        submitNewPin()
      } else {
        triggerError()
      }
    }
  }

  // Aksi Tombol Numpad
  const handleKeyPress = (num: string) => {
    setIsError(false)
    if (currentPin.length < 6) {
      if (step === 1) setFirstPin((prev) => prev + num)
      else setConfirmPin((prev) => prev + num)
    }
  }

  const handleDelete = () => {
    setIsError(false)
    if (currentPin.length > 0) {
      if (step === 1) setFirstPin((prev) => prev.slice(0, -1))
      else setConfirmPin((prev) => prev.slice(0, -1))
    }
  }

  const handleClear = () => {
    setIsError(false)
    if (step === 1) setFirstPin("")
    else setConfirmPin("")
  }

  // Logika Error (Memicu animasi shake)
  const triggerError = () => {
    setIsError(true)
    setIsShake(true)
    setConfirmPin("") // Kosongkan input langkah 2
    setTimeout(() => setIsShake(false), 400) // Matikan class shake setelah 400ms
  }

  // Simulasi Kirim Data ke Backend
  const submitNewPin = async () => {
    setIsLoading(true)
    try {
      // TODO: Ganti dengan fetch POST ke backend Hono kamu
      // await fetch('/api/users/setup-pin', { method: 'POST', body: JSON.stringify({ pin: firstPin }) })

      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulasi jaringan

      // Redirect ke halaman sesi
      router.push("/mobile/sessions")
      router.refresh()
    } catch (error) {
      alert("Gagal menyimpan PIN. Silakan coba lagi.")
      setIsLoading(false)
      console.log(error)
    }
  }

  return (
    // min-h-[100dvh] untuk menangani masalah navbar browser HP (Safari/Chrome)
    <div className="flex min-h-dvh items-center justify-center bg-zinc-950 font-sans text-zinc-50 antialiased">
      {/* Injeksi CSS Animasi Shake secara langsung agar komponen Standalone */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `,
        }}
      />

      <main className="relative flex h-dvh w-full max-w-md flex-col overflow-hidden bg-zinc-900 shadow-2xl md:h-190 md:rounded-3xl md:border md:border-zinc-800">
        {/* HEADER */}
        <header className="flex flex-col items-center p-6 pt-10 text-center">
          <div className="mb-6 flex items-center gap-2 text-emerald-500">
            <ScanLine className="h-6 w-6" />
            <span className="text-lg font-bold tracking-wider">AuditSync</span>
          </div>

          <h1 className="text-xl font-bold tracking-tight text-zinc-100 transition-all duration-300">
            {step === 1 ? "Buat PIN Baru" : "Konfirmasi PIN Baru"}
          </h1>
          <p className="mt-2 px-6 text-xs leading-relaxed text-zinc-400 transition-all duration-300">
            {step === 1
              ? "Ini adalah login pertama Anda. Silakan buat 6 digit PIN rahasia untuk mengamankan akun data audit Anda."
              : "Masukkan sekali lagi 6 digit PIN yang baru saja Anda buat untuk memastikan tidak ada salah ketik."}
          </p>
        </header>

        {/* PIN DOTS INDICATOR */}
        <section className="flex flex-1 flex-col items-center justify-center px-6">
          <p
            className={`mb-4 flex h-5 items-center gap-1 text-xs font-medium text-red-400 transition-opacity duration-200 ${
              isError ? "opacity-100" : "opacity-0"
            }`}
          >
            <AlertCircle className="h-3.5 w-3.5" /> PIN tidak cocok. Silakan
            ulangi.
          </p>

          <div className={`mb-2 flex gap-4 ${isShake ? "animate-shake" : ""}`}>
            {[...Array(6)].map((_, i) => {
              const isActive = i < currentPin.length
              return (
                <div
                  key={i}
                  className={`h-4 w-4 rounded-full border-2 transition-all duration-150 ${
                    isActive
                      ? "border-emerald-500 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                      : "border-zinc-700 bg-transparent"
                  }`}
                />
              )
            })}
          </div>

          <p className="mt-4 text-[10px] font-semibold tracking-widest text-zinc-500 uppercase">
            Langkah {step} dari 2
          </p>
        </section>

        {/* CUSTOM NUMPAD */}
        <section className="shrink-0 rounded-t-3xl border-t border-zinc-800/60 bg-zinc-950/60 p-6 pt-4 backdrop-blur-md">
          <div className="grid grid-cols-3 gap-3 select-none">
            {/* Tombol Angka 1-9 menggunakan map agar kode bersih */}
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
              <button
                key={num}
                onClick={() => handleKeyPress(num)}
                disabled={isLoading}
                className="flex h-14 items-center justify-center rounded-xl bg-zinc-800/50 text-xl font-semibold text-zinc-200 transition-colors hover:bg-zinc-800 active:bg-zinc-700 disabled:opacity-50"
              >
                {num}
              </button>
            ))}

            {/* Baris Bawah */}
            <button
              onClick={handleClear}
              disabled={isLoading || currentPin.length === 0}
              className="flex h-14 items-center justify-center rounded-xl text-xs font-bold tracking-wider text-zinc-500 transition-colors hover:text-zinc-300 disabled:opacity-50"
            >
              C
            </button>
            <button
              onClick={() => handleKeyPress("0")}
              disabled={isLoading}
              className="flex h-14 items-center justify-center rounded-xl bg-zinc-800/50 text-xl font-semibold text-zinc-200 transition-colors hover:bg-zinc-800 active:bg-zinc-700 disabled:opacity-50"
            >
              0
            </button>
            <button
              onClick={handleDelete}
              disabled={isLoading || currentPin.length === 0}
              className="flex h-14 items-center justify-center rounded-xl text-zinc-400 transition-colors hover:text-zinc-200 active:scale-95 disabled:opacity-50"
            >
              <Delete className="h-5 w-5" />
            </button>
          </div>
        </section>

        {/* LOADING OVERLAY */}
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950/90 transition-opacity duration-300">
            <Loader2 className="mb-4 h-12 w-12 animate-spin text-emerald-500" />
            <p className="text-sm font-medium text-zinc-200">
              Menyimpan PIN baru...
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              Memproses hak akses pertanggungjawaban audit
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
