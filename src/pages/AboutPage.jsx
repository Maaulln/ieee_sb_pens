import { useMemo, useState } from "react";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import { HiSparkles } from "react-icons/hi2";

const aboutHeroBg =
  "http://localhost:3845/assets/65f0340aeaafec1d71e346a0e3312af754505faf.png";
const aboutHeroNoise =
  "http://localhost:3845/assets/8d364d3de1f6a152850ebc8bcdcf963818ffbe31.png";

const counselorImages = [
  {
    name: "Dr. Emma Parker",
    image:
      "http://localhost:3845/assets/644e45379ecc2a1762663d0061fbb5cdd8e2b55c.png",
  },
  {
    name: "Laura Chang",
    image:
      "http://localhost:3845/assets/9d62585d3dce6c482ca3f82aa3fd49f7a47c4230.png",
  },
];

const executiveBoardImages = [
  {
    name: "John Mitchell",
    image:
      "http://localhost:3845/assets/a38b73769bc86de162d9061a82fbeef8867c841e.png",
  },
  {
    name: "Samantha Hayes",
    image:
      "http://localhost:3845/assets/200f2b71c6ee3ec9e0e1eabddb099782b7cfbe08.png",
  },
  {
    name: "James Turner",
    image:
      "http://localhost:3845/assets/bfe1625b44d2ee3b8d59e588e4eff4878661142b.png",
  },
  {
    name: "Michael Anderson",
    image:
      "http://localhost:3845/assets/a00d558e8206f62ba3d3ec904d0c77a620cbaa79.png",
  },
];

const divisionMembers = {
  "Education and Research": [
    {
      name: "Dr. Emma Parker",
      role: "Research Mentor",
      image:
        "http://localhost:3845/assets/644e45379ecc2a1762663d0061fbb5cdd8e2b55c.png",
    },
    {
      name: "Samantha Hayes",
      role: "Data Research Lead",
      image:
        "http://localhost:3845/assets/200f2b71c6ee3ec9e0e1eabddb099782b7cfbe08.png",
    },
    {
      name: "James Turner",
      role: "AI Research Member",
      image:
        "http://localhost:3845/assets/bfe1625b44d2ee3b8d59e588e4eff4878661142b.png",
    },
  ],
  "Human Capital": [
    {
      name: "Laura Chang",
      role: "Talent Development",
      image:
        "http://localhost:3845/assets/9d62585d3dce6c482ca3f82aa3fd49f7a47c4230.png",
    },
    {
      name: "John Mitchell",
      role: "Training Coordinator",
      image:
        "http://localhost:3845/assets/a38b73769bc86de162d9061a82fbeef8867c841e.png",
    },
    {
      name: "Michael Anderson",
      role: "Leadership Coach",
      image:
        "http://localhost:3845/assets/a00d558e8206f62ba3d3ec904d0c77a620cbaa79.png",
    },
  ],
  "Public Relations & Partnership": [
    {
      name: "John Mitchell",
      role: "External Partnership",
      image:
        "http://localhost:3845/assets/a38b73769bc86de162d9061a82fbeef8867c841e.png",
    },
    {
      name: "Laura Chang",
      role: "Media Liaison",
      image:
        "http://localhost:3845/assets/9d62585d3dce6c482ca3f82aa3fd49f7a47c4230.png",
    },
    {
      name: "Dr. Emma Parker",
      role: "Academic Relation",
      image:
        "http://localhost:3845/assets/644e45379ecc2a1762663d0061fbb5cdd8e2b55c.png",
    },
  ],
  "Creative Media & Information": [
    {
      name: "Samantha Hayes",
      role: "Content Strategist",
      image:
        "http://localhost:3845/assets/200f2b71c6ee3ec9e0e1eabddb099782b7cfbe08.png",
    },
    {
      name: "James Turner",
      role: "Visual Designer",
      image:
        "http://localhost:3845/assets/bfe1625b44d2ee3b8d59e588e4eff4878661142b.png",
    },
    {
      name: "Michael Anderson",
      role: "Media Operations",
      image:
        "http://localhost:3845/assets/a00d558e8206f62ba3d3ec904d0c77a620cbaa79.png",
    },
  ],
  "Web Developer": [
    {
      name: "Michael Anderson",
      role: "Frontend Engineer",
      image:
        "http://localhost:3845/assets/a00d558e8206f62ba3d3ec904d0c77a620cbaa79.png",
    },
    {
      name: "James Turner",
      role: "Fullstack Engineer",
      image:
        "http://localhost:3845/assets/bfe1625b44d2ee3b8d59e588e4eff4878661142b.png",
    },
    {
      name: "Samantha Hayes",
      role: "UI Developer",
      image:
        "http://localhost:3845/assets/200f2b71c6ee3ec9e0e1eabddb099782b7cfbe08.png",
    },
  ],
};

