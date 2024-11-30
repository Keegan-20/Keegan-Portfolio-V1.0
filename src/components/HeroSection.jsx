import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const greetings = [
    "Hey",        // United States
    "नमस्ते",    // India
    "Bonjour",    // France
    "Sat Sri Akaal", // Punjab,India
    "Hola",       // Spain, Latin America
    "Ciao",       // Italy
    "Hallo",      // Germany
    "Olá",        // Brazil, Portugal
    "Konnichiwa", // Japan
    "Shalom",     // Israel (Hebrew)
    "Privet",     // Russia
    "Hallo",      // Netherlands
    "Kia ora",    // New Zealand (Māori)
  ];
  

const HeroSection = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2300);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section id="home" className="relative z-10 mt-24 md:mt-32 lg:mt-40 mx-6 md:mx-12 lg:mx-24 flex flex-col items-start text-white px-4">
     <motion.h1
      className="text-2xl md:text-4xl lg:text-5xl font-mono mb-3 will-change-transform"
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8 }}
    >
      {greetings[greetingIndex]}
      <span className="inline-block animate-wave">👋</span>,I&apos;m
    </motion.h1>

      <motion.h2
        className="w-fit text-4xl md:text-7xl lg:text-8xl font-zodiak font-bold mb-2 md:mb-4 py-2 bg-gradient-to-r from-pink-600 to-purple-400 bg-400% bg-clip-text text-transparent animate-gradient"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Keegan Colaco.
      </motion.h2>

      <motion.h3
        className="text-lg md:text-4xl font-mono font-bold md:mb-4 mt-1"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Crafting Pixel-Perfect Digital Experiences.
      </motion.h3>

      <motion.p
        className="text-xs md:text-lg lg:text-xl font-medium pt-2 pb-4 max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Transforming ideas into user-friendly web applications, driven by curiosity and attention to detail.
      </motion.p>

      <motion.button
        className="mt-4 px-3 py-2 md:px-5 md:py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-700 shadow-lg font-serif text-white hover:from-pink-400 hover:to-purple-600 transition duration-300 animate-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Let’s Talk !
      </motion.button>
    </section>
  );
};

export default HeroSection;
