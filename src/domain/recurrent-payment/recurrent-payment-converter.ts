import { Converter } from '../converter'
import { RecurrentPaymentDto } from './recurrent-payment-dto'
import { RecurrentPayment } from './recurrent-payment'

export class RecurrentPaymentConverter implements Converter<RecurrentPayment, RecurrentPaymentDto> {
  convert({ quantity, detail, debtor, type }: RecurrentPayment): RecurrentPaymentDto {
    return [detail, debtor, type, quantity]
  }
}
