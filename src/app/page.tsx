import Image from "next/image";
import LandingPage from "@/component/LandingPage";
import Navbar from "@/component/Navbar";
import FeatureSection from "@/component/FeatureSection";
export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      <FeatureSection />
    </main>
  );
}
