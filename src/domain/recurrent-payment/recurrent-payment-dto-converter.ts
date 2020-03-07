import { Converter } from '../converter'
import { RecurrentPaymentDto } from './recurrent-payment-dto'
import { RecurrentPayment } from './recurrent-payment'
import { Datetime } from '../datetime'

export class RecurrentPaymentDtoConverter implements Converter<RecurrentPaymentDto, RecurrentPayment> {
  convert([detail, payer, debtor, type, quantity, date, owned]: RecurrentPaymentDto): RecurrentPayment {
    return {
      from: payer,
      quantity,
      detail,
      to: debtor.split(','),
      type,
      date: Datetime.fromIso(date),
      owned
    }
  }

}
