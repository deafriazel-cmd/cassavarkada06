import type { CSSProperties } from 'react'
import {
  CHART_TICKS,
  type DayProduct,
  type DayRecord as DayRecordData,
} from '@/lib/day-records'
import { formatPeso } from '@/lib/products'

function chartDescription(products: DayProduct[]) {
  const parts = products.map(
    (product) =>
      `${product.name}: sales ${product.sales} pesos, expenses ${product.expenses} pesos.`,
  )
  return `Bar chart. ${parts.join(' ')}`
}

export function DayRecord({ record }: { record: DayRecordData }) {
  const first = record.day === 1
  const { idPrefix, products } = record

  return (
    <section
      className={`dayone${first ? '' : ' dayone--follow'}`}
      id={record.sectionId}
      aria-labelledby={record.titleId}
    >
      <div className="dayone__inner">
        <header className="dayone__head">
          <p className="eyebrow">
            <svg className="ico eyebrow__icon" aria-hidden="true">
              <use href="#i-star" />
            </svg>
            Day {record.day} Record
          </p>
          <h2 className="dayone__title reveal" id={record.titleId}>
            Day {record.day} Product Sales Performance
          </h2>
          <p className="dayone__lead reveal">{record.lead}</p>
        </header>
        <div
          className={`dayone__cards${first ? '' : ' dayone__cards--single'}`}
        >
          {products.map((product) => (
            <article
              key={product.slug}
              className="dayone-card reveal"
              aria-labelledby={`${idPrefix}-${product.slug}`}
            >
              <header className="dayone-card__head">
                <img src={product.image} alt="" width="96" height="96" />
                <h3 id={`${idPrefix}-${product.slug}`}>{product.name}</h3>
              </header>
              <dl className="dayone-card__stats">
                {product.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`dayone-stat${stat.sales ? ' dayone-stat--sales' : ''}`}
                  >
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                    {stat.note ? <small>{stat.note}</small> : null}
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <figure className="chart reveal" aria-labelledby={record.chartTitleId}>
          <figcaption className="chart__head">
            <h3 className="chart__title" id={record.chartTitleId}>
              Sales vs. Expenses
            </h3>
            <ul className="chart__legend" role="list">
              <li>
                <span
                  className="chart__swatch chart__swatch--sales"
                  aria-hidden="true"
                />
                Sales
              </li>
              <li>
                <span
                  className="chart__swatch chart__swatch--expenses"
                  aria-hidden="true"
                />
                Expenses
              </li>
            </ul>
          </figcaption>
          <div
            className="chart__plot"
            role="img"
            aria-label={chartDescription(products)}
          >
            <div className="chart__grid" aria-hidden="true">
              {CHART_TICKS.map((tick) => (
                <span key={tick} style={{ '--v': tick } as CSSProperties}>
                  {formatPeso(tick)}
                </span>
              ))}
            </div>
            <div className="chart__groups" aria-hidden="true">
              {products.map((product) => (
                <div className="chart__group" key={product.slug}>
                  <div className="chart__bars">
                    <div
                      className="chart__bar chart__bar--sales"
                      style={{ '--value': product.sales } as CSSProperties}
                    >
                      <b>{formatPeso(product.sales)}</b>
                    </div>
                    <div
                      className="chart__bar chart__bar--expenses"
                      style={{ '--value': product.expenses } as CSSProperties}
                    >
                      <b>{formatPeso(product.expenses)}</b>
                    </div>
                  </div>
                  <p className="chart__label">{product.name}</p>
                </div>
              ))}
            </div>
          </div>
          <table className="sr-only">
            <caption>Day {record.day} sales and expenses by product</caption>
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Sales</th>
                <th scope="col">Expenses</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.slug}>
                  <th scope="row">{product.name}</th>
                  <td>{formatPeso(product.sales)}</td>
                  <td>{formatPeso(product.expenses)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
      </div>
    </section>
  )
}
