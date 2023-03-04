import Head from "next/head";
import { useEffect, useState } from "react";

// components
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import PortofolioSection from "../components/PortofolioSection";
import ContactUs from "../components/ContactUs/ContactUs";
import CardSwiper from "../components/UI/CardSwiper";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const blob = document.getElementById("blob");

    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Red Agency</title>
        <meta name="description" content="Red Agency" />
        <link rel="icon" href="/logo/RƎD-removebg-white-text.ico" />
      </Head>

      <main className="bg-gray-100 px-4 md:px-20 lg:px-40 dark:bg-gray-900">
        <div
          className="fixed bg-gradient-to-r dark:from-blue-700 dark:to-red-900 from-red-300 to-blue-300"
          id="blob"
        ></div>
        <div id="blur"></div>
        <div className="relative">
          <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
          <HeroSection />
          <ServicesSection />
          {/* <CardSwiper /> */}
          <PortofolioSection />
          <ContactUs />
        </div>
      </main>
    </div>
  );
}
