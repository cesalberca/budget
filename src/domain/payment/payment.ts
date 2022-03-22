import { Datetime } from '../datetime'

export interface Payment {
  timestamp: Datetime
  detail: string
  type: string
  quantity: number
  date: Datetime
}
