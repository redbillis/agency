import Image from "next/image";
import design from "../../public/AI Icons/web-development.png";
import socialMedia from "../../public/AI Icons/social_media-2.png";
import socialContent from "../../public/AI Icons/social_media_content.png";
import ppc from "../../public/AI Icons/ppc.png";
import emailMarketing from "../../public/AI Icons/email-marketing.png";
import eCommerce from "../../public/AI Icons/e-commerce.png";
import appDev from "../../public/AI Icons/app_development.png";
import webMaintenance from "../../public/AI Icons/web-maintenance.png";
import branding from "../../public/AI Icons/branding.png";

import seo from "../../public/AI Icons/seo-2.png";
import seoThree from "../../public/AI Icons/seo-3.png";

// components
import ServiceCard from "./ServiceCard";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ServicesSection = () => {
  const textAnimation = useAnimation();

  const [refBottom, inViewRefBottom] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inViewRefBottom) {
      textAnimation.start({
        opacity: 1,
        y: ["10px", "0px"],
        transition: {
          duration: 2,
          ease: "easeOut",
        },
      });
    }
  }, [textAnimation, inViewRefBottom]);

  const handleClick = () => {
    const nextIndex =
      acticeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(
        `[data-index="${acticeIndex}"]`
      ),
      nextGroup = document.querySelector(`[data-index="${nextIndex}]`);

    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "active";

    activeIndex = nextIndex;
  };

  return (
    <section>
      <motion.div
        ref={refBottom}
        initial={{ opacity: 0 }}
        animate={textAnimation}
      >
        <h3 className="text-3xl py-1 dark:text-gray-500">Services we offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Our team of experienced{" "}
          <span className="text-red-500">
            web designers, developers, and marketers
          </span>{" "}
          is dedicated to helping businesses of all sizes establish a{" "}
          <span className="text-red-500">strong online presence</span>. From
          <span className="text-red-500"> custom website design</span> and{" "}
          <span className="text-red-500">development to SEO</span>,
          <span className="text-red-500"> PPC advertising,</span>
          and <span className="text-red-500">social media marketing</span>, we
          offer a full range of services to help you reach your online goals. No
          matter what your needs, we have the expertise and experience to create
          a solution that works for you.{" "}
          <span className="text-red-500">Contact us today</span> to learn more
          about how we can help you succeed online{" "}
        </p>
      </motion.div>
      <div className="lg:flex gap-10">
        <ServiceCard
          cardImg={design}
          cardTitle="Web Design"
          cardDetails="Creative, Eye-Catching Websites That Convert"
        />
        <ServiceCard
          cardImg={seo}
          cardTitle="SEO"
          cardDetails="Boost Your Online Visibility with Our Proven SEO Strategies"
        />
        <ServiceCard
          cardImg={socialMedia}
          cardTitle="Social Media Marketing"
          cardDetails="Grow Your Following and Boost Engagement with Our Social Media Services"
        />
        <ServiceCard
          cardImg={ppc}
          cardTitle="PPC Advertising"
          cardDetails="Maximize Your ROI with Our Targeted PPC Campaigns"
        />
        <ServiceCard
          cardImg={socialContent}
          cardTitle="Content Marketing"
          cardDetails="Engage Your Audience with Compelling, Quality Content"
        />
      </div>
      <div className="lg:flex gap-10">
        <ServiceCard
          cardImg={emailMarketing}
          cardTitle="Email Marketing"
          cardDetails="Effective Email Campaigns That Drive Results"
        />
        <ServiceCard
          cardImg={eCommerce}
          cardTitle="E-Commerce Solutions"
          cardDetails="Streamline Your Online Store and Boost Sales with Our Expertise"
        />
        <ServiceCard
          cardImg={appDev}
          cardTitle="App Development"
          cardDetails="Custom-Built Apps That Solve Your Unique Challenges"
        />
        <ServiceCard
          cardImg={branding}
          cardTitle="Branding"
          cardDetails="Stand Out with a Strong, Cohesive Brand Identity"
        />
        <ServiceCard
          cardImg={webMaintenance}
          cardTitle="Website Maintenance"
          cardDetails="Ensure Your Website is Always Running Smoothly with Our Maintenance Services"
        />
      </div>

      
    </section>
  );
};

export default ServicesSection;
