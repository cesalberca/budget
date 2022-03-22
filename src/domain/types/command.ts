import { UseCase } from './use-case'

export interface Command<Params = void> extends UseCase<Params, void> {}
