"use client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    rest: { 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    hover: { 
      scale: 1.2,
      rotate: 5,
      y: -3,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const logoVariants = {
    rest: { 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.footer 
      className="bg-white dark:bg-black/90 border-t border-gray-200 dark:border-gray-800 shadow-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div 
            className="mb-4"
            variants={itemVariants}
          >
            <motion.div
              initial="rest"
              whileHover="hover"
              variants={logoVariants}
              className="flex items-center space-x-2 cursor-pointer justify-center md:justify-start"
            >
              <Link className="text-xl font-bold text-primary " href="/">
                &lt;RR /&gt;
              </Link>
            </motion.div>
            <motion.p 
              className="text-sm text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              © {new Date().getFullYear()} Rithin Rajpoot. All rights reserved.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            variants={itemVariants}
          >
            <motion.div
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              variants={iconVariants}
            >
              <Link
                href="https://github.com/rithin-rajpoot"
                className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
              >
                <FaGithub />
              </Link>
            </motion.div>
            
            <motion.div
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              variants={iconVariants}
            >
              <Link
                href="https://www.linkedin.com/in/rithin-rajpoot/"
                className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
              >
                <FaLinkedin />
              </Link>
            </motion.div>
            
            <motion.div
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              variants={iconVariants}
            >
              <Link
                href="https://github.com/rithin-rajpoot"
                className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
              >
                <FaTwitter />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;