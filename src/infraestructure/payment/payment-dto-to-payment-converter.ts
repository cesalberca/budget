import { Converter } from '../../domain/converter'
import { PaymentDto } from './payment-dto'
import { Datetime } from '../../domain/datetime'
import { Payment } from '../../domain/payment/payment'

export class PaymentDtoToPaymentConverter implements Converter<PaymentDto, Payment> {
  convert([timestamp, detail, payer, debtor, type, quantity, date, owned]: PaymentDto): Payment {
    return {
      timestamp: Datetime.fromIso(timestamp),
      from: payer,
      quantity,
      detail,
      to: debtor.split(',').map(name => name.trim()),
      type,
      date: Datetime.fromIso(date),
      owned
    }
  }
}
