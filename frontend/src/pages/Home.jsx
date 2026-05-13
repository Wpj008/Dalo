import React from "react";
import { Hero } from "../components/home/Hero";
import { QuickAbout } from "../components/home/QuickAbout";
import { InternationalImpact } from "../components/home/InternationalImpact";
import { LatestVideos } from "../components/home/LatestVideos";
import { EventsPreview } from "../components/home/EventsPreview";
import { Testimonials } from "../components/home/Testimonials";
import { DonationCTA } from "../components/home/DonationCTA";

export default function Home() {
  return (
    <div data-testid="page-home">
      <Hero />
      <QuickAbout />
      <InternationalImpact />
      <LatestVideos />
      <EventsPreview />
      <Testimonials />
      <DonationCTA />
    </div>
  );
}
