import SocialIcon from "./SocialIcon";
import { Link } from "react-router-dom";

const footerBrandingBg =
  "/assets/images/57561affcc38ffc62a48997b04d89d237ce7080b.png";
const footerBrandingImage =
  "/assets/images/8a6541fe9d57ae16681c9d5ee3800432379b4c9e.png";
const footerBrandingNoise =
  "/assets/images/8d364d3de1f6a152850ebc8bcdcf963818ffbe31.png";
const footerEventTitleArt =
  "/assets/images/42576fa17947cb2a320731f7080802692ba188b2.png";

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
        <div className="footer-branding-bg" aria-hidden="true">
          <img
            src={footerBrandingBg}
            alt=""
            className="footer-branding-bg-base"
          />
          <img
            src={footerBrandingImage}
            alt=""
            className="footer-branding-bg-image"
          />
          <div
            className="footer-branding-bg-noise"
            style={{ backgroundImage: `url(${footerBrandingNoise})` }}
          ></div>
        </div>
        <div className="site-shell footer-branding-inner">
          <img
            src={ieeeLogo}
            alt="IEEE SB PENS logo"
            className="footer-brand-mark"
            onError={(e) => {
              e.currentTarget.src = logoFallback;
            }}
          />
          <img
            src={footerEventTitleArt}
            alt="IEEE SB PENS"
            className="hero-title-art footer-event-title-art"
          />
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
