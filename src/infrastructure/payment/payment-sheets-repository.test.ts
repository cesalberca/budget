import { anyNumber, anyString, anything, instance, mock, verify, when } from 'ts-mockito'
import { Payment } from '../../domain/payment/payment'
import { PaymentSheets } from './payment-sheets-repository'
import { PaymentToPaymentDtoConverter } from './payment-to-payment-dto-converter'
import { Datetime } from '../../domain/datetime'
import { PaymentDtoToPaymentConverter } from './payment-dto-to-payment-converter'

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

    paymentSheetsRepository.insert('foo', payment)

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
  const paymentDtoConverter = mock(PaymentDtoToPaymentConverter)
  const paymentConverter = mock(PaymentToPaymentDtoConverter)
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
