export class Datetime {
  constructor(private readonly date: Date) {}

  static fromIso(isoDate: string): Datetime {
    return new Datetime(new Date(isoDate))
  }

  static now(): Datetime {
    return new Datetime(new Date())
  }

  toIso() {
    // YYYY/MM/DD
    return this.date.toLocaleDateString('en-ZA')
  }
}
