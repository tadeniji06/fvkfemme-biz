import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import StatsBanner from '@/components/StatsBanner';
import FeaturesSection from '@/components/FeaturesSection';
import FeaturedFighters from '@/components/FeaturedFighters';
import HowItWorks from '@/components/HowItWorks';
import LatestNews from '@/components/LatestNews';
import JoinCTA from '@/components/JoinCTA';
import SignInPopup from '@/components/SignInPopup';
import { fighters, news, platformStats } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <SignInPopup />
      <Navbar />
      <main>
        <HeroSection />
        <StatsBanner stats={platformStats} />
        <FeaturesSection />
        <FeaturedFighters fighters={fighters.slice(0, 6)} />
        <HowItWorks />
        <LatestNews articles={news.slice(0, 3)} />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}
