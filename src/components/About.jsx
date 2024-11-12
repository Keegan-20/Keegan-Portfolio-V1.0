import { motion, useInView } from "framer-motion";
import { ABOUT_ME } from "../constants/index";
import keeganDp from "../assets/keeganDp.webp";
import { useRef } from "react";
import { Download } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%)" },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white relative z-10 md:ml-16"
    >
       
      <motion.div
        className="w-full md:w-[45%] mt-4 p-4 md:p-8 order-1 md:order-2"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <motion.img
          src={keeganDp}
      
          alt="keegan profile pic"
          className="  w-44 h-auto  md:w-[350px] md:h-[400px] rounded-3xl md:rounded-2xl shadow-lg mx-auto"
        />
      </motion.div>

      <motion.div
        className="w-full md:w-[55%] p-4 md:p-10 order-2 md:order-1"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
   
        <motion.p className="text-lg mb-4" variants={textVariants}>
          {ABOUT_ME.para1}
        </motion.p>
        <motion.p className="hidden md:inline-block text-lg mb-4" variants={textVariants}>
          {ABOUT_ME.para2}
        </motion.p>
        <motion.p className="text-lg mb-4" variants={textVariants}>
          {ABOUT_ME.para3}
        </motion.p>
        <motion.a
          className="inline-flex items-center gap-x-2 font-semibold bg-stone-50 hover:bg-pink-700 hover:text-white text-stone-900 p-3 lg:p-2 mt-4 rounded-xl animate-bounceEffect hover:animate-none"
          href={ABOUT_ME.resumeLink}
          download
          rel="noopener noreferrer"
          target="_blank"
          variants={textVariants}
        >
          <button>{ABOUT_ME.resumeLinkText}</button>
          <Download className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
