"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  floatingAnimation,
  liquidHover,
  morphingButton,
  scaleIn,
  slideInLeft,
  slideInRight,
  slideUpStagger,
  socialIconHover,
  textReveal,
} from "@/utils/animation";

// Terminal Component
const TerminalComponent = () => {
  return (
    <motion.div
      {...slideInRight}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="relative w-full hidden md:block md:max-w-xl mx-auto md:mx-0 "
    >
      {/* Terminal Window */}
      <div className="bg-white/90 dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-700 ">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
          <div className="flex space-x-2">
            <motion.div
              className="w-3 h-3 bg-red-500 rounded-full"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div
              className="w-3 h-3 bg-yellow-500 rounded-full"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full"
              whileHover={{ scale: 1.2 }}
            />
          </div>
          <span className="text-slate-400 text-sm font-mono">developer.js</span>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-slate-500 mb-4"
          >
            <span style={{ opacity: 0.7 }}>{"// Full Stack Developer"}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mb-2"
          >
            <span className="text-red-900 dark:text-pink-400">const</span>{" "}
            <span className="text-blue-800 dark:text-blue-400">developer</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-yellow-400">{"{"}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="ml-4 mb-2"
          >
            <span className="text-purple-800 dark:text-blue-300">name</span>
            <span className="text-black dark:text-white">:</span>{" "}
            <span className="text-green-400">&apos;Rithin Rajpoot&apos;</span>
            <span className="text-white">,</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="ml-4 mb-2"
          >
            <span className="text-purple-800 dark:text-blue-300">skills</span>
            <span className="text-black dark:text-white">:</span>{" "}
            <span className="text-black dark:text-white">[</span>
            <span className="text-green-400">&apos;React&apos;</span>
            <span className="text-black dark:text-white">, </span>
            <span className="text-green-400">&apos;Node.js&apos;</span>
            <span className="text-black dark:text-white">, </span>
            <span className="text-green-400">&apos;Java&apos;</span>
            <span className="text-black dark:text-white">],</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="ml-4 mb-2"
          >
            <span className="text-purple-800 dark:text-blue-300">focuses</span>
            <span className="text-black dark:text-white">:</span>{" "}
            <span className="text-black dark:text-white">[</span>
            <span className="text-green-400">&apos;Full-Stack&apos;</span>
            <span className="text-white">, </span>
            <span className="text-green-400">&apos;DSA&apos;</span>
            <span className="text-black dark:text-white">],</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="ml-4 mb-2"
          >
            <span className="text-purple-800 dark:text-blue-300">learning</span>
            <span className="text-black dark:text-white">:</span>{" "}
            <span className="text-green-400">&apos;Always&apos;</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <span className="text-yellow-400">{"}"}</span>
            <span className="text-black dark:text-white">;</span>
          </motion.div>

          {/* Blinking cursor */}
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block w-2 h-5 bg-green-400 ml-1"
          />
        </div>
      </div>

      {/* Floating particles around terminal */}
      <motion.div
        className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="py-16 md:py-28 my-6 container max-w-7xl mx-auto px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Column - Hero Content */}
        <div className="text-center md:text-left order-1 md:order-1">
          <motion.div
            {...scaleIn}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center lg:items-start mb-10"
          >
            <motion.div
              {...floatingAnimation}
              className="relative block md:hidden"
            >
              <Image
                src="/profile.jpg"
                alt="profile image"
                width={100}
                height={100}
                className="rounded-full mb-4 w-30 h-30 md:w-32 md:h-32 object-cover ring-2 ring-primary relative z-10"
              />

              {/* Animated dotted circles */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dotted border-blue-400/40"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{
                  width: "120%",
                  height: "120%",
                  left: "-10%",
                  top: "-10%",
                }}
              />

              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dotted border-purple-400/30"
                animate={{
                  rotate: -360,
                  scale: [1.2, 1, 1.2],
                }}
                transition={{
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
                style={{
                  width: "140%",
                  height: "140%",
                  left: "-20%",
                  top: "-20%",
                }}
              />

              <motion.div
                className="absolute inset-0 rounded-full border border-dotted border-indigo-400/20"
                animate={{
                  rotate: 360,
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  opacity: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  },
                }}
                style={{
                  width: "160%",
                  height: "160%",
                  left: "-30%",
                  top: "-30%",
                }}
              />
            </motion.div>
          </motion.div>

          <motion.h1
            {...textReveal}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
          >
            Hi, I&apos;m{" "}
            <motion.span
              {...slideInLeft}
              transition={{ delay: 0.5 }}
              className="text-primary relative inline-block pb-2"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
                transition: { duration: 0.3 },
              }}
            >
              Rithin Rajpoot
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            {...slideUpStagger}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-block"
            >
              Full Stack Developer
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="inline-block mx-2 text-primary"
            >
              |
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="inline-block"
            >
              DSA Enthusiast
            </motion.span>
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.8 }}
            className="flex justify-center lg:justify-start space-x-6 mb-8"
          >
            <motion.a
              {...socialIconHover}
              target="_blank"
              href="https://github.com/rithin-rajpoot"
              className="text-2xl text-gray-800 dark:text-gray-300 hover:text-primary transition-colors duration-300 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              {...socialIconHover}
              target="_blank"
              href="https://www.linkedin.com/in/rithin-rajpoot/"
              className="text-2xl text-gray-800 dark:text-gray-300 hover:text-primary transition-colors duration-300 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              {...socialIconHover}
              target="_blank"
              href="https://x.com/RajpootRithin?t=KRtMImIpI9yU0_BtOug4LQ&s=08"
              className="text-2xl text-gray-800 dark:text-gray-300 hover:text-primary transition-colors duration-300 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FaTwitter />
            </motion.a>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 text-xs md:text-lg font-"
          >
            <motion.div {...morphingButton}>
              <a
                href="/RESUME_RITHIN_RAJPOOT.pdf"
                // download
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary inline-block w-full sm:w-auto text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Resume
              </a>
            </motion.div>

            <motion.div {...liquidHover} className="relative">
              <Link
                href="/contact"
                className="mt-3 border-2 border-gray-300 dark:border-gray-600 inline-block w-full sm:w-auto text-black dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10">Contact Me</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Terminal */}
        <div className="order-2 md:order-2 flex justify-center md:justify-end">
          <TerminalComponent />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-16 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 dark:text-gray-600 mt-16"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L12 18L17 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 6L12 11L17 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
