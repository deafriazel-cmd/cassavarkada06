import { Deco } from '@/components/site/deco'

export function Location() {
  return (
    <>
      <section
        className="location"
        id="location"
        data-section="5"
        aria-labelledby="location-title"
      >
        <Deco
          items={[
            {
              icon: 'pin',
              x: '4%',
              y: '8%',
              size: '38px',
              rotate: '-12deg',
              color: 'red',
              delay: '.4s',
            },
            {
              icon: 'leaf',
              x: '92%',
              y: '6%',
              size: '36px',
              rotate: '14deg',
              color: 'red',
              delay: '1.3s',
            },
            {
              icon: 'compass',
              x: '94%',
              y: '46%',
              size: '34px',
              rotate: '-8deg',
              color: 'ink',
              delay: '.8s',
              large: true,
            },
            {
              icon: 'cake',
              x: '3%',
              y: '60%',
              size: '32px',
              rotate: '10deg',
              color: 'red',
              delay: '2s',
              large: true,
            },
            {
              icon: 'heart',
              x: '84%',
              y: '90%',
              size: '34px',
              rotate: '-10deg',
              color: 'red',
              delay: '1.1s',
            },
            {
              icon: 'utensils',
              x: '12%',
              y: '92%',
              size: '30px',
              rotate: '8deg',
              color: 'ink',
              delay: '.2s',
              large: true,
            },
            {
              icon: 'sparkle',
              x: '24%',
              y: '5%',
              size: '22px',
              rotate: '0deg',
              color: 'red',
              delay: '1.7s',
            },
            {
              icon: 'cassava',
              x: '70%',
              y: '4%',
              size: '30px',
              rotate: '12deg',
              color: 'red',
              delay: '.6s',
              large: true,
            },
          ]}
        />
        <div className="location__inner">
          <div className="sec-bar" aria-hidden="true">
            <span>05 / 06</span>
            <span>Location</span>
            <span>Cassavarkada</span>
          </div>
          <div className="location__head">
            <p className="eyebrow">
              <svg className="ico eyebrow__icon" aria-hidden="true">
                <use href="#i-pin"></use>
              </svg>
              Official Business Location
            </p>
            <h2
              className="section-title reveal"
              id="location-title"
              aria-label="Visit us"
            >
              <span className="mask" aria-hidden="true">
                <span className="word">
                  VISIT <span className="outline-text">US</span>
                </span>
              </span>
            </h2>
          </div>
          <div className="location__grid">
            <article
              className="loc-card reveal"
              aria-label="Official business address"
            >
              <div className="loc-card__head">
                <span className="loc-pin" aria-hidden="true">
                  <svg className="ico">
                    <use href="#i-pin"></use>
                  </svg>
                </span>
                <div>
                  <p className="loc-card__label">Official Business Location</p>
                  <p className="loc-card__sub">Where to find CASSAVARKADA</p>
                </div>
              </div>
              <address className="loc-card__address" id="address-text">
                Grade 12 Benitez – ABM, Senior High School Building, Dipaculao
                National High School, Barangay Mucdol, Dipaculao, Aurora.
              </address>
              <dl className="loc-details">
                <div className="loc-details__row">
                  <dt>
                    <svg className="ico" aria-hidden="true">
                      <use href="#i-users"></use>
                    </svg>
                    Section
                  </dt>
                  <dd>Grade 12 Benitez – ABM</dd>
                </div>
                <div className="loc-details__row">
                  <dt>
                    <svg className="ico" aria-hidden="true">
                      <use href="#i-building"></use>
                    </svg>
                    Building
                  </dt>
                  <dd>Senior High School Building</dd>
                </div>
                <div className="loc-details__row">
                  <dt>
                    <svg className="ico" aria-hidden="true">
                      <use href="#i-school"></use>
                    </svg>
                    School
                  </dt>
                  <dd>Dipaculao National High School</dd>
                </div>
                <div className="loc-details__row">
                  <dt>
                    <svg className="ico" aria-hidden="true">
                      <use href="#i-pin"></use>
                    </svg>
                    Barangay
                  </dt>
                  <dd>Mucdol</dd>
                </div>
                <div className="loc-details__row">
                  <dt>
                    <svg className="ico" aria-hidden="true">
                      <use href="#i-map"></use>
                    </svg>
                    Municipality
                  </dt>
                  <dd>Dipaculao</dd>
                </div>
                <div className="loc-details__row">
                  <dt>
                    <svg className="ico" aria-hidden="true">
                      <use href="#i-compass"></use>
                    </svg>
                    Province
                  </dt>
                  <dd>Aurora</dd>
                </div>
              </dl>
              <div className="loc-actions">
                <a
                  className="btn btn--primary"
                  href="https://www.google.com/maps/search/?api=1&query=Dipaculao+National+High+School%2C+Mucdol%2C+Dipaculao%2C+Aurora"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="ico btn__ico" aria-hidden="true">
                    <use href="#i-map"></use>
                  </svg>
                  Open in Maps
                  <span className="sr-only">(opens in a new tab)</span>
                  <svg className="ico btn__ico" aria-hidden="true">
                    <use href="#i-external"></use>
                  </svg>
                </a>
                <button
                  type="button"
                  className="btn btn--ghost"
                  id="copy-address"
                >
                  <svg className="ico btn__ico" aria-hidden="true">
                    <use href="#i-copy"></use>
                  </svg>
                  <span id="copy-label">Copy address</span>
                </button>
              </div>
            </article>
            <figure className="map reveal">
              <svg
                className="map__art"
                viewBox="0 0 480 360"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
                focusable="false"
              >
                <rect width="480" height="360" fill="#f4efe5"></rect>
                <g
                  fill="#0f6b43"
                  fillOpacity=".1"
                  stroke="#201408"
                  strokeOpacity=".18"
                  strokeWidth="1.5"
                >
                  <rect x="14" y="16" width="120" height="86" rx="10"></rect>
                  <rect x="150" y="16" width="96" height="86" rx="10"></rect>
                  <rect x="14" y="118" width="120" height="70" rx="10"></rect>
                  <rect x="296" y="16" width="170" height="60" rx="10"></rect>
                  <rect x="296" y="196" width="80" height="150" rx="10"></rect>
                  <rect x="392" y="196" width="74" height="150" rx="10"></rect>
                  <rect x="14" y="262" width="150" height="84" rx="10"></rect>
                  <rect x="180" y="278" width="100" height="68" rx="10"></rect>
                </g>
                <g fill="#201408" fillOpacity=".1">
                  <rect x="150" y="118" width="96" height="70" rx="10"></rect>
                  <rect x="296" y="92" width="170" height="86" rx="10"></rect>
                </g>
                <g
                  fill="none"
                  stroke="#fffdde"
                  strokeWidth="18"
                  strokeLinecap="round"
                >
                  <path d="M-10 108 H500"></path>
                  <path d="M-10 238 H500"></path>
                  <path d="M141 -10 V370"></path>
                  <path d="M286 -10 V370"></path>
                  <path d="M286 238 C340 190 420 190 500 150"></path>
                </g>
                <g
                  className="map__road"
                  fill="none"
                  stroke="#201408"
                  strokeOpacity=".4"
                  strokeWidth="2"
                  strokeDasharray="8 10"
                  strokeLinecap="round"
                >
                  <path d="M-10 108 H500"></path>
                  <path d="M-10 238 H500"></path>
                  <path d="M141 -10 V370"></path>
                  <path d="M286 -10 V370"></path>
                </g>
                <path
                  d="M141 238 H286 V176"
                  fill="none"
                  stroke="#0f6b43"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="2 12"
                  className="map__route"
                ></path>
              </svg>
              <span className="map__tag map__tag--top">
                <svg className="ico" aria-hidden="true">
                  <use href="#i-map"></use>
                </svg>
                Dipaculao, Aurora
              </span>
              <span className="map__compass" aria-hidden="true">
                <svg className="ico">
                  <use href="#i-compass"></use>
                </svg>
              </span>
              <div className="map__pin" aria-hidden="true">
                <span className="map__ripple"></span>
                <span className="map__ripple map__ripple--2"></span>
                <svg
                  className="map__pin-svg"
                  viewBox="0 0 48 64"
                  width="48"
                  height="64"
                >
                  <path
                    d="M24 61S5 43 5 24a19 19 0 0 1 38 0c0 19-19 37-19 37Z"
                    fill="#0f6b43"
                    stroke="#201408"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></path>
                  <circle
                    cx="24"
                    cy="24"
                    r="8"
                    fill="#fffdde"
                    stroke="#201408"
                    strokeWidth="3"
                  ></circle>
                </svg>
                <span className="map__shadow"></span>
              </div>
              <span className="map__label">Dipaculao National High School</span>
              <figcaption className="map__caption">
                <svg className="ico" aria-hidden="true">
                  <use href="#i-pin"></use>
                </svg>
                <span>Senior High School Building · Barangay Mucdol</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}
