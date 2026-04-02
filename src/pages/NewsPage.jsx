import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

const newsHeroBg =
  "/assets/images/49a7bf66a956cd1bbc483dbad8ceaf03c1a90bb4.png";
const newsHeroNoise =
  "/assets/images/8d364d3de1f6a152850ebc8bcdcf963818ffbe31.png";

function NewsPage({
  assets,
  navLinks,
  socialLinks,
  upcomingNews,
  recentActivities,
}) {
  return (
    <>
      <SiteNav
        navLinks={navLinks}
        ieeeLogo={assets.logos.ieeeLogo}
        logoFallback={assets.logos.logoFallback}
      />

      <main className="about-page news-page">
        <section className="about-page-hero news-page-hero">
          <div className="about-page-hero-bg" aria-hidden="true">
            <img src={newsHeroBg} alt="" />
            <div
              className="about-page-hero-noise"
              style={{ backgroundImage: `url(${newsHeroNoise})` }}
            ></div>
          </div>
          <div className="site-shell about-page-hero-inner">
            <h1 className="about-page-hero-word">NEWS</h1>
          </div>
        </section>

        <section className="about-page-section">
          <div className="site-shell about-page-shell">
            <div className="section-tag about-page-tag">
              <span className="tag-line"></span>
              <span className="tag-text">Latest News</span>
            </div>
            <h2 className="about-page-title">Updates from IEEE SB PENS</h2>
            <div className="news-page-grid">
              {upcomingNews.map((item) => (
                <article className="news-page-card" key={item.title}>
                  <div className="news-page-media">
                    <img src={item.image} alt={item.title} />
                    <span className="news-page-badge">{item.category}</span>
                  </div>
                  <div className="news-page-copy">
                    <p>{item.date}</p>
                    <h3>{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page-section about-page-structure news-page-activity">
          <div className="site-shell about-page-shell">
            <div className="section-tag about-page-tag">
              <span className="tag-line"></span>
              <span className="tag-text">Recent Activities</span>
            </div>
            <h2 className="about-page-title">What We Have Done Recently</h2>
            <div className="news-activity-list">
              {recentActivities.map((item, index) => (
                <article className="news-activity-item" key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="news-activity-meta">
                      {item.date} • {item.type}
                    </p>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        navLinks={navLinks}
        socialLinks={socialLinks}
        ieeeLogo={assets.logos.ieeeLogo}
        logoFallback={assets.logos.logoFallback}
      />
    </>
  );
}

export default NewsPage;
