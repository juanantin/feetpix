import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrailerSection from "@/components/TrailerSection";
import FeatureGrid from "@/components/FeatureGrid";
import OriginsSection from "@/components/OriginsSection";
import TokenInfo from "@/components/TokenInfo";
import CommunitySection from "@/components/CommunitySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrailerSection />
        <FeatureGrid />
        <OriginsSection />
        <TokenInfo />
        <CommunitySection />
      </main>
    </>
  );
}
