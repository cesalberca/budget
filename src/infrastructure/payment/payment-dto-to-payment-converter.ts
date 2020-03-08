import { Converter } from '../../domain/converter'
import { PaymentDto } from './payment-dto'
import { Datetime } from '../../domain/datetime'
import { Payment } from '../../domain/payment/payment'

export class PaymentDtoToPaymentConverter implements Converter<PaymentDto, Payment> {
  convert([timestamp, detail, from, to, type, quantity, date, owned]: PaymentDto): Payment {
    return {
      timestamp: Datetime.fromIso(timestamp),
      from,
      quantity,
      detail,
      to: to
        .split(',')
        .map(name => name.trim())
        .filter(name => name !== ''),
      type,
      date: Datetime.fromIso(date),
      owned
    }
  }
}
