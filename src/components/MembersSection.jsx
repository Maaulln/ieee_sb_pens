import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";

function MembersSection({ members, membersAssets }) {
  return (
    <section className="content-section members-section" data-node-id="49:382">
      <div
        className="members-bg"
        style={{ backgroundImage: `url(${membersAssets.bg})` }}
      ></div>

      <div className="section-wrap">
        <div className="section-tag">
          <span className="tag-line"></span>
          <span className="tag-text">Members</span>
        </div>

        <h2 className="section-heading members-heading">
          Our Member and Organization Structure
        </h2>

        <div className="members-scroller">
          {members.map((member, index) => (
            <article
              className={`member-card${index % 2 === 1 ? " shifted" : ""}`}
              key={member.name}
            >
              <div className="member-photo-wrap">
                <img
                  className="member-photo"
                  src={member.image}
                  alt={member.name}
                />
                <img
                  className="member-blur"
                  src={membersAssets.blur}
                  alt=""
                  aria-hidden="true"
                />

                <div className="member-socials">
                  <button aria-label={`View ${member.name} on Instagram`}>
                    <FaInstagram aria-hidden="true" />
                  </button>
                  <button aria-label={`View ${member.name} on LinkedIn`}>
                    <FaLinkedinIn aria-hidden="true" />
                  </button>
                </div>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>

        <div className="members-footer">
          <span>20+ Speakers</span>
          <div className="members-line"></div>
          <button className="see-all" aria-label="See all members">
            <span>See All</span>
            <span className="see-all-icon">
              <HiArrowUpRight aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default MembersSection;
