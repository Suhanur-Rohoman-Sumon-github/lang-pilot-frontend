"use client";
import AgencyStats from "@/components/home/AgencyStats";
import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import JoinOurGlobalCommunity from "@/components/home/JoinOurGlobalCommunity";
import LanguageSelector from "@/components/home/LanguageSelector";
import LearnEnglish from "@/components/home/LearnEnglish";
import Testimonial from "@/components/home/Testimonials";
import TrackYourProgress from "@/components/home/TrackYourProgress";

const Home = () => {
  return (
    <div className="min-h-screen container mx-auto">
      <HeroSection />
      <AgencyStats />
      <LanguageSelector />
      <LearnEnglish />
      <Testimonial />
      <TrackYourProgress />
      <JoinOurGlobalCommunity />
      <FAQSection />
    </div>
  );
};

export default Home;
