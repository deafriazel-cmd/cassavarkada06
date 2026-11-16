import { Deco } from '@/components/site/deco'

export function Store() {
  return (
    <>
      <section
        className="store"
        id="store"
        data-section="3"
        aria-labelledby="store-title"
      >
        <Deco
          items={[
            {
              icon: 'cassava',
              x: '5%',
              y: '6%',
              size: '40px',
              rotate: '-16deg',
              color: 'brown',
              delay: '.5s',
            },
            {
              icon: 'leaf',
              x: '91%',
              y: '4%',
              size: '34px',
              rotate: '12deg',
              color: 'green',
              delay: '1.5s',
            },
            {
              icon: 'sparkle',
              x: '3%',
              y: '52%',
              size: '24px',
              rotate: '0deg',
              color: 'orange',
              delay: '2.2s',
              large: true,
            },
            {
              icon: 'cup',
              x: '94%',
              y: '48%',
              size: '36px',
              rotate: '8deg',
              color: 'orange',
              delay: '.1s',
              large: true,
            },
            {
              icon: 'star',
              x: '20%',
              y: '4%',
              size: '30px',
              rotate: '12deg',
              color: 'orange',
              delay: '.9s',
            },
            {
              icon: 'cake',
              x: '78%',
              y: '10%',
              size: '34px',
              rotate: '-10deg',
              color: 'brown',
              delay: '1.8s',
            },
            {
              icon: 'heart',
              x: '8%',
              y: '30%',
              size: '32px',
              rotate: '10deg',
              color: 'green',
              delay: '.3s',
              large: true,
            },
            {
              icon: 'sparkle',
              x: '90%',
              y: '28%',
              size: '30px',
              rotate: '-6deg',
              color: 'orange',
              delay: '2.4s',
              large: true,
            },
            {
              icon: 'utensils',
              x: '6%',
              y: '70%',
              size: '36px',
              rotate: '-12deg',
              color: 'brown',
              delay: '1.4s',
              large: true,
            },
            {
              icon: 'leaf',
              x: '88%',
              y: '78%',
              size: '34px',
              rotate: '10deg',
              color: 'green',
              delay: '.8s',
              large: true,
            },
            {
              icon: 'gift',
              x: '48%',
              y: '88%',
              size: '28px',
              rotate: '0deg',
              color: 'orange',
              delay: '2s',
            },
            {
              icon: 'sparkle',
              x: '30%',
              y: '80%',
              size: '26px',
              rotate: '0deg',
              color: 'green',
              delay: '1.2s',
              large: true,
            },
          ]}
        />
        <div className="store__inner">
          <div className="sec-bar" aria-hidden="true">
            <span>03 / 06</span>
            <span>Store Introduction</span>
            <span>Cassavarkada</span>
          </div>
          <div className="store__text">
            <p className="eyebrow">
              <svg className="ico eyebrow__icon" aria-hidden="true">
                <use href="#i-utensils"></use>
              </svg>
              Store Introduction
            </p>
            <h2
              className="section-title reveal"
              id="store-title"
              aria-label="CASSAVARKADA"
            >
              <span className="mask" aria-hidden="true">
                <span className="word">CASSA</span>
              </span>
              <span className="mask" aria-hidden="true">
                <span className="word word--outline">VARKADA</span>
              </span>
            </h2>
            <div className="store__cols">
              <div className="store__col store__col--feature reveal">
                <div className="flourish" aria-hidden="true">
                  <span className="flourish__line"></span>
                  <svg className="ico flourish__icon">
                    <use href="#i-leaf"></use>
                  </svg>
                  <svg className="ico flourish__icon flourish__icon--main">
                    <use href="#i-cake"></use>
                  </svg>
                  <svg className="ico flourish__icon">
                    <use href="#i-heart"></use>
                  </svg>
                  <span className="flourish__line"></span>
                </div>
                <p className="store__lead">
                  A student-managed food business made with heart, hard work,
                  and a love for good food.
                </p>
              </div>
              <div className="store__col reveal">
                <div className="store__note">
                  <span className="store__note-icon" aria-hidden="true">
                    <svg className="ico">
                      <use href="#i-school"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="store__note-title">Built by students</h3>
                    <p className="store__body">
                      CASSAVARKADA was built by students who believe that great
                      food can make any day better. We offer delicious,
                      affordable, and satisfying food products that everyone can
                      enjoy, whether you are grabbing a quick treat or sharing a
                      snack with your barkada.
                    </p>
                  </div>
                </div>
                <div className="store__note store__note--alt">
                  <span className="store__note-icon" aria-hidden="true">
                    <svg className="ico">
                      <use href="#i-award"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="store__note-title">Served with care</h3>
                    <p className="store__body">
                      Every product we serve reflects our creativity, our
                      teamwork, and our commitment to quality service. We work
                      together to make sure each order is prepared with care and
                      served with a smile.
                    </p>
                  </div>
                </div>
                <ul className="store__chips" aria-label="Why we started">
                  <li>
                    <span className="store__chip-icon">
                      <svg className="ico" aria-hidden="true">
                        <use href="#i-users"></use>
                      </svg>
                    </span>
                    Student-made
                  </li>
                  <li>
                    <span className="store__chip-icon">
                      <svg className="ico" aria-hidden="true">
                        <use href="#i-heart"></use>
                      </svg>
                    </span>
                    Made with heart
                  </li>
                  <li>
                    <span className="store__chip-icon">
                      <svg className="ico" aria-hidden="true">
                        <use href="#i-gift"></use>
                      </svg>
                    </span>
                    Shared with barkada
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="store__hint reveal">
            <svg className="ico store__hint-icon" aria-hidden="true">
              <use href="#i-tap"></use>
            </svg>
            Tap an icon to discover what makes us special
          </p>
          <ul
            className="store__highlights"
            aria-label="What makes CASSAVARKADA special"
          >
            <li className="highlight highlight--green reveal">
              <button
                type="button"
                className="highlight__toggle"
                aria-expanded="false"
                aria-controls="hl-creativity"
              >
                <span
                  className="highlight__icon highlight__icon--green"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path
                      d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span className="highlight__title">Creativity</span>
                <span className="highlight__plus" aria-hidden="true"></span>
              </button>
              <div className="highlight__panel" id="hl-creativity">
                <p className="highlight__text">
                  We bring fresh ideas to every product, from presentation to
                  the way we serve our customers.
                </p>
              </div>
            </li>
            <li className="highlight highlight--orange reveal">
              <button
                type="button"
                className="highlight__toggle"
                aria-expanded="false"
                aria-controls="hl-teamwork"
              >
                <span
                  className="highlight__icon highlight__icon--orange"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path
                      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span className="highlight__title">Teamwork</span>
                <span className="highlight__plus" aria-hidden="true"></span>
              </button>
              <div className="highlight__panel" id="hl-teamwork">
                <p className="highlight__text">
                  Our team of students works side by side, sharing every task to
                  keep the business running smoothly.
                </p>
              </div>
            </li>
            <li className="highlight highlight--brown reveal">
              <button
                type="button"
                className="highlight__toggle"
                aria-expanded="false"
                aria-controls="hl-service"
              >
                <span
                  className="highlight__icon highlight__icon--brown"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path
                      d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span className="highlight__title">Quality Service</span>
                <span className="highlight__plus" aria-hidden="true"></span>
              </button>
              <div className="highlight__panel" id="hl-service">
                <p className="highlight__text">
                  We treat every customer like a friend, with friendly,
                  attentive, and reliable service.
                </p>
              </div>
            </li>
            <li className="highlight highlight--peach reveal">
              <button
                type="button"
                className="highlight__toggle"
                aria-expanded="false"
                aria-controls="hl-affordable"
              >
                <span
                  className="highlight__icon highlight__icon--peach"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path
                      d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span className="highlight__title">Affordable & Enjoyable</span>
                <span className="highlight__plus" aria-hidden="true"></span>
              </button>
              <div className="highlight__panel" id="hl-affordable">
                <p className="highlight__text">
                  Tasty food products that are easy on the budget and made to be
                  enjoyed and shared.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
