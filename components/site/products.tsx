import { Deco } from '@/components/site/deco'
import { PRODUCTS } from '@/lib/products'

const DECO_ITEMS = [
  {
    icon: 'cake',
    x: '4%',
    y: '6%',
    size: '40px',
    rotate: '-14deg',
    color: 'cream',
    delay: '.4s',
  },
  {
    icon: 'leaf',
    x: '92%',
    y: '5%',
    size: '34px',
    rotate: '12deg',
    color: 'cream',
    delay: '1.2s',
  },
  {
    icon: 'cassava',
    x: '94%',
    y: '50%',
    size: '36px',
    rotate: '8deg',
    color: 'cream',
    delay: '.8s',
    large: true,
  },
  {
    icon: 'sparkle',
    x: '3%',
    y: '62%',
    size: '28px',
    rotate: '-8deg',
    color: 'cream',
    delay: '1.8s',
    large: true,
  },
  {
    icon: 'heart',
    x: '88%',
    y: '92%',
    size: '32px',
    rotate: '10deg',
    color: 'cream',
    delay: '.2s',
  },
]

export function Products() {
  const [first] = PRODUCTS

  return (
    <section
      className="products"
      id="products"
      data-section="4"
      aria-labelledby="products-title"
    >
      <Deco items={DECO_ITEMS} />
      <div className="products__inner">
        <div className="sec-bar" aria-hidden="true">
          <span>04 / 06</span>
          <span>Products</span>
          <span>Cassavarkada</span>
        </div>
        <div className="products__head">
          <p className="eyebrow">
            <svg className="ico eyebrow__icon" aria-hidden="true">
              <use href="#i-cake" />
            </svg>
            Our Main Product
          </p>
          <h2
            className="section-title reveal"
            id="products-title"
            aria-label="Our products"
          >
            <span className="mask" aria-hidden="true">
              <span className="word">OUR</span>
            </span>
            <span className="mask" aria-hidden="true">
              <span className="word word--outline">PRODUCTS</span>
            </span>
          </h2>
        </div>
        <div className="product-grid" id="product-grid">
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="product-card product-card--tile reveal"
              data-product={product.id}
              aria-label={product.name}
            >
              <div className="product-card__media">
                <img
                  src={product.img}
                  alt={product.alt}
                  width="800"
                  height="800"
                />
                <span className="product-card__title" aria-hidden="true">
                  {product.name}
                </span>
                <span className="tap-hint" aria-hidden="true">
                  Tap the button
                  <svg className="ico" viewBox="0 0 24 24">
                    <path d="M5 12h13M13 6l6 6-6 6" />
                  </svg>
                </span>
                <button
                  type="button"
                  className="info-btn"
                  data-open-product="true"
                  aria-label={`View details for ${product.name}: ${product.detailsLabel}`}
                >
                  <svg className="ico" aria-hidden="true">
                    <use href="#i-info" />
                  </svg>
                </button>
              </div>
              <h3 className="sr-only">{product.name}</h3>
            </article>
          ))}
        </div>
        <aside
          className="order reveal"
          aria-labelledby="order-title"
          aria-live="polite"
        >
          <div className="order__head">
            <h3 className="order__title" id="order-title">
              <svg className="ico" aria-hidden="true">
                <use href="#i-gift" />
              </svg>
              Your Order
            </h3>
            <button
              type="button"
              className="order__clear"
              id="order-clear"
              hidden
            >
              Clear
            </button>
          </div>
          <p className="order__empty" id="order-empty">
            Nothing here yet. Pick a size and tap Add to Order.
          </p>
          <ul className="order__list" id="order-list" role="list" hidden></ul>
          <p className="order__total" id="order-total" hidden>
            <span>Total</span>
            <strong id="order-total-value">₱0</strong>
          </p>
        </aside>
      </div>
      <dialog
        className="product-modal"
        id="product-modal"
        aria-labelledby="modal-name"
      >
        <button
          type="button"
          className="product-modal__close"
          data-close-product="true"
          aria-label="Close product details"
        >
          <svg className="ico" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
        <div className="product-modal__scroll">
          <div className="product-modal__body">
            <p className="eyebrow product-modal__eyebrow">
              <svg className="ico eyebrow__icon" aria-hidden="true">
                <use href="#i-star" />
              </svg>
              <span id="modal-badge">{first.badge}</span>
            </p>
            <h3 className="product-card__name" id="modal-name">
              {first.name}
            </h3>
            <p className="product-card__desc" id="modal-desc">
              {first.desc}
            </p>
            <div className="product-card__block">
              <h4 className="product-card__label">Complete ingredients</h4>
              <ul className="chips" role="list" id="modal-ingredients">
                {first.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="product-card__block">
              <h4 className="product-card__label" id="modal-sizes-label">
                {first.sizesLabel}
              </h4>
              <div
                className="size-picker"
                role="radiogroup"
                aria-labelledby="modal-sizes-label"
                data-size-picker="modal"
              ></div>
            </div>
            <div className="product-card__actions">
              <button
                type="button"
                className="btn btn--primary"
                data-add-to-order="true"
                data-from-modal="true"
              >
                Add to Order
              </button>
              <button
                type="button"
                className="btn btn--ghost"
                data-close-product="true"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  )
}
