import React, { useState } from "react";
import { LINKS } from "../constants";
import { SquareArrowOutUpRight } from "lucide-react";
import Logo from "../assets/Logo.webp";
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4 ">
        {/* Logo */}
        <h1>
          <a href="/">
            <img
              src={Logo}
              alt="Logo"
              className="h-10 md:h-14  my-2"
            />
          </a>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 bg-gradient-to-b from-zinc-900 to-zinc-900/0 md:rounded-full backdrop-blur-lg mx-auto p-3 px-7">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white relative transition duration-300 
              border-t-2 border-transparent  
              px-2 py-1      
              hover:border-white
              hover:rounded-b-lg
              hover:outline-none
              hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
              hover:after:content-['']
              hover:after:absolute
              hover:after:inset-0
              hover:after:border-t-2
              hover:after:border-white
              hover:after:animate-pulse
              hover:after:rounded-b-lg"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger Menu - Right (Mobile Only) */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <RiCloseFill className="w-6 h-6" />
            ) : (
              <RiMenu3Fill className="w-6 h-6" />
            )}
          </button>
        </div>
        <a
          href="https://drive.google.com/file/d/1CrwFxRq-0yIdwdDPtaJD7aijEfwxcB3N/view"
          target="_blank"
        >
          <button className="hidden group relative md:inline-flex items-center justify-center overflow-hidden rounded-full bg-stone-950/30 backdrop-blur-lg px-5 py-2 text-base text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-stone-600/50 border border-white/20 space-x-2">
            <span>Resume</span>
            <SquareArrowOutUpRight className="ml-1 size-4" />

            <div className="absolute inset-0 flex h-full w-full justify-center">
              <div className="relative h-full w-[40%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmerElegant"></div>
            </div>
          </button>
        </a>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="md:hidden p-2  bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-y-3 max-w-6xl mx-auto">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white  px-2 py-1  hover:text-pink-700 hover:font-bold transition duration-300"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1CrwFxRq-0yIdwdDPtaJD7aijEfwxcB3N/view"
            target="_blank"
          >
            <button className="group relative flex items-center justify-center overflow-hidden rounded-full bg-stone-950/30 backdrop-blur-lg px-4 py-2 text-base text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-stone-600/50 border border-white/20 space-x-2">
              <span>Resume</span>
              <SquareArrowOutUpRight className="ml-1 w-4 h-4 md:w-5 md:h-5" />

              {/* Shimmer Effect */}
              <div className="absolute inset-0 flex h-full w-full justify-center">
                <div className="relative h-full w-[40%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmerElegant"></div>
              </div>
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
