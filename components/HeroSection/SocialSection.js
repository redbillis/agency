import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const SocialSection = () => {
  return (
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
      <AiFillTwitterCircle className="cursor-pointer hover:text-gray-500 " />
      <AiFillLinkedin className="cursor-pointer hover:text-gray-500 " />
      <AiFillYoutube className="cursor-pointer hover:text-gray-500 " />
    </div>
  );
};

export default SocialSection;
