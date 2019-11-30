export class StringUtils {
  static getLetterPosition(number: number): string {
    if (number < 0) {
      return 'a'
    }
    const alphabet = `abcdefghijklmnopqrstuvwxyz`.split('')
    return alphabet[number] ?? 'z'
  }
}
