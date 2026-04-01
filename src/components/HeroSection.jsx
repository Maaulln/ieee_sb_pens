import { HiArrowLongDown } from "react-icons/hi2";

function HeroSection({ hero }) {
  return (
    <main className="hero-page" data-node-id="49:9">
      <div className="hero-bg" data-node-id="49:13">
        <img
          className="hero-bg-image"
          src={hero.bgImage}
          alt=""
          aria-hidden="true"
        />
        <div
          className="hero-bg-noise"
          style={{ backgroundImage: `url(${hero.noiseOverlay})` }}
          aria-hidden="true"
        ></div>
      </div>

      <img
        className="floating-shape cube-large"
        src={hero.cubeArt}
        alt=""
        aria-hidden="true"
      />
      <img
        className="floating-shape cube-small"
        src={hero.cubeArt}
        alt=""
        aria-hidden="true"
      />
      <img
        className="floating-shape triangle"
        src={hero.triangleArt}
        alt=""
        aria-hidden="true"
      />

      <section className="hero-content" data-node-id="49:18">
        <header className="hero-title-block" data-node-id="49:21">
          <img
            className="hero-title-art"
            src={hero.eventTitleArt}
            alt="IEEE PENS event"
          />
        </header>

        <div className="hero-subtitle-row" data-node-id="49:25">
          <p className="subtitle-lead">
            The official student branch of IEEE at
          </p>
          <p className="subtitle-main">
            Politeknik Elektronika Negeri Surabaya
          </p>
        </div>

        <footer className="hero-info" data-node-id="49:124">
          <p className="hero-campus">Politeknik Elektronika Negeri Surabaya</p>
          <span className="info-line" aria-hidden="true"></span>
          <p className="hero-location">Surabaya</p>
          <span className="info-line" aria-hidden="true"></span>
          <button className="hero-arrow" aria-label="Explore event">
            <HiArrowLongDown className="hero-arrow-icon" aria-hidden="true" />
          </button>
        </footer>
      </section>
    </main>
  );
}

export default HeroSection;
