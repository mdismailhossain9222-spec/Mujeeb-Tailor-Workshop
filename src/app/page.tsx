import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import Heritage from "@/components/Heritage";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <main className="bg-white text-ink">
      <Navbar />
      <Hero />
      <Heritage />
      <Services />
      <Products />
      <Clients />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
