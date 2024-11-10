import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative z-10 mt-24 md:mt-32 lg:mt-40 mx-6 md:mx-12 lg:mx-28 flex flex-col items-start text-white px-4">
      <motion.h1
        className="text-2xl md:text-4xl lg:text-5xl font-mono mb-3 will-change-transform"
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8 }}
      >
        Namaste(); I&apos;m
      </motion.h1>

      <motion.h2
        className="w-fit text-4xl md:text-7xl lg:text-8xl font-zodiak font-bold mb-2 md:mb-4 py-2 bg-gradient-to-r from-pink-600 to-purple-400 bg-400% bg-clip-text text-transparent animate-gradient will-change-transform"
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Keegan Colaco.
      </motion.h2>

      <motion.h3
        className="text-lg md:text-4xl font-mono font-bold md:mb-4 mt-1 will-change-transform"
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Crafting Pixel-Perfect Digital Experiences.
      </motion.h3>

      <motion.p
        className="text-xs sm:text-lg lg:text-xl font-medium py-4 md:py-3 max-w-3xl leading-relaxed will-change-transform"
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Transforming ideas into user-friendly web applications, driven by
        curiosity and attention to detail.
      </motion.p>

      <motion.button
        className="mt-4 px-3 py-2 md:px-5 md:py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-700 shadow-lg font-serif text-white hover:from-pink-400 hover:to-purple-600 transition duration-300 will-change-transform animate-glow"
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Let’s Talk !
      </motion.button>
    </section>
  );
};

export default HeroSection;
