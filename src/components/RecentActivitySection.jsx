function RecentActivitySection({ recentActivities }) {
  return (
    <section
      className="content-section recent-activity-section"
      aria-label="Recent activity"
    >
      <div className="section-wrap">
        <div className="section-tag">
          <span className="tag-line"></span>
          <span className="tag-text">Recent Activity</span>
        </div>

        <h2 className="section-heading">
          Highlights from Our Latest Activities
        </h2>

        <div className="recent-activity-list">
          {recentActivities.map((activity, index) => (
            <article className="activity-item" key={activity.title}>
              <span className="activity-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="activity-main">
                <div className="activity-meta">
                  <span className="activity-type">{activity.type}</span>
                  <span className="activity-date">{activity.date}</span>
                </div>
                <h3>{activity.title}</h3>
                <p>{activity.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentActivitySection;
