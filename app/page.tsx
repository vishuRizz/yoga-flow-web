import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioSections from "@/components/PortfolioSections";
import CurriculumSection from "@/components/CurriculumSection";

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
