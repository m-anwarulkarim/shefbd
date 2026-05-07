"use client";

import HeroSection from "@/components/home/hero-section";

import CourseSection from "@/components/CourseSection";
import AboutPage from "./about/page";
import ProjectMosqueComplexPage from "./projects/page";
import DonationPage from "./donation/page";
import OngoingProjectsSection from "@/components/OngoingProjectsSection";
import HowYouCanDonatePage from "@/components/home/how-you-can-donate";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CourseSection />
      <AboutPage />
      <OngoingProjectsSection />
      <ProjectMosqueComplexPage />
      <HowYouCanDonatePage />
      <DonationPage />
    </main>
  );
}
