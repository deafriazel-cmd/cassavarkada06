import type { CSSProperties } from 'react'
import { Deco, type DecoItem } from '@/components/site/deco'
import { GALLERY_PHOTOS } from '@/lib/gallery'

const DECO_ITEMS: DecoItem[] = [
  {
    icon: 'cake',
    x: '4%',
    y: '4%',
    size: '40px',
    rotate: '-14deg',
    color: 'cream',
    delay: '.4s',
  },
  {
    icon: 'heart',
    x: '91%',
    y: '3%',
    size: '34px',
    rotate: '12deg',
    color: 'cream',
    delay: '1.1s',
  },
  {
    icon: 'sparkle',
    x: '12%',
    y: '22%',
    size: '24px',
    rotate: '0deg',
    color: 'cream',
    delay: '.2s',
  },
  {
    icon: 'star',
    x: '84%',
    y: '20%',
    size: '30px',
    rotate: '10deg',
    color: 'cream',
    delay: '1.6s',
    large: true,
  },
  {
    icon: 'cassava',
    x: '2%',
    y: '48%',
    size: '38px',
    rotate: '-10deg',
    color: 'cream',
    delay: '.9s',
    large: true,
  },
  {
    icon: 'leaf',
    x: '94%',
    y: '52%',
    size: '36px',
    rotate: '14deg',
    color: 'cream',
    delay: '.5s',
    large: true,
  },
  {
    icon: 'utensils',
    x: '6%',
    y: '78%',
    size: '34px',
    rotate: '8deg',
    color: 'cream',
    delay: '1.4s',
    large: true,
  },
  {
    icon: 'smile',
    x: '90%',
    y: '80%',
    size: '34px',
    rotate: '-8deg',
    color: 'cream',
    delay: '.7s',
    large: true,
  },
  {
    icon: 'sparkle',
    x: '48%',
    y: '96%',
    size: '22px',
    rotate: '0deg',
    color: 'cream',
    delay: '2s',
  },
  {
    icon: 'gift',
    x: '30%',
    y: '2%',
    size: '28px',
    rotate: '10deg',
    color: 'cream',
    delay: '1.9s',
    large: true,
  },
]

export function Gallery() {
  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-title">
      <Deco items={DECO_ITEMS} />
      <div className="gallery__inner">
        <header className="gallery__head">
          <p className="eyebrow">
            <svg className="ico eyebrow__icon" aria-hidden="true">
              <use href="#i-heart" />
            </svg>
            Booth Day Memories
          </p>
          <h2 className="gallery__title reveal" id="gallery-title">
            <span>Sweet</span>{' '}
            <span className="gallery__title-outline">Moments</span>
          </h2>
          <p className="gallery__lead reveal">
            Snapshots from our selling days: the bunting, the barkada, and every
            smile that came with a bite of cassava cake.
          </p>
        </header>
        <ul className="gallery__grid" role="list">
          {GALLERY_PHOTOS.map((photo, index) => (
            <li key={photo.src} className="gallery__item reveal">
              <figure
                className={`polaroid polaroid--${photo.tape}`}
                style={
                  {
                    '--tilt': photo.tilt,
                    '--pos': photo.position,
                  } as CSSProperties
                }
              >
                <span className="polaroid__tape" aria-hidden="true" />
                <div className="polaroid__photo">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width="800"
                    height="800"
                    loading="lazy"
                  />
                </div>
                <figcaption className="polaroid__caption">
                  <svg className="ico" aria-hidden="true">
                    <use href={`#i-${photo.captionIcon}`} />
                  </svg>
                  <span>{photo.caption}</span>
                </figcaption>
                {photo.sticker ? (
                  <span
                    className={`polaroid__sticker${index % 2 === 0 ? '' : ' polaroid__sticker--left'}`}
                    aria-hidden="true"
                  >
                    <svg className="ico">
                      <use href={`#i-${photo.sticker}`} />
                    </svg>
                  </span>
                ) : null}
              </figure>
            </li>
          ))}
        </ul>
        <p className="gallery__stamp reveal">
          <svg className="ico" aria-hidden="true">
            <use href="#i-heart" />
          </svg>
          Thank you, barkada!
          <svg className="ico" aria-hidden="true">
            <use href="#i-heart" />
          </svg>
        </p>
      </div>
    </section>
  )
}
