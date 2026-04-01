import SocialIcon from "./SocialIcon";
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

function SiteFooter({ navLinks, socialLinks, ieeeLogo, logoFallback }) {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="footer-top">
        <div className="site-shell footer-main">
          <div className="footer-social-wrap">
            <p>Social</p>
            <div className="footer-socials">
              {socialLinks.map((item) => (
                <a key={item} href="#" aria-label={item}>
                  <SocialIcon item={item} />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
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
          </nav>
        </div>
      </div>

      <div className="footer-mid">
        <div className="site-shell footer-legal">
          <p>All copyrights @IEEESBPENS</p>
          <a href="#">Terms and Conditions</a>
          <div className="footer-legal-spacer" aria-hidden="true" />
        </div>
      </div>

      <div className="footer-branding">
        <div className="site-shell footer-branding-inner">
          <img
            src={ieeeLogo}
            alt="IEEE SB PENS logo"
            className="footer-brand-mark"
            onError={(e) => {
              e.currentTarget.src = logoFallback;
            }}
          />
          <h2>IEEE SB PENS</h2>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
