export interface User {
  id: string
  name: string
  role: "ADMIN" | "WAREHOUSE" | "AUDITOR"
  pin: string
  isFirstLogin: boolean
  area?: string
}

export type Approver = {
  id: string
  initials: string
  name?: string
}

export type Session = {
  id: string
  name: string
  slug: string
  createdAt: string
  totalTarget: number
  approvalStatus: "waiting" | "partial" | "approved"
  approvers: Approver[]
  status: "in-progress" | "in-review" | "closed"
  progress?: number
}

export type AuditTarget = {
  id: string
  sessionId: string
  rawMaterialName: string
  fgName: string
  uom: string
  jobNo: string
  warehouse: string
  sapQty: number
  physicalQty?: number | null
  discrepancy?: number | null
  status:
    | "pending"
    | "counting"
    | "blind-mismatch"
    | "matched"
    | "sap-discrepancy"
}
