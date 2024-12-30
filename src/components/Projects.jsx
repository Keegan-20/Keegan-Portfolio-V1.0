import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS } from "../constants/index";
import { RiGithubFill } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ project, index, isMobile }) => {
  const shouldReduceMotion = useReducedMotion();
  
  const projectVariants = {
    hidden: {
      opacity: 0,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: isMobile ? 0.4 : 0.6,
        ease: "easeOut",
        rotate: {
          type: "spring",
          bounce: 0.2,
          duration: isMobile ? 0.5 : 0.8
        },
        opacity: {
          duration: 0.3
        },
        y: {
          type: "spring",
          bounce: 0.2,
          duration: isMobile ? 0.5 : 0.8
        }
      },
    },
  };

  return (
    <motion.div
      key={index}
      className="outer-container w-full md:w-3/4 m-auto relative transform"
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true,
        margin: "-100px",
        amount: 0.3 
      }}
      variants={shouldReduceMotion ? {} : projectVariants}
      style={{
        willChange: "transform",
        backfaceVisibility: "hidden"
      }}
    >
      <div className="inner-container rounded-2xl overflow-hidden p-2 border-slate-50 bg-white/30 shadow-lg backdrop-blur-sm border border-white/18">
        <div className="image-container p-4 md:p-6 lg:p-8 rounded-2xl overflow-hidden shadow-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
            <h1 className="text-xl font-zodiak text-center md:text-3xl font-medium mb-2 sm:mb-0">
              {project.name}
            </h1>
            <div className="flex gap-2">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center transition duration-300 hover:bg-purple-800"
              >
                <RiGithubFill size={20} className="cursor-pointer" />
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/50 text-white rounded-full py-2 px-4 md:py-2.5 md:px-4 text-sm cursor-pointer hover:bg-purple-800 text-center inline-flex items-center gap-3"
              >
                <span className="font-medium">Visit</span>
                <FiArrowUpRight size={20} className="cursor-pointer" />
              </a>
            </div>
          </div>
          <p className="text-sm md:text-base leading-relaxed md:leading-loose shadow-sm py-3 mb-4">
            {project.description}
          </p>
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="w-full object-cover rounded-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="px-6 py-10" id="work">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
        Work
      </h2>
      <div className="h-1 w-28 mt-4 mb-8 bg-white"></div>
      <div className="grid grid-cols-1 gap-6 md:gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;