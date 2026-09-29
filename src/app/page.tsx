import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Trainer from "@/components/Trainer";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Programs />
        <Trainer />
        <Gallery />
        <Reviews />
        <FAQ />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
