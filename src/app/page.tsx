import { Navbar } from "@/app/sections/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { Services } from "./sections/Services";
import { Footer, MobileFooter } from "./sections/Footer";
import { TrustedBy } from "./sections/TrustedBy";
import { Vision } from "./sections/Vision";
import { Works } from "./sections/Works";

export default function Home() {
  return (
    <main className="z-50">
      <Navbar />
      <HeroSection />
      <Services />
      <Vision />
      <Works />
      <TrustedBy />
      <Footer />
      <MobileFooter />
    </main>
  );
}
