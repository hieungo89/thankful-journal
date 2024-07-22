import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import AboutPage from "./pages/AboutPage.js";
import CreateAccountPage from "./pages/CreateAccountPage.js";
import DemoProfilePage from "./pages/DemoProfilePage.js";
import HomePage from "./pages/HomePage.js";
import LoginPage from "./pages/LoginPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import ProfilePage from "./pages/ProfilePage.js";
// import ContactPage from "./pages/ContactPage.js";
// import MoodBoostPage from "./pages/MoodBoostPage.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-layout">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/demo" element={<DemoProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* // TODO: FUTURE ROUTES
              <Route path="/mood-booster" element={<MoodBoostPage />} />
              <Route path="/contact" element={<ContactPage />} />
            */}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
