import type { CSSProperties } from 'react'

export type DecoItem = {
  icon: string
  x: string
  y: string
  size: string
  rotate: string
  color: string
  delay: string
  large?: boolean
}

export function Deco({ items }: { items: DecoItem[] }) {
  return (
    <div className="deco" aria-hidden="true">
      {items.map((item, index) => (
        <svg
          key={index}
          className={`ico deco__item${item.large ? ' deco__item--lg' : ''}`}
          style={
            {
              '--x': item.x,
              '--y': item.y,
              '--s': item.size,
              '--r': item.rotate,
              '--c': `var(--${item.color})`,
              '--d': item.delay,
            } as CSSProperties
          }
        >
          <use href={`#i-${item.icon}`} />
        </svg>
      ))}
    </div>
  )
}
