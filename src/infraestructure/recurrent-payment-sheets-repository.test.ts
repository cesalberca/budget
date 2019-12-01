import { RecurrentPaymentSheetsRepository } from './recurrent-payment-sheets-repository'
import { RecurrentPayment } from '../domain/recurrent-payment/recurrent-payment'
import { anyNumber, instance, mock, verify, when } from 'ts-mockito'
import { RecurrentPaymentDtoConverter } from '../domain/recurrent-payment/recurrent-payment-dto-converter'
import { RecurrentPaymentConverter } from '../domain/recurrent-payment/recurrent-payment-converter'

describe('RecurrentPaymentSheetsRepository', () => {
  it('should get the recurrent payments', async () => {
    const { recurrentPaymentSheetsRepository, spreadsheet } = setup()

    await recurrentPaymentSheetsRepository.findAll()

    verify(spreadsheet.getSheetByName('Recurrent')).once()
  })

  it('should insert a recurrent payments', async () => {
    const { recurrentPaymentSheetsRepository, spreadsheetApp } = setup()
    const recurrentPayment: RecurrentPayment = {
      debtor: 'César',
      detail: 'foo',
      quantity: 1,
      type: 'bar'
    }

    await recurrentPaymentSheetsRepository.create(recurrentPayment)

    verify(spreadsheetApp)
  })
})

function setup() {
  const spreadsheetApp = mock<GoogleAppsScript.Spreadsheet.SpreadsheetApp>()
  const spreadsheet = mock<GoogleAppsScript.Spreadsheet.Spreadsheet>()
  const sheet = mock<GoogleAppsScript.Spreadsheet.Sheet>()
  const range = mock<GoogleAppsScript.Spreadsheet.Range>()
  when(spreadsheetApp.getActiveSpreadsheet()).thenReturn(instance(spreadsheet))
  when(spreadsheet.getSheetByName('Recurrent')).thenReturn(instance(sheet))
  when(sheet.getDataRange()).thenReturn(instance(range))
  when(sheet.insertRowBefore(anyNumber())).thenReturn(instance(sheet))
  when(sheet.getRange(anyNumber(), anyNumber())).thenReturn(instance(range))
  when(range.getValues()).thenReturn([[]])
  const recurrentPaymentDtoConverter = mock(RecurrentPaymentDtoConverter)
  const recurrentPaymentConverter = mock(RecurrentPaymentConverter)
  return {
    spreadsheetApp,
    spreadsheet,
    converter: recurrentPaymentConverter,
    recurrentPaymentSheetsRepository: new RecurrentPaymentSheetsRepository(
      instance(spreadsheetApp),
      instance(recurrentPaymentDtoConverter),
      instance(recurrentPaymentConverter)
    )
  }
}
