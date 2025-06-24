"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.1, triggerOnce = false) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
    margin: "-100px 0px -100px 0px",
  });

  return { ref, isInView };
};

const About = () => {
  const skills = [
    {
      name: "MongoDB",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    },
    {
      name: "Java",
      color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    },
    {
      name: "React.js",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    {
      name: "Node.js",
      color:
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    },
    {
      name: "JavaScript",
      color:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    },
    {
      name: "Redux Toolkit",
      color:
        "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    },
    {
      name: "Tailwind CSS",
      color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    },
    {
      name: "Git",
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    },
  ];

  const highlights = [
    {
      number: "1+",
      label: "Years Experience",
      icon: "🚀",
    },
    {
      number: "5+",
      label: "Projects Completed",
      icon: "💻",
    },
    {
      number: "200+",
      label: "DSA Problems Solved",
      icon: "🧠",
    },
    {
      number: "24/7",
      label: "Learning Mode",
      icon: "📚",
    },
  ];

  // Create refs for different sections
  const headerRef = useScrollAnimation(0.3, true);
  const leftContentRef = useScrollAnimation(0.2, false);
  const rightContentRef = useScrollAnimation(0.2, false);
  const skillsRef = useScrollAnimation(0.3, false);
  const highlightsRef = useScrollAnimation(0.2, false);
  const ctaRef = useScrollAnimation(0.5, true);

  return (
    <section className="py-16 lg:py-24">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef.ref}
          variants={fadeInUp}
          initial="initial"
          animate={headerRef.isInView ? "animate" : "initial"}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            animate={headerRef.isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            ref={leftContentRef.ref}
            variants={slideInLeft}
            initial="initial"
            animate={leftContentRef.isInView ? "animate" : "exit"}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Full Stack MERN Developer
              </h3>
              <div className="max-w-4xl mx-auto  ">
                <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed ">
                  I&apos;m a passionate{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Full-Stack MERN developer
                  </span>{" "}
                  with a strong foundation in both frontend and backend
                  technologies. I specialize in building scalable web
                  applications using modern technologies and frameworks. I focus
                  on writing{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    clean, efficient code
                  </span>{" "}
                  and delivering real-time, user-friendly experiences that make
                  a difference.
                </p>
              </div>
            </motion.div>

            {/* <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in web development started with a curiosity for how things work behind the scenes. 
                Today, I'm proficient in MongoDB for database management, Express.js for server-side logic, 
                React.js for interactive frontends, and Node.js for scalable backend services.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond coding, I'm a dedicated DSA enthusiast who believes that strong problem-solving 
                skills are the foundation of great software development. I continuously challenge myself 
                with algorithmic problems to sharpen my logical thinking.
              </p>
            </motion.div> */}

            {/* Skills */}
            <motion.div
              ref={skillsRef.ref}
              variants={fadeInUp}
              initial="initial"
              animate={skillsRef.isInView ? "animate" : "exit"}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-6"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Core Skills
              </h4>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={staggerChildren}
                animate={skillsRef.isInView ? "animate" : "initial"}
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    variants={{
                      initial: { opacity: 0, scale: 0.8, y: 20 },
                      animate: { opacity: 1, scale: 1, y: 0 },
                    }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${skill.color} cursor-default`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              ref={highlightsRef.ref}
              variants={staggerChildren}
              initial="initial"
              animate={highlightsRef.isInView ? "animate" : "initial"}
              className="pt-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    variants={{
                      initial: { opacity: 0, y: 30, scale: 0.8 },
                      animate: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {item.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Profile Image */}
          <motion.div
            ref={rightContentRef.ref}
            variants={slideInRight}
            initial="initial"
            animate={rightContentRef.isInView ? "animate" : "exit"}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex lg:justify-end"
          >
            <motion.div
              variants={scaleIn}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center lg:items-start mb-10 mr-2"
            >
              <motion.div
                animate={floatingAnimation.animate}
                transition={floatingAnimation.transition}
                className="relative"
              >
                <Image
                  src="/profile.jpg"
                  alt="profile image"
                  width={300}
                  height={300}
                  className="rounded-2xl w-62 h-62 md:w-76 md:h-76 lg:w-86 lg:h-86 object-cover ring-4 ring-primary/20 relative z-10 shadow-2xl"
                />

                {/* Animated dotted circles */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-dotted border-blue-500/60"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  style={{
                    width: "110%",
                    height: "110%",
                    left: "-5%",
                    top: "-5%",
                  }}
                />

                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-dotted border-purple-500/50"
                  animate={{
                    rotate: -360,
                    scale: [1.1, 1, 1.1],
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    },
                  }}
                  style={{
                    width: "120%",
                    height: "120%",
                    left: "-10%",
                    top: "-10%",
                  }}
                />

                <motion.div
                  className="absolute inset-0 rounded-2xl border border-dotted border-indigo-500/40"
                  animate={{
                    rotate: 360,
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    opacity: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 4,
                    },
                  }}
                  style={{
                    width: "130%",
                    height: "130%",
                    left: "-15%",
                    top: "-15%",
                  }}
                />

                {/* Floating elements around the image */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  💻
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -15, 15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  🚀
                </motion.div>

                <motion.div
                  className="absolute -top-4 -left-10 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  animate={{
                    y: [0, -8, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  ⚡
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          ref={ctaRef.ref}
          variants={fadeInUp}
          initial="initial"
          animate={ctaRef.isInView ? "animate" : "initial"}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Ready to build something amazing together?
          </motion.p>
          <Link href={"/contact"}>
            <motion.button
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let&apos;s Connect
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
