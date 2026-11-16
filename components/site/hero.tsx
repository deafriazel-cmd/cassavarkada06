import type { CSSProperties } from 'react'
import { Deco } from '@/components/site/deco'

export function Hero() {
  return (
    <>
      <header className="logo-hero" id="home" data-section="1">
        <Deco
          items={[
            {
              icon: 'cake',
              x: '6%',
              y: '12%',
              size: '46px',
              rotate: '-12deg',
              color: 'orange',
              delay: '0s',
            },
            {
              icon: 'leaf',
              x: '88%',
              y: '9%',
              size: '38px',
              rotate: '20deg',
              color: 'green',
              delay: '.8s',
            },
            {
              icon: 'heart',
              x: '9%',
              y: '70%',
              size: '34px',
              rotate: '-8deg',
              color: 'orange',
              delay: '1.4s',
            },
            {
              icon: 'sparkle',
              x: '84%',
              y: '58%',
              size: '26px',
              rotate: '0deg',
              color: 'orange',
              delay: '.4s',
            },
            {
              icon: 'utensils',
              x: '89%',
              y: '82%',
              size: '40px',
              rotate: '14deg',
              color: 'brown',
              delay: '2s',
            },
            {
              icon: 'cassava',
              x: '3%',
              y: '42%',
              size: '44px',
              rotate: '-20deg',
              color: 'brown',
              delay: '1s',
            },
            {
              icon: 'star',
              x: '79%',
              y: '30%',
              size: '28px',
              rotate: '10deg',
              color: 'green',
              delay: '2.4s',
              large: true,
            },
            {
              icon: 'cup',
              x: '17%',
              y: '88%',
              size: '36px',
              rotate: '-6deg',
              color: 'green',
              delay: '.2s',
              large: true,
            },
            {
              icon: 'sparkle',
              x: '22%',
              y: '24%',
              size: '18px',
              rotate: '0deg',
              color: 'green',
              delay: '1.8s',
            },
            {
              icon: 'sparkle',
              x: '70%',
              y: '90%',
              size: '20px',
              rotate: '0deg',
              color: 'brown',
              delay: '2.8s',
              large: true,
            },
            {
              icon: 'star',
              x: '48%',
              y: '4%',
              size: '30px',
              rotate: '8deg',
              color: 'orange',
              delay: '1.1s',
            },
            {
              icon: 'cup',
              x: '30%',
              y: '8%',
              size: '34px',
              rotate: '-14deg',
              color: 'green',
              delay: '1.9s',
              large: true,
            },
            {
              icon: 'cassava',
              x: '66%',
              y: '6%',
              size: '36px',
              rotate: '12deg',
              color: 'brown',
              delay: '.6s',
              large: true,
            },
            {
              icon: 'heart',
              x: '94%',
              y: '40%',
              size: '30px',
              rotate: '-8deg',
              color: 'orange',
              delay: '2.6s',
            },
            {
              icon: 'cake',
              x: '40%',
              y: '94%',
              size: '30px',
              rotate: '10deg',
              color: 'orange',
              delay: '1.3s',
              large: true,
            },
            {
              icon: 'sparkle',
              x: '12%',
              y: '56%',
              size: '22px',
              rotate: '0deg',
              color: 'green',
              delay: '.7s',
              large: true,
            },
            {
              icon: 'leaf',
              x: '58%',
              y: '92%',
              size: '34px',
              rotate: '-10deg',
              color: 'green',
              delay: '2.2s',
            },
            {
              icon: 'cake',
              x: '20%',
              y: '46%',
              size: '28px',
              rotate: '-10deg',
              color: 'cream',
              delay: '1.6s',
            },
            {
              icon: 'heart',
              x: '76%',
              y: '74%',
              size: '30px',
              rotate: '12deg',
              color: 'cream',
              delay: '2.3s',
            },
            {
              icon: 'sparkle',
              x: '92%',
              y: '20%',
              size: '22px',
              rotate: '0deg',
              color: 'cream',
              delay: '1.2s',
            },
            {
              icon: 'sparkle',
              x: '4%',
              y: '26%',
              size: '24px',
              rotate: '0deg',
              color: 'cream',
              delay: '2.1s',
            },
            {
              icon: 'utensils',
              x: '52%',
              y: '86%',
              size: '28px',
              rotate: '-14deg',
              color: 'cream',
              delay: '.9s',
            },
          ]}
        />
        <div className="logo-wrap">
          <span className="logo-rays" aria-hidden="true"></span>
          <span className="logo-glow" aria-hidden="true"></span>
          <span
            className="logo-ring logo-ring--outer"
            aria-hidden="true"
          ></span>
          <span className="logo-ring" aria-hidden="true"></span>
          <span className="logo-orbit" aria-hidden="true">
            <span
              className="logo-orbit__item"
              style={{ '--a': '0deg' } as CSSProperties}
            >
              <svg className="ico">
                <use href="#i-cake"></use>
              </svg>
            </span>
            <span
              className="logo-orbit__item"
              style={{ '--a': '90deg' } as CSSProperties}
            >
              <svg className="ico">
                <use href="#i-heart"></use>
              </svg>
            </span>
            <span
              className="logo-orbit__item"
              style={{ '--a': '180deg' } as CSSProperties}
            >
              <svg className="ico">
                <use href="#i-leaf"></use>
              </svg>
            </span>
            <span
              className="logo-orbit__item"
              style={{ '--a': '270deg' } as CSSProperties}
            >
              <svg className="ico">
                <use href="#i-star"></use>
              </svg>
            </span>
          </span>
          <img
            className="logo-img"
            src="/img/logo.jpeg"
            alt="CASSAVARKADA logo: a chef hat with crossed fork and spoon, cassava roots, cassava cake slices, and six smiling friends under the words Sweet, soft, delicious! and Cassava Cake"
            width="600"
            height="600"
            fetchPriority="high"
          />
          <span className="float-tag float-tag--one" aria-hidden="true">
            Sweet & Soft
          </span>
          <span className="float-tag float-tag--two" aria-hidden="true">
            Cassava Cake
          </span>
        </div>
        <h1 className="brand-name" aria-label="CASSAVARKADA">
          <span className="mask" aria-hidden="true">
            <span className="word">CASSA</span>
          </span>
          <span className="mask" aria-hidden="true">
            <span className="word word--outline">VARKADA</span>
          </span>
        </h1>
        <div className="hero-meta" aria-hidden="true">
          <span>Cassava Cake</span>
          <span>Sweet · Soft · Delicious</span>
          <span>Student-Managed</span>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span className="scroll-cue__dot"></span>
          <span>Scroll</span>
        </div>
      </header>
    </>
  )
}
