import { User, Lock, ScanLine } from "lucide-react"

function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-foreground antialiased">
      {/* <!-- Container Utama --> */}
      <main className="flex flex-1 flex-col items-center justify-center p-4 sm:p-8">
        {/* <!-- Box Form Login --> */}
        <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-xl sm:p-8">
          {/* <!-- Aksen Dekoratif Atas --> */}
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-primary"></div>

          {/* <!-- Logo & Judul --> */}
          <div className="mb-8 flex flex-col items-center justify-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ScanLine className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              AuditSync
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Sistem Manajemen Stock Opname
            </p>
          </div>

          {/* <!-- Form Autentikasi --> */}
          <form id="loginForm" className="space-y-4">
            {/* <!-- Input Username / PIN --> */}
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="text-sm leading-none font-medium text-gray-700"
              >
                Username atau PIN
              </label>
              <div className="relative">
                <User className="absolute top-2.5 left-3 h-4 w-4 text-muted-foreground"></User>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Contoh: admin atau 12345"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 pl-9 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none"
                />
              </div>
            </div>

            {/* <!-- Input Password --> */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm leading-none font-medium text-gray-700"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Lupa sandi?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute top-2.5 left-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 pl-9 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none"
                />
              </div>
            </div>

            {/* <!-- Tombol Submit --> */}
            <button
              type="submit"
              id="submitBtn"
              className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-[0.98]"
            >
              Masuk ke Sistem
            </button>
          </form>

          {/* <!-- Box Bantuan / Petunjuk Simulasi --> */}
          <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50/50 p-3 text-xs leading-relaxed text-blue-800">
            <span className="mb-1 block font-bold">Panduan Demo Redirect:</span>
            • Ketik <strong>&quot;admin&quot;</strong> untuk diarahkan ke
            Dashboard Desktop.
            <br />• Ketik <strong>&quot;501299&quot;</strong> (atau apapun
            selain admin) untuk diarahkan ke aplikasi Mobile Lapangan.
          </div>
        </div>

        {/* <!-- Footer --> */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          &copy; 2026 AuditSync Internal System. All rights reserved.
        </div>
      </main>
    </div>
  )
}

export default LoginPage
