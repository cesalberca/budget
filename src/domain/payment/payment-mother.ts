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
  static groceries(): Payment {
    return {
      owned: 28,
      date: Datetime.fromIso('2019-09-10'),
      from: 'Aisha',
      to: ['César', 'Aisha'],
      type: 'Groceries',
      quantity: 56,
      detail: 'Party',
      timestamp: Datetime.fromIso('2019-09-10')
    }
  }

  static transport(): Payment {
    return {
      owned: 63,
      date: Datetime.fromIso('2019-09-10'),
      from: 'Aisha',
      to: ['Aisha'],
      type: 'Transport',
      quantity: 63,
      detail: 'transport',
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
