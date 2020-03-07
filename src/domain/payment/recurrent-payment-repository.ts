import { FindableAll } from '../findable-all'
import { Creatable } from '../creatable'
import { Payment } from './payment'

export interface RecurrentPaymentRepository extends FindableAll<Payment>, Creatable<Payment> {}