function AboutPage({ assets, navLinks, socialLinks, divisions }) {
  const defaultDivision = useMemo(() => {
    const featuredDivision = divisions.find((division) => division.featured);
    return featuredDivision?.title ?? divisions[0]?.title ?? "";
  }, [divisions]);

  const [activeDivision, setActiveDivision] = useState(defaultDivision);
  const activeMembers = divisionMembers[activeDivision] ?? [];

  return (
    <>
      <SiteNav
        navLinks={navLinks}
        ieeeLogo={assets.logos.ieeeLogo}
        logoFallback={assets.logos.logoFallback}
      />

      <main className="about-page">
        <section className="about-page-hero">
          <div className="about-page-hero-bg" aria-hidden="true">
            <img src={aboutHeroBg} alt="" />
            <div
              className="about-page-hero-noise"
              style={{ backgroundImage: `url(${aboutHeroNoise})` }}
            ></div>
          </div>
          <div className="site-shell about-page-hero-inner">
            <h1 className="about-page-hero-word">ABOUT</h1>
          </div>
        </section>

        <section className="about-page-section">
          <div className="site-shell about-page-shell">
            <div className="section-tag about-page-tag">
              <span className="tag-line"></span>
              <span className="tag-text">Who We Are</span>
            </div>
            <h2 className="about-page-title">About IEEE SB PENS</h2>
            <div className="about-who-row">
              <article className="about-vm-card">
                <h3>Who We Are</h3>
                <p>
                  IEEE Student Branch PENS is the official student
                  representation of the Institute of Electrical and Electronics
                  Engineers (IEEE) at Politeknik Elektronika Negeri Surabaya
                  (PENS). We serve as a platform for students to grow in the
                  fields of technology, research, and innovation while building
                  connections with the global IEEE community.
                </p>
              </article>
              <aside className="about-logo-card" aria-label="IEEE logo">
                <img
                  src={assets.logos.ieeeLogo}
                  alt="IEEE SB PENS logo"
                  onError={(e) => {
                    e.currentTarget.src = assets.logos.logoFallback;
                  }}
                />
              </aside>
            </div>
            <article className="about-vm-card about-vision-row">
              <h3>Our Vision</h3>
              <p>
                IEEE Student Branch PENS is the official student representation
                of the Institute of Electrical and Electronics Engineers (IEEE)
                at Politeknik Elektronika Negeri Surabaya (PENS). We serve as a
                platform for students to grow in the fields of technology,
                research, and innovation while building connections with the
                global IEEE community.
              </p>
            </article>
          </div>
        </section>

        <section className="about-page-section about-page-structure">
          <div className="site-shell about-page-shell">
            <div className="section-tag about-page-tag">
              <span className="tag-line"></span>
              <span className="tag-text">Our Mission</span>
            </div>
            <h2 className="about-page-title">Our Mission</h2>
            <div className="about-org-grid">
              <article className="about-mission-card">
                <h3 className="about-mission-title">
                  <HiSparkles aria-hidden="true" />
                  <span>Introducing IEEE SB PENS To PENS Students</span>
                </h3>
                <p>
                  Increase students' understanding of and interest in IEEE
                  through engaging and beneficial programs that support their
                  development.
                </p>
              </article>
              <article className="about-mission-card">
                <h3 className="about-mission-title">
                  <HiSparkles aria-hidden="true" />
                  <span>Building Networks With Other Universities</span>
                </h3>
                <p>
                  Establish broader connections with IEEE SBs at other campuses,
                  both in Surabaya and across Indonesia, to introduce IEEE SB
                  PENS and learn from their experiences.
                </p>
              </article>
              <article className="about-mission-card">
                <h3 className="about-mission-title">
                  <HiSparkles aria-hidden="true" />
                  <span>
                    Organizing Engaging And Academically Beneficial Activities
                  </span>
                </h3>
                <p>
                  Hold events such as seminars, workshops, and webinars that are
                  relevant to students' knowledge development and help them
                  enhance their technical and academic skills.
                </p>
              </article>
              <article className="about-mission-card">
                <h3 className="about-mission-title">
                  <HiSparkles aria-hidden="true" />
                  <span>Enhancing Member Engagement</span>
                </h3>
                <p>
                  Make IEEE SB PENS members feel more involved and supported by
                  offering opportunities to participate in meaningful activities
                  and projects.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="about-page-section">
          <div className="site-shell about-page-shell">
            <div className="section-tag about-page-tag">
              <span className="tag-line"></span>
              <span className="tag-text">Our Team</span>
            </div>
            <h2 className="about-page-title">Our team</h2>
            <div className="about-team-column">
              <article className="about-vm-card about-team-block">
                <h3>Counselor</h3>
                <p>
                  Pembina yang mengarahkan perkembangan organisasi, memastikan
                  setiap program berjalan selaras dengan nilai akademik dan
                  profesionalisme IEEE.
                </p>
                <div className="about-team-images about-team-images-2">
                  {counselorImages.map((member) => (
                    <figure key={member.name} className="about-team-member">
                      <img src={member.image} alt={member.name} />
                      <figcaption>{member.name}</figcaption>
                    </figure>
                  ))}
                </div>
              </article>
              <article className="about-vm-card about-team-block">
                <h3>Executive Board</h3>
                <p>
                  Tim inti organisasi yang terdiri dari Chairperson, Vice
                  Chairperson, Secretary, dan Treasurer untuk mengelola strategi
                  serta operasional IEEE SB PENS.
                </p>
                <div className="about-team-images about-team-images-4">
                  {executiveBoardImages.map((member) => (
                    <figure key={member.name} className="about-team-member">
                      <img src={member.image} alt={member.name} />
                      <figcaption>{member.name}</figcaption>
                    </figure>
                  ))}
                </div>
              </article>
              <article className="about-vm-card about-team-block">
                <h3>Devisi</h3>
                <p>
                  Divisi pelaksana program yang fokus pada pengembangan anggota,
                  media komunikasi, kemitraan, kegiatan akademik, dan inovasi
                  teknologi.
                </p>

                <div className="divisions-grid about-divisions-grid">
                  {divisions.map((division) => (
                    <button
                      type="button"
                      key={division.title}
                      className={`division-card${
                        activeDivision === division.title ? " featured" : ""
                      }`}
                      aria-pressed={activeDivision === division.title}
                      onClick={() => {
                        setActiveDivision(division.title);
                      }}
                    >
                      <img
                        className="division-bg"
                        src={assets.hero.cubeArt}
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
                    </button>
                  ))}
                </div>

                <div className="division-note about-division-note">
                  <p>
                    Every division contributes to IEEE SB PENS through focused
                    programs, strategic initiatives, and cross-functional
                    collaboration that support student growth and organizational
                    impact.
                  </p>
                </div>

                <p className="about-division-members-title">
                  Members of {activeDivision}
                </p>
                <div className="about-division-images-grid" aria-live="polite">
                  {activeMembers.map((member) => (
                    <article
                      key={`${activeDivision}-${member.name}`}
                      className="about-division-image-card"
                    >
                      <img src={member.image} alt={member.name} />
                      <h4>{member.name}</h4>
                      <p>{member.role}</p>
                    </article>
                  ))}
                </div>
              </article>
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

export default AboutPage;
