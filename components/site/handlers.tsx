import type { CSSProperties } from 'react'
import { Deco } from '@/components/site/deco'
import { HANDLERS } from '@/lib/handlers'

const DECO_ITEMS = [
  {
    icon: 'users',
    x: '4%',
    y: '6%',
    size: '36px',
    rotate: '-12deg',
    color: 'red',
    delay: '.3s',
  },
  {
    icon: 'star',
    x: '93%',
    y: '8%',
    size: '34px',
    rotate: '14deg',
    color: 'red',
    delay: '1.2s',
  },
  {
    icon: 'cake',
    x: '95%',
    y: '50%',
    size: '32px',
    rotate: '-8deg',
    color: 'ink',
    delay: '.7s',
    large: true,
  },
  {
    icon: 'cassava',
    x: '2%',
    y: '55%',
    size: '30px',
    rotate: '10deg',
    color: 'red',
    delay: '1.9s',
    large: true,
  },
  {
    icon: 'heart',
    x: '88%',
    y: '93%',
    size: '32px',
    rotate: '-10deg',
    color: 'red',
    delay: '1s',
  },
  {
    icon: 'utensils',
    x: '10%',
    y: '94%',
    size: '28px',
    rotate: '8deg',
    color: 'ink',
    delay: '.2s',
    large: true,
  },
  {
    icon: 'sparkle',
    x: '30%',
    y: '4%',
    size: '20px',
    rotate: '0deg',
    color: 'red',
    delay: '1.6s',
  },
  {
    icon: 'leaf',
    x: '68%',
    y: '3%',
    size: '28px',
    rotate: '12deg',
    color: 'red',
    delay: '.5s',
    large: true,
  },
]

export function Handlers() {
  return (
    <section
      className="handlers"
      id="handlers"
      data-section="6"
      aria-labelledby="handlers-title"
    >
      <Deco items={DECO_ITEMS} />
      <div className="handlers__inner">
        <div className="sec-bar" aria-hidden="true">
          <span>06 / 06</span>
          <span>Handlers</span>
          <span>Cassavarkada</span>
        </div>
        <div className="handlers__head">
          <p className="eyebrow">
            <svg className="ico eyebrow__icon" aria-hidden="true">
              <use href="#i-users" />
            </svg>
            Meet the CASSAVARKADA Handlers
          </p>
          <h2
            className="section-title reveal"
            id="handlers-title"
            aria-label="The handlers"
          >
            <span className="mask" aria-hidden="true">
              <span className="word">
                THE <span className="outline-text">HANDLERS</span>
              </span>
            </span>
          </h2>
        </div>
        <ul className="id-grid" role="list">
          {HANDLERS.map((handler, index) => (
            <li
              key={handler.name}
              className="id-item reveal"
              style={{ '--i': index } as CSSProperties}
            >
              <article
                className="id-card"
                aria-label={`CASSAVARKADA handler ID: ${handler.name}`}
              >
                <span className="id-card__slot" aria-hidden="true" />
                <header className="id-card__top">
                  <img
                    className="id-card__logo"
                    src="/img/logo.jpeg"
                    alt=""
                    width="40"
                    height="40"
                  />
                  <div>
                    <p className="id-card__brand">CASSAVARKADA</p>
                    <p className="id-card__type">Handler ID</p>
                  </div>
                  <span className="id-card__no" aria-hidden="true">
                    No. {String(index + 1).padStart(2, '0')}
                  </span>
                </header>
                <div className="id-card__photo">
                  <span className="id-card__placeholder" aria-hidden="true">
                    <svg className="ico">
                      <use href="#i-user" />
                    </svg>
                    <span>Photo here</span>
                  </span>
                  <img
                    src={handler.photo}
                    alt={`Photo of ${handler.name}`}
                    width="480"
                    height="600"
                    loading="lazy"
                  />
                </div>
                <div className="id-card__body">
                  <h3 className="id-card__name">{handler.name}</h3>
                  <p className="id-card__tag">
                    <svg className="ico" aria-hidden="true">
                      <use href="#i-heart" />
                    </svg>
                    Sweet, soft, delicious!
                  </p>
                </div>
                <footer className="id-card__bar" aria-hidden="true">
                  <span />
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
