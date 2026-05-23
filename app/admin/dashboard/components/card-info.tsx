import { Progress } from "@/components/ui/progress"

interface CardInfoProps {
  title: string
  count: number | string
  description: string
  colorCard?: string
  colorText?: string
  colorIcon?: string
  icon: React.ElementType
  isProgress?: boolean
  progressCount?: number | null
}

function CardInfo({
  title,
  count,
  description,
  colorCard,
  colorIcon,
  colorText,
  icon: Icon,
  isProgress,
  progressCount,
}: CardInfoProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-white p-6 text-card-foreground shadow-sm ${colorCard}`}
    >
      <div className="flex items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium tracking-tight">{title}</h3>
        <Icon className={`h-4 w-4 ${colorIcon}`} />
      </div>
      <div className={`text-2xl font-bold ${colorText}`}>{count}</div>
      {isProgress ? (
        <Progress
          value={progressCount}
          className="h-1.5 bg-gray-200 [&>div]:rounded-full [&>div]:bg-blue-500"
        />
      ) : (
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  )
}

export default CardInfo
