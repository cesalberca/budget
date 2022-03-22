import { Converter } from '../../domain/converter'
import { PaymentDto } from './payment-dto'
import { Datetime } from '../../domain/datetime'
import { Payment } from '../../domain/payment/payment'

export class PaymentDtoToPaymentConverter implements Converter<PaymentDto, Payment> {
  convert([timestamp, detail, from, to, type, quantity, date]: PaymentDto): Payment {
    return {
      timestamp: timestamp === '' || timestamp === undefined ? Datetime.now() : Datetime.fromIso(timestamp),
      from,
      quantity,
      detail,
      to: to
        .split(',')
        .map(name => name.trim())
        .filter(name => name !== ''),
      type,
      date: date === '' || date === undefined ? Datetime.now() : Datetime.fromIso(date),
    }
  }
}
