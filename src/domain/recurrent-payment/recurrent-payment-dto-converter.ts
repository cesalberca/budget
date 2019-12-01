import { Converter } from '../converter'
import { RecurrentPaymentDto } from './recurrent-payment-dto'
import { RecurrentPayment } from './recurrent-payment'

export class RecurrentPaymentDtoConverter implements Converter<RecurrentPaymentDto, RecurrentPayment> {
  convert([detail, debtor, type, quantity]: RecurrentPaymentDto): RecurrentPayment {
    return {
      quantity,
      detail,
      debtor,
      type
    }
  }
}
