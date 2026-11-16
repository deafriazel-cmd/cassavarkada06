export type TrialBalanceRow = {
  account: string
  debit?: number
  credit?: number
}

export type TrialBalanceStatement = {
  id: string
  date: string
  rows: TrialBalanceRow[]
}

export const TRIAL_BALANCE_TITLE = 'Cassa Varkada'

export const TRIAL_BALANCES: TrialBalanceStatement[] = [
  {
    id: 'august-2026',
    date: 'August 31, 2026',
    rows: [
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
    ],
  },
  {
    id: 'september-2026',
    date: 'September 30, 2026',
    rows: [
      { account: 'Cash', debit: 10353 },
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
    ],
  },
]

export function sumColumn(rows: TrialBalanceRow[], column: 'debit' | 'credit') {
  return rows.reduce((sum, row) => sum + (row[column] ?? 0), 0)
}

export function formatAmount(amount: number, withPeso = false) {
  const formatted = amount.toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return withPeso ? `₱${formatted}` : formatted
}
