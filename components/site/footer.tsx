export function SiteFooter() {
  return (
    <>
      <footer className="footer">
        <div className="footer__icons" aria-hidden="true">
          <svg className="ico">
            <use href="#i-cassava"></use>
          </svg>
          <svg className="ico">
            <use href="#i-cake"></use>
          </svg>
          <svg className="ico">
            <use href="#i-heart"></use>
          </svg>
          <svg className="ico">
            <use href="#i-utensils"></use>
          </svg>
          <svg className="ico">
            <use href="#i-smile"></use>
          </svg>
        </div>
        <p className="footer__name">
          CASSA<span>VARKADA</span>
        </p>
        <p className="footer__tag">
          Sweet, soft, delicious! A student-managed food business.
        </p>
      </footer>
    </>
  )
}
