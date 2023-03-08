import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { Formik } from "formik";
import * as Yup from "yup";

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
      <Formik
        initialValues={{ name: "", subject: "", email: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),

          subject: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),

          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),

          message: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // try {
          //   const response = fetch("/api/contact", {
          //     method: "POST",
          //     body: JSON.stringify({
          //       firstName: values.firstName,
          //       email: values.email,
          //       subject: values.subject,
          //       message: values.message,
          //     }),
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //   });
          // } catch (error) {}


          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="md:w-[600px]">
            {/* Name and Email Fields Start */}
            <div className="flex my-3 gap-3">
              {/* Name Field Start */}
              <div className="font-semibold w-full">
                <input
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Name"
                  className="transition w-full h-12 px-4 ease-in-out delay-150 hover:-translate-y-1 duration-300 placeholder:text-white  bg-gradient-to-r from-gray-700 to-gray-800 font-semibold"
                />
                {errors.name && touched.name && (
                  <p className="text-red-500">{errors.name}</p>
                )}
              </div>
              {/* Name Field End */}

              {/* Email Field Start */}
              <div className="font-semibold w-full">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                  className="transition w-full h-12 px-4 ease-in-out delay-150 hover:-translate-y-1 duration-300 placeholder:text-white  bg-gradient-to-r from-gray-700 to-gray-800 font-semibold"
                />
                {errors.email && touched.email && (
                  <p className="text-red-500">{errors.email}</p>
                )}
              </div>
              {/* Email Field End */}
            </div>
            {/* Name and Email Fields End */}

            {/* Subject Field Start */}
            <div className="font-semibold">
              <input
                type="subject"
                name="subject"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
                placeholder="Subject"
                className="transition w-full h-12 px-4 ease-in-out delay-150 hover:-translate-y-1 duration-300 placeholder:text-white  bg-gradient-to-r from-gray-700 to-gray-800 font-semibold"
              />
              {errors.subject && touched.subject && (
                <p className="text-red-500">{errors.subject}</p>
              )}
            </div>
            {/* Subject Field End */}

            {/* Message Field Start */}
            <div className="font-semibold my-3">
              <textarea
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                placeholder="Message"
                className="transition w-full h-40 px-4 ease-in-out delay-150 hover:-translate-y-1 duration-300 placeholder:text-white  bg-gradient-to-r from-gray-700 to-gray-800 font-semibold"
              />
              {errors.message && touched.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>
            {/* Message Field Start */}
            <div>
              <button
                className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold px-6 py-3 m-5"
                type="submit"
                disabled={isSubmitting}
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </Formik>
    </motion.div>
  );
};

export default ContactUs;
