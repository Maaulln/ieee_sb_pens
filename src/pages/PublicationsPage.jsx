import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

const publicationsHeroBg =
  "/assets/images/49a7bf66a956cd1bbc483dbad8ceaf03c1a90bb4.png";
const publicationsHeroNoise =
  "/assets/images/8d364d3de1f6a152850ebc8bcdcf963818ffbe31.png";

const scientificPublications = [
  {
    title: "Low-Power IoT Monitoring for Smart Campus Infrastructure",
    type: "Journal Article",
    year: "2026",
    authors: "A. Pratama, S. Nabila, IEEE SB PENS Research Team",
  },
  {
    title: "Computer Vision for Waste Sorting Automation",
    type: "Conference Paper",
    year: "2025",
    authors: "R. Wicaksono, L. Amanda, M. Hafiz",
  },
  {
    title: "Adaptive Control for Mobile Robot Navigation",
    type: "Proceeding",
    year: "2025",
    authors: "D. Rahman, V. Putri, F. Aditya",
  },
];

const memberWorks = [
  {
    title: "Autonomous Line Follower Robot",
    category: "Embedded System",
    image: "/assets/images/ac9fa5680397417bd2ad79d7c05f5bde87d6b0ed.png",
  },
  {
    title: "Realtime Attendance with Face Recognition",
    category: "Artificial Intelligence",
    image: "/assets/images/8247a312896827f67070883a7e68500ba218218f.png",
  },
  {
    title: "IEEE SB PENS Organization Dashboard",
    category: "Web Development",
    image: "/assets/images/363f6b301f345555ecade4184c094c0f816c3d19.png",
  },
  {
    title: "Portable Air Quality Sensor Kit",
    category: "Hardware Innovation",
    image: "/assets/images/e599b44e5bd658d9f92338a1cc08f24f74ea2f07.png",
  },
];

function PublicationsPage({ assets, navLinks, socialLinks }) {
  return (
    <>
      <SiteNav
        navLinks={navLinks}
        ieeeLogo={assets.logos.ieeeLogo}
        logoFallback={assets.logos.logoFallback}
      />

      <main className="about-page publications-page">
        <section className="about-page-hero publications-page-hero">
          <div className="about-page-hero-bg" aria-hidden="true">
            <img src={publicationsHeroBg} alt="" />
            <div
              className="about-page-hero-noise"
              style={{ backgroundImage: `url(${publicationsHeroNoise})` }}
            ></div>
          </div>
          <div className="site-shell about-page-hero-inner">
            <h1 className="about-page-hero-word publications-hero-word">
              PUBLICATIONS
            </h1>
          </div>
        </section>

        <section className="about-page-section">
          <div className="site-shell about-page-shell">
            <div className="section-tag about-page-tag">
              <span className="tag-line"></span>
              <span className="tag-text">Publikasi Ilmiah</span>
            </div>
            <h2 className="about-page-title">Scientific Publications</h2>
            <div className="publications-list">
              {scientificPublications.map((item) => (
                <article className="publication-item" key={item.title}>
                  <div className="publication-meta">
                    <span>{item.type}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.authors}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page-section about-page-structure publications-work-section">
          <div className="site-shell about-page-shell">
            <div className="section-tag about-page-tag">
              <span className="tag-line"></span>
              <span className="tag-text">Karya Anggota</span>
            </div>
            <h2 className="about-page-title">Member Projects and Works</h2>
            <div className="publications-work-grid">
              {memberWorks.map((item) => (
                <article className="publications-work-card" key={item.title}>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
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

export default PublicationsPage;
