import { Activity, AlertTriangle, Archive, CircleCheck } from "lucide-react"

export const dataInfo = [
  {
    title: "Total Target",
    description: "Baris data Excel SAP",
    count: "2,500",
    icon: Archive,
    colorIcon: "text-muted-foreground",
    isProgress: false,
  },
  {
    title: "Selesai (Match)",
    description: "Sesuai dengan SAP",
    count: "1,240",
    icon: CircleCheck,
    colorIcon: "text-muted-foreground",
    colorCard: "border-t-4 border-t-green-500",
    isProgress: false,
  },
  {
    title: "Selisih (Mismatch)",
    count: "15",
    description: "Butuh investigasi",
    icon: AlertTriangle,
    colorCard: "border-t-4 border-t-red-500",
    colorIcon: "text-red-600",
    colorText: "text-red-600",
    isProgress: false,
  },
  {
    title: "Progres Lapangan",
    count: "50.2%",
    description: "Butuh investigasi",
    icon: Activity,
    colorIcon: "text-blue-500",
    isProgress: true,
    progressCount: 50.2,
  },
]
