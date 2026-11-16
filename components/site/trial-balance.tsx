import {
  TRIAL_BALANCE_DATE,
  TRIAL_BALANCE_ROWS,
  TRIAL_BALANCE_TITLE,
  formatAmount,
  sumColumn,
} from '@/lib/trial-balance'

function Amount({ value, peso }: { value?: number; peso?: boolean }) {
  if (value === undefined) {
    return (
      <>
        <span aria-hidden="true">&mdash;</span>
        <span className="sr-only">No amount</span>
      </>
    )
  }
  return <>{formatAmount(value, peso)}</>
}

export function TrialBalance() {
  const totalDebit = sumColumn('debit')
  const totalCredit = sumColumn('credit')
  const balanced = totalDebit === totalCredit

  return (
    <section className="trial" id="trial-balance" aria-labelledby="trial-title">
      <div className="trial__inner">
        <header className="trial__head">
          <p className="eyebrow">
            <svg className="ico eyebrow__icon" aria-hidden="true">
              <use href="#i-coin" />
            </svg>
            Financial Record
          </p>
          <h2 className="trial__title reveal" id="trial-title">
            Trial Balance
          </h2>
          <p className="trial__lead reveal">
            {TRIAL_BALANCE_TITLE} &middot; As of {TRIAL_BALANCE_DATE}
          </p>
        </header>

        <div className="trial__sheet reveal">
          <span className="trial__hole trial__hole--left" aria-hidden="true" />
          <span className="trial__hole trial__hole--right" aria-hidden="true" />
          <table className="trial__table">
            <caption className="sr-only">
              Trial balance of {TRIAL_BALANCE_TITLE} as of {TRIAL_BALANCE_DATE}
            </caption>
            <thead>
              <tr>
                <th scope="col">Account Title</th>
                <th scope="col" className="trial__num">
                  Debit
                </th>
                <th scope="col" className="trial__num">
                  Credit
                </th>
              </tr>
            </thead>
            <tbody>
              {TRIAL_BALANCE_ROWS.map((row, index) => (
                <tr key={row.account}>
                  <th scope="row">{row.account}</th>
                  <td className="trial__num">
                    <Amount value={row.debit} peso={index === 0} />
                  </td>
                  <td className="trial__num">
                    <Amount value={row.credit} peso={index === 0} />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Total</th>
                <td className="trial__num">
                  <span className="trial__total">
                    {formatAmount(totalDebit, true)}
                  </span>
                </td>
                <td className="trial__num">
                  <span className="trial__total">
                    {formatAmount(totalCredit, true)}
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="trial__note reveal" role="status">
          <svg className="ico" aria-hidden="true">
            <use href="#i-star" />
          </svg>
          {balanced
            ? 'Debits and credits are balanced.'
            : 'Debits and credits do not match.'}
        </p>
      </div>
    </section>
  )
}
