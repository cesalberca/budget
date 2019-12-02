import { UseCase } from './use-case'

export interface Query<Params = void, Result = void> extends UseCase<Params, Result> {
  readonly: true
}
