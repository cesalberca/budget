export interface UseCase<Params, Result> {
  readonly: boolean
  execute(params: Params): Result
}
