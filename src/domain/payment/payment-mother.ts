import { Payment } from './payment'
import { Datetime } from '../datetime'

export class PaymentMother {
  static gym(): Payment {
    return {
      owned: 15,
      date: Datetime.fromIso('2019-09-10'),
      from: 'César',
      to: ['César', 'Aisha'],
      type: 'Gym',
      quantity: 30,
      detail: 'Gym',
      timestamp: Datetime.fromIso('2019-09-10')
    }
  }

  static rent() {
    return {
      owned: 250,
      date: Datetime.fromIso('2019-09-10'),
      from: 'César',
      to: ['César', 'Aisha'],
      type: 'Gym',
      quantity: 500,
      detail: 'Rent',
      timestamp: Datetime.fromIso('2019-09-10')
    }

  }
}
