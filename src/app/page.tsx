"use client";
import Footer from "./components/footer";
import ContactSection from "./components/form";
import Hero from "./components/heroSection";
import Navbar from "./components/navbar";
import VehicleSection from "./components/vehicleSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VehicleSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
