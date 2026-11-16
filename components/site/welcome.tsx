import { Deco } from '@/components/site/deco'

export function Welcome() {
  return (
    <>
      <section
        className="welcome"
        id="welcome"
        data-section="2"
        aria-labelledby="welcome-title"
      >
        <div className="welcome__bg" aria-hidden="true"></div>
        <div className="sec-bar" aria-hidden="true">
          <span>02 / 06</span>
          <span>Welcome</span>
          <span>Cassavarkada</span>
        </div>
        <Deco
          items={[
            {
              icon: 'leaf',
              x: '7%',
              y: '16%',
              size: '40px',
              rotate: '-14deg',
              color: 'green',
              delay: '.3s',
            },
            {
              icon: 'cake',
              x: '88%',
              y: '20%',
              size: '42px',
              rotate: '12deg',
              color: 'orange',
              delay: '1.2s',
            },
            {
              icon: 'sparkle',
              x: '90%',
              y: '74%',
              size: '30px',
              rotate: '0deg',
              color: 'orange',
              delay: '2s',
            },
            {
              icon: 'utensils',
              x: '6%',
              y: '78%',
              size: '38px',
              rotate: '-10deg',
              color: 'brown',
              delay: '.9s',
              large: true,
            },
            {
              icon: 'star',
              x: '20%',
              y: '6%',
              size: '30px',
              rotate: '10deg',
              color: 'orange',
              delay: '1.6s',
            },
            {
              icon: 'cup',
              x: '78%',
              y: '5%',
              size: '34px',
              rotate: '-12deg',
              color: 'green',
              delay: '.2s',
              large: true,
            },
            {
              icon: 'heart',
              x: '14%',
              y: '46%',
              size: '30px',
              rotate: '-6deg',
              color: 'green',
              delay: '2.3s',
              large: true,
            },
            {
              icon: 'cassava',
              x: '84%',
              y: '48%',
              size: '32px',
              rotate: '14deg',
              color: 'brown',
              delay: '1.1s',
              large: true,
            },
            {
              icon: 'gift',
              x: '26%',
              y: '92%',
              size: '28px',
              rotate: '8deg',
              color: 'orange',
              delay: '.5s',
              large: true,
            },
            {
              icon: 'leaf',
              x: '72%',
              y: '92%',
              size: '30px',
              rotate: '-8deg',
              color: 'green',
              delay: '1.7s',
              large: true,
            },
          ]}
        />
        <div className="envelope reveal">
          <svg
            className="envelope__flap"
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 50 L50 2 L100 50 Z"></path>
          </svg>
          <div className="envelope__back" aria-hidden="true"></div>
          <div className="welcome__card">
            <svg className="ico card-corner card-corner--tl" aria-hidden="true">
              <use href="#i-sparkle"></use>
            </svg>
            <svg className="ico card-corner card-corner--tr" aria-hidden="true">
              <use href="#i-heart"></use>
            </svg>
            <p className="letter__greeting">Dear Barkada,</p>
            <p className="eyebrow">
              <svg className="ico eyebrow__icon" aria-hidden="true">
                <use href="#i-sparkle"></use>
              </svg>
              Sweet, soft, delicious!
            </p>
            <h2 className="welcome__title" id="welcome-title">
              Welcome to{' '}
              <span className="welcome__brand">
                CASSA<span>VARKADA</span>
              </span>
              !
            </h2>
            <p className="welcome__intro">
              CASSAVARKADA is a student-managed food business that offers
              delicious, affordable, and satisfying food products. We bring
              people together through flavorful food, creativity, teamwork, and
              quality service.
            </p>
            <ul className="welcome__values" aria-label="What we offer">
              <li>
                <svg className="ico pill__icon" aria-hidden="true">
                  <use href="#i-heart"></use>
                </svg>
                Delicious
              </li>
              <li>
                <svg className="ico pill__icon" aria-hidden="true">
                  <use href="#i-coin"></use>
                </svg>
                Affordable
              </li>
              <li>
                <svg className="ico pill__icon" aria-hidden="true">
                  <use href="#i-smile"></use>
                </svg>
                Satisfying
              </li>
            </ul>
            <a
              href="#store"
              className="btn btn--primary"
              data-scroll-target="store"
            >
              Get to Know Us
              <svg
                className="btn__icon"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
          <div className="envelope__front" aria-hidden="true">
            <svg viewBox="0 0 100 60" preserveAspectRatio="none">
              <path className="env-side" d="M0 0 L50 30 L0 60 Z"></path>
              <path className="env-side" d="M100 0 L50 30 L100 60 Z"></path>
              <path className="env-bottom" d="M0 60 L50 30 L100 60 Z"></path>
            </svg>
            <span className="envelope__airmail"></span>
            <span className="envelope__stamp">
              <svg className="ico">
                <use href="#i-leaf"></use>
              </svg>
            </span>
            <span className="envelope__deco envelope__deco--l">
              <svg className="ico">
                <use href="#i-sparkle"></use>
              </svg>
            </span>
            <span className="envelope__deco envelope__deco--r">
              <svg className="ico">
                <use href="#i-heart"></use>
              </svg>
            </span>
          </div>
          <span className="envelope__seal" aria-hidden="true">
            <svg className="ico">
              <use href="#i-cake"></use>
            </svg>
          </span>
        </div>
      </section>
    </>
  )
}
