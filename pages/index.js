import Head from "next/head";
import { useState } from "react";

// components
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import PortofolioSection from "../components/PortofolioSection";
import ContactUs from "../components/ContactUs/ContactUs";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Red Agency</title>
        <meta name="description" content="Red Agency" />
        <link rel="icon" href="/logo/RƎD-removebg-white-text.ico" />
      </Head>

      <main className="bg-gray-100 px-4 md:px-20 lg:px-40 dark:bg-gray-900">
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection />
        <ServicesSection />
        <PortofolioSection />
        <ContactUs />
      </main>
    </div>
  );
}
