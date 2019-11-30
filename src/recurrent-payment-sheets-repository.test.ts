import { RecurrentPaymentSheetsRepository } from './recurrent-payment-sheets-repository'
import { RecurrentPayment } from './recurrent-payment'
import { RecurrentPaymentDto } from './recurrent-payment-dto'
import { Converter } from './converter'
import { instance, mock, verify } from 'ts-mockito'
import SpreadsheetApp = GoogleAppsScript.Spreadsheet.SpreadsheetApp

describe('RecurrentPaymentSheetsRepository', () => {
  it('should get the recurrent payments', async () => {
    const { recurrentPaymentSheetsRepository, spreadsheetApp } = setup()

    await recurrentPaymentSheetsRepository.findAll()

    verify(spreadsheetApp)
  })
})

function setup() {
  const spreadsheetApp = mock<SpreadsheetApp>()
  const converter = mock<Converter<RecurrentPaymentDto, RecurrentPayment>>()
  return {
    spreadsheetApp,
    converter,
    recurrentPaymentSheetsRepository: new RecurrentPaymentSheetsRepository(
      instance(spreadsheetApp),
      instance(converter)
    )
  }
}
