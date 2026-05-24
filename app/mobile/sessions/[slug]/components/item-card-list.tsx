import { AuditTarget } from "@/app/types"
import ItemCard from "./item-card"

function ItemCardList({
  slugSession,
  items,
}: {
  slugSession: string
  items: AuditTarget[]
}) {
  return (
    <>
      {items.map((item) => {
        return (
          <ItemCard
            key={item.id}
            dataAuditTarget={item}
            slugSession={slugSession}
          />
        )
      })}
    </>
  )
}

export default ItemCardList
