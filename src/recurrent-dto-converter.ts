import { Converter } from './converter'
import { RecurrentDto } from './recurrent-dto'
import { Recurrent } from './recurrent'

export class RecurrentDtoConverter implements Converter<RecurrentDto, Recurrent> {
  convert([detail, debtor, type, quantity]: RecurrentDto): Recurrent {
    return {
      quantity,
      detail,
      debtor,
      type
    }
  }
}
