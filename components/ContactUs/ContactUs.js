import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ContactUs = () => {
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
      className="flex flex-col justify-center items-center text-center py-20 text-black dark:text-white"
      id="contact-us"
    >
      <h1 className="text-4xl text-red-600 my-10">Contact Us</h1>
      <div className="w-2/3 mb-8">
        <p>
          We are interested in freelance opportunities – especially ambitious or
          large projects.
        </p>
        <p>
          However, if you have other requests or questions, don’t hesitate to
          use the form.
        </p>
      </div>
      <form action="" className="md:w-[600px]">
        {/* Name and Email Fields Start */}
        <div className="flex my-3 gap-3">
          {/* Name Field Start */}
          <div className="font-semibold w-full">
            <input
              type="name"
              placeholder="Name"
              className="transition w-full h-12 px-4 ease-in-out delay-150 hover:-translate-y-1 duration-300 placeholder:text-white  bg-gradient-to-r from-gray-700 to-gray-800 font-semibold"
            />
          </div>
          {/* Name Field End */}

          {/* Email Field Start */}
          <div className="font-semibold w-full">
            <input
              type="email"
              placeholder="Email"
              className="transition w-full h-12 px-4 ease-in-out delay-150 hover:-translate-y-1 duration-300 placeholder:text-white  bg-gradient-to-r from-gray-700 to-gray-800 font-semibold"
            />
          </div>
          {/* Email Field End */}
        </div>
        {/* Name and Email Fields End */}

        {/* Subject Field Start */}
        <div className="font-semibold">
          <input
            type="subject"
            placeholder="Subject"
            className="transition w-full h-12 px-4 ease-in-out delay-150 hover:-translate-y-1 duration-300 placeholder:text-white  bg-gradient-to-r from-gray-700 to-gray-800 font-semibold"
          />
        </div>
        {/* Subject Field End */}

        {/* Message Field Start */}
        <div className="font-semibold my-3">
          <textarea
            placeholder="Message"
            className="transition w-full h-40 px-4 ease-in-out delay-150 hover:-translate-y-1 duration-300 placeholder:text-white  bg-gradient-to-r from-gray-700 to-gray-800 font-semibold"
          ></textarea>
        </div>
        {/* Message Field Start */}
      </form>

      <div>
        <button
          className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold px-6 py-3 m-5"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </motion.div>
  );
};

export default ContactUs;
