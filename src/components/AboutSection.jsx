function AboutSection({ about }) {
  return (
    <section className="content-section about-section" data-node-id="49:210">
      <div className="section-wrap">
        <div className="section-tag">
          <span className="tag-line"></span>
          <span className="tag-text">IEEE SB PENS Overview</span>
        </div>

        <h2 className="section-heading">
          Building Future Engineers with IEEE SB PENS
        </h2>

        <div className="about-content-grid">
          <div className="about-gallery">
            <img src={about.images[0]} alt="IEEE student activity" />
            <img src={about.images[1]} alt="IEEE workshop session" />
            <img src={about.images[2]} alt="IEEE collaborative project" />
          </div>

          <div className="about-copy">
            <p>
              IEEE Student Branch PENS is the official representation of the
              Institute of Electrical and Electronics Engineers (IEEE) at
              Politeknik Elektronika Negeri Surabaya.
            </p>
            <p>
              The organization serves as a platform for students to develop
              technical expertise, research capabilities, leadership skills, and
              innovation culture while connecting with the global IEEE network.
            </p>
            <p>
              Through workshops, research collaboration, competitions, and
              professional activities, IEEE SB PENS empowers members to grow as
              future engineers, researchers, and technology innovators.
            </p>
          </div>
        </div>

        <div className="about-banner">
          <img src={about.banner} alt="IEEE SB PENS showcase" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
