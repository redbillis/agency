import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";

const AvatarSection = () => {
  return (
    <div className="relative mx-auto bg-gradient-to-b from-red-600 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
      <Image src={deved} layout="fill" objectFit="cover" alt="cover-img" />
    </div>
  );
};

export default AvatarSection;
