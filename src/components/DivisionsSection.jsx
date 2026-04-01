function DivisionsSection({ divisions, cubeArt }) {
  return (
    <section
      className="content-section divisions-section"
      data-node-id="49:268"
    >
      <div className="section-wrap">
        <div className="section-tag">
          <span className="tag-line"></span>
          <span className="tag-text">Divisions</span>
        </div>

        <h2 className="section-heading">Our Divisions</h2>

        <div className="divisions-grid">
          {divisions.map((division) => (
            <article
              key={division.title}
              className={`division-card${division.featured ? " featured" : ""}`}
              aria-current={division.featured ? "true" : undefined}
            >
              <img
                className="division-bg"
                src={cubeArt}
                alt=""
                aria-hidden="true"
              />
              <div className="division-overlay"></div>
              <img
                className="division-icon"
                src={division.icon}
                alt=""
                aria-hidden="true"
              />
              <h3>{division.title}</h3>
            </article>
          ))}
        </div>

        <div className="division-note">
          <p>
            Every division contributes to IEEE SB PENS through focused programs,
            strategic initiatives, and cross-functional collaboration that
            support student growth and organizational impact.
          </p>
        </div>

        <div className="ticker" data-node-id="49:368">
          <div className="ticker-track">
            Research . Technology . Innovation . Humanity
          </div>
        </div>
      </div>
    </section>
  );
}

export default DivisionsSection;
