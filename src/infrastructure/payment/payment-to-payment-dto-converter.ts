import { Converter } from '../../domain/converter'
import { PaymentDto } from './payment-dto'
import { Payment } from '../../domain/payment/payment'

export class PaymentToPaymentDtoConverter implements Converter<Payment, PaymentDto> {
  convert({ timestamp, quantity, detail, type, date }: Payment): PaymentDto {
    return [timestamp.toIso(), detail, type, quantity, date.toIso()]
  }
}
