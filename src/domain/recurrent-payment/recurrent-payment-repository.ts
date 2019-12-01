import { FindableAll } from '../findable-all'
import { RecurrentPayment } from './recurrent-payment'
import { Creatable } from '../creatable'

export interface RecurrentPaymentRepository extends FindableAll<RecurrentPayment>, Creatable<RecurrentPayment> {}
