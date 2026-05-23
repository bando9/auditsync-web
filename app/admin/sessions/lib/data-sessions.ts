import { Session } from "../components/columns-sessions"

export async function getDataSession(): Promise<Session[]> {
  return [
    {
      id: "sess-001",
      name: "Stock Opname Q2 2026",
      slug: "stock-opname-q2-2026",
      createdAt: "2026-05-19T08:00:00Z",
      totalTarget: 2500,
      status: "in-progress",
      approvalStatus: "partial",
      approvers: [
        { id: "usr-01", initials: "KA", name: "Kepala Area" },
        { id: "usr-02", initials: "KG", name: "Kepala Gudang" },
      ],
    },
    {
      id: "sess-002",
      name: "Audit Khusus: Gudang Perakitan",
      slug: "audit-khusus-gudang-perakitan",
      createdAt: "2026-05-15T09:30:00Z",
      totalTarget: 320,
      status: "in-review",
      approvalStatus: "waiting",
      approvers: [],
    },
    {
      id: "sess-003",
      name: "Stock Opname Q1 2026",
      slug: "stockopname-q1-2026",
      createdAt: "2026-02-28T07:15:00Z",
      totalTarget: 2410,
      status: "closed",
      approvalStatus: "approved",
      approvers: [
        { id: "usr-03", initials: "MGR", name: "Manager Operasional" },
      ],
    },
  ]
}
