import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import PhotoReel from "@/components/PhotoReel";
import Services from "@/components/Services";
import Transformations from "@/components/Transformations";
import Testimonials from "@/components/Testimonials";
import InstagramGrid from "@/components/InstagramGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <PhotoReel />
        <Services />
        <Transformations />
        <Testimonials />
        <InstagramGrid />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
