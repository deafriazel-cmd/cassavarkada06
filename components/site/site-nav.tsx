export function SiteNav() {
  return (
    <>
      <div className="progress" id="progress" aria-hidden="true"></div>
      <nav className="topbar" aria-label="Primary">
        <a
          className="pill topbar__brand"
          href="#home"
          data-scroll-target="home"
        >
          Cassavarkada
        </a>
        <p className="pill topbar__count" aria-hidden="true">
          <span id="counter">01</span> / 06
        </p>
        <button
          type="button"
          className="pill topbar__menu"
          id="menu-btn"
          aria-expanded="false"
          aria-controls="menu"
        >
          Menu
        </button>
      </nav>
      <div className="menu" id="menu" inert>
        <ul className="menu__list">
          <li>
            <a href="#home" data-scroll-target="home" data-menu-link="true">
              <span>01</span>Home
            </a>
          </li>
          <li>
            <a
              href="#welcome"
              data-scroll-target="welcome"
              data-menu-link="true"
            >
              <span>02</span>Welcome
            </a>
          </li>
          <li>
            <a href="#store" data-scroll-target="store" data-menu-link="true">
              <span>03</span>Our Store
            </a>
          </li>
          <li>
            <a
              href="#products"
              data-scroll-target="products"
              data-menu-link="true"
            >
              <span>04</span>Products
            </a>
          </li>
          <li>
            <a
              href="#location"
              data-scroll-target="location"
              data-menu-link="true"
            >
              <span>05</span>Location
            </a>
          </li>
          <li>
            <a
              href="#handlers"
              data-scroll-target="handlers"
              data-menu-link="true"
            >
              <span>06</span>Handlers
            </a>
          </li>
        </ul>
        <p className="menu__note">
          Sweet, soft, delicious — a student-managed food business
        </p>
      </div>
    </>
  )
}
