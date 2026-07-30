import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import { Layout } from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import Teachings from "./pages/Teachings";
import TeachingDetail from "./pages/TeachingDetail";
import InternationalImpactPage from "./pages/InternationalImpactPage";
import Partnership from "./pages/Partnership";
import Contact from "./pages/Contact";
import Churches from "./pages/Churches";
import PrayerRequest from "./pages/PrayerRequest";
import BecomeMember from "./pages/BecomeMember";
import EventDetail from "./pages/EventDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ministries" element={<Ministries />} />

            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />

            <Route path="/teachings" element={<Teachings />} />
            <Route path="/teachings/:id" element={<TeachingDetail />} />

            <Route path="/impact" element={<InternationalImpactPage />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/churches" element={<Churches />} />
            <Route path="/prayer" element={<PrayerRequest />} />
            <Route path="/member" element={<BecomeMember />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;