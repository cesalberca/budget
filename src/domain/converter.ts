export interface Converter<In, Out> {
  convert(entity: In): Out
}
