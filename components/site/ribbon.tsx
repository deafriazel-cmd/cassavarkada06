import { Fragment } from 'react'

const RIBBON_ITEMS = [
  { text: 'Sweet', icon: 'sparkle' },
  { text: 'Soft', icon: 'cake' },
  { text: 'Delicious', icon: 'heart' },
  { text: 'Affordable', icon: 'star' },
  { text: 'Satisfying', icon: 'smile' },
  { text: 'Student-Managed', icon: 'leaf' },
]

export function Ribbon() {
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon__track">
        {[0, 1].map((group) => (
          <div className="ribbon__group" key={group}>
            {RIBBON_ITEMS.map((item) => (
              <Fragment key={item.text}>
                <span>{item.text}</span>
                <svg className="ico">
                  <use href={`#i-${item.icon}`} />
                </svg>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
