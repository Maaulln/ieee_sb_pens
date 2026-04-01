import { HiArrowUpRight } from "react-icons/hi2";

function UpcomingNewsSection({ upcomingNews }) {
  return (
    <section
      className="content-section upcoming-news-section"
      aria-label="Upcoming news"
    >
      <div className="section-wrap">
        <div className="section-tag">
          <span className="tag-line"></span>
          <span className="tag-text">Upcoming News</span>
        </div>

        <div className="upcoming-news-head">
          <h2 className="section-heading">Latest Updates from IEEE SB PENS</h2>
          <button className="news-view-all" aria-label="View all upcoming news">
            <span>View All</span>
            <span className="news-view-icon" aria-hidden="true">
              <HiArrowUpRight />
            </span>
          </button>
        </div>

        <div className="upcoming-news-grid">
          {upcomingNews.map((item) => (
            <article className="news-card" key={item.title}>
              <div className="news-media">
                <img src={item.image} alt={item.title} />
                <span className="news-badge">{item.category}</span>
              </div>
              <div className="news-content">
                <p className="news-date">{item.date}</p>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingNewsSection;
