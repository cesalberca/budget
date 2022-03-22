import { Converter } from '../../domain/converter'
import { PaymentDto } from './payment-dto'
import { Datetime } from '../../domain/datetime'
import { Payment } from '../../domain/payment/payment'

export class PaymentDtoToPaymentConverter implements Converter<PaymentDto, Payment> {
  convert([timestamp, detail, type, quantity, date]: PaymentDto): Payment {
    return {
      timestamp: timestamp === '' || timestamp === undefined ? Datetime.now() : Datetime.fromIso(timestamp),
      quantity,
      detail,
      type,
      date: date === '' || date === undefined ? Datetime.now() : Datetime.fromIso(date),
    }
  }
}
