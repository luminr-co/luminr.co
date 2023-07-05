import { Navbar } from "@/app/sections/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { Services } from "./sections/Services";
import { Footer, MobileFooter } from "./sections/Footer";
import { TrustedBy } from "./sections/TrustedBy";
import { Vision } from "./sections/Vision";
import { Works } from "./sections/Works";
import { Background } from "./components/Background";

export default async function Home() {
  return (
    <>
      {/* <Background noOfEllipses={5} /> */}
      <main className="z-50 container mx-auto">
        <Navbar />
        <HeroSection />
        <Services />
        <Vision />
        {/* <Works /> */}
        <TrustedBy />
        <Footer />
        <MobileFooter />
      </main>
    </>
  );
}
