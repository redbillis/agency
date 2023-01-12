import SocialSection from "./SocialSection";
import AvatarSection from "./AvatarSection";

const HeroSection = () => {
  return (
    <section className="min-h-screen">
      <div className="text-center px-10">
        <h2 className="text-5xl py-2 text-red-600 font-semibold  md:text-6xl">
          Red Agency
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-500">
          Web Devlopment & Digital Marketing.
        </h3>
        <p className="text-md pt-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
          Red agency works closely with clients to understand their unique needs
          and goals, and develops customized solutions to help them achieve
          success in the digital world. With a combination of technical
          expertise and creativity, a website and digital marketing agency can
          help businesses of all sizes reach new customers, increase brand
          awareness, and drive sales.
        </p>
      </div>
      <AvatarSection />
      <SocialSection />
    </section>
  );
};

export default HeroSection;
