import { anyNumber, anyString, anything, instance, mock, verify, when } from 'ts-mockito'
import { Payment } from '../../domain/payment/payment'
import { PaymentSheets } from './payment-sheets-repository'
import { PaymentDtoConverter } from './payment-dto-converter'
import { PaymentConverter } from './payment-converter'
import { Datetime } from '../../domain/datetime'

describe('PaymentSheets', () => {
  it('should find payments', () => {
    const { paymentSheetsRepository, spreadsheet } = setup()

    paymentSheetsRepository.findAll('foo')

    verify(spreadsheet.getSheetByName('foo')).once()
  })

  it('should create a payment', () => {
    const { paymentSheetsRepository, spreadsheetApp } = setup()
    const payment: Payment = {
      timestamp: Datetime.fromIso('2019-09-10'),
      to: ['César'],
      from: 'César',
      detail: 'foo',
      quantity: 1,
      date: Datetime.fromIso('2019-09-10'),
      owned: 1,
      type: 'bar'
    }

    paymentSheetsRepository.create('foo', payment)

    verify(spreadsheetApp)
  })
})

function setup() {
  const spreadsheetApp = mock<GoogleAppsScript.Spreadsheet.SpreadsheetApp>()
  const spreadsheet = mock<GoogleAppsScript.Spreadsheet.Spreadsheet>()
  const sheet = mock<GoogleAppsScript.Spreadsheet.Sheet>()
  const range = mock<GoogleAppsScript.Spreadsheet.Range>()
  when(spreadsheetApp.getActiveSpreadsheet()).thenReturn(instance(spreadsheet))
  when(spreadsheet.getSheetByName(anyString())).thenReturn(instance(sheet))
  when(sheet.getDataRange()).thenReturn(instance(range))
  when(sheet.insertRowBefore(anyNumber())).thenReturn(instance(sheet))
  when(sheet.getRange(anyNumber(), anyNumber(), anyNumber(), anyNumber())).thenReturn(instance(range))
  when(range.getValues()).thenReturn([[]])
  const paymentDtoConverter = mock(PaymentDtoConverter)
  const paymentConverter = mock(PaymentConverter)
  when(paymentConverter.convert(anything())).thenReturn(['', '', '', '', '', 1, '', 1])
  return {
    spreadsheetApp,
    spreadsheet,
    converter: paymentConverter,
    paymentSheetsRepository: new PaymentSheets(
      instance(spreadsheetApp),
      instance(paymentDtoConverter),
      instance(paymentConverter)
    )
  }
}
