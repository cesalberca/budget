import { Converter } from '../converter'
import { RecurrentPaymentDto } from './recurrent-payment-dto'
import { RecurrentPayment } from './recurrent-payment'

export class RecurrentPaymentConverter implements Converter<RecurrentPayment, RecurrentPaymentDto> {
  convert({ quantity, detail, to, from, type, date, owned }: RecurrentPayment): RecurrentPaymentDto {
    return [detail, from, to.join(','), type, quantity, date.toIso(), owned]
  }
}
