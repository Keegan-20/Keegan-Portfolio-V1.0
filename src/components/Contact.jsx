import { CONTACT_CONTENT } from "../constants/index";
import { motion, useInView } from "framer-motion";
import Ksign from "../assets/Ksign.webp";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    },
  }),
};
const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay,
    },
  }),
};

const Contact = () => {
  return (
    <>
        <div className="border border-x-white bg-white mb-8"></div>

    <motion.h2
        className="text-center font-zodiak text-[45px] animate-pulse "
        initial="hidden"
        whileInView="visible"
        custom={0.4}
        variants={textVariants}
      >
        {CONTACT_CONTENT.headline}
      </motion.h2>
    <section className=" flex flex-col my-8 md:flex-row items-center justify-between px-4  md:px-10" id="contact">
    <div className="w-full md:w-1/2">

      <motion.p
        className="md:text-base md:leading-relaxed font-medium md:mx-auto  max-w-xl lg:max-w-[34rem] text-sm tracking-wider my-4"
        initial="hidden"
        whileInView="visible"
        custom={0.6}
        variants={textVariants}
      >
        {CONTACT_CONTENT.description}
      </motion.p>
    </div>
  
    <div className="w-full md:w-1/2 flex flex-col items-center mt-2">
    <motion.img
    src={Ksign}
    alt="Contact Illustration"
    className="max-w-full md:max-w-md  transition-transform duration-300 ease-in-out"
    initial={{ opacity: 0, rotate: -10 }}
    whileInView={{ opacity: 1, rotate: -10 }}
    custom={0.9}
    variants={iconVariants}
    whileHover={{ rotate: 0 }}
  />
        <h3 className="py-5 font-zodiak font-responsive animate-pulse">Get In Touch ( ) ;</h3>

      <div className="flex justify-center space-x-6 ">
        {CONTACT_CONTENT.socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              initial="hidden"
              whileInView="visible"
              custom={1.0 + index * 0.2}
              variants={iconVariants}
            >
              <Icon size={36} />
            </motion.a>
          );
        })}
      </div>
    </div>

  </section>
  
  <footer className="mt-14 py-4  text-center">
  <p className="text-2xl font-bold">&copy; 2024 Keegan Colaco. All Rights Reserved.</p>
  <p className="text-sm mt-2 leading-relaxed text-gray-300">Made with love and Espresso Coffee (No sugar, less ice).</p>
</footer>
  </>
  
  );
};

export default Contact;
