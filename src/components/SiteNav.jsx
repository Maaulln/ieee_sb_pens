import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

function getLinkTarget(item) {
  if (item.toLowerCase() === "about") {
    return "/about";
  }

  if (item.toLowerCase() === "news") {
    return "/news";
  }

  if (item.toLowerCase() === "publications") {
    return "/publications";
  }

  return null;
}

function SiteNav({ navLinks, ieeeLogo, logoFallback }) {
  return (
    <header className="site-nav" aria-label="Main navigation">
      <div className="site-shell">
        <Link className="nav-brand" to="/" aria-label="IEEE SB PENS">
          <img
            src={ieeeLogo}
            alt="IEEE SB PENS logo"
            onError={(e) => {
              e.currentTarget.src = logoFallback;
            }}
          />
        </Link>

        <nav className="nav-menu" aria-label="Primary">
          {navLinks.map((item) => {
            const target = getLinkTarget(item);

            if (target) {
              return (
                <Link key={item} to={target} className="pill-link">
                  {item}
                </Link>
              );
            }

            return (
              <a key={item} href="#" className="pill-link">
                {item}
              </a>
            );
          })}
          <a href="#" className="login-link" aria-label="Login">
            <span>Login</span>
            <span className="login-arrow" aria-hidden="true">
              <HiArrowUpRight />
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default SiteNav;
