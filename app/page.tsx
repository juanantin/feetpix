import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import OriginsSection from "@/components/OriginsSection";
import TokenInfo from "@/components/TokenInfo";
import CommunitySection from "@/components/CommunitySection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <OriginsSection />
        <TokenInfo />
        <CommunitySection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
