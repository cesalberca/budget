import { Converter } from '../../domain/converter'
import { PaymentDto } from './payment-dto'
import { Payment } from '../../domain/payment/payment'

export class PaymentToPaymentDtoConverter implements Converter<Payment, PaymentDto> {
  convert({ timestamp, quantity, detail, to, from, type, date, owned }: Payment): PaymentDto {
    return [timestamp.toIso(), detail, from, to.join(','), type, quantity, date.toIso(), owned]
  }
}
