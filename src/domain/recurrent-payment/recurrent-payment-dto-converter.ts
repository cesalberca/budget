import { Converter } from '../converter'
import { RecurrentPaymentDto } from './recurrent-payment-dto'
import { RecurrentPayment } from './recurrent-payment'

export class RecurrentPaymentDtoConverter implements Converter<RecurrentPaymentDto, RecurrentPayment> {
  convert([detail, payer, debtor, type, quantity]: RecurrentPaymentDto): RecurrentPayment {
    return {
      payer,
      quantity,
      detail,
      debtor,
      type
    }
  }
}
