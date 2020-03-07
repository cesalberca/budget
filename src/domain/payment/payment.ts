import { Datetime } from '../datetime'

export interface Payment {
  detail: string
  from: string
  to: string[]
  type: string
  quantity: number
  owned: number
  date: Datetime
}
