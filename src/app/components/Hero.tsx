"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  floatingAnimation,
  morphingButton,
  scaleIn,
  slideInRight,
  textReveal,
} from "@/utils/animation";

const TerminalComponent = () => {
  return (
    <motion.div
      {...slideInRight}
      transition={{ delay: 0.2, duration: 0.45 }}
      className="relative w-full hidden md:block md:max-w-xl mx-auto md:mx-0"
    >
      <div className="bg-surface-strong rounded-xl shadow-xl overflow-hidden border border-border">
        <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-border">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-primary rounded-full" />
          </div>
          <span className="text-secondary text-sm font-mono">developer.js</span>
        </div>

        <div className="p-6 font-mono text-sm leading-relaxed text-text">
          <p className="text-secondary mb-4">{`// Full Stack Developer`}</p>
          <p className="mb-2">
            <span className="text-primary">const</span> <span className="text-text">developer</span> <span className="text-text">=</span> <span className="text-primary">{`{`}</span>
          </p>
          <p className="ml-4 mb-2">
            <span className="text-primary">name</span><span className="text-text">:</span> <span className="text-primary">&apos;Rithin Rajpoot&apos;</span><span className="text-text">,</span>
          </p>
          <p className="ml-4 mb-2">
            <span className="text-primary">skills</span><span className="text-text">:</span> <span className="text-text">[</span><span className="text-primary">&apos;React&apos;</span><span className="text-text">, </span><span className="text-primary">&apos;Node.js&apos;</span><span className="text-text">, </span><span className="text-primary">&apos;Java&apos;</span><span className="text-text">],</span>
          </p>
          <p className="ml-4 mb-2">
            <span className="text-primary">focuses</span><span className="text-text">:</span> <span className="text-text">[</span><span className="text-primary">&apos;Full-Stack&apos;</span><span className="text-text">, </span><span className="text-primary">&apos;DSA&apos;</span><span className="text-text">],</span>
          </p>
          <p className="ml-4 mb-2">
            <span className="text-primary">learning</span><span className="text-text">:</span> <span className="text-primary">&apos;Always&apos;</span>
          </p>
          <p>
            <span className="text-primary">{`}`}</span><span className="text-text">;</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="py-16 my-6 container max-w-7xl mx-auto px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ambient-a rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ambient-b rounded-full blur-3xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="text-center md:text-left order-1 md:order-1">
          <motion.div
            {...scaleIn}
            transition={{ delay: 0.15 }}
            className="flex flex-col items-center lg:items-start mb-10"
          >
            <motion.div {...floatingAnimation} className="relative block md:hidden">
              <Image
                src="/profile.jpg"
                alt="profile image"
                width={100}
                height={100}
                className="rounded-full mb-4 w-30 h-30 md:w-32 md:h-32 object-cover ring-2 ring-primary/30 relative z-10"
              />
              <div className="absolute inset-0 rounded-full border border-border" style={{ width: "108%", height: "108%", left: "-4%", top: "-4%" }} />
            </motion.div>
          </motion.div>

          <motion.h1
            {...textReveal}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-heading to-primary bg-clip-text text-transparent"
          >
            Hi, I&apos;m <span className="text-primary relative inline-block pb-2">Rithin Rajpoot</span>
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 font-medium"
          >
            Full Stack Developer (MERN) <span className="mx-2 text-primary">|</span> DSA Enthusiast
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex justify-center lg:justify-start space-x-4 mb-8"
          >
            <motion.a {...morphingButton} target="_blank" href="https://github.com/rithin-rajpoot" className="text-2xl text-gray-200 hover:text-primary transition-colors duration-300 p-3 rounded-full hover:bg-white/5">
              <FaGithub />
            </motion.a>
            <motion.a {...morphingButton} target="_blank" href="https://www.linkedin.com/in/rithin-rajpoot/" className="text-2xl text-gray-200 hover:text-primary transition-colors duration-300 p-3 rounded-full hover:bg-white/5">
              <FaLinkedin />
            </motion.a>
            <motion.a {...morphingButton} target="_blank" href="https://x.com/RajpootRithin" className="text-2xl text-gray-200 hover:text-primary transition-colors duration-300 p-3 rounded-full hover:bg-white/5">
              <FaTwitter />
            </motion.a>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4"
          >
            <motion.div {...morphingButton}>
              <a
                href="/Resume_Rithin.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary inline-block w-full sm:w-auto text-[#06120c] px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Resume
              </a>
            </motion.div>

            <motion.div {...morphingButton} className="relative">
              <Link
                href="/contact"
                className="border border-white/15 inline-block w-full sm:w-auto text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Get In Touch</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="order-2 md:order-2 flex justify-center md:justify-end">
          <TerminalComponent />
        </div>
      </div>
    </section>
  );
};

export default Hero;
