"use client";

import HeroSection from "@/components/home/hero-section";

import CourseSection from "@/components/CourseSection";
import DonationPage from "./donation/page";
import OngoingProjectsSection from "@/components/OngoingProjectsSection";
import HowYouCanDonatePage from "@/components/home/how-you-can-donate";
import ActivitySection from "@/components/ActivitySection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CourseSection />
      <ActivitySection />
      {/* <AboutPage /> */}
      <OngoingProjectsSection />
      {/* <ProjectMosqueComplexPage /> */}
      <HowYouCanDonatePage />
      <DonationPage />
    </main>
  );
}
