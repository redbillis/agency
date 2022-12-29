import Image from "next/image";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import seo from '../../public/AI Icons/seo-2.png';
import seoThree from '../../public/AI Icons/seo-3.png'

// components
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section>
      <div>
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
      </div>
      <div className="lg:flex gap-10">
        <ServiceCard
          cardImg={design}
          cardTitle="Web Design"
          cardDetails="Creative, Eye-Catching Websites That Convert"
          cardDesignTools="Design tools we use"
          ToolOne="Gimp"
          ToolTwo="Figma"
          ToolThree="Blender"
        />
        <ServiceCard
          cardImg={seo}
          cardTitle="SEO"
          cardDetails="Boost Your Online Visibility with Our Proven SEO Strategies"
          cardDesignTools="Design tools we use"
          ToolOne="HTMLS / CSS"
          ToolTwo="JavaScript"
          ToolThree="React / NextJS"
        />
        <ServiceCard
          cardImg={consulting}
          cardTitle="Social Media Marketing"
          cardDetails="Grow Your Following and Boost Engagement with Our Social Media Services"
          cardDesignTools="Design tools we use"
          ToolOne="Digital Marketing"
          ToolTwo="Google / Facebook Ads"
          ToolThree="Email Marketing"
        />
        <ServiceCard
          cardImg={seoThree}
          cardTitle="PPC Advertising"
          cardDetails="Maximize Your ROI with Our Targeted PPC Campaigns"
          cardDesignTools="Design tools we use"
          ToolOne="Digital Marketing"
          ToolTwo="Google / Facebook Ads"
          ToolThree="Email Marketing"
        />
        <ServiceCard
          cardImg={seoThree}
          cardTitle="Content Marketing"
          cardDetails="Engage Your Audience with Compelling, Quality Content"
          cardDesignTools="Design tools we use"
          ToolOne="Digital Marketing"
          ToolTwo="Google / Facebook Ads"
          ToolThree="Email Marketing"
        />
      </div>
      <div className="lg:flex gap-10">
        <ServiceCard
          cardImg={seoThree}
          cardTitle="Email Marketing"
          cardDetails="Effective Email Campaigns That Drive Results"
          cardDesignTools="Design tools we use"
          ToolOne="Digital Marketing"
          ToolTwo="Google / Facebook Ads"
          ToolThree="Email Marketing"
        />
        <ServiceCard
          cardImg={seoThree}
          cardTitle="E-Commerce Solutions"
          cardDetails="Streamline Your Online Store and Boost Sales with Our Expertise"
          cardDesignTools="Design tools we use"
          ToolOne="Digital Marketing"
          ToolTwo="Google / Facebook Ads"
          ToolThree="Email Marketing"
        />
        <ServiceCard
          cardImg={seoThree}
          cardTitle="App Development"
          cardDetails="Custom-Built Apps That Solve Your Unique Challenges"
          cardDesignTools="Design tools we use"
          ToolOne="Digital Marketing"
          ToolTwo="Google / Facebook Ads"
          ToolThree="Email Marketing"
        />
        <ServiceCard
          cardImg={seoThree}
          cardTitle="Branding"
          cardDetails="Stand Out with a Strong, Cohesive Brand Identity"
          cardDesignTools="Design tools we use"
          ToolOne="Digital Marketing"
          ToolTwo="Google / Facebook Ads"
          ToolThree="Email Marketing"
        />
        <ServiceCard
          cardImg={seoThree}
          cardTitle="Website Maintenance"
          cardDetails="Ensure Your Website is Always Running Smoothly with Our Maintenance Services"
          cardDesignTools="Design tools we use"
          ToolOne="Digital Marketing"
          ToolTwo="Google / Facebook Ads"
          ToolThree="Email Marketing"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
