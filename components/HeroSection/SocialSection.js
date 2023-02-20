import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const SocialSection = () => {
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

  return (
    <motion.div
      ref={refBottom}
      initial={{ opacity: 0 }}
      animate={textAnimation}
      className="text-5xl flex justify-center gap-16 py-3 my-10 text-gray-600"
    >
      <AiFillTwitterCircle className="cursor-pointer hover:text-gray-500 " />
      <AiFillLinkedin className="cursor-pointer hover:text-gray-500 " />
      <AiFillYoutube className="cursor-pointer hover:text-gray-500 " />
    </motion.div>
  );
};

export default SocialSection;
