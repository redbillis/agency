import Image from "next/image";
import deved from "../../public/logo/RƎD-removebg-white-text.png";

const AvatarSection = () => {
  return (
    <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
      <Image src={deved} layout="fill" objectFit="cover" alt="cover-img" />
    </div>
  );
};

export default AvatarSection;
