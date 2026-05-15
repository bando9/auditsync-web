import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CardInfoProps {
  title: string
  count: string
  description: string
  colorCard: string
  colorText?: string
  colorIcon?: string
  icon: React.ElementType
}

function CardInfo({
  title,
  count,
  description,
  colorCard,
  colorIcon,
  colorText,
  icon: Icon,
}: CardInfoProps) {
  return (
    <Card
      size="sm"
      className={`w-full max-w-full border-t-2 md:max-w-xs ${colorCard}`}
    >
      <CardHeader className="flex justify-between">
        <CardTitle>{title} </CardTitle>
        <Icon className={`w-5 md:w-7 ${colorIcon}`} />
      </CardHeader>
      <CardContent>
        <h2 className={`text-xl font-bold md:text-2xl ${colorText}`}>
          {count}
        </h2>
        <p className={`text-sm md:text-base ${colorText}`}>{description}</p>
      </CardContent>
    </Card>
  )
}

export default CardInfo
