import AboutSection from "./AboutSection";
import DivisionsSection from "./DivisionsSection";
import HeroSection from "./HeroSection";
import MembersSection from "./MembersSection";
import RecentActivitySection from "./RecentActivitySection";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";
import UpcomingNewsSection from "./UpcomingNewsSection";

function PageLayout({
  assets,
  navLinks,
  socialLinks,
  divisions,
  members,
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
      <HeroSection hero={assets.hero} />
      <AboutSection about={assets.about} />
      <UpcomingNewsSection upcomingNews={upcomingNews} />
      <RecentActivitySection recentActivities={recentActivities} />
      <MembersSection members={members} membersAssets={assets.members} />
      <DivisionsSection divisions={divisions} cubeArt={assets.hero.cubeArt} />
      <SiteFooter
        navLinks={navLinks}
        socialLinks={socialLinks}
        ieeeLogo={assets.logos.ieeeLogo}
        logoFallback={assets.logos.logoFallback}
      />
    </>
  );
}

export default PageLayout;
