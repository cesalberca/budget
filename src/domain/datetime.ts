export class Datetime {
  constructor(private readonly date: Date) {}

  static fromIso(isoDate: string): Datetime {
    return new Datetime(new Date(isoDate))
  }

  toIso() {
    return this.date.toISOString()
  }
}
