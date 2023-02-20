import Image from "next/image";
import deved from "../../public/logo/RƎD-removebg-white-text.png";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AvatarSection = () => {
  const imgAnimation = useAnimation();

  const [imgRef, inViewImg] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inViewImg) {
      imgAnimation.start({
        opacity: 1,
        y: ["0px", "0px"],
        transition: {
          duration: 2,
          ease: "easeOut",
        },
      });
    }
  }, [imgAnimation, inViewImg]);

  return (
    <motion.div
      ref={imgRef}
      initial={{ opacity: 0 }}
      animate={imgAnimation}
      className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96"
    >
      <Image src={deved} layout="fill" objectFit="cover" alt="cover-img" />
    </motion.div>
  );
};

export default AvatarSection;
