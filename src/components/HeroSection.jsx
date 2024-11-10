import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative z-10 mt-24 md:mt-32 lg:mt-40 mx-6 md:mx-12 lg:mx-28 flex flex-col items-start text-white px-4">
            <motion.h1
                className="text-2xl md:text-4xl lg:text-5xl font-mono mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Namaste(); I&apos;m
            </motion.h1>

            <motion.h2
                className="w-fit text-5xl md:text-7xl lg:text-8xl font-zodiak font-bold mb-4 py-2 bg-gradient-to-r from-pink-600 to-purple-400 bg-400% bg-clip-text text-transparent animate-gradient"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Keegan Colaco.
            </motion.h2>

            <motion.h3
                className="text-2xl md:text-4xl  font-mono font-bold mb-4 mt-1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                Crafting Pixel-Perfect Digital Experiences.
            </motion.h3>

            <motion.p className="text-base md:text-lg lg:text-xl font-medium py-3  max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}>
                Transforming ideas into user-friendly web applications, driven by curiosity and attention to detail.
            </motion.p>

            <motion.button
                className="mt-4 px-5 py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 shadow-lg font-serif text-white hover:from-pink-500 hover:to-purple-700 transition duration-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                Let’s Talk !
            </motion.button>
        </section>
    );
};

export default HeroSection;
