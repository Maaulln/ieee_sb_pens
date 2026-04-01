import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import PublicationsPage from "./pages/PublicationsPage";
import PageLayout from "./components/PageLayout";
import {
  assets,
  divisions,
  members,
  navLinks,
  recentActivities,
  upcomingNews,
  socialLinks,
} from "./data/siteData";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageLayout
            assets={assets}
            navLinks={navLinks}
            socialLinks={socialLinks}
            divisions={divisions}
            members={members}
            upcomingNews={upcomingNews}
            recentActivities={recentActivities}
          />
        }
      />
      <Route
        path="/about"
        element={
          <AboutPage
            assets={assets}
            navLinks={navLinks}
            socialLinks={socialLinks}
            divisions={divisions}
          />
        }
      />
      <Route
        path="/news"
        element={
          <NewsPage
            assets={assets}
            navLinks={navLinks}
            socialLinks={socialLinks}
            upcomingNews={upcomingNews}
            recentActivities={recentActivities}
          />
        }
      />
      <Route
        path="/publications"
        element={
          <PublicationsPage
            assets={assets}
            navLinks={navLinks}
            socialLinks={socialLinks}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
