export type TrialBalanceRow = {
  account: string
  debit?: number
  credit?: number
}

export const TRIAL_BALANCE_TITLE = 'Cassa Varkada'
export const TRIAL_BALANCE_DATE = 'August 31, 2026'

export const TRIAL_BALANCE_ROWS: TrialBalanceRow[] = [
  { account: 'Cash', debit: 10353, credit: 0 },
  { account: 'A/R', debit: 0 },
  { account: 'Supplies', debit: 16696 },
  { account: 'Equipment', debit: 0 },
  { account: 'A/P', credit: 0 },
  { account: "Owner's Capital", credit: 1800 },
  { account: "Owner's Drawing", debit: 0 },
  { account: 'Sales', credit: 28653 },
  { account: 'Sales Discount', debit: 0 },
  { account: 'Advertising Expense', debit: 460 },
  { account: 'Utilities Expense', debit: 1384 },
  { account: 'Salaries Expense', debit: 1560 },
]

export function sumColumn(column: 'debit' | 'credit') {
  return TRIAL_BALANCE_ROWS.reduce((sum, row) => sum + (row[column] ?? 0), 0)
}

export function formatAmount(amount: number, withPeso = false) {
  const formatted = amount.toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return withPeso ? `₱${formatted}` : formatted
}
