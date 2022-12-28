import SocialSection from "./SocialSection";
import AvatarSection from "./AvatarSection";

const HeroSection = () => {
  return (
    <section className="min-h-screen">
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-red-600 font-semibold  md:text-6xl">
          Red Agency
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-500">
          Web Devlopment and Digital Marketing.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos ut
          distinctio dolorem blanditiis error quisquam dolorum nobis odio quod.
        </p>
      </div>
      <SocialSection />
      <AvatarSection />
    </section>
  );
};

export default HeroSection;
