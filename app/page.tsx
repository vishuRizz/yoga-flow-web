import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioSections from "@/components/PortfolioSections";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <PortfolioSections />
    <Footer />
    </>
  );
}
