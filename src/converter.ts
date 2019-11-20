export interface Converter<T, S> {
  convert(entity: T): S
}
