import { Payment } from './payment'
import { Datetime } from '../datetime'

export class PaymentMother {
  static gym(): Payment {
    return {
      date: Datetime.fromIso('2019-09-10'),
      type: 'Gym',
      quantity: -30,
      detail: 'Gym',
      timestamp: Datetime.fromIso('2019-09-10'),
    }
  }
  static groceries(): Payment {
    return {
      date: Datetime.fromIso('2019-09-10'),
      type: 'Groceries',
      quantity: -56,
      detail: 'Party',
      timestamp: Datetime.fromIso('2019-09-10'),
    }
  }

  static transport(): Payment {
    return {
      date: Datetime.fromIso('2019-09-10'),
      type: 'Transport',
      quantity: -63,
      detail: 'transport',
      timestamp: Datetime.fromIso('2019-09-10'),
    }
  }

  static rent(): Payment {
    return {
      date: Datetime.fromIso('2019-09-10'),
      type: 'Gym',
      quantity: -500,
      detail: 'Rent',
      timestamp: Datetime.fromIso('2019-09-10'),
    }
  }

  static loan(): Payment {
    return {
      date: Datetime.fromIso('2019-09-10'),
      type: 'Misc',
      quantity: -100,
      detail: 'Loan',
      timestamp: Datetime.fromIso('2019-09-10'),
    }
  }
}
