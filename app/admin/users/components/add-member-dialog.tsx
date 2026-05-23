import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { UserPlus } from "lucide-react"

function AddMemberDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="inline-flex h-9 cursor-pointer items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
            <UserPlus className="mr-2 h-4 w-4" /> Tambah Anggota
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Tambah Tim Lapangan</DialogTitle>
            <DialogDescription>
              Masukkan data anggota baru. PIN akan digunakan untuk login di
              aplikasi mobile.
            </DialogDescription>
          </DialogHeader>
          <form
            // onSubmit={onSubmit}
            className="mt-4 space-y-4"
          >
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                Nama Lengkap
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Misal: Dimas Kusumo"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="pin" className="text-sm font-medium">
                PIN Login (6 Angka)
              </label>
              <Input
                id="pin"
                name="pin"
                type="text"
                pattern="[0-9]{6}"
                placeholder="Misal: 501299"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="role" className="text-sm font-medium">
                Peran (Role)
              </label>
              <select
                id="role"
                name="role"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:ring-1 focus-visible:ring-primary"
                required
              >
                <option value="" disabled selected>
                  Pilih peran...
                </option>
                <option value="AUDITOR">Auditor</option>
                <option value="WAREHOUSE">Tim Gudang</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="area" className="text-sm font-medium">
                Area / Gudang Default
              </label>
              <Input
                id="area"
                name="area"
                placeholder="Misal: Gudang Bahan Baku 1"
                required
              />
            </div>

            <div className="mt-6 flex justify-end gap-3 border-t border-border pt-4">
              <Button
                type="button"
                variant="outline"
                className="cursor-pointer"
                // onClick={() => setIsOpen(false)}
                // disabled={isLoading}
              >
                Batal
              </Button>
              <Button
                className="cursor-pointer"
                type="submit"
                //  disabled={isLoading}
              >
                {/* {isLoading ? (
                <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Menyimpan...
                </>
                ) : (
                  "Simpan Data"
                  )} */}
                Simpan Data
              </Button>
            </div>
          </form>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default AddMemberDialog
